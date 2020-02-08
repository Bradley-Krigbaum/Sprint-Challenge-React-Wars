import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";


const StarCard = ({ person }) => {


    return (
        <Col xs="12" s="6" md="4" xl="3" >
          <Card>
            <CardHeader>{person.name}</CardHeader>
            <CardBody>
              <CardText>{person.gender}</CardText>
              <CardText>{person.eye_color}</CardText>
              <CardText>{person.birth_year}</CardText>
            </CardBody>
          </Card>
        </Col>
      );
}

export default StarCard;