import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyDdQSiwlM6Dr-c_h8deP7AOldufgmQjKEg';


class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {videos: []}

    YTSearch({key: API_KEY, term: 'the beatles'}, videos => {
      
      this.setState({videos});

      console.log(videos);
      });
  }

  render() {
    return (<div>
      <SearchBar />
      <VideoList videos = {this.state.videos}/>
    </div>);
  }

}

ReactDOM.render(<App />, document.querySelector(".container"));