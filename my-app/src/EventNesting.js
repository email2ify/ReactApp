import React, { Component } from 'react';
import UserMessage from "./component/UserMessage.js";
import UserData from "./component/UserData.js";




class EventNesting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //isLoading: true,
            isLoggedIn: true,
        }
    }

        handleSignIn = () => { this.setState({isLoggedIn : true})}
        handleSignOut = () => { this.setState({isLoggedOut : false})}


    render() {
        return (
            <div>


                {/* < UserData isLoading={this.state.isLoading} /> */}
                <h1>{this.state.isLoggedIn ? 'Welcome to Neuro-Blockchain!': 'Welcome to Neuro-Blockchain'}</h1>
                <UserMessage isLoggedIn={this.state.isLoggedIn} />
                <UserMessage isLoggedOut={this.state.isLoggedOut} />

            </div>

        )




    }
}



export default EventNesting;