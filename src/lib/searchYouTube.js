var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key || window.YOUTUBE_API_KEY,
      q: options.query || 'Hack Reactor',
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      throw new Error('Something went wrong, here is what was received', data);
    }
  });

};

window.searchYouTube = searchYouTube;

