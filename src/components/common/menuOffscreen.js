import '../../styles/globals.css';
import '../../styles/common.css';
import '../../styles/animations.css';
import '../../styles/themes.css';
import { useState } from 'react';
import React from 'react';

const MenuOffScreen = ({aberto, handleMenu}) => {



    return (
        <div className={`menu-offscreen ${aberto ? 'aberto' : ""}`}>
            <button className='fechar-menu' onClick={handleMenu}></button>
            <div className='menu-nav'>
                <nav className='menu-nav-opcoes'>
                    <ul>
                        <li><a>Studio Ghibli</a></li>
                        <li><a>Filmes</a></li>
                        <li><a>Personagens</a></li>
                        <li><a>Locais</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuOffScreen;