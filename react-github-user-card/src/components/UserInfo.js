import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from "axios";

class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/Code4Blessings')
        .then(response => {
            console.log(response.data);
            this.setState({ 
                userData: response.data
            })
        })
        .catch(error => {
            console.log('Data returned an error', error);
        }) 
    }

    render() {
        return (
            <div className="user-object">
                <UserCard 
                image={this.state.userData.avatar_url} 
                name={this.state.userData.name} 
                location={this.state.userData.location} 
                followers={this.state.userData.followers} 
                following={this.state.userData.following} />
            </div>
        );
    }
}

export default UserInfo;