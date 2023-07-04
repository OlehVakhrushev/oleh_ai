import React, { useState } from 'react';
import {GiTiedScroll} from "react-icons/gi";
import {MdClose} from "react-icons/md";



function Notification({ message }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`notification ${isOpen ? 'open' : 'closed'}`}>
            <div className="notification-header" onClick={handleClick}>
                <div className="notification-icon">
                    <GiTiedScroll size={80} />
                </div>
            </div>
            {isOpen && (
                <div className="notification-content">
                    <div className="font-satoshi desc">{message}</div>
                    <button className="notification-close" onClick={handleClick}>
                        <MdClose size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}


export default Notification;

