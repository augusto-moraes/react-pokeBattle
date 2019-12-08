import React, { Component } from 'react';
import axios from 'axios';

export default class Battle extends Component {
    render() {
        let count = 0;
        if(localStorage.getItem('pokeball')) 
            count = JSON.parse(localStorage.getItem('pokeball')).length;
        return (
            <div>
                {count < 6 ? (
                    <h3>Ooooops, it looks like you didn't chose enough pokemons, go back and select new ones.</h3>
                ) : (
                    <h3>Lets battle</h3>
                )}
            </div>
        )
    }
}
