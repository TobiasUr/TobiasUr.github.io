(function(){
  // Loads a CSS file
  function loadCSS(href){
    return new Promise(function(resolve, reject){
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  // Loads a script file
  function loadScript(src){
    return new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = src;
      s.defer = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // CDN resources (adjust versions if desired)
  var cssUrl = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css';
  var hljsUrl = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js';
  var matlabLangUrl = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/languages/matlab.min.js';

  // Load CSS + scripts then initialize
  loadCSS(cssUrl)
    .then(function(){ return loadScript(hljsUrl); })
    .then(function(){ return loadScript(matlabLangUrl); })
    .then(function(){
      try{
        if(window.hljs && typeof hljs.highlightAll === 'function') hljs.highlightAll();
      }catch(e){
        console.error('Highlight init error', e);
      }
    })
    .catch(function(err){
      // Non-fatal: log so user can debug
      console.error('Failed to load highlight resources', err);
    });
})();
