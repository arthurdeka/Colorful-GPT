//apply theme function
function applyTheme(theme) {
  /* set current theme as a JSON to later storage it in localStorage */
  const extensionConfigs = {
    current_color: theme,
  };
  /* storage current theme in localStorage */
  chrome.storage.sync.set(
    { colorfulGPTconfigs: JSON.stringify(extensionConfigs) },
    function () {
      console.log(`ColorfulGPT - ${extensionConfigs.current_color} theme set`);
    }
  );
  /* reload page when theme is applied */
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
}

/* function to add event listeners in buttons */
function addThemeButtonEvent(buttonId, theme) {
  document.getElementById(buttonId).addEventListener("click", function () {
    applyTheme(theme);
  });
}

// popup.html button's event listeners
addThemeButtonEvent("button-style-red", "sty_red");
addThemeButtonEvent("button-style-brown", "sty_brown");
addThemeButtonEvent("button-style-green", "sty_green");
addThemeButtonEvent("button-style-purple", "sty_purple");
addThemeButtonEvent("button-style-yellow", "sty_yellow");
addThemeButtonEvent("button-style-orange", "sty_orange");
addThemeButtonEvent("button-style-paninite", "sty_paninite");
addThemeButtonEvent("button-style-cyan", "sty_cyan");

addThemeButtonEvent("remove-theme", "none");
