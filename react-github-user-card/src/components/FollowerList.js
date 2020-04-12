import React, { Component } from "react";
import FollowerCard from "./FollowerCard";
import axios from "axios";

class FollowerList extends Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/Code4Blessings/followers')
            .then(response => {
            const newData = response.data
            console.log(response.data);
            this.setState({
                followers: newData
            })
        })
        .catch((err) => {
            console.log("Error, user not found");
  })
}

    render() {
        return (
            <div className="user-object">
                {this.state.followers.map(follower => (
                    <FollowerCard 
                    key={follower.id} 
                    image={follower.avatar_url} 
                    username={follower.login}
                    gitaddress={follower.html_url}
                    />
                ))}
                
            </div>
        );
    }
}

export default FollowerList;