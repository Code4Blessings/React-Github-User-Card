import React from 'react';
import "./UserCard.css"
import Styled from "styled-components";

const UserCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="user" />
      <div className="card-info">
        <p>{props.name}</p>
        <p className="username">{props.username}</p>
        <p>{`Location: ${props.location}`}</p>
        <p>Profile:  
          <a href={props.gitaddress}>{props.gitaddress}</a>
        </p>
        <p>{`Followers: ${props.followers}`}</p>
        <p>{`Following: ${props.following}`}</p>
        <p>{`Bio: ${props.bio}`}</p>
      </div>
  </div>

  );
};

export default UserCard;