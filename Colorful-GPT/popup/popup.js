document.getElementById('apply-teste1').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.runtime.sendMessage({action: 'getURL', tabId: tab.id});
    chrome.scripting.insertCSS({ target: { tabId: tabs[0].id }, files: ['teste1.css'] });
  });
});

document.getElementById('apply-teste2').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.insertCSS({ target: { tabId: tabs[0].id }, files: ['teste2.css'] });
  });
});