

let song1 = document.querySelector('.song1');
let playPauseBtn1 = document.getElementById('play1');

let song2 = document.querySelector('.song2');
let playPauseBtn2 = document.getElementById('play2');

let song3 = document.querySelector('.song3');
let playPauseBtn3 = document.getElementById('play3');

let song4 = document.querySelector('.song4');
let playPauseBtn4 = document.getElementById('play4');

let song5 = document.querySelector('.song5');
let playPauseBtn5 = document.getElementById('play5');

let song6 = document.querySelector('.song6');
let playPauseBtn6 = document.getElementById('play6');


function playPause1() {
    if (song1.paused) {
        song1.play();
        playPauseBtn1.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        song1.pause();
        playPauseBtn1.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}
playPauseBtn1.addEventListener('click', playPause1);

function playPause2() {
    if (song2.paused) {
        song2.play();
        playPauseBtn2.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        song2.pause();
        playPauseBtn2.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}
playPauseBtn2.addEventListener('click', playPause2);

function playPause3() {
    if (song3.paused) {
        song3.play();
        playPauseBtn3.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        song3.pause();
        playPauseBtn3.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}
playPauseBtn3.addEventListener('click', playPause3);

function playPause4() {
    if (song4.paused) {
        song4.play();
        playPauseBtn4.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        song4.pause();
        playPauseBtn4.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}
playPauseBtn4.addEventListener('click', playPause4);

function playPause5() {
    if (song5.paused) {
        song5.play();
        playPauseBtn5.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        song5.pause();
        playPauseBtn5.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}
playPauseBtn5.addEventListener('click', playPause5);

function playPause6() {
    if (song6.paused) {
        song6.play();
        playPauseBtn6.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        song6.pause();
        playPauseBtn6.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}
playPauseBtn6.addEventListener('click', playPause6);



let currentSong = null; // Зберігаємо поточну пісню

function playPause(songElement) {
    const song = songElement.querySelector('audio'); // Знаходимо аудіо-елемент пісні
    const playPauseBtn = songElement.querySelector('.play'); // Знаходимо кнопку відтворення/паузи
    
    if (currentSong && currentSong !== song) {
        // Якщо вибрано нову пісню, призупиняємо попередню
        currentSong.pause(); // Призупиняємо відтворення попередньої пісні
        const prevPlayPauseBtn = currentSong.parentElement.querySelector('.play');
        prevPlayPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>'; // Змінюємо значок кнопки на play
    }

    if (song.paused) {
        // Якщо пісня пауза, відтворюємо її
        song.play();
        playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>'; // Змінюємо значок кнопки на pause
        currentSong = song; // Оновлюємо поточну пісню
    } else {
        // Якщо пісня відтворюється, призупиняємо відтворення
        song.pause();
        playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>'; // Змінюємо значок кнопки на play
        currentSong = null; // Очищаємо поточну пісню
    }
}

// Додаємо обробник подій для кожної кнопки play
document.querySelectorAll('.controls .play').forEach(playBtn => {
    playBtn.addEventListener('click', function() {
        const musicPlayer = this.parentElement.parentElement;
        playPause(musicPlayer);
    });
});















// let progress = document.getElementsByClassName("progress");
// let song = document.getElementsByClassName("song");
// let ctrlIcon = document.getElementsByClassName("ctrlIcon");

// song.onloadedmetadata = function() {
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }
// // функція для запуску музики або для зупинення музики 
// function playPause() {
//     if(ctrlIcon.classList.contains("bi-pause-fill")) {
//         song.pause();
//         ctrlIcon.classList.remove("bi-pause-fill");
//         ctrlIcon.classList.add("bi-play-fill");
//     }
//     else {
//         song.play();
//         ctrlIcon.classList.add("bi-pause-fill");
//         ctrlIcon.classList.remove("bi-play-fill");
//     }
// }
// оновлення прогреса музики кожні 500 мілісекунд
setInterval(()=>{
    progress.value = song.currentTime;
},500);

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("bi-pause-fill");
    ctrlIcon.classList.remove("bi-play-fill");
}

progress.oninput = function() {
    song.currentTime = progress.value;
}
// перемотування пісні на 10 секунд назад
document.getElementById("backward").onclick = function() {
    song.currentTime -= 10;
}
// перемотування пісні на 10 секунд вперед
document.getElementById("forward").onclick = function() {
    song.currentTime += 10;
}

song.onended = function() {
    song.currentTime = 0;
    progress.value = 0;
    ctrlIcon.classList.remove("bi-pause-fill");
    ctrlIcon.classList.add("bi-play-fill");
}

song.ontimeupdate = function() {
    progress.value = song.currentTime;
    if(song.currentTime == song.duration) {
        song.pause();
        song.currentTime = 0;
        ctrlIcon.classList.remove("bi-pause-fill");
        ctrlIcon.classList.add("bi-play-fill");
    }
}

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('playerState');
});

document.addEventListener("DOMContentLoaded", function() {
    let savedState = JSON.parse(localStorage.getItem('playerState'));

    if(savedState) {
        song.currentTime = savedState.currentTime;
        if(savedState.isPlaying) {
            song.play();
            ctrlIcon.classList.add("bi-pause-fill");
            ctrlIcon.classList.remove("bi-play-fill");
        }
    }
});

    function playPause() {
        if(ctrlIcon.classList.contains("bi-pause-fill")) {
            song.pause();
            ctrlIcon.classList.remove("bi-pause-fill");
            ctrlIcon.classList.add("bi-play-fill");
        }
        else {
            song.play();
            ctrlIcon.classList.add("bi-pause-fill");
            ctrlIcon.classList.remove("bi-play-fill");
        }
        
        localStorage.setItem('playerState', JSON.stringify({
            currentTime: song.currentTime,
            isPlaying: !song.paused
        }));
    }

const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
// переміщення каруселі вліво
document.getElementById("left").onclick = function() {
    let carouselWidth = carousel.clientWidth;
    let scrollAmount = carouselWidth / 3;
    carousel.scrollLeft -= scrollAmount;
    updateButtonVisibility();
}
// переміщення каруселі вправо
document.getElementById("right").onclick = function() {
    let carouselWidth = carousel.clientWidth;
    let scrollAmount = carouselWidth / 3;
    carousel.scrollLeft += scrollAmount;
    updateButtonVisibility();
}
// обробник подій для визначення видимості кнопок переміщення каруселі
document.addEventListener("DOMContentLoaded", function() {
    let isScrolling = false;





// функція для оновлення видимості кнопок переміщення каруселі    
    function updateButtonVisibility() {
        const scrollLeft = carousel.scrollLeft;
        const carouselWidth = carousel.clientWidth;
        const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
        const maxScroll = carousel.scrollWidth - carouselWidth;

        if (scrollLeft <= 0) {
            document.getElementById("left").style.display = "none";
        } else {
            document.getElementById("left").style.display = "block";
        }

        if (maxScroll - scrollLeft <= itemWidth && isScrolling) {
            document.getElementById("right").style.display = "none";
        } else {
            document.getElementById("right").style.display = "block";
        }
    }

    carousel.addEventListener("scroll", function() {
        isScrolling = true;
        updateButtonVisibility();
    });
});
