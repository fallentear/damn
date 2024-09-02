document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("audio"),
        video = document.getElementById("video"),
        musicSlider = document.querySelector(".music-slider"),
        sliderProgress = document.querySelector(".slider-progress"),
        pauseButton = document.querySelector(".pause-button"),
        currentTime = document.querySelector(".current-time"),
        totalDuration = document.querySelector(".total-duration"),
        songTitle = document.querySelector(".song-title"),
        forwardButton = document.querySelector(".forward-button"),
        backwardButton = document.querySelector(".backward-button");

    var playlist = [
        {
            title: "Yanko - Lightwork Freestyle",
            audioSrc: "assets/media/sharing1.mp3",
            videoSrc: "assets/media/sharing1.mp4",
            duration: 186 
        },
        {
            title: "TapeDat - Pressure",
            audioSrc: "assets/media/sharing2.mp3",
            videoSrc: "assets/media/sharing2.mp4",
            duration: 200 
        },
        {
            title: "Nino Uptown - Frostbite",
            audioSrc: "assets/media/sharing3.mp3",
            videoSrc: "assets/media/sharing3.mp4",
            duration: 225 
        },
        {
            title: "Yanko - Hurtings Fun",
            audioSrc: "assets/media/sharingg4.mp3",
            videoSrc: "assets/media/sharingg4.mp4",
            duration: 225 
        },
        {
            title: "E1 (3x3) - Fake Friends",
            audioSrc: "assets/media/sharing5.mp3",
            videoSrc: "assets/media/sharing5.mp4",
            duration: 225 
        },
        {
            title: "Lil Prezi - 80%",
            audioSrc: "assets/media/sharing6.mp3",
            videoSrc: "assets/media/sharing6.mp4",
            duration: 225 
        },
        {
            title: "Dsavv - Drill Ain’t Dead",
            audioSrc: "assets/media/sharingg7.mp3",
            videoSrc: "assets/media/sharingg7.mp4",
            duration: 76 
        }
    ];

    var currentIndex = 0;

    function loadSong(index) {
        var song = playlist[index];
        audio.src = song.audioSrc;
        video.src = song.videoSrc;
        songTitle.textContent = song.title;
        totalDuration.textContent = formatTime(song.duration);
        audio.currentTime = 0;
        updateProgressBar();
        updateTimes();
        audio.play();
        video.play();
        updatePlayPauseIcons();
    }

    function updateProgressBar() {
        let e = (audio.currentTime / audio.duration) * 100;
        sliderProgress.style.width = `${e}%`;
    }

    function togglePlayPause() {
        let e = document.querySelector(".pause-icon"),
            t = document.querySelector(".play-icon");
        if (audio.paused) {
            audio.play();
            video.play();
            e.style.display = "block";
            t.style.display = "none";
        } else {
            audio.pause();
            video.pause();
            e.style.display = "none";
            t.style.display = "block";
        }
    }

    function updateTimes() {
        let e = formatTime(audio.currentTime),
            t = formatTime(audio.duration);
        currentTime.textContent = e;
        totalDuration.textContent = t;
    }

    function formatTime(e) {
        return `${Math.floor(e / 60)}:${Math.floor(e % 60)
            .toString()
            .padStart(2, "0")}`;
    }

    function updatePlayPauseIcons() {
        let e = document.querySelector(".pause-icon"),
            t = document.querySelector(".play-icon");
        if (audio.paused) {
            e.style.display = "none";
            t.style.display = "block";
        } else {
            e.style.display = "block";
            t.style.display = "none";
        }
    }

    audio.addEventListener("loadedmetadata", function () {
        totalDuration.textContent = formatTime(audio.duration);
    });
    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("timeupdate", updateTimes);
    pauseButton.addEventListener("click", togglePlayPause);

    musicSlider.addEventListener("click", function (e) {
        let t = musicSlider.getBoundingClientRect(),
            o = e.clientX - t.left,
            i = (o / t.width) * 100;
        audio.currentTime = (i / 100) * audio.duration;
    });

    document.getElementById("enter").addEventListener("click", function () {
        let e = document.getElementById("enter");
        e.style.opacity = "0";
        e.addEventListener("transitionend", () => e.remove());
        loadSong(currentIndex); 
    });

    audio.onended = function () {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(currentIndex);
    };

    forwardButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(currentIndex);
    });

    backwardButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentIndex);
    });

    loadSong(currentIndex);
});
