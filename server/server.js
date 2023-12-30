const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
app.use(express.json({ limit: '100mb' }));

const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: true
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

var iframeRecordID = 1;
var postMessageRecordID = 1;

// Create and initialize the SQLite database
const db = new sqlite3.Database('data.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the database');
        createTables();
    }
});

// Function to create tables
function createTables() {
    const createIframeTable = `
    CREATE TABLE IF NOT EXISTS iframe_details (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tabId INTEGER,
        messageType TEXT,
        isIframe INTEGER,
        iframe_name TEXT,
        iframe_height INTEGER,
        iframe_width INTEGER,
        iframe_documentId TEXT,
        iframe_documentLifecycle TEXT,
        iframe_frameId INTEGER,
        iframe_frameType TEXT,
        iframe_parentDocumentId INTEGER,
        iframe_parentFrameId INTEGER,
        iframe_processId INTEGER,
        iframe_timeStamp DATETIME,
        iframe_url TEXT,
        iframe_documment_cookie TEXT,
        window_location_href TEXT,
        document_documentElement_outerHTML TEXT,
        document_documentElement_innerHTML TEXT,
        document_activeElement_innerHTML TEXT,
        document_activeElement_innerText TEXT,
        document_documentElement_baseURI TEXT,
        document_documentElement_shadowRoot TEXT,
        document_documentElement_childElementCount INTEGER,
        document_documentElement_childNodes INTEGER,
        document_documentElement_children INTEGER,
        document_documentElement_contentEditable TEXT,
        document_documentElement_firstChild_innerHTML TEXT,
        document_documentElement_firstChild_innerText TEXT,
        document_documentElement_firstElementChild_innerHTML TEXT,
        document_documentElement_firstElementChild_innerText TEXT,
        document_documentElement_hidden BOOLEAN,
        document_documentElement_id TEXT,
        document_documentElement_innerText TEXT,
        document_documentElement_outerText TEXT,
        document_documentElement_isContentEditable TEXT,
        document_documentElement_lang TEXT,
        document_documentElement_lastChild_innerHTML TEXT,
        document_documentElement_lastChild_innerText TEXT,
        document_documentElement_lastElementChild_innerHTML TEXT,
        document_documentElement_lastElementChild_innerText TEXT,
        document_documentElement_localName TEXT,
        document_documentElement_nodeName TEXT,
        document_documentElement_nodeType TEXT,
        document_documentElement_nodeValue TEXT,
        document_documentElement_nonce TEXT,
        document_documentElement_onclick TEXT,
        document_documentElement_onload TEXT,
        document_documentElement_ownerDocument TEXT,
        document_documentElement_ownerDocument_baseURI TEXT,
        document_documentElement_ownerDocument_browsingTopics TEXT,
        document_documentElement_ownerDocument_childElementCount INTEGER,
        document_documentElement_ownerDocument_childNodes INTEGER,
        document_documentElement_ownerDocument_children INTEGER,
        document_documentElement_ownerDocument_cookie TEXT,
        document_documentElement_ownerDocument_location TEXT,
        document_documentElement_ownerDocument_location_ancestorOrigins TEXT,
        document_documentElement_ownerDocument_location_hostname TEXT,
        document_documentElement_ownerDocument_location_href TEXT,
        document_documentElement_ownerDocument_location_origin TEXT,
        document_documentElement_ownerDocument_location_pathname TEXT,
        document_documentElement_ownerDocument_location_port INTEGER,
        document_documentElement_ownerDocument_location_protocol TEXT,
        document_documentElement_ownerDocument_lastModified TEXT,
        document_documentElement_ownerDocument_nodeName TEXT,
        document_documentElement_ownerDocument_body TEXT,
        document_documentElement_ownerDocument_nodeType TEXT,
        document_documentElement_ownerDocument_referrer TEXT,
        document_documentElement_ownerDocument_textContent TEXT,
        document_documentElement_ownerDocument_title TEXT,
        document_documentElement_ownerDocument_URL TEXT,
        document_documentElement_ownerDocument_visibilityState TEXT,
        document_documentElement_ownerDocument_webkitHidden BOOLEAN,
        document_documentElement_ownerDocument_webkitVisibilityState TEXT,
        document_documentElement_parentNode TEXT,
        document_documentElement_style TEXT,
        document_documentElement_textContent TEXT,
        document_documentElement_tagName TEXT,
        document_documentElement_title TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    `;

    const createPostMessageTable = `
    CREATE TABLE IF NOT EXISTS postmessage_details (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        messageType TEXT,
        isTrusted BOOLEAN,
        interceptedMessage TEXT,
        messageOrigin TEXT,
        messageTimeStamp DATETIME,
        messageUserActivation TEXT,
        messageEventPhase TEXT,
        messageLastEventID INTEGER,
        msgSourceCrossOriginIsolated BOOLEAN,
        msgSourceDevicePixelRatio INTEGER,
        msgSourceFrameElement TEXT,
        msgSourceInnerHeight INTEGER,
        msgSourceInnerWidth INTEGER,
        msgSourceOuterHeight INTEGER,
        msgSourceOuterWidth INTEGER,
        msgSourceOrigin TEXT,
        msgSourceLocalStorage TEXT,
        msgSourceName TEXT,
        msgSourceNavCurrentEntry TEXT,
        msgSourceClientInformation TEXT,
        msgTargetCrossOriginIsolated BOOLEAN,
        msgTargetDevicePixelRatio INTEGER,
        msgTargetFrameElement TEXT,
        msgTargetInnerHeight INTEGER,
        msgTargetInnerWidth INTEGER,
        msgTargetOuterHeight INTEGER,
        msgTargetOuterWidth INTEGER,
        msgTargetOrigin TEXT,
        msgTargetLocalStorage TEXT,
        msgTargetName TEXT,
        msgTargetNavCurrentEntry TEXT,
        msgTargetClientInformation TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    `;

    db.run(createIframeTable);
    db.run(createPostMessageTable);
}

// Endpoint to handle incoming data from the extension
app.post('/storeData', express.json(), (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    // Process and store data in the SQLite database
    storeDataToDatabase(data);

    res.sendStatus(200);
});

// Function to store data in the SQLite database
function storeDataToDatabase(data) {
    const currentTimestamp = Date.now();
    if (data.messageType === 'iframe') {
        const insertIframeQuery = `
        INSERT INTO iframe_details (
            id, tabId, messageType, isIframe, iframe_name, iframe_height, iframe_width,
            iframe_documentId, iframe_documentLifecycle, iframe_frameId, iframe_frameType,
            iframe_parentDocumentId, iframe_parentFrameId, iframe_processId, iframe_timeStamp,
            iframe_url, iframe_documment_cookie, window_location_href,
            document_documentElement_outerHTML, document_documentElement_innerHTML,
            document_activeElement_innerHTML, document_activeElement_innerText,
            document_documentElement_baseURI, document_documentElement_shadowRoot,
            document_documentElement_childElementCount, document_documentElement_childNodes,
            document_documentElement_children, document_documentElement_contentEditable,
            document_documentElement_firstChild_innerHTML, document_documentElement_firstChild_innerText,
            document_documentElement_firstElementChild_innerHTML, document_documentElement_firstElementChild_innerText,
            document_documentElement_hidden, document_documentElement_id, document_documentElement_innerText,
            document_documentElement_outerText, document_documentElement_isContentEditable,
            document_documentElement_lang, document_documentElement_lastChild_innerHTML,
            document_documentElement_lastChild_innerText, document_documentElement_lastElementChild_innerHTML,
            document_documentElement_lastElementChild_innerText, document_documentElement_localName,
            document_documentElement_nodeName, document_documentElement_nodeType, document_documentElement_nodeValue,
            document_documentElement_nonce, document_documentElement_onclick, document_documentElement_onload,
            document_documentElement_ownerDocument, document_documentElement_ownerDocument_baseURI,
            document_documentElement_ownerDocument_browsingTopics, document_documentElement_ownerDocument_childElementCount,
            document_documentElement_ownerDocument_childNodes, document_documentElement_ownerDocument_children,
            document_documentElement_ownerDocument_cookie, document_documentElement_ownerDocument_location,
            document_documentElement_ownerDocument_location_ancestorOrigins, document_documentElement_ownerDocument_location_hostname,
            document_documentElement_ownerDocument_location_href, document_documentElement_ownerDocument_location_origin,
            document_documentElement_ownerDocument_location_pathname, document_documentElement_ownerDocument_location_port,
            document_documentElement_ownerDocument_location_protocol, document_documentElement_ownerDocument_lastModified,
            document_documentElement_ownerDocument_nodeName, document_documentElement_ownerDocument_body,
            document_documentElement_ownerDocument_nodeType, document_documentElement_ownerDocument_referrer,
            document_documentElement_ownerDocument_textContent, document_documentElement_ownerDocument_title,
            document_documentElement_ownerDocument_URL, document_documentElement_ownerDocument_visibilityState,
            document_documentElement_ownerDocument_webkitHidden, document_documentElement_ownerDocument_webkitVisibilityState,
            document_documentElement_parentNode, document_documentElement_style, document_documentElement_textContent,
            document_documentElement_tagName, document_documentElement_title,
            timestamp
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const {
            iframeRecordID, tabId, messageType, isIframe, iframe_name, iframe_height, iframe_width,
            iframe_documentId, iframe_documentLifecycle, iframe_frameId, iframe_frameType,
            iframe_parentDocumentId, iframe_parentFrameId, iframe_processId, iframe_timeStamp,
            iframe_url, iframe_documment_cookie, window_location_href,
            document_documentElement_outerHTML, document_documentElement_innerHTML,
            document_activeElement_innerHTML, document_activeElement_innerText,
            document_documentElement_baseURI, document_documentElement_shadowRoot,
            document_documentElement_childElementCount, document_documentElement_childNodes,
            document_documentElement_children, document_documentElement_contentEditable,
            document_documentElement_firstChild_innerHTML, document_documentElement_firstChild_innerText,
            document_documentElement_firstElementChild_innerHTML, document_documentElement_firstElementChild_innerText,
            document_documentElement_hidden, document_documentElement_id, document_documentElement_innerText,
            document_documentElement_outerText, document_documentElement_isContentEditable,
            document_documentElement_lang, document_documentElement_lastChild_innerHTML,
            document_documentElement_lastChild_innerText, document_documentElement_lastElementChild_innerHTML,
            document_documentElement_lastElementChild_innerText, document_documentElement_localName,
            document_documentElement_nodeName, document_documentElement_nodeType, document_documentElement_nodeValue,
            document_documentElement_nonce, document_documentElement_onclick, document_documentElement_onload,
            document_documentElement_ownerDocument, document_documentElement_ownerDocument_baseURI,
            document_documentElement_ownerDocument_browsingTopics, document_documentElement_ownerDocument_childElementCount,
            document_documentElement_ownerDocument_childNodes, document_documentElement_ownerDocument_children,
            document_documentElement_ownerDocument_cookie, document_documentElement_ownerDocument_location,
            document_documentElement_ownerDocument_location_ancestorOrigins, document_documentElement_ownerDocument_location_hostname,
            document_documentElement_ownerDocument_location_href, document_documentElement_ownerDocument_location_origin,
            document_documentElement_ownerDocument_location_pathname, document_documentElement_ownerDocument_location_port,
            document_documentElement_ownerDocument_location_protocol, document_documentElement_ownerDocument_lastModified,
            document_documentElement_ownerDocument_nodeName, document_documentElement_ownerDocument_body,
            document_documentElement_ownerDocument_nodeType, document_documentElement_ownerDocument_referrer,
            document_documentElement_ownerDocument_textContent, document_documentElement_ownerDocument_title,
            document_documentElement_ownerDocument_URL, document_documentElement_ownerDocument_visibilityState,
            document_documentElement_ownerDocument_webkitHidden, document_documentElement_ownerDocument_webkitVisibilityState,
            document_documentElement_parentNode, document_documentElement_style, document_documentElement_textContent,
            document_documentElement_tagName, document_documentElement_title, currentTimestamp
        } = data;
  
        db.run(
            insertIframeQuery,
            [
                iframeRecordID, tabId, messageType, isIframe, iframe_name, iframe_height, iframe_width,
                iframe_documentId, iframe_documentLifecycle, iframe_frameId, iframe_frameType,
                iframe_parentDocumentId, iframe_parentFrameId, iframe_processId, iframe_timeStamp,
                iframe_url, iframe_documment_cookie, window_location_href,
                document_documentElement_outerHTML, document_documentElement_innerHTML,
                document_activeElement_innerHTML, document_activeElement_innerText,
                document_documentElement_baseURI, document_documentElement_shadowRoot,
                document_documentElement_childElementCount, document_documentElement_childNodes,
                document_documentElement_children, document_documentElement_contentEditable,
                document_documentElement_firstChild_innerHTML, document_documentElement_firstChild_innerText,
                document_documentElement_firstElementChild_innerHTML, document_documentElement_firstElementChild_innerText,
                document_documentElement_hidden, document_documentElement_id, document_documentElement_innerText,
                document_documentElement_outerText, document_documentElement_isContentEditable,
                document_documentElement_lang, document_documentElement_lastChild_innerHTML,
                document_documentElement_lastChild_innerText, document_documentElement_lastElementChild_innerHTML,
                document_documentElement_lastElementChild_innerText, document_documentElement_localName,
                document_documentElement_nodeName, document_documentElement_nodeType, document_documentElement_nodeValue,
                document_documentElement_nonce, document_documentElement_onclick, document_documentElement_onload,
                document_documentElement_ownerDocument, document_documentElement_ownerDocument_baseURI,
                document_documentElement_ownerDocument_browsingTopics, document_documentElement_ownerDocument_childElementCount,
                document_documentElement_ownerDocument_childNodes, document_documentElement_ownerDocument_children,
                document_documentElement_ownerDocument_cookie, document_documentElement_ownerDocument_location,
                document_documentElement_ownerDocument_location_ancestorOrigins, document_documentElement_ownerDocument_location_hostname,
                document_documentElement_ownerDocument_location_href, document_documentElement_ownerDocument_location_origin,
                document_documentElement_ownerDocument_location_pathname, document_documentElement_ownerDocument_location_port,
                document_documentElement_ownerDocument_location_protocol, document_documentElement_ownerDocument_lastModified,
                document_documentElement_ownerDocument_nodeName, document_documentElement_ownerDocument_body,
                document_documentElement_ownerDocument_nodeType, document_documentElement_ownerDocument_referrer,
                document_documentElement_ownerDocument_textContent, document_documentElement_ownerDocument_title,
                document_documentElement_ownerDocument_URL, document_documentElement_ownerDocument_visibilityState,
                document_documentElement_ownerDocument_webkitHidden, document_documentElement_ownerDocument_webkitVisibilityState,
                document_documentElement_parentNode, document_documentElement_style, document_documentElement_textContent,
                document_documentElement_tagName, document_documentElement_title, currentTimestamp
            ]
        );
    } else if (data.messageType === 'postMessage') {
        const insertPostMessageQuery = `
        INSERT INTO postmessage_details (
            id, messageType, isTrusted, interceptedMessage, messageOrigin, messageTimeStamp,
            messageUserActivation, messageEventPhase, messageLastEventID, msgSourceCrossOriginIsolated,
            msgSourceDevicePixelRatio, msgSourceFrameElement, msgSourceInnerHeight, msgSourceInnerWidth,
            msgSourceOuterHeight, msgSourceOuterWidth, msgSourceOrigin, msgSourceLocalStorage,
            msgSourceName, msgSourceNavCurrentEntry, msgSourceClientInformation,
            msgTargetCrossOriginIsolated, msgTargetDevicePixelRatio, msgTargetFrameElement,
            msgTargetInnerHeight, msgTargetInnerWidth, msgTargetOuterHeight, msgTargetOuterWidth,
            msgTargetOrigin, msgTargetLocalStorage, msgTargetName, msgTargetNavCurrentEntry,
            msgTargetClientInformation, timestamp
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const {
            postMessageRecordID, messageType, isTrusted, interceptedMessage, messageOrigin, messageTimeStamp,
            messageUserActivation, messageEventPhase, messageLastEventID, msgSourceCrossOriginIsolated,
            msgSourceDevicePixelRatio, msgSourceFrameElement, msgSourceInnerHeight, msgSourceInnerWidth,
            msgSourceOuterHeight, msgSourceOuterWidth, msgSourceOrigin, msgSourceLocalStorage,
            msgSourceName, msgSourceNavCurrentEntry, msgSourceClientInformation,
            msgTargetCrossOriginIsolated, msgTargetDevicePixelRatio, msgTargetFrameElement,
            msgTargetInnerHeight, msgTargetInnerWidth, msgTargetOuterHeight, msgTargetOuterWidth,
            msgTargetOrigin, msgTargetLocalStorage, msgTargetName, msgTargetNavCurrentEntry,
            msgTargetClientInformation, currentTimestamp
        } = data;
  
        db.run(
            insertPostMessageQuery,
            [
                postMessageRecordID, messageType, isTrusted, interceptedMessage, messageOrigin, messageTimeStamp,
                messageUserActivation, messageEventPhase, messageLastEventID, msgSourceCrossOriginIsolated,
                msgSourceDevicePixelRatio, msgSourceFrameElement, msgSourceInnerHeight, msgSourceInnerWidth,
                msgSourceOuterHeight, msgSourceOuterWidth, msgSourceOrigin, msgSourceLocalStorage,
                msgSourceName, msgSourceNavCurrentEntry, msgSourceClientInformation,
                msgTargetCrossOriginIsolated, msgTargetDevicePixelRatio, msgTargetFrameElement,
                msgTargetInnerHeight, msgTargetInnerWidth, msgTargetOuterHeight, msgTargetOuterWidth,
                msgTargetOrigin, msgTargetLocalStorage, msgTargetName, msgTargetNavCurrentEntry,
                msgTargetClientInformation, currentTimestamp
            ]
        );
    }

    iframeRecordID += 1;
    postMessageRecordID += 1;
}


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
