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
  applyTheme('sty_red')
});

document.getElementById('button-estilo-2').addEventListener('click', function () {
  applyTheme('sty_brown')
});

document.getElementById('button-estilo-3').addEventListener('click', function () {
  applyTheme('sty_blue')
});

document.getElementById('button-estilo-4').addEventListener('click', function () {
  applyTheme('sty_green')
});

document.getElementById('button-estilo-5').addEventListener('click', function () {
  applyTheme('sty_purple')
});

document.getElementById('button-estilo-6').addEventListener('click', function () {
  applyTheme('sty_yellow')
});

document.getElementById('button-estilo-7').addEventListener('click', function () {
  applyTheme('sty_orange')
});

document.getElementById('button-estilo-8').addEventListener('click', function () {
  applyTheme('sty_pink')
});

document.getElementById('button-estilo-9').addEventListener('click', function () {
  applyTheme('sty_cyan')
});
