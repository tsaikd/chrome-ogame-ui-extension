var style = document.createElement('style');
style.textContent = '.enhancement { color: #AB7AFF; }';
style.textContent += 'ul.production_info { height: 66px; padding: .5em 1em; }';
style.textContent += 'ul.production_info li { line-height: 1.4em; }';
style.textContent += '.limitingreagent { outline: 1px dotted #AB7AFF; outline-offset: 2px; }';
style.textContent += '.costs_wrap #costs { margin: 5px 0 0 0; }';
style.textContent += '.storageleft { position: absolute; bottom: -11px; left: -35%; width: 170%; }';
style.textContent += '.boldy { font-weight: bold; }';
style.textContent += '.resourcesgt { border-bottom:1px dotted #AB7AFF; position: absolute; bottom: 50px; left: -150%; width: 400%; font-size: 1.1em; padding-bottom: 1px; }';
style.textContent += '.uiEnhancementWindow { padding: 1em; }';
style.textContent += '.uiEnhancementWindow table { border-spacing:15px 5px; text-align:center; width: 100%; }';
style.textContent += '.uiEnhancementWindow table th { padding: .5em; font-weight: bold; font-size:1.15em; }';
style.textContent += '.uiEnhancementWindow table td { background: black; border-radius: 3px; line-height:8px; max-width: 2em; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }';
style.textContent += '.uiEnhancementWindow a { color:white; text-decoration:none; }';
style.textContent += '.uiEnhancementWindow tr.ignore { opacity:.15; }';
style.textContent += '.icon.icon_eye.disabled:hover { background-position: 0 -48px; }';
style.textContent += '.currentPlayer td { background: #444 !important; }';
style.textContent += '.spacer { height: .3em }';
(document.head || document.documentElement).appendChild(style);