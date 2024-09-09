import React, { useState } from 'react';
import './Page3.css';
import { FaGift, FaStar, FaUser } from 'react-icons/fa'; // Font Awesome ikonları

const Page3 = () => {
    const [showBonuses, setShowBonuses] = useState(false);

    return (
        <div className="page3-container">
            {/* Arkadaş daveti başlığı ve açıklaması */}
            <div className="page3-title-section">
                <div className="page3-title">
                    Arkadaşları davet et!
                </div>
                <div className="page3-description">
                    Siz ve bir arkadaşınız bonus alacak
                </div>
            </div>

            {/* Arkadaş daveti listesi */}
            <ul className="page3-invite-list">
                <li className="page3-invite-item">
                    <div className="page3-invite-icon">
                        <FaGift className="page3-icon" />
                    </div>
                    <div className="page3-invite-text">
                        <div className="page3-invite-header">Arkadaş davet et</div>
                        <div className="page3-invite-details">
                            <div className="page3-price-value text-yellow">+5.000</div>
                            <div className="page3-invite-footer">sizin ve arkadaşınız için</div>
                        </div>
                    </div>
                </li>
                <li className="page3-invite-item">
                    <div className="page3-invite-icon">
                        <FaStar className="page3-icon" />
                    </div>
                    <div className="page3-invite-text">
                        <div className="page3-invite-header">Telegram Premium ile arkadaş davet et</div>
                        <div className="page3-invite-details">
                            <div className="page3-price-value text-yellow">+25.000</div>
                            <div className="page3-invite-footer">sizin ve arkadaşınız için</div>
                        </div>
                    </div>
                </li>
            </ul>

            {/* Daha fazla bonus butonu */}
            <div className="page3-more-bonuses" onClick={() => setShowBonuses(!showBonuses)}>
                <p>{showBonuses ? 'Seviye atladığında bonus' : 'Daha fazla bonus'}</p>
            </div>

            {/* Bonus detayları */}
            {showBonuses && (
                <div className="page3-bonuses">
                    <div className="page3-bonuses-header">
                        <span className="page3-header-item">Level</span>
                        <span className="page3-header-item">For Friend</span>
                        <span className="page3-header-item">Premium</span>
                    </div>
                    <ul className="page3-bonuses-list">
                        <li className="page3-bonuses-item">
                            <div className="page3-bonuses-content">
                                <FaUser className="page3-bonuses-icon" />
                                <div className="page3-bonuses-name">Silver</div>
                            </div>
                            <div className="page3-bonuses-values">
                                <div className="page3-price-value text-yellow">+20.000</div>
                                <div className="page3-price-value text-yellow">+25.000</div>
                            </div>
                        </li>
                        {/* Daha fazla liste öğesi buraya eklenebilir */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Page3;
