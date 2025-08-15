import React from "react";


function UserMessage(props) {
    return (
        <div>

            {
                props.isLoggedIn ? (
                    <div>
                        <p> Welcome to the site! Please complete the steps below</p>
                        <ol>
                            <li>confirm email</li>
                            <li>complete profile</li>
                            <li>Subscribe to the Newsletter</li>
                        </ol>
                        <button onClick={this.handleSignOut }>
                             Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.handleSignIn }>
                             Sign In
                        </button>
                    </div>)
            }

        </div>


    )

}

export default UserMessage;