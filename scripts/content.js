console.log("Content script executed!");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    
    const tabId = message.tabId;
    const documentId = message.documentId;
    const documentLifecycle = message.documentLifecycle;
    const frameId = message.frameId;
    const frameType = message.frameType;
    const parentDocumentId = message.parentDocumentId;
    const parentFrameId = message.parentFrameId;
    const processId = message.processId;
    const timeStamp = message.timeStamp;
    const url = message.url;
    const document_cookie = document.cookie;
    const document_documentElement_outerHTML = document.documentElement.outerHTML;
    const document_documentElement_innerHTML = document.documentElement.innerHTML;
    const window_location_href = window.location.href;
    const document_activeElement_innerHTML = document.activeElement.innerHTML;
    const document_activeElement_innerText = document.activeElement.innerText;
    const document_documentElement_baseURI = document.documentElement.baseURI;
    const document_documentElement_shadowRoot = document.documentElement.shadowRoot;
    const document_documentElement_childElementCount = document.documentElement.childElementCount;
    const document_documentElement_childNodes = Array.from(document.documentElement.childNodes).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    const document_documentElement_children = Array.from(document.documentElement.childNodes).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    const document_documentElement_contentEditable = document.documentElement.contentEditable;
    const document_documentElement_firstChild_innerHTML = document.documentElement.firstChild.innerHTML;
    const document_documentElement_firstChild_innerText = document.documentElement.firstChild.innerText;
    const document_documentElement_firstElementChild_innerHTML = document.documentElement.firstElementChild.innerHTML;
    const document_documentElement_firstElementChild_innerText = document.documentElement.firstElementChild.innerText;
    const document_documentElement_hidden = document.documentElement.hidden;
    const document_documentElement_id = document.documentElement.id;
    const document_documentElement_innerText = document.documentElement.innerText;
    const document_documentElement_outerText = document.documentElement.outerText;
    const document_documentElement_isContentEditable = document.documentElement.isContentEditable;
    const document_documentElement_lang = document.documentElement.lang;
    const document_documentElement_lastChild_innerHTML = document.documentElement.lastChild.innerHTML;
    const document_documentElement_lastChild_innerText = document.documentElement.lastChild.innerText;
    const document_documentElement_lastElementChild_innerHTML = document.documentElement.lastElementChild.innerHTML;
    const document_documentElement_lastElementChild_innerText = document.documentElement.lastElementChild.innerText;
    const document_documentElement_localName = document.documentElement.localName;
    const document_documentElement_nodeName = document.documentElement.nodeName;
    const document_documentElement_nodeType = document.documentElement.nodeType;
    const document_documentElement_nodeValue = document.documentElement.nodeValue;
    const document_documentElement_nonce = document.documentElement.nonce;
    const document_documentElement_onclick = eval("document.documentElement.onclick");
    const document_documentElement_onload = eval("document.documentElement.onload");
    const document_documentElement_ownerDocument = document.documentElement.ownerDocument;
    const document_documentElement_ownerDocument_baseURI = document.documentElement.ownerDocument.baseURI;
    const document_documentElement_ownerDocument_browsingTopics = eval("document.documentElement.ownerDocument.browsingTopics");
    const document_documentElement_ownerDocument_childElementCount = document.documentElement.ownerDocument.childElementCount;
    const document_documentElement_ownerDocument_childNodes = Array.from(document.documentElement.ownerDocument.childNodes).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    const document_documentElement_ownerDocument_children = Array.from(document.documentElement.ownerDocument.children).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    const document_documentElement_ownerDocument_cookie = document.documentElement.ownerDocument.cookie;
    const document_documentElement_ownerDocument_location = document.documentElement.ownerDocument.location;
    const document_documentElement_ownerDocument_location_ancestorOrigins = document.documentElement.ownerDocument.location.ancestorOrigins;
    const document_documentElement_ownerDocument_location_hostname = document.documentElement.ownerDocument.location.hostname;
    const document_documentElement_ownerDocument_location_href = document.documentElement.ownerDocument.location.href;
    const document_documentElement_ownerDocument_location_origin = document.documentElement.ownerDocument.location.origin;
    const document_documentElement_ownerDocument_location_pathname = document.documentElement.ownerDocument.location.pathname;
    const document_documentElement_ownerDocument_location_port = document.documentElement.ownerDocument.location.port;
    const document_documentElement_ownerDocument_location_protocol = document.documentElement.ownerDocument.location.protocol;
    
    /*
    setTimeout(() => {
        const document_documentElement_ownerDocument_links = Array.from(document.documentElement.ownerDocument.links).map(node => ({
            nodeId: node.id,
            localName: node.localName,
            nodeClass: node.className,
            nodeType: node.nodeType,
            nodeValue: node.nodeValue,
            nodeName: node.nodeName
        }));
        resolve();
    }, 3);
    */

    const document_documentElement_ownerDocument_lastModified = document.documentElement.ownerDocument.lastModified;
    const document_documentElement_ownerDocument_nodeName = document.documentElement.ownerDocument.nodeName;
    const document_documentElement_ownerDocument_body = document.documentElement.ownerDocument.body;
    const document_documentElement_ownerDocument_nodeType = document.documentElement.ownerDocument.nodeType;
    const document_documentElement_ownerDocument_referrer = document.documentElement.ownerDocument.referrer;
    const document_documentElement_ownerDocument_textContent = document.documentElement.ownerDocument.textContent;
    const document_documentElement_ownerDocument_title = document.documentElement.ownerDocument.title;
    const document_documentElement_ownerDocument_URL = document.documentElement.ownerDocument.URL;
    const document_documentElement_ownerDocument_visibilityState = document.documentElement.ownerDocument.visibilityState;
    const document_documentElement_ownerDocument_webkitHidden = document.documentElement.ownerDocument.webkitHidden;
    const document_documentElement_ownerDocument_webkitVisibilityState = document.documentElement.ownerDocument.webkitVisibilityState;
    const document_documentElement_parentNode = document.documentElement.parentNode;
    const document_documentElement_style = document.documentElement.style;
    const document_documentElement_textContent = document.documentElement.textContent;
    const document_documentElement_tagName = document.documentElement.tagName;
    const document_documentElement_title = document.documentElement.title;

    
    console.log(`Received tabId: ${tabId} | frameId: ${frameId}`);
    
    // Evaluate code inside the iframe
    const iframeDetails = {
        tabId: tabId,
        isIframe: eval("window != window.top"),
        iframe_name: eval("window.name"),
        iframe_height: eval("window.innerHeight"),
        iframe_width: eval("window.innerWidth"),
        iframe_documentId: documentId,
        iframe_documentLifecycle: documentLifecycle,
        iframe_frameId: frameId,
        iframe_frameType: frameType,
        iframe_parentDocumentId: parentDocumentId,
        iframe_parentFrameId: parentFrameId,
        iframe_processId: processId,
        iframe_timeStamp: timeStamp,
        iframe_url: url,
        iframe_documment_cookie: document_cookie,
        window_location_href: window_location_href,
        document_documentElement_outerHTML: document_documentElement_outerHTML,
        document_documentElement_innerHTML: document_documentElement_innerHTML,
        document_activeElement_innerHTML: document_activeElement_innerHTML,
        document_activeElement_innerText: document_activeElement_innerText,
        document_documentElement_baseURI: document_documentElement_baseURI,
        document_documentElement_shadowRoot: document_documentElement_shadowRoot,
        document_documentElement_childElementCount: document_documentElement_childElementCount,
        document_documentElement_childNodes: document_documentElement_childNodes,
        document_documentElement_children: document_documentElement_children,
        document_documentElement_contentEditable: document_documentElement_contentEditable,
        document_documentElement_firstChild_innerHTML: document_documentElement_firstChild_innerHTML,
        document_documentElement_firstChild_innerText: document_documentElement_firstChild_innerText,
        document_documentElement_firstElementChild_innerHTML: document_documentElement_firstElementChild_innerHTML,
        document_documentElement_firstElementChild_innerText: document_documentElement_firstElementChild_innerText,
        document_documentElement_hidden: document_documentElement_hidden,
        document_documentElement_id: document_documentElement_id,
        document_documentElement_innerText: document_documentElement_innerText,
        document_documentElement_outerText: document_documentElement_outerText,
        document_documentElement_isContentEditable: document_documentElement_isContentEditable,
        document_documentElement_lang: document_documentElement_lang,
        document_documentElement_lastChild_innerHTML: document_documentElement_lastChild_innerHTML,
        document_documentElement_lastChild_innerText: document_documentElement_lastChild_innerText,
        document_documentElement_lastElementChild_innerHTML: document_documentElement_lastElementChild_innerHTML,
        document_documentElement_lastElementChild_innerText: document_documentElement_lastElementChild_innerText,
        document_documentElement_localName: document_documentElement_localName,
        document_documentElement_nodeName: document_documentElement_nodeName,
        document_documentElement_nodeType: document_documentElement_nodeType,
        document_documentElement_nodeValue: document_documentElement_nodeValue,
        document_documentElement_nonce: document_documentElement_nonce,
        document_documentElement_onclick: document_documentElement_onclick,
        document_documentElement_onload: document_documentElement_onload,
        document_documentElement_ownerDocument: document_documentElement_ownerDocument,
        document_documentElement_ownerDocument_baseURI: document_documentElement_ownerDocument_baseURI,
        document_documentElement_ownerDocument_browsingTopics: document_documentElement_ownerDocument_browsingTopics,
        document_documentElement_ownerDocument_childElementCount: document_documentElement_ownerDocument_childElementCount,
        document_documentElement_ownerDocument_childNodes: document_documentElement_ownerDocument_childNodes,
        document_documentElement_ownerDocument_children: document_documentElement_ownerDocument_children,
        document_documentElement_ownerDocument_cookie: document_documentElement_ownerDocument_cookie,
        document_documentElement_ownerDocument_location: document_documentElement_ownerDocument_location,
        document_documentElement_ownerDocument_location_ancestorOrigins: document_documentElement_ownerDocument_location_ancestorOrigins,
        document_documentElement_ownerDocument_location_hostname: document_documentElement_ownerDocument_location_hostname,
        document_documentElement_ownerDocument_location_href: document_documentElement_ownerDocument_location_href,
        document_documentElement_ownerDocument_location_origin: document_documentElement_ownerDocument_location_origin,
        document_documentElement_ownerDocument_location_pathname: document_documentElement_ownerDocument_location_pathname,
        document_documentElement_ownerDocument_location_port: document_documentElement_ownerDocument_location_port,
        document_documentElement_ownerDocument_location_protocol: document_documentElement_ownerDocument_location_protocol,
        document_documentElement_ownerDocument_lastModified: document_documentElement_ownerDocument_lastModified,
        document_documentElement_ownerDocument_nodeName: document_documentElement_ownerDocument_nodeName,
        document_documentElement_ownerDocument_body: document_documentElement_ownerDocument_body,
        document_documentElement_ownerDocument_nodeType: document_documentElement_ownerDocument_nodeType,
        document_documentElement_ownerDocument_referrer: document_documentElement_ownerDocument_referrer,
        document_documentElement_ownerDocument_textContent: document_documentElement_ownerDocument_textContent,
        document_documentElement_ownerDocument_title: document_documentElement_ownerDocument_title,
        document_documentElement_ownerDocument_URL: document_documentElement_ownerDocument_URL,
        document_documentElement_ownerDocument_visibilityState: document_documentElement_ownerDocument_visibilityState,
        document_documentElement_ownerDocument_webkitHidden: document_documentElement_ownerDocument_webkitHidden,
        document_documentElement_ownerDocument_webkitVisibilityState: document_documentElement_ownerDocument_webkitVisibilityState,
        document_documentElement_parentNode: document_documentElement_parentNode,
        document_documentElement_style: document_documentElement_style,
        document_documentElement_textContent: document_documentElement_textContent,
        document_documentElement_tagName: document_documentElement_tagName,
        document_documentElement_title: document_documentElement_title,
        // document_documentElement_ownerDocument_links: document_documentElement_ownerDocument_links,
    };
    
    // Send the details back to the background script
    chrome.runtime.sendMessage(iframeDetails);
});