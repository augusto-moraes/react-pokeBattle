import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
    transition: all 0.3s cubic-bezier(0.25,0.8,0.25,1);
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

export default class Battle extends Component {
    

    render() {
        let count = 0;
        if(localStorage.getItem('pokeball')) 
            count = JSON.parse(localStorage.getItem('pokeball')).length;
        return (
            <div>
                {count < 6 ? (
                    <h3>Ops, it looks like you didn't chose enough pokemons, go back and select new ones.</h3>
                ) : (
                    <div>
                        <div className="row mr-auto">
                            <div className="col-6 mx-auto"></div>
                            <div className="col-6 mx-auto">
                                <img 
                                src="https://202297-609260-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/08/Team_Rocket.png" 
                                style={{width:'12em', height: '11em' }} 
                                className='rounded d-block' 
                                />
                            </div>
                            <div className="col-2 mx-auto"></div>
                            <div className="col-6 mx-auto">
                                <img 
                                src="https://tr.rbxcdn.com/9f7f3dceee7634f4252c0eeddb665fa3/420/420/Decal/Png" 
                                style={{width:'11em', height: '11em' }} 
                                className='rounded d-block' 
                                />
                            </div>
                            <div className="col mx-auto"></div>
                        </div>
                        <hr />
                        
                    </div>
                )}
            </div>
        )
    }
}
