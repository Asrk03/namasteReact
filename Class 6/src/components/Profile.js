import React from "react";

class Profile extends React.Component{

    render(){
        return (
            <>
            <h1>Profile</h1>
            <h2>Name : {this.props.name}</h2>
            </>
        )
    }
}
export default Profile;