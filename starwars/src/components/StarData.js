import React, { useState, useEffect } from 'react';
import { Container, Row } from "reactstrap";
import axios from 'axios';
import StarCard from './StarCard.js';

const StarData = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people')
            .then(response => {
                setPeople(response.data.results);
                console.log("Axios: ", response.data.results)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <Container >
            <Row>
                {people.map(person => {
                    return <StarCard person={person} key={person.url} />;
                })}
            </Row>
        </Container>
    );
}

export default StarData;