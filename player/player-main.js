// find audio button by id  make its click trigger play/pause
// toggle play pause on click
// next for next track
// previous for previous
console.log('luminous')
 $($('.play')[0]).click(function(e){
  //if audio play == true
         $('.middle').css('background-color':'red')
         var song = $(this).next('audio').get(0);
       if (song.paused)
         song.play();
       else
         song.pause();
  // else $('#audio').pause()
 })
 
 // find current audio track..... $('.song-title').html = current audio
 
 
 // find elements by class different song sources or params ;
 // for each song $('#songlist').appendchild = "<h5 class='track track1'>" + this + "</h5>"
