import { Button, Container, Form, Row } from "react-bootstrap";
import LoadImgs from "./LoadImgs";
import { Component } from "react";
import LoadSecondaryImgs from "./LoadSecondaryImgs";
import SingleCard from "./SingleCard";

class Home extends Component {
    state = {
        imgsArr: [],
        isVisible: {},
        sQuery: "",
    };

    fetchSearchedImgs = async () => {
        const URL = `https://api.pexels.com/v1/search?query=${this.state.sQuery}`;

        try {
            let response = await fetch(URL, {
                headers: {
                    Authorization: "zQaxM8kGrKaMoG7fos1jJEkNA4MFaaqKVwBkHVlQwk7tUeu7AxLuS06A",
                },
            });

            if (response.ok) {
                let imgsList = await response.json();
                const isVisible = {};
                imgsList.photos.forEach((image) => {
                    isVisible[image.id] = true;
                });
                this.setState({
                    imgsArr: imgsList.photos,
                    isVisible,
                });
                console.log(imgsList);
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (err) {
            console.error(err);
        }
    };

    handleImgsLoad = (photos) => {
        const isVisible = {};
        photos.forEach((image) => {
            isVisible[image.id] = true;
        });
        this.setState({
            imgsArr: photos,
            isVisible,
        });
        console.log(this.state.imgsArr);
    };
    handleHideCard = (id) => {
        this.setState((prevState) => {
            const cardVisibility = { ...prevState.isVisible };
            cardVisibility[id] = false;
            return { isVisible: cardVisibility };
        });
    };

    handleChange = (propertyValue) => {
        this.setState({
            sQuery: propertyValue,
            isVisible: {},
        });

        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            this.fetchSearchedImgs();
        }, 1000);
    };
    render() {
        return (
            <>
                <section className="jumbotron text-center">
                    <Container>
                        <h1>Album API example</h1>
                        <p className="text-muted">
                            This page will dynamically load pictures from the web, and display them in a cool way!
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                            <LoadImgs onImgsLoad={this.handleImgsLoad} />
                            <LoadSecondaryImgs onImgsLoad={this.handleImgsLoad} />
                        </div>
                    </Container>
                </section>
                <main>
                    <Container>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Find your images</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nature, Ocean, Cities, ..."
                                value={this.state.sQuery}
                                onChange={(event) => this.handleChange(event.target.value)}
                            />
                        </Form.Group>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 gy-2">
                            {this.state.imgsArr.map((image) => {
                                return (
                                    this.state.isVisible[image.id] && (
                                        <SingleCard
                                            key={image.id}
                                            images={image.src.original}
                                            title={image.alt}
                                            text={image.photographer}
                                            onHide={this.handleHideCard}
                                            id={image.id}
                                        />
                                    )
                                );
                            })}
                        </Row>
                    </Container>
                </main>
            </>
        );
    }
}
export default Home;
