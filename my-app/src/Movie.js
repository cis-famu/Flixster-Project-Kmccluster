import React from 'react';
import {Card, Col, Badge} from 'react-bootstrap'

function Movie({movie}) {

    const altText = movie.title + ". THANK YOU!";

    return (
        <Col xxl={2} lg={3} md={4} sm={6} className="d-flex align-items-stretch">
            <Card className="m-2">
                <Card.Img variant="top" style={{width:"50%"}} src={movie["movie_image"]} alt={altText} className="mx-auto" />
                <Card.Body>
                    <Card.Title><strong>{movie.title}</strong> <Badge className="position-absolute top-0 start-0 rounded-pill translate-middle bg-primary"></Badge></Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <a target="_blank" rel="noreferrer" href={movie["amazon_product_url"]} className="btn btn-secondary">BUY ON AMAZON</a>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Movie;