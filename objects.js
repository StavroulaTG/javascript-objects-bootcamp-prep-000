<<<<<<< HEAD
var playlist = {'artistnames' : 'songtitles'}
function updatePlaylist(playlist, artistnames, songtitles) {
  return Object.assign({}, playlist, {['Phil Ochs'] :"Here's to the State of Mississippi"})
}
function removeFromPlaylist(playlist, artistname) {
delete playlist[artistname]
  return playlist
}
=======
var playlist = {artistnames : songtitles}
>>>>>>> 59bb88cca029da2ca66218a794e81b87c490f235
