
//Initialze the variables
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');

let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName(`songitem`));

let mastersongname=document.getElementById('mastersongname');




let songs = [
    { songname: "I ain't worried", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Sharks", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Cartoon On and On", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Fearless", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Vacio", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Masked Astronaut", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Neffex Baller", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Neffex Sometimes", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" }
]


// audioelement.play();

//Handle play pause
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }



});


songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
});





//Listen to events
audioelement.addEventListener('timeupdate', () => {
    //Updating seekbar

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);

    myprogressbar.value = progress;

    if (audioelement.currentTime == audioelement.duration) {
        myprogressbar.value = 0;
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
});

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {

        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
        gif.style.opacity = 1;
    })

}




Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 8)
        songindex = 0;
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <0)
        songindex = 0;
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})