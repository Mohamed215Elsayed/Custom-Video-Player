const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play & pause video
toggleVideoStatus = () => {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
// Update play/pause icon
updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}
// Update progress & timestamp
updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100
  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // Get the seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}` ;
}
stopVideo = () => {
  video.pause()
  video.currentTime = 0
  updatePlayIcon()
  updateProgress()
}
setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100
}

// Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)
