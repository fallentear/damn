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
            title: "Marisburner - wtf",
            audioSrc: "assets/media/cudiaa.mp3",
            videoSrc: "assets/media/cudiaa.mp4",
            duration: 78 
        },
        {
            title: "Osamason - Flxr",
            audioSrc: "assets/media/cudibb.mp3",
            videoSrc: "assets/media/cudibb.mp4",
            duration: 200 
        },
        {
            title: "Nettspend - shine n peace",
            audioSrc: "assets/media/cudicc.mp3",
            videoSrc: "assets/media/cudicc.mp4",
            duration: 225 
        },
        {
            title: "Jaykatana - Boys 2 Men",
            audioSrc: "assets/media/cudiee.mp3",
            videoSrc: "assets/media/cudiee.mp4",
            duration: 225 
        },
        {
            title: "Osamason - Popstar",
            audioSrc: "assets/media/cudidd.mp3",
            videoSrc: "assets/media/cudidd.mp4",
            duration: 225 
        },
        {
            title: "Glokk40Spaz - Swamp",
            audioSrc: "assets/media/cudigg.mp3",
            videoSrc: "assets/media/cudigg.mp4",
            duration: 225 
        },
        {
            title: "Yuke - ian goin ",
            audioSrc: "assets/media/cudiff.mp3",
            videoSrc: "assets/media/cudiff.mp4",
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
