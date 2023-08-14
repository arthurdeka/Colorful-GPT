//o código verifica se a atualização foi concluída (changeInfo.status === 'complete') e se a aba está ativa (tab.active).
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    //ele verifica se a URL da aba não começa com 'chrome://' para evitar as páginas internas do Chrome
    if (changeInfo.status === 'complete' && tab.active && !tab.url.startsWith('chrome://')) {
        chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ['app/sty_cyan.css'],
        });
    }
});