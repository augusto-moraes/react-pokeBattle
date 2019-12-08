import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class PokemonList extends Component {
    state = {
        pokemon: null
    };

    async componentDidMount(){
        const type = localStorage.getItem('type') ? (localStorage.getItem('type')) : ('10');
        const url = `https://pokeapi.co/api/v2/type/${type}/`
        const res = await axios.get(url);
        this.setState({pokemon: res.data['pokemon']})
    }

    render() {
        return (
            <div>
                {this.state.pokemon ? (
                    <div className='row'>
                        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-7">
                            <h3>Hey, its nice to see you there ;)</h3>
                            <span>Chose 6 pokemons and click on start battle!</span>
                            <p>If you wanna know how the game works, check our <Link to={`tutorial`} className='bodyLink'>tutorial</Link>.</p>
                        </div>
                        <div className="col">
                            <div className="btn-group btn-group-sm" role="group">
                                <button type="submit" className="btn btn-light" onClick={() =>
                                     {
                                        if(localStorage.getItem('type') !== '10'){
                                            localStorage.setItem('type','10');
                                            window.location.reload();
                                        }
                                    }}>
                                    <img 
                                        src="https://myrealdomain.com/images/pixel-art-flame.png" 
                                        style={{width:'2em', height: '2em' }} 
                                        className='rounded d-block' 
                                 /></button>
                                <button type="submit" className="btn btn-light" onClick={() =>
                                     {
                                        if(localStorage.getItem('type') !== '11'){
                                            localStorage.setItem('type','11');
                                            window.location.reload();
                                        }
                                    }}>
                                    <img 
                                        src="https://cdn140.picsart.com/254846921001212.png?r1024x1024" 
                                        style={{width:'2em', height: '2em' }} 
                                        className='rounded d-block' 
                                 /></button>
                                 <button type="submit" className="btn btn-light" onClick={() => 
                                    {
                                        if(localStorage.getItem('type') !== '12'){
                                            localStorage.setItem('type','12');
                                            window.location.reload();
                                        }
                                    }}>
                                    <img 
                                        src="http://pixelartmaker.com/art/248a99e0790c2ce.png" 
                                        style={{width:'2em', height: '2em' }} 
                                        className='rounded d-block' 
                                 /></button>
                            </div>
                        </div>
                        <div className='row'>
                            {this.state.pokemon.map(pokemon => (
                                <PokemonCard 
                                    key={pokemon.pokemon.name}
                                    name={pokemon.pokemon.name}
                                    url={pokemon.pokemon.url}
                                />
                            ))}
                        </div>
                    </div>
                ) : (<h3>Loading Pokemons...</h3>)}
            </div>
        )
    }
}
