class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: null,
      videos: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.onFetchVideo = this.onFetchVideo.bind(this);
    this.searchYouTube = this.props.searchYouTube;
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleClick(video) {
    this.setState(prevState => ({
      video: video
    }));
  }

  onFetchVideo (items) {
    this.setState(prevState => ({
      video: items[0],
      videos: items
    }));
  }

  componentDidMount() {
    console.log(this.props);
    this.props.searchYouTube({}, this.onFetchVideo);
  }

  handleSearchInput (query) {
    var options = {
      query: query
    };

    this.props.searchYouTube(options, this.onFetchVideo);
  }

  render() {
    return (<div>
      <Nav handleSearchInput={handleSearchInput}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.video} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
      </div>
    </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;