import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RobotContext = createContext();

export const RobotProvider = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const fetchPosition = async () => {
            const response = await axios.get('http://localhost:4444/api/robot/position');
            setPosition(response.data);
        };
        fetchPosition();
    }, []);

    const updatePosition = async (newPosition) => {
        setPosition(newPosition);
        await axios.post('http://localhost:4444/api/robot/position', newPosition);
    };

    return (
        <RobotContext.Provider value={{ position, updatePosition }}>
            {children}
        </RobotContext.Provider>
    );
};