import React from 'react';
import "./UserCard.css"


const FollowerCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="user" />
      <div className="follower-card-info">
        <p className="u-name">{props.username}</p>
        <p>Profile:  
          <a href={props.gitaddress}>{props.gitaddress}</a>
        </p>
      </div>
  </div>

  );
};

export default FollowerCard;