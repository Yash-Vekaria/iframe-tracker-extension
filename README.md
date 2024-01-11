# iframe-tracker-extension
Chrome extension to track static and dynamic iframe creations and sniffing on exchanged postMessages() between them.

<hr />

## Running the Server
1. Install node.js
2. Install required node.js packages by running the following in ```/server``` directory:
   ```npm install```
3. Start the localhost server:
   ```npm start```

## Load the Extension
1. Open ```chrome://extensions/``` in Chrome browser.
2. Toggle Developer Mode ```On```.
3. Click on ```Load Unpacked``` and select ```/extension``` directory to load the extension.
4. Visit any website to capture data at ```/server/data.db```.

<hr />

## Programmatic Crawling
To perform the above steps programmatically for a batch of websites, run: ```python3 crawl.py --path="websites.csv"``` where ```websites.csv``` can be replaced by path to the ```.csv``` file containing list of websites (Expected header: ```websites```).

<hr />

## Docker-based Crawling
To crawl using dockers, build the provided docker image and run the docker as follows:
1. Check OS requirements and unistall any previous docker versions (if any):<br> 
   [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/).
2. Follow the [manual installation method](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) or any other method from the above page to install docker on your local system.
3. Ensure ```DOCKER``` is set to ```True``` in the crawl.py file.
4. Build the docker using the command:<br>
   `docker build -t <docker-image> .`<br>
   Example:<br>
   `docker build -t iframe-crawler .`
5. Run the docker container:<br>
   ```
   docker run -d -e PYTHONUNBUFFERED=1 -v <crawler-dir>:/root -p <random-unused-port>:<rfbport> --shm-size=2g <docker-image> python3.11 crawl.py -p "<path-to-websites.csv>" -mp "/root"
   ```
   Example:<br>
   ```
   docker run -d -e PYTHONUNBUFFERED=1 -v $(pwd):/root -p 20000:1012 --shm-size=2g iframe-crawler python3.11 crawl.py -p "websites.csv" -mp "/root"
   ```
   Here, `rfbport` is also a random available port whose value should match the value used in `crawl.py`.
6. The flag `-d` in point 5. enables docker container to run in a detached mode from the terminal. To prevent that remove `-d`.
7. To monitor the running docker container use the following commands:<br>
      - To check status: `docker container ls -a | grep <docker-image>`<br>
      - To check logs: `docker container logs -f <container-id>`<br>
      - To delete a docker container: `docker rm -f <container-id>`<br>

<hr />