//TODO add + 1 to counter with facebook requests
chrome.storage.sync.get('config', function(data) {
  var config = data.config;
  console.log(config);
  console.log(new Date(config.blockUntill));
  console.log(new Date(+ config.setDay + (config.maximumMinutes * 60000)));
});
