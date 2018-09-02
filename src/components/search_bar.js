import React from 'react';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''}
    }
    
    render() {
        return (
        <div className="search-bar">
            <input 
            onChange = {event => this.searchVideo(event.target.value)}
            value = {this.state.term}
            />
        </div>
    );
    }

    searchVideo(term){

        this.setState({term});
        this.props.onSearchVideo(term);
    }

}
export default SearchBar;