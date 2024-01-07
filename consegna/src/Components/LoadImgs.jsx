import { Component } from "react";
import { Button } from "react-bootstrap";

class LoadImgs extends Component {
    state = {
        imgs: { photos: [] },
        sQuery: "Nature",
    };
    fetchImgs = async () => {
        try {
            const URL = `https://api.pexels.com/v1/search?query=${this.state.sQuery}`;
            let response = await fetch(URL, {
                headers: {
                    Authorization: "zQaxM8kGrKaMoG7fos1jJEkNA4MFaaqKVwBkHVlQwk7tUeu7AxLuS06A",
                },
            });
            if (response.ok) {
                let imgsList = await response.json();
                this.setState({ imgs: imgsList });
                this.props.onImgsLoad(imgsList.photos);
                console.log(imgsList);
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Button onClick={this.fetchImgs} variant="primary" className="my-2 me-1">
                Load Images
            </Button>
        );
    }
}
export default LoadImgs;
