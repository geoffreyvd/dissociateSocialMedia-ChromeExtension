//TODO add + 1 to counter with facebook requests
chrome.storage.sync.get('config', function(data) {
  var config = data.config;
  var now = new Date();
  //if today passed blockuntill date, or if now is in (10min)period after setting new block day 
  if(now > new Date(config.blockUntill) || now < new Date(+ config.setDay + (config.maximumMinutes * 60000))){ 
    //now only adjust block date if blockdate is actually passed
    if(now > new Date(config.blockUntill)){
      config.rangeDays += 1;
      config.minimumDays += 1;
      var randomDays = Math.floor((Math.random() * config.rangeDays) + config.minimumDays);

      var blockUntill = now;
      blockUntill.setDate(blockUntill.getDate() + randomDays); //needed

      config.blockUntill = + blockUntill;
      config.setDay = + now;
      //setRandomTime
      chrome.storage.sync.set({config: config}, function() {
        console.log("The time is set to: " + config.blockUntill);
      });
    }
  }else{
    window.location.replace(chrome.extension.getURL("index.html"));
    // var opened = window.open("");
    // opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
  }
  //easier way to possible over write pagewith new, TODO:
  //window.location.replace(config.blockUntill);
  //care when redirecting to a mathicng site(facebook.com for instance) there will be a loop
});
