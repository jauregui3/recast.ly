// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={props.video} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videos} />
//     </div>
//   </div>
// );
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  onListItemClick() {
    this.setState({
    });
  }

  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.video} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} />
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//  render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }