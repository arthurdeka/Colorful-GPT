
function cores(){

  /* Aplica o stylesheet teste.css ao site */
  var doc = document;
  doc.getElementsByTagName("head")[0].insertAdjacentHTML(
    "beforeend",
    "<link rel=\"stylesheet\" href=\"teste.css\" />");

  console.log('[ColorfulGPT] - tema aplicado')
}


//remove a classe de degradê dos botões dos chats 
function removeClassFromElements() {
  className = 'bg-gradient-to-l'
  var elements = document.querySelectorAll('.' + className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
}


// observa se o site está atualizando dinamicamente o conteúdo da página, executa as funções novamente caso sim
function observeChanges() {
  try {
  
    const targetNode = document.querySelector("#__next");
    if (targetNode) {
      const config = { attributes: true, childList: true, subtree: true };
      const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            cores();
            removeClassFromElements();
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
    console.log('Atualização dinânimca - tema aplicado novamente')
    
  }

  catch(error) {
    console.log('Erro, observeChanges()')
  }

}


//o listener executa as funções novamente toda vez que a URL muda
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'urlChanged') {
    cores();
    console.log('[ColorfulGPT] - URL mudou, tema aplicado novamente')
  }
});


cores();
removeClassFromElements();
observeChanges();