//apply theme function
function applyTheme(theme) {
  const extensionConfigs = {
    current_color: theme
  }
  chrome.storage.sync.set({'colorfulGPTconfigs': JSON.stringify(extensionConfigs)}, function() {
      console.log(`ColorfulGPT - ${extensionConfigs.current_color} theme set`);
  });
  
}

/* function to add event listeners in buttons */
function addThemeButtonEvent(buttonId, theme) {
  document.getElementById(buttonId).addEventListener('click', function () {
      applyTheme(theme);
  });
}

// popup.html button's event listeners
addThemeButtonEvent('button-style-red', 'sty_red');
addThemeButtonEvent('button-style-brown', 'sty_brown');
addThemeButtonEvent('button-style-green', 'sty_green');
addThemeButtonEvent('button-style-purple', 'sty_purple');
addThemeButtonEvent('button-style-yellow', 'sty_yellow');
addThemeButtonEvent('button-style-orange', 'sty_orange');
addThemeButtonEvent('button-style-paninite', 'sty_pink');
addThemeButtonEvent('button-style-cyan', 'sty_cyan');

addThemeButtonEvent('remove-theme', 'none');