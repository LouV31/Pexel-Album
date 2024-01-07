import { Component } from "react";
import { Button } from "react-bootstrap";

class LoadSecondaryImgs extends Component {
    state = {
        imgs: { photos: [] },
        sQuery: "Ocean",
    };

    fetchSecondaryImgs = async () => {
        const URL = `https://api.pexels.com/v1/search?query=${this.state.sQuery}`;
        try {
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
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <Button onClick={this.fetchSecondaryImgs} variant="secondary" className="my-2 ms-1">
                Load Secondary Images
            </Button>
        );
    }
}
export default LoadSecondaryImgs;
