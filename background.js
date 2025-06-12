chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("x.com/home")) {
        chrome.action.openPopup();
    }
})