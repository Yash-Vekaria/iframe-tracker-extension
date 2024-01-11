import os
import csv
import time
import shutil
import random
import argparse
import selenium
import subprocess
from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains



ROOT_DIRECTORY = os.getcwd()

# Input CLI args
def parse_arguments():
    global DOCKER;

    # Example: python3 crawl.py --path="websites.csv"
    parser = argparse.ArgumentParser()
    parser.add_argument("-p", "--path", type=str, required=True, help="Enter path of the .csv file containing websites to crawl. Expected header: websites")
    args = parser.parse_args()
    return args


# Start the localhost server
def start_server():
    os.chdir('./server')
    # os.system('node server.js &')
    subprocess.Popen(['node', 'server.js'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE, close_fds=True)
    os.chdir('..')


# Stop the localhost server
def stop_server():
    os.system('pkill -f "node server.js"')


# Function to and create webdriver and load extension
def create_webdriver():
    global ROOT_DIRECTORY;
    chrome_options = Options()
    # chrome_options.add_argument("--headless")
    # chrome_options.add_argument("--disable-gpu")
    # chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    # chrome_options.add_experimental_option('useAutomationExtension', False)
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--remote-debugging-port=9222")
    chrome_options.add_argument("--window-size=1536,864")
    chrome_options.add_argument("--start-maximized")
    chrome_options.add_argument("--disable-infobars")
    chrome_options.add_argument("--disable-notifications")
    chrome_options.add_argument("--disable-popup-blocking")
    chrome_options.add_argument("--ignore-certificate-errors")
    extension_dir = os.path.join(ROOT_DIRECTORY, "extension")
    chrome_options.add_argument(f'--load-extension={extension_dir}')
    try:
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    except BaseException as error:
        print(str(error))
        driver = None
    return driver


# Function to perform bot mitigation techniques
def perform_bot_mitigation(driver):
    
    # Bot mitigation 1: Move mouse randomly around a number of times
    print("Performing Bot Mitigation 1")
    RANDOM_SLEEP_LOW, RANDOM_SLEEP_HIGH, NUM_MOUSE_MOVES = 1, 8, 10
    num_moves, num_fails = 0, 0
    
    while num_moves < NUM_MOUSE_MOVES + 1 and num_fails < NUM_MOUSE_MOVES:
        try:
            move_max = random.randint(0, 350)
            x = random.randint(-move_max, move_max)
            y = random.randint(-move_max, move_max)
            action = ActionChains(driver)
            action.move_by_offset(x, y)
            action.perform()
            num_moves += 1
        except:
            # MoveTargetOutOfBoundsException
            num_fails += 1
            pass

    # Bot mitigation 2: Scroll smoothly in random intervals down the page and then back to the top
    print("Performing Bot Mitigation 2")
    SCROLL_MAX = 50
    try:
        scroll_count = 0
        page_height = int(driver.execute_script('return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );'))
        for i in range(1, page_height, 250):
            scroll_count += 1
            if scroll_count > SCROLL_MAX:
                break;
            page_height = int(driver.execute_script('return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );'))
            try:
                driver.execute_script("window.scrollTo(0, {});".format(i))
                time.sleep(random.randrange(0, 5))
            except:
                continue
    except:
        pass
    time.sleep(10)  # Wait at the bottom

    try:
        scroll_count = 0
        page_height = int(driver.execute_script('return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );'))
        for i in range(page_height, 0, -250):
            scroll_count += 1
            if scroll_count > SCROLL_MAX:
                break;
            page_height = int(driver.execute_script('return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );'))
            try:
                driver.execute_script("window.scrollTo(0, {});".format(i))
                time.sleep(random.randrange(0, 5))
            except:
                continue
    except:
        pass
    time.sleep(10)  # Wait at the top

    # Bot mitigation 3: Randomly wait so page visits happen with irregularity between consectutive websites
    print("Performing Bot Mitigation 3")
    time.sleep(random.randrange(RANDOM_SLEEP_LOW, RANDOM_SLEEP_HIGH))
    
    return


# Crawl iframe data for each website
def crawl_websites(websites):
    for website in websites:

        print(f"\n\nCrawling {website} ...")

        # Start the localhost server
        start_server()
        print("Started the server!")

        # Create chrome webdriver object and load the extension
        driver = create_webdriver()
        print("Driver loaded!")

        # Get the website
        driver.get(website)
        print("Website fetched!")

        # Perform bot mitigation techniques
        perform_bot_mitigation(driver)

        # Close the driver
        driver.quit()

        # Stop the localhost server
        stop_server()
        print("Stopped the server!")

        # Move and rename data.db
        move_and_rename_db(website)


# Function to move and rename data.db
def move_and_rename_db(website_url):
    website_name = website_url.replace('http://', '').replace('https://', '').split('/')[0].replace('.', '_')
    source_path = os.path.abspath('./server/data.db')
    if not(os.path.exists("./output")):
        os.makedirs("./output")
    destination_path = os.path.abspath(f'./output/{website_name}.db')
    shutil.move(source_path, destination_path)

# Read websites from CSV
def read_websites(args):
    websites = []
    csv_file_path = str(args.path)
    with open(csv_file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            website_url = "http://" + str(row['websites']) + "/"
            websites.append(website_url)
        file.close()
    return websites


def main(args):
    websites = read_websites(args)
    crawl_websites(websites)


if __name__ == "__main__":
    args = parse_arguments()
    main(args)
