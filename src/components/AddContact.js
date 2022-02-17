import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main container">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="ui button blue">Add</div>
                </form>
            </div>
        );
    };
}

export default AddContact;