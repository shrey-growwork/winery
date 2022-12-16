import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './darkmode.css';

function Mode() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <Button style={{ color: "lightblue" }} onClick={toggleTheme}>
                Dark Mode
            </Button>
            {/* <FormGroup>
                <FormControlLabel onClick={toggleTheme} control={<Switch defaultunChecked />} />
            </FormGroup> */}
        </div>
    );
}

export default Mode;