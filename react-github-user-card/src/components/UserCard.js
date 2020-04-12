import React from 'react';
import Styled from "styled-components";

const Card = Styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;
`
const CardImg = Styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`

const CardName = Styled.p`
  font-size: 3.4rem;
`

const Username = Styled.p`
  font-size: 1.8rem;
  font-style: italic;
  margin: 3px 0 10px;
`

const CardP = Styled.p`
  font-size: 1.4rem;
  margin-bottom: 3px;
`
 
const UserCard = (props) => {
  return (
    <Card>
      <CardImg src={props.image} alt="user" />
      <div className="card-info">
        <CardName>{props.name}</CardName>
        <Username>{props.username}</Username>
        <CardP>{`Location: ${props.location}`}</CardP>
        <CardP>Profile:  
          <a href={props.gitaddress}>{props.gitaddress}</a>
        </CardP>
        <CardP>{`Followers: ${props.followers}`}</CardP>
        <CardP>{`Following: ${props.following}`}</CardP>
        <CardP>{`Bio: ${props.bio}`}</CardP>
      </div>
  </Card>

  );
};

export default UserCard;