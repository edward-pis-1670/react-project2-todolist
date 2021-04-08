import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'


class Controll extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row mt-15">
                <Search />
                <Sort />
            </div>

        );
    }
}

export default Controll;