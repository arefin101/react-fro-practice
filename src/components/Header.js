import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={classes.header}>
                <h1>Contact Manager</h1><hr />
            </div>
        </div>
    );
};

export default Header;