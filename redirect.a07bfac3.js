const e=window.location.hash.match(/^#access_token=([^&]+).+$/),t=e?.[1],a=document.body.querySelector(".content");if(a){let e=document.createElement("a");e.href=t?`baseg-chat://authentication/${t}`:"/",e.innerHTML=t?"<h1>Continue to Baseg Chat</h1>":"<h1>Baseg Chat</h1>",a.appendChild(e)}t?window.location.replace(`baseg-chat://authentication/${t}`):window.location.replace("/");//# sourceMappingURL=redirect.a07bfac3.js.map

//# sourceMappingURL=redirect.a07bfac3.js.map
