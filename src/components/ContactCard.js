import React from 'react';
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item d-flex justify-content-between" style={{ marginTop:"15px" }}>
            <img style={{ height : "40px"}} src={user} alt="user" />
            <div className="content">
                <Link to={`contact/${id}`}>
                    <div className="header"><b>{name}</b></div>
                    <div>{email}</div> 
                </Link>
            </div>
            <i className="trash alternate outline icon"
            style={{ color : "red", marginTop:"25px" }}
            onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
}

export default ContactCard;