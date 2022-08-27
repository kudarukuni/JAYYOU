jQuery(document).ready(function($) {
  "use strict";

  /* Banner Player */
  $('#header_player').each(function() {
    var myPlaylist = new jPlayerPlaylist({
      jPlayer: "#main_player",
      cssSelectorAncestor: "#header_player"
    }, [{
        title: 'Wandinetsa',
        artist: 'Jay You',
        mp3: 'img/audio/01.mp3',
        poster: "img/audio/01.jpg",
      },
      {
        title: 'Dwayne Wade',
        artist: 'Jay You Ft Yadish Da Chronic',
        mp3: 'img/audio/02.mp3',
        poster: "img/audio/02.jpg",
      }
    ], {
      playlistOptions: {
        enableRemoveControls: false,
        html: '.play',
        // autoPlay: true,
      },
      swfPath: "dependencies/jPlayer/js",
      supplied: "oga, mp3",
      wmode: "window",
      useStateClassSkin: true,
      toggleDuration: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      displayTime: 'slow',
    });



    // Show The Current Track !!
    $("#main_player").on(
      $.jPlayer.event.ready + ' ' + $.jPlayer.event.play,
      function(event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;
        $.each(playlist, function(index, obj) {
          if (index == current) {
            $("#nowPlaying .track-name").html(obj.title);
            $("#nowPlaying .artist-name").html(obj.artist);
          }
        });
      });
  });


});