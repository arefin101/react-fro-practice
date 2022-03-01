import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {

    //console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map( (contact) => {
        return (
            <ContactCard contact = {contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });

    return (
        <div className="container">
            <h2>
                Contact List
                <Link to="/add">
                    <button style={{ float : "right" }} className="btn btn-primary">Add Contact</button>
                </Link>
            </h2><br />
            {renderContactList}
        </div>
    )
}

export default ContactList;