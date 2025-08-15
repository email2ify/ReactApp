import React from "react";

function UserData(props){
    return (
        <div>
            {
                <div>
                    <h1>{props.isLoading? 'Data load!!!' : 'Sign In'} </h1>
                </div>
            }
        </div>
    )
}

export default UserData;
// export default UserData;



