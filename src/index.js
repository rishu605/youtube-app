import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
import {API_KEY} from "./constants";




class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: ''
        };

    }

    videoSearch(term) {

        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        });


    }

    render() {


        return (
            <div>
                <div className={"row"}>
                    <div className={"col-md-1"}>

                    </div>
                    <div className={"col-md-8"}>
                        <div className={"search-bar"}>
                            <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
                        </div>
                    </div>

                </div>

                <div className={"row"}>
                    <div className={"col-md-1"}>

                    </div>
                    <div className={"col-md-6"}>
                        <VideoDetails video={this.state.selectedVideo}/>
                    </div>
                    <div className={"col-md-1"}>

                    </div>
                    <div className={"col-md-3"}>
                        <VideoList videos={this.state.videos}
                                   onVideoSelect={(video) => {
                                       this.setState({selectedVideo: video})
                                   }}/>
                    </div>
                    <div className={"col-md-1"}>

                    </div>


                </div>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".containe"));