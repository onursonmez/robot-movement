import React, { useContext, useEffect } from 'react';
import { RobotContext } from '../context/RobotContext';

const directions = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT',
};

const ControlPanel = () => {
    const { position, updatePosition } = useContext(RobotContext);

    const move = (direction) => {
        let newPosition = { ...position };
        switch (direction) {
            case 'UP':
                newPosition.y = Math.max(0, newPosition.y - 1);
                break;
            case 'DOWN':
                newPosition.y = Math.min(9, newPosition.y + 1);
                break;
            case 'LEFT':
                newPosition.x = Math.max(0, newPosition.x - 1);
                break;
            case 'RIGHT':
                newPosition.x = Math.min(9, newPosition.x + 1);
                break;
            default:
                break;
        }
        updatePosition(newPosition);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (directions[event.key]) {
                move(directions[event.key]);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [position, updatePosition]);

    return (
        <div>
            <button onClick={() => move('UP')}>↑</button>
            <button onClick={() => move('LEFT')}>←</button>
            <button onClick={() => move('RIGHT')}>→</button>
            <button onClick={() => move('DOWN')}>↓</button>
        </div>
    );
};

export default ControlPanel;