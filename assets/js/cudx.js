document.addEventListener("DOMContentLoaded", function () {

  const x = document.getElementById("enter");

  function xx() {
      document.fullscreenElement ? document.xxx && document.xxx() : document.documentElement.requestFullscreen();
  }

  x.addEventListener("click", xx);

  const body = document.getElementsByTagName("body")[0];

  window.addEventListener("keydown", (e) => {
      if (e.ctrlKey) {
          switch (e.key.toLowerCase()) {
              case "s":
                  e.preventDefault();
                  window.location.href = "https://resort.lol/1";
                  break;
              case "c":
                  e.preventDefault();
                  window.location.href = "https://resort.lol/1";
                  break;
              case "e":
                  e.preventDefault();
                  window.location.href = "https://resort.lol/1";
                  break;
              case "u":
                  e.preventDefault();
                  window.location.href = "https://resort.lol/1";
                  break;
          }
      }
  });

  document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
  });
});

document.addEventListener("DOMContentLoaded", function () {

  var options = {
      strings: ["domain owner @ resort.lol", "restrict my left hand", "@mr.gripha on instagram", ":3", "aint nobody like this mf"],
      typeSpeed: 45,
      backSpeed: 35,
      backDelay: 500,
      startDelay: 500,
      loop: true,
      showCursor: false 
  };
  
  var typed = new Typed(".description", options);
  
});
