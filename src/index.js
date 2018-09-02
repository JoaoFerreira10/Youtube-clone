import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyDdQSiwlM6Dr-c_h8deP7AOldufgmQjKEg';


class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {videos: []}

    this.onSearch('the beatles');
  }

  onSearch(term) {

    YTSearch({key: API_KEY, term: term}, videos => {
      
      this.setState({
        videos: videos,
        selectVideo : videos[3]
      });
    });
  }

  render() {
    return (<div>
      <SearchBar 
        onSearchVideo = {term => this.onSearch(term)}
      />
      <VideoDetail video={this.state.selectVideo}/>
      <VideoList 
        onVideoSelect = {selectVideo => this.setState({selectVideo})} 
        videos = {this.state.videos}/>
    </div>);
  }

}

ReactDOM.render(<App />, document.querySelector(".container"));