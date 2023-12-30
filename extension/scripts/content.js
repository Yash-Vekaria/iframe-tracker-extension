console.log("Executing content script!");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    
    var tabId = message.tabId;
    var documentId = message.documentId;
    var documentLifecycle = message.documentLifecycle;
    var frameId = message.frameId;
    var frameType = message.frameType;
    var parentDocumentId = message.parentDocumentId;
    var parentFrameId = message.parentFrameId;
    var processId = message.processId;
    var timeStamp = message.timeStamp;
    var url = message.url;
    var document_cookie = document.cookie;
    var document_documentElement_outerHTML = document.documentElement.outerHTML;
    var document_documentElement_innerHTML = document.documentElement.innerHTML;
    var window_location_href = window.location.href;
    var document_activeElement_innerHTML = document.activeElement.innerHTML;
    var document_activeElement_innerText = document.activeElement.innerText;
    var document_documentElement_baseURI = document.documentElement.baseURI;
    var document_documentElement_shadowRoot = document.documentElement.shadowRoot;
    var document_documentElement_childElementCount = document.documentElement.childElementCount;
    var document_documentElement_childNodes = Array.from(document.documentElement.childNodes).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    var document_documentElement_children = Array.from(document.documentElement.childNodes).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    var document_documentElement_contentEditable = document.documentElement.contentEditable;
    var document_documentElement_firstChild_innerHTML = document.documentElement.firstChild.innerHTML;
    var document_documentElement_firstChild_innerText = document.documentElement.firstChild.innerText;
    var document_documentElement_firstElementChild_innerHTML = document.documentElement.firstElementChild.innerHTML;
    var document_documentElement_firstElementChild_innerText = document.documentElement.firstElementChild.innerText;
    var document_documentElement_hidden = document.documentElement.hidden;
    var document_documentElement_id = document.documentElement.id;
    var document_documentElement_innerText = document.documentElement.innerText;
    var document_documentElement_outerText = document.documentElement.outerText;
    var document_documentElement_isContentEditable = document.documentElement.isContentEditable;
    var document_documentElement_lang = document.documentElement.lang;
    var document_documentElement_lastChild_innerHTML = document.documentElement.lastChild.innerHTML;
    var document_documentElement_lastChild_innerText = document.documentElement.lastChild.innerText;
    var document_documentElement_lastElementChild_innerHTML = document.documentElement.lastElementChild.innerHTML;
    var document_documentElement_lastElementChild_innerText = document.documentElement.lastElementChild.innerText;
    var document_documentElement_localName = document.documentElement.localName;
    var document_documentElement_nodeName = document.documentElement.nodeName;
    var document_documentElement_nodeType = document.documentElement.nodeType;
    var document_documentElement_nodeValue = document.documentElement.nodeValue;
    var document_documentElement_nonce = document.documentElement.nonce;
    var document_documentElement_onclick = eval("document.documentElement.onclick");
    var document_documentElement_onload = eval("document.documentElement.onload");
    var document_documentElement_ownerDocument = document.documentElement.ownerDocument;
    var document_documentElement_ownerDocument_baseURI = document.documentElement.ownerDocument.baseURI;
    var document_documentElement_ownerDocument_browsingTopics = eval("document.documentElement.ownerDocument.browsingTopics");
    var document_documentElement_ownerDocument_childElementCount = document.documentElement.ownerDocument.childElementCount;
    var document_documentElement_ownerDocument_childNodes = Array.from(document.documentElement.ownerDocument.childNodes).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    var document_documentElement_ownerDocument_children = Array.from(document.documentElement.ownerDocument.children).map(node => ({
        nodeId: node.id,
        localName: node.localName,
        nodeName: node.nodeName,
        nodeType: node.nodeType,
        nodeValue: node.nodeValue,
        wholeText: node.wholeText
    }));
    var document_documentElement_ownerDocument_cookie = document.documentElement.ownerDocument.cookie;
    var document_documentElement_ownerDocument_location = document.documentElement.ownerDocument.location;
    var document_documentElement_ownerDocument_location_ancestorOrigins = document.documentElement.ownerDocument.location.ancestorOrigins;
    var document_documentElement_ownerDocument_location_hostname = document.documentElement.ownerDocument.location.hostname;
    var document_documentElement_ownerDocument_location_href = document.documentElement.ownerDocument.location.href;
    var document_documentElement_ownerDocument_location_origin = document.documentElement.ownerDocument.location.origin;
    var document_documentElement_ownerDocument_location_pathname = document.documentElement.ownerDocument.location.pathname;
    var document_documentElement_ownerDocument_location_port = document.documentElement.ownerDocument.location.port;
    var document_documentElement_ownerDocument_location_protocol = document.documentElement.ownerDocument.location.protocol;
    
    /*
    setTimeout(() => {
        var document_documentElement_ownerDocument_links = Array.from(document.documentElement.ownerDocument.links).map(node => ({
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

    var document_documentElement_ownerDocument_lastModified = document.documentElement.ownerDocument.lastModified;
    var document_documentElement_ownerDocument_nodeName = document.documentElement.ownerDocument.nodeName;
    var document_documentElement_ownerDocument_body = document.documentElement.ownerDocument.body;
    var document_documentElement_ownerDocument_nodeType = document.documentElement.ownerDocument.nodeType;
    var document_documentElement_ownerDocument_referrer = document.documentElement.ownerDocument.referrer;
    var document_documentElement_ownerDocument_textContent = document.documentElement.ownerDocument.textContent;
    var document_documentElement_ownerDocument_title = document.documentElement.ownerDocument.title;
    var document_documentElement_ownerDocument_URL = document.documentElement.ownerDocument.URL;
    var document_documentElement_ownerDocument_visibilityState = document.documentElement.ownerDocument.visibilityState;
    var document_documentElement_ownerDocument_webkitHidden = document.documentElement.ownerDocument.webkitHidden;
    var document_documentElement_ownerDocument_webkitVisibilityState = document.documentElement.ownerDocument.webkitVisibilityState;
    var document_documentElement_parentNode = document.documentElement.parentNode;
    var document_documentElement_style = document.documentElement.style;
    var document_documentElement_textContent = document.documentElement.textContent;
    var document_documentElement_tagName = document.documentElement.tagName;
    var document_documentElement_title = document.documentElement.title;

    
    console.log(`Received tabId: ${tabId} | frameId: ${frameId}`);
    
    // Evaluate code inside the iframe
    var iframeDetails = {
        tabId: tabId,
        messageType: "iframe",
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
        document_documentElement_shadowRoot: JSON.stringify(document_documentElement_shadowRoot),
        document_documentElement_childElementCount: document_documentElement_childElementCount,
        document_documentElement_childNodes: JSON.stringify(document_documentElement_childNodes),
        document_documentElement_children: JSON.stringify(document_documentElement_children),
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
        document_documentElement_ownerDocument: JSON.stringify(document_documentElement_ownerDocument),
        document_documentElement_ownerDocument_baseURI: document_documentElement_ownerDocument_baseURI,
        document_documentElement_ownerDocument_browsingTopics: document_documentElement_ownerDocument_browsingTopics,
        document_documentElement_ownerDocument_childElementCount: document_documentElement_ownerDocument_childElementCount,
        document_documentElement_ownerDocument_childNodes: JSON.stringify(document_documentElement_ownerDocument_childNodes),
        document_documentElement_ownerDocument_children: JSON.stringify(document_documentElement_ownerDocument_children),
        document_documentElement_ownerDocument_cookie: document_documentElement_ownerDocument_cookie,
        document_documentElement_ownerDocument_location: JSON.stringify(document_documentElement_ownerDocument_location),
        document_documentElement_ownerDocument_location_ancestorOrigins: JSON.stringify(document_documentElement_ownerDocument_location_ancestorOrigins),
        document_documentElement_ownerDocument_location_hostname: document_documentElement_ownerDocument_location_hostname,
        document_documentElement_ownerDocument_location_href: document_documentElement_ownerDocument_location_href,
        document_documentElement_ownerDocument_location_origin: document_documentElement_ownerDocument_location_origin,
        document_documentElement_ownerDocument_location_pathname: document_documentElement_ownerDocument_location_pathname,
        document_documentElement_ownerDocument_location_port: document_documentElement_ownerDocument_location_port,
        document_documentElement_ownerDocument_location_protocol: document_documentElement_ownerDocument_location_protocol,
        document_documentElement_ownerDocument_lastModified: document_documentElement_ownerDocument_lastModified,
        document_documentElement_ownerDocument_nodeName: document_documentElement_ownerDocument_nodeName,
        document_documentElement_ownerDocument_body: JSON.stringify(document_documentElement_ownerDocument_body),
        document_documentElement_ownerDocument_nodeType: document_documentElement_ownerDocument_nodeType,
        document_documentElement_ownerDocument_referrer: document_documentElement_ownerDocument_referrer,
        document_documentElement_ownerDocument_textContent: document_documentElement_ownerDocument_textContent,
        document_documentElement_ownerDocument_title: document_documentElement_ownerDocument_title,
        document_documentElement_ownerDocument_URL: document_documentElement_ownerDocument_URL,
        document_documentElement_ownerDocument_visibilityState: document_documentElement_ownerDocument_visibilityState,
        document_documentElement_ownerDocument_webkitHidden: document_documentElement_ownerDocument_webkitHidden,
        document_documentElement_ownerDocument_webkitVisibilityState: document_documentElement_ownerDocument_webkitVisibilityState,
        document_documentElement_parentNode: JSON.stringify(document_documentElement_parentNode),
        document_documentElement_style: JSON.stringify(document_documentElement_style),
        document_documentElement_textContent: document_documentElement_textContent,
        document_documentElement_tagName: document_documentElement_tagName,
        document_documentElement_title: document_documentElement_title,
        // document_documentElement_ownerDocument_links: document_documentElement_ownerDocument_links,
    };
    
    // Send the details back to the background script
    chrome.runtime.sendMessage(iframeDetails);
});


window.addEventListener("message", function(postMessage) {
    var isTrusted = postMessage.isTrusted;
    var interceptedMessage = postMessage.data;
    var messageOrigin = postMessage.origin;
    var messageTimeStamp = postMessage.timeStamp;
    var messageUserActivation = postMessage.userActivation;
    var messageEventPhase = postMessage.eventPhase;
    var messageLastEventID = postMessage.lastEventId;

    try { var msgSourceCrossOriginIsolated = postMessage.source.crossOriginIsolated; } catch (error) { var msgSourceCrossOriginIsolated = "Not Available"; }
    try { var msgSourceDevicePixelRatio = postMessage.source.devicePixelRatio; } catch (error) { var msgSourceDevicePixelRatio = "Not Available" }
    try { var msgSourceFrameElement = postMessage.source.frameElement; } catch (error) { var msgSourceFrameElement = "Not Available" }
    try { var msgSourceInnerHeight = postMessage.source.innerHeight; } catch (error) { var msgSourceInnerHeight = "Not Available" }
    try { var msgSourceInnerWidth = postMessage.source.innerWidth; } catch (error) { var msgSourceInnerWidth = "Not Available" }
    try { var msgSourceOuterHeight = postMessage.source.outerHeight; } catch (error) { var msgSourceOuterHeight = "Not Available" }
    try { var msgSourceOuterWidth = postMessage.source.outerWidth; } catch (error) { var msgSourceOuterWidth = "Not Available" }
    try { var msgSourceOrigin = postMessage.source.origin; } catch (error) { var msgSourceOrigin = "Not Available" }
    try { var msgSourceLocalStorage = postMessage.source.localStorage; } catch (error) { var msgSourceLocalStorage = "Not Available" }
    try { var msgSourceName = postMessage.source.name; } catch (error) { var msgSourceName = "Not Available" }
    try { var msgSourceNavCurrentEntry = postMessage.source.navigation.currentEntry; } catch (error) { var msgSourceNavCurrentEntry = "Not Available" }
    try { var msgSourceClientInformation = postMessage.source.clientInformation; } catch (error) { var msgSourceClientInformation = "Not Available" }

    try { var msgTargetCrossOriginIsolated = postMessage.target.crossOriginIsolated; } catch (error) { var msgTargetCrossOriginIsolated = "Not Available"; }
    try { var msgTargetDevicePixelRatio = postMessage.target.devicePixelRatio; } catch (error) { var msgTargetDevicePixelRatio = "Not Available" }
    try { var msgTargetFrameElement = postMessage.target.frameElement; } catch (error) { var msgTargetFrameElement = "Not Available" }
    try { var msgTargetInnerHeight = postMessage.target.innerHeight; } catch (error) { var msgTargetInnerHeight = "Not Available" }
    try { var msgTargetInnerWidth = postMessage.target.innerWidth; } catch (error) { var msgTargetInnerWidth = "Not Available" }
    try { var msgTargetOuterHeight = postMessage.target.outerHeight; } catch (error) { var msgTargetOuterHeight = "Not Available" }
    try { var msgTargetOuterWidth = postMessage.target.outerWidth; } catch (error) { var msgTargetOuterWidth = "Not Available" }
    try { var msgTargetOrigin = postMessage.target.origin; } catch (error) { var msgTargetOrigin = "Not Available" }
    try { var msgTargetLocalStorage = postMessage.target.localStorage; } catch (error) { var msgTargetLocalStorage = "Not Available" }
    try { var msgTargetName = postMessage.target.name; } catch (error) { var msgTargetName = "Not Available" }
    try { var msgTargetNavCurrentEntry = postMessage.target.navigation.currentEntry; } catch (error) { var msgTargetNavCurrentEntry = "Not Available" }
    try { var msgTargetClientInformation = postMessage.target.clientInformation; } catch (error) { var msgTargetClientInformation = "Not Available" }
    
    var postMessageDetails = {
        messageType: "postMessage",
        isTrusted: isTrusted,
        interceptedMessage: interceptedMessage,
        messageOrigin: messageOrigin,
        messageTimeStamp: messageTimeStamp,
        messageUserActivation: messageUserActivation,
        messageEventPhase: messageEventPhase,
        messageLastEventID: messageLastEventID,
        msgSourceCrossOriginIsolated: msgSourceCrossOriginIsolated,
        msgSourceDevicePixelRatio: msgSourceDevicePixelRatio,
        msgSourceFrameElement: msgSourceFrameElement,
        msgSourceInnerHeight: msgSourceInnerHeight,
        msgSourceInnerWidth: msgSourceInnerWidth,
        msgSourceOuterHeight: msgSourceOuterHeight,
        msgSourceOuterWidth: msgSourceOuterWidth,
        msgSourceOrigin: msgSourceOrigin,
        msgSourceLocalStorage: JSON.stringify(msgSourceLocalStorage),
        msgSourceName: msgSourceName,
        msgSourceNavCurrentEntry: JSON.stringify(msgSourceNavCurrentEntry),
        msgSourceClientInformation: JSON.stringify(msgSourceClientInformation),
        msgTargetCrossOriginIsolated: msgTargetCrossOriginIsolated,
        msgTargetDevicePixelRatio: msgTargetDevicePixelRatio,
        msgTargetFrameElement: msgTargetFrameElement,
        msgTargetInnerHeight: msgTargetInnerHeight,
        msgTargetInnerWidth: msgTargetInnerWidth,
        msgTargetOuterHeight: msgTargetOuterHeight,
        msgTargetOuterWidth: msgTargetOuterWidth,
        msgTargetOrigin: msgTargetOrigin,
        msgTargetLocalStorage: JSON.stringify(msgTargetLocalStorage),
        msgTargetName: msgTargetName,
        msgTargetNavCurrentEntry: JSON.stringify(msgTargetNavCurrentEntry),
        msgTargetClientInformation: JSON.stringify(msgTargetClientInformation),
    }

    chrome.runtime.sendMessage(postMessageDetails);
  });