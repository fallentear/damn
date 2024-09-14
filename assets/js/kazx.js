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
                    window.location.href = "https://resort.lol";
                    break;
                case "c":
                    e.preventDefault();
                    window.location.href = "https://resort.lol";
                    break;
                case "e":
                    e.preventDefault();
                    window.location.href = "https://resort.lol";
                    break;
                case "u":
                    e.preventDefault();
                    window.location.href = "https://resort.lol";
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
        strings: ["@lostinfyb on ig", "codeine sipper", "perc popper", "tear my twin", "resort.lol/1"],
        typeSpeed: 45,
        backSpeed: 35,
        backDelay: 500,
        startDelay: 500,
        loop: true,
        showCursor: false 
    };
    
    var typed = new Typed(".description", options);
    
});
