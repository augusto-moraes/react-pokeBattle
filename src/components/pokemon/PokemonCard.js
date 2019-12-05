import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em; 
    display: none;
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokeIndex: '',
        imageLoading: true,
        tooManyRequests: false,
        selected: false
    };

    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({
            name,
            imageUrl,
            pokemonIndex,
        });
    }
    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>{this.state.pokemonIndex}</h5>
                    </div>
                    {this.state.imageLoading ? (<img src='https://icon-library.net/images/small-pokeball-icon/small-pokeball-icon-5.jpg' style={{width:'5em', height: '5em' }} className='card-img-top rounded mx-auto d-block mt-2' />) : null }
                    <Sprite 
                        className='card-img-top rounded mx-auto mt-2' 
                        src={this.state.imageUrl} 
                        onLoad={() => this.setState({imageLoading: false})} 
                        onError={() => this.setState({tooManyRequests: true})} 
                        style={
                            this.state.tooManyRequests ? {display:"none"} : 
                            this.state.imageLoading ? null : {display:"block"}
                        }
                    />
                    <div className='card-body mx-auto'>
                        <h6 className='card-tittle'>{this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
