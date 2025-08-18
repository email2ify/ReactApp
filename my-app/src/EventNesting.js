import React, { Component } from 'react';
import UserMessage from "./component/UserMessage.js";
import UserData from "./component/UserData.js";




class EventNesting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //isLoading: true,
            isLoggedIn: true
            
        }
    }

    handleSignIn = () => { this.setState({isLoggedIn : true})
    }
    handleSignOut = () => { this.setState({isLoggedIn : false})
    }


    render() {
        return (
        <div>

            {
                this.state.isLoggedIn ? (
                    <div>
                        <p> Welcome to the site! Please complete the steps below</p>
                        <ol>
                            <li>confirm email</li>
                            <li>complete profile</li>
                            <li>Subscribe to the Newsletter</li>
                        </ol>
                        <button onClick={this.handleSignOut }>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.handleSignIn }>Sign In</button>
                        <p>Welcome Back</p>
                    </div>)
            }

        </div>

        )




    }
}



export default EventNesting;