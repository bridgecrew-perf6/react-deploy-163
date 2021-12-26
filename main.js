//Make sure SW are supported
if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw_cached_site.js")
      .then(reg => console.log("Service worker: Registered"))
      .catch(err => console.log("Service worker: Error: " + err))
    });
  }