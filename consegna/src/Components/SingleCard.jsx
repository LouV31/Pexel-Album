import { Component } from "react";
import { Button, Card } from "react-bootstrap";

const SingleCard = (props) => {
    const hideCard = () => {
        props.onHide(props.id);
    };
    return (
        <Card className="d-flex flex-column">
            <Card.Img
                variant="top"
                src={props.images}
                className="img-fluid object-fit-cover flex-grow-1"
                style={{ maxHeight: "210px" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="flex-grow-1">{props.title}</Card.Title>
                <Card.Text className="flex-grow-1">{props.text}</Card.Text>
                <div className="d-flex">
                    <Button onClick={hideCard} variant="primary" className="align-self-start">
                        Hide
                    </Button>
                    <span className="ms-auto">id: {props.id}</span>
                </div>
            </Card.Body>
        </Card>
    );
};
export default SingleCard;
