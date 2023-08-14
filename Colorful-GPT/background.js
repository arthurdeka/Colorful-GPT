
// Read the extension's settings (stored in local storage) using the storage API
// Promise needed since storage is a async method
function readCurrentColor() {
    return new Promise(function(resolve, reject) {
        chrome.storage.sync.get(['colorfulGPTconfigs'], function(items) {
            console.log('Settings read:', items);
            //recovers the JavaScript object stored in browser's local storage 
            var current_color = items.colorfulGPTconfigs;
            //recovers the original JSON
            current_color = JSON.parse(current_color)
            resolve(current_color);
        });
    });

}

// sets the configs on the tab
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    //verifies if the page was updated (changeInfo.status === 'complete') and if the tab is active (tab.active).
    //verifies if the tab's URL doesn't start with 'chrome://' to avoid Chrome's internal pages
    if (changeInfo.status === 'complete' && tab.active && !tab.url.startsWith('chrome://')) {
        //applies CSS for themes

        // get the current color value in the app's settings
        let current_color = await readCurrentColor();
        current_color = current_color.current_color;
        //applies CSS of the current_color
        chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: [`app/${current_color}.css`],
        });
        
    }
});