//apply theme function
function applyTheme(theme) {
  const extensionConfigs = {
    current_color: theme
  }
  chrome.storage.sync.set({'colorfulGPTconfigs': JSON.stringify(extensionConfigs)}, function() {
      console.log(`ColorfulGPT - ${extensionConfigs.current_color} theme set`);
  });
  
}

// popup.html button's event listeners
document.getElementById('button-estilo-1').addEventListener('click', function () {
  applyTheme('sty_cyan')
});

document.getElementById('button-estilo-2').addEventListener('click', function () {
  applyTheme('sty_purple')
});
