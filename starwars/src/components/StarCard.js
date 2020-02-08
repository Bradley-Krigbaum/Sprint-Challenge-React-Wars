import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";


const StarCard = ({ person }) => {


    return (
        <Col xs="12" s="6" md="4" xl="3" >
          <Card>
            <CardHeader>{person.name}</CardHeader>
            <CardBody>
              <CardText>gender: {person.gender}</CardText>
              <CardText>eye color: {person.eye_color}</CardText>
              <CardText>birth year: {person.birth_year}</CardText>
            </CardBody>
          </Card>
        </Col>
      );
}

export default StarCard;