import React, { useState } from 'react';
import './Page2.css';

const gameOptions = {
    Games: [
        
		{ id: 16, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: '1' },
        { id: 15, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: '2' },
        { id: 14, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: '3' },
        { id: 13, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: '4' },
		{ id: 12, imageUrl: 'https://cdn.hamsterkombat.io/fluff/image.webp', name: '5' },
        { id: 11, imageUrl: 'https://cdn.hamsterkombat.io/zoopolis/image.webp', name: '6' },
        { id: 10, imageUrl: 'https://cdn.hamsterkombat.io/tile_trio/image.webp', name: '7' },
        { id: 9, imageUrl: 'https://cdn.hamsterkombat.io/mud_racing/image.webp', name: '8' },
		{ id: 8, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: '9' },
        { id: 7, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: '10' },
        { id: 6, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: '11' },
        { id: 5, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: '12' },
		{ id: 4, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: '13' },
        { id: 3, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: '14' },
        { id: 2, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: '15' },
        { id: 1, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: '16' },
    ],
    Minigames: [
        
        { id: 2, imageUrl: 'https://cdn.hamsterkombat.io/chain_cube/image.webp', name: '1' },
    ],
};

const Page2 = () => {
    const [activeTab, setActiveTab] = useState('Games'); // Varsayılan olarak "Games" sekmesini aktif yap

    return (
        <div className="page2-container">
            <div className="page2-header-wrapper">
                <div className="page2-header">
                    <div 
                        className={`page2-tab ${activeTab === 'Games' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Games')}
                    >
                        Games
                    </div>
                    <div 
                        className={`page2-tab ${activeTab === 'Minigames' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Minigames')}
                    >
                        Minigames
                    </div>
                </div>
            </div>
            <div className="page2-grid-container">
                {gameOptions[activeTab].map(game => (
                    <div className="page2-game-option" key={game.id} data-game={game.id}>
                        <img src={game.imageUrl} alt={game.name} />
                        <p>{game.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page2;
