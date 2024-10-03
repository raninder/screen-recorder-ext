
// when tab is fully loaded
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // only inject contentscript if pageload is compelete and url has http
    if(changeInfo.status === "complete" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./content.js"]
        }).then(()=>{
            console.log("we have injected the content script")
        }).catch(err=> console.log(err, "error in background script line 10"))
    }
})
