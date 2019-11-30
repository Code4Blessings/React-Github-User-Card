import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

const UserCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle> {props.bio}</CardSubtitle>
          <CardText>{`Location: ${props.location}`}</CardText>
          <CardText>{`Followers: ${props.followers}`}</CardText>
          <CardText>{`Following: ${props.following}`}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;