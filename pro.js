let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');

let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [
    {
        name: "First Song",
        path: "music/gv prakash song.mp3",
        img: "image/gvprakash030319_007[1].png",
        artist: '"GV PRAKASH"'
    },
    {
        name: "Second Song",
        path: "music/spb song.mp3",
        img: "image/images_(2)[1].png",
        artist: '"SPB"'
    },
    {
        name: "Third Song",
        path: "music/ilaiyaraja song.mp3",
        img: "image/images_(3)[1].png",
        artist: '"ILAIYARAJA"'
    }
];

function load_track(index_no) {
    clearInterval(timer);
    reset_sliser();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].artist;

    timer = setInterval(range_slider, 1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);

function justplay() {
    if (playing_song == false) {
        playsong();
    }
    else {
        pausesong();
    }
}

function reset_sliser() {
    slider.value = 0;
}

function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>'
}

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>'
}

function next_song(){
    if(index_no< All_song.length -1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}


function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

