import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className={classes.header}>
                <h1>Contact Manager</h1>
            </div>
        </div>
    );
};

export default Header;