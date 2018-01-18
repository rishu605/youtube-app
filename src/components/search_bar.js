import React, {Component} from 'react';

const API_KEY = "AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";

class SearchBar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            term: 'Game of thrones'
        };
        props.onSearchTermChange(this.state.term);


    }


    onInputChange(term) {

        console.log(term);
        this.setState({searchterm: term});
        this.props.onSearchTermChange(term);

    }


    render() {
        return (
            <div>
                <input placeholder={"Search whatever you want..."} className={"form-control mr-sm-2"}
                       value={this.state.searchterm} onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>

        );
    }

}


export default SearchBar;
