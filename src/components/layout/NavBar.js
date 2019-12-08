import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark fixed-top">
                    <div className="col-md-10 col-sm-9 col-8 mr-0 align-items-center">
                        <Link className="navbar-brand" to={``}>PokeBattle</Link>
                    </div>
                        <Link className="navbar-brand col mr-0 align-items-center startBattle" to={`battle`}>Start Battle</Link>
                </nav>
            </div>
        )
    }
}
