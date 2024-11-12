import React, { useContext } from 'react';
import { RobotContext } from '../context/RobotContext';

const RobotDisplay = () => {
    const { position } = useContext(RobotContext);

    return (
        <div style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            border: '1px solid black'
        }}>
            <div style={{
                position: 'absolute',
                left: position.x * 30, // 30px kare
                top: position.y * 30, // 30px kare
                width: '30px',
                height: '30px',
                backgroundColor: 'blue'
            }}></div>
        </div>
    );
};

export default RobotDisplay;