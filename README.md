# iframe-tracker-extension
Chrome extension to track static and dynamic iframe creations and sniffing on exchanged postMessages() between them.

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

## Programmatic Crawling
To perform the above steps programmatically for a batch of websites:
Run: ```python3 crawl.py --path="websites.csv"``` where ```websites.csv``` can be replaced by path to the ```.csv``` file containing list of websites (Expected header: ```websites```).
