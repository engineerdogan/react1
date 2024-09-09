import React, { useState } from 'react';
import './Page2.css';
import { FaKey } from 'react-icons/fa'; // FontAwesome'dan key ikonu

const gameOptions = {
    Games: 
    [
        { id: 1, imageUrl: 'https://cdn.hamsterkombat.io/stone_age/image.webp', name: 'Stone Age' },
        { id: 3, imageUrl: 'https://cdn.hamsterkombat.io/fluff/image.webp', name: 'Fluff Crusade' },
        { id: 4, imageUrl: 'https://cdn.hamsterkombat.io/mow_trim/image.webp', name: 'Mow and Trim' },
        { id: 5, imageUrl: 'https://cdn.hamsterkombat.io/train_miner/image.webp', name: 'Train Miner' },
        { id: 6, imageUrl: 'https://cdn.hamsterkombat.io/chain_cube/image.webp', name: 'Chain Cube 2048' },
        { id: 7, imageUrl: 'https://cdn.hamsterkombat.io/merge_away/image.webp', name: 'Merge Away' },
        { id: 8, imageUrl: 'https://cdn.hamsterkombat.io/zoopolis/image.webp', name: 'Zoopolis' },
        { id: 9, imageUrl: 'https://cdn.hamsterkombat.io/twerk/image.webp', name: 'Twerk Race 3D' },
        { id: 10, imageUrl: 'https://cdn.hamsterkombat.io/polysphere/image.webp', name: 'Polysphere' }
    ],
    
    Minigames: [
        { id: 1, imageUrl: '	https://hamsterkombatgame.io/images/minigame/puzzle-bg.webp', name: 'Puzzle Game' },
        { id: 2, imageUrl: '	https://hamsterkombatgame.io/images/minigame/tiles-bg.webp', name: 'Chain Cube 2048' }
        
    ]
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
                        {/* Sarı Anahtar İkonu ve 0/4 yazısı */}
                        <div className="game-key-info">
                            <FaKey className="game-key-icon" /> {/* CSS ile stil verilecek */}
                            <span>0/4</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page2;
