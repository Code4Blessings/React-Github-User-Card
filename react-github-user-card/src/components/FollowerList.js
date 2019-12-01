import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from "axios";

class FollowerList extends Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/Code4Blessings/followers')
        .then(response => {
            console.log(response.data);
            this.setState({ 
                followers: response.data
            })
        })
        .catch(error => {
            console.log('Data returned an error', error);
        }) 
    }

    render() {
        return (
            <div className="user-object">
                {this.state.followers.map(follower => (
                    <UserCard 
                    key={follower.id} 
                    image={follower.avatar_url} 
                    name={follower.name} 
                    username={follower.login}
                    location={follower.location} 
                    gitaddress={follower.html_url}
                    followers={follower.followers} 
                    following={follower.following} 
                    bio={follower.bio} />
                ))}
                
            </div>
        );
    }
}

export default FollowerList;