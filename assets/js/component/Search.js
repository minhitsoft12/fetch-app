import React, { Component } from 'react';

class Search extends Component {
    state = {
        key: '',
    }


    handleChange = (e) => {
        this.setState({
            key: e.target.value
        });
    }
    searchSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state);
    }

    render() {
        return (
            <form method="get" id="searchform" onSubmit={this.searchSubmit.bind(this)}>
                <input type="text" defaultValue="Search" name="s" id="s" onChange={this.handleChange.bind(this)} />
                <input type="submit" id="searchsubmit" defaultValue="Search" />
            </form>
        );
    }
}

export default Search;