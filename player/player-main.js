console.log('Welcome devs, to my site. Still fixing it up so go easy. DONT FORGET TO DOWLOAD MUSIC TOO :-) ')
$(function() {
var playing = false

var title
var t = 0
var track = new Audio('song/stand1.mp3')
var tracks = [
	{
		song : 'song/stand1.mp3',
		cover : '',
		title : 'stand'
	},
	
	{
		song:'song/drunk.mp3',
		cover : '',
		title:'drunk'
	},
	
	{	
		song:'song/stand3.mp3',
		cover : '',
		title:'standby mama'
	}
]

listTracks()
pausePlay()
nextSong()
prevSong()
chooseTrack()
track.onplay = function(e){
 colorTracker()
}
	
	trackUpdate(t)
	$($('.track')[0]).addClass('selected')







function listTracks(){
	for (var i = 0; i < tracks.length; i++){
		console.log((i+1)+'. '+tracks[i].title)
		var list = (i+1)+'. '+tracks[i].title
		$('#playlist').append("<h6 class='track track"+i+"'>"+list+"</h6>")
	}

}

function chooseTrack(){
	$('.track').each(function(i){
		$('.track'+i).click(function(e){
			console.log('list')
			console.log(i)
			trackUpdate(i)
			playTrack()
		})
	})
}



function pausePlay(){	
	$(".play").click(function(e) { 
	  if (playing === false) {
		  playTrack()
		} 
		else{
			pauseTrack()
		}
	})
}

function nextSong(){	
	$(".next").click(function(e){
		var con = false
	// stop whatever is playing 
		if (playing === true){		
			pauseTrack()
			con = true
		}
	// on to the next source on track list
		t = t + 1
		if (t === tracks.length){
			t = 0
		}
	// insert next track
		trackUpdate(t)

	// if audio was already playing, start playing immediately
		if (con === true){
			playTrack()
		}
		colorTracker()
	})
}

function prevSong(){
	$(".previous").click(function(e){	
		var cont = false
// stop whatever is playing 
		if (playing === true){		
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
		trackUpdate(t)
	// if audio was already playing, start playing immediately
		if (cont === true){
			playTrack()
		}
		colorTracker()
	})
}




// function countDown(T){
// 	var timer= new Array(T)
// 	$($('.stats')[2]).html(timer.length)
// 	timerId = setInterval(function(){	
// 		timer.pop()
// 		$($('.stats')[2]).html(timer.length)
// 		if (timer.length===0){
// 			quit()
// 		}
// 	},1000)
// }



function playTrack(){
	track.play()
	playing = true
}

function pauseTrack(){
	track.pause()
	playing = false
}

function trackUpdate(number){
	t = number
	// insert new disc
	track.src = tracks[number].song
	title = tracks[number].title
	// song title change
	$("#track-name").html(title)
}

function colorTracker(){
	$('.track').each(function(index){
		$(this).removeClass('selected')
	})
	$('.track'+ t).addClass('selected')

}





})
	 
 // find current audio track..... $('.song-title').html = current audio
 
 
 // find elements by class different song sources or params ;
 // for each song $('#songlist').appendchild = "<h5 class='track track1'>" + this + "</h5>"
