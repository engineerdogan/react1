import React from 'react';
import './Page3.css';
import { FaGift, FaStar } from 'react-icons/fa'; // Font Awesome ikonları

const Page3 = () => (
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
    </div>
);

export default Page3;
