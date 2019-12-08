import React, { Component } from 'react';

import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em; 
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
    transition: all 0.3s cubic-bezier(0.25,0.8,0.25,1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        tooManyRequests: false,
        selected: false,
        pokeball: [],
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
    };

    storeIt = () => {
        if(localStorage.getItem('pokeball')){
            this.setState({
                pokeball: localStorage.getItem('pokeball'),
            });
        }
        this.setState({selected: !this.state.selected});
        if(!this.state.selected){
            this.state.pokeball.concat(this.state.pokemonIndex);
            return localStorage.setItem('pokeball', JSON.stringify(this.state.pokeball));
        }

        localStorage.removeItem(this.state.pokeball[this.state.nextBall]);
        this.state.nextBall = this.state.nextBall-1;
    }

    render() {
        let card_class = this.state.selected ? (localStorage.getItem('type') === '12' ? "card bgGreen" : (localStorage.getItem('type') === '11' ? "card bgBlue" : "card bgRed")) : "card";
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <Card className={card_class} onClick={this.storeIt.bind(this)}>
                    <div className='card-header'>
                        {localStorage.getItem('type') === '12' ? (
                            <img 
                            src="http://pixelartmaker.com/art/248a99e0790c2ce.png" 
                            style={{width:'2em', height: '2em' }} 
                            className='rounded d-block' 
                            />
                        ) : (
                            localStorage.getItem('type') === '11' ? (
                                <img 
                                        src="https://cdn140.picsart.com/254846921001212.png?r1024x1024" 
                                        style={{width:'2em', height: '2em' }} 
                                        className='rounded d-block' 
                                 />
                            ) : (
                                <img 
                                src="https://myrealdomain.com/images/pixel-art-flame.png" 
                                style={{width:'2em', height: '2em' }} 
                                className='rounded d-block' 
                            />
                            )
                        )}
                    </div>
                    {this.state.imageLoading ? (
                        <img 
                            src="https://i.pinimg.com/originals/f9/7f/5c/f97f5c6510994f677877b08320475008.gif" 
                            style={{width:'5em', height: '5em' }} 
                            className='card-img-top rounded mx-auto d-block mt-2' 
                        />
                    ) : null }
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
                </Card>
            </div>
        )
    }
}
