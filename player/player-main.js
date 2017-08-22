console.log('Welcome devs, to my site. Still fixing it up so go easy. DONT FORGET TO DOWLOAD MUSIC TOO :-) ')
$(function() {
var playing = false

var title
var t = 0
// var track = new Audio('song/stand1.mp3')
var track = document.getElementById('player')

var tracks = [
	{
		song : 'song/stand1.mp3',
		cover : '',
		title : 'Stand by'
	},
	
	{
		song:'song/drunk.mp3',
		cover : '',
		title:'Drunk Loving'
	},
	
	{	
		song:'song/stand3.mp3',
		cover : '',
		title:'Standby Ma'
	}
]

listTracks()
pausePlay()
nextSong()
prevSong()
chooseTrack()
oncePlaying()
trackUpdate(t)
$($('.track')[0]).addClass('selected')
createTimer()
duration()


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

function oncePlaying(){
	track.onplay = function(e){
	 	colorTracker()		
	}
}

function duration(){
	track.ondurationchange = function(){
		console.log(track.duration+ 'SECONDS')
		maxT = track.duration
		progressChange()
	}
}
// create function that creates clickable event listeners for each tiny div relating current time an maxtime

function createTimer(){
	for (var i = 0; i < 100; i++){
		$('.duration').append("<li class='seconds'></li>")
	}
	$('.seconds').each(function(i){
		$(this).click(function(){
			maxT = track.duration
			console.log(i+'  '+track.currentTime)
			track.currentTime = i * 0.01 * maxT
		})
	})
}


function progressChange(){
	// colormoving

	track.ontimeupdate = function(){

		var n
		$('.seconds').each(function(index){
			$(this).removeClass('progress')
			step = track.currentTime/maxT/0.01

			step = Math.floor(step)
			console.log(step+'step')			
			if(index == step ){
				n = index
					console.log(step+'step winner')
			}
			for(i=0;i<n;i++){
				$($('.seconds')[i]).addClass('progress')
			}
		})
	}
}
})
	 
 // find current audio track..... $('.song-title').html = current audio
 
 
 // find elements by class different song sources or params ;
 // for each song $('#songlist').appendchild = "<h5 class='track track1'>" + this + "</h5>"
