console.log("Welcome to Spotify")



// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs =[
    {songName: "Bondhu Ra Elomelo", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg" },
    {songName: "Egiye De (Unplugged)", filePath:"songs/2.mp3" , coverPath:"covers/2.jpg" },
    {songName: "Egiye De", filePath:"songs/3.mp3" , coverPath:"covers/2.jpg" },
    {songName: "Ek Din Teri Raahon", filePath:"songs/4.mp3" , coverPath:"covers/3.jpg" },
    {songName: "Eshechi Toke Niye ", filePath:"songs/5.mp3" , coverPath:"covers/4.jpg" },
    {songName: "Jane mon", filePath:"songs/6.mp3" , coverPath:"covers/4.jpg" },
    {songName: "Janina", filePath:"songs/7.mp3" , coverPath:"covers/1.jpg" },
    {songName: "Jeno tomari kache", filePath:"songs/8.mp3" , coverPath:"covers/2.jpg" },
    {songName: "Mahi ve", filePath:"songs/9.mp3" , coverPath:"covers/1.jpg" },
    {songName: "Mon bebagi", filePath:"songs/10.mp3" , coverPath:"covers/4.jpg" },
    
]

songItems.forEach((element,i)=>{
    

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;

})


//Handle play/pause click

masterPlay.addEventListener ('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

/

// listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');


    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeAllPlays();
    console.log(e.target);
    songIndex =parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause')
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})


