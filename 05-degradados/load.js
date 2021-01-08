if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(
        reg =>{
            console.log("SW register");
        }
    ).catch(err=> console.log(err))

}