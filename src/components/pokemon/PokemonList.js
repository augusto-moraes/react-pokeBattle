import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'

export default class PokemonList extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/type/10/',
        pokemon: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['pokemon']})
    }

    render() {
        return (
            <div>
                {this.state.pokemon ? (
                    <div className='row'>
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard 
                                key={pokemon.pokemon.name}
                                name={pokemon.pokemon.name}
                                url={pokemon.pokemon.url}
                            />
                        ))}
                    </div>
                ) : (<h3>Loading Pokemons...</h3>)}
            </div>
        )
    }
}
