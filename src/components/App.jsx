class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
    };
  }

  handleClick(video) {
    this.setState(prevState => ({
      video: video
    }));
  }

  fetchVideos (query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (items) => {
      this.setState(prevState => ({
        video: items[0],
        videos: items
      }));
    });
  }

  componentDidMount() {
    this.fetchVideos('Hack Reactor');
  }

  render() {
    return (<div>
      <Nav handleSearchInput={_.debounce(this.fetchVideos.bind(this), 500)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.video} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} handleClick={this.handleClick.bind(this)}/>
      </div>
    </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;