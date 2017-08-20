// find audio button by id  make its click trigger play/pause
// toggle play pause on click
// next for next track
// previous for previous
console.log('Welcome devs, to my site. Still fixing it up so go easy. DONT FORGET TO DOWLOAD MUSIC TOO :-) ')
$(function() {
var playing = false

var title
var t = 0
var track = new Audio('song/stand1.mp3')
var tracks = [
	{
		song : 'song/stand1.mp3',
		title : 'stand'
	},
	
	{
		song:'song/drunk.mp3',
		title:'drunk'
	},
	
	{	
		song:'song/stand3.mp3',
		title:'standby mama'
	}
]
pausePlay()
nextSong()
prevSong()






function pausePlay(){
	
	$(".play").click(function(e) { 
	  if (playing == false) {
		  playTrack()
		} 
		else{
			pauseTrack()
		}
	})
}

function nextSong(){
	var cont
	$(".next").click(function(e){

	// stop whatever is playing 
		if (playing == true){		
			pauseTrack()
			cont = true

		}
	// on to the next source on track list
		t = t + 1
		if (t == tracks.length){
			t = 0
		}
	// insert next track
		trackUpdate()

	// if audio was already playing, start playing immediately
		if (cont == true){
			playTrack()
		}
	})
}

function prevSong(){
	var cont
	
	$(".previous").click(function(e){
		console.log(track.currentTime)
	// stop whatever is playing 
		if (playing == true){		
			pauseTrack()
			cont = true

		}
	// on to the previous source on track list or reset current
		if (track.currentTime < 5)
		t = t - 1
		if (t < 0){
			t = 0
		}
	// update track and title 
		trackUpdate()

	// if audio was already playing, start playing immediately
		if (cont == true){
			playTrack()
		}
	})
}





function playTrack(){
	track.play()
	playing = true
}

function pauseTrack(){
	track.pause()
	playing = false
}

function trackUpdate(){
	// insert new disc
	track.src = tracks[t].song
	title = tracks[t].title
	// song title change
	console.log(title)
	$("#track-name").html(title)
}




})
	 
 // find current audio track..... $('.song-title').html = current audio
 
 
 // find elements by class different song sources or params ;
 // for each song $('#songlist').appendchild = "<h5 class='track track1'>" + this + "</h5>"
