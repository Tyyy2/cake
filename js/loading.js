function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 4000);

  function checkReady() {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id) {
  document.getElementById(id).classList.toggle("off");
}

onReady(function () {
  // show("page");
  show("loading");
});
