// Background script

// Install extension
chrome.runtime.onInstalled.addListener(function() {
    console.log("Iframe Tracker Extension installed");
});



// Adding chrome.runtime.onMessage.addListener()
chrome.runtime.onMessage.addListener(function(details, sender, sendResponse) {
    if (details.messageType == "iframe") {
        var iframeDetails = details;
        console.log("Message received in background script:", iframeDetails);
    }
    else if (details.messageType == "postMessage") {
        var messageDetails = details;
        console.log('Post message from content script:', messageDetails);
    }
    if (details.messageType == "iframe" || details.messageType == "postMessage") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/storeData", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.send(JSON.stringify(details));
    }
});




// Inject JS inside an iframe at differeny stages of loading
function handleIframeLoading(details) {

    const tabId = details.tabId;
    const documentId = details.documentId;
    const documentLifecycle = details.documentLifecycle;
    const frameId = details.frameId;
    const frameType = details.frameType;
    const parentDocumentId = details.parentDocumentId;
    const parentFrameId = details.parentFrameId;
    const processId = details.processId;
    const timeStamp = details.timeStamp;
    const url = details.url;

    setTimeout(() => {
        chrome.tabs.executeScript(
            tabId,
            { frameId: frameId, file: "scripts/content.js", matchAboutBlank: true },
            function(result) {
                console.log(`Tab ID: ${tabId} | Frame ID: ${frameId}`);

                chrome.tabs.sendMessage(tabId, { 
                    tabId: tabId, 
                    documentId: documentId,
                    documentLifecycle: documentLifecycle,
                    frameId: frameId, 
                    frameType: frameType,
                    parentDocumentId: parentDocumentId, 
                    parentFrameId: parentFrameId,
                    processId: processId,
                    timeStamp: timeStamp,
                    url: url
                });
            }
        );
    }, 5); // 5ms : Adjust the delay as needed
}



// OnBeforeNavigated Event is fired just before iframe navigations related to its loading starts
// chrome.webNavigation.onBeforeNavigate.addListener(handleIframeLoading);



// onCommitted is fired before any of its children's onBeforeNavigate in case of nested iframes
// chrome.webNavigation.onCommitted.addListener(handleIframeLoading);



// OnDOMContentLoaded is fired after OnCommitted and before OnCompleted
// chrome.webNavigation.onDOMContentLoaded.addListener(handleIframeLoading);



// OnCompleted Event is fired for frame after all its children's OnCompleted in case of nested iframes
chrome.webNavigation.onCompleted.addListener(handleIframeLoading);



// OnErrorOccurred is fired if error occurs during any point in time of iframe loading
// chrome.webNavigation.onErrorOccurred.addListener(handleIframeLoading);



// OnReferenceFragmentUpdated is fired if the reference fragment of a frame is changed any time any time after onDOMContentLoaded or onCompleted
// chrome.webNavigation.onReferenceFragmentUpdated.addListener(function(details) {
//     if (details.frameId > 0) {
//         console.log("Frame onReferenceFragmentUpdated:", details.frameId);
//     }
// });



// Listen for clicks on the extension icon to get frames for the active tab
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(`Extension icon clicked on Tab: ${tab.id}`);
    // getAllFrames(tab.id); // Pass tab.id as an argument
});