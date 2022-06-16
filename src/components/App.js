import React, { useEffect, useState } from "react";

function App() {
    const [image, setImage] = useState("");
    const [imageStatus, setImageStatus] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json()) 
            .then(randomImage => {
                setImage(randomImage.message);
                setImageStatus(currentStatus => !currentStatus);
            })
    }, [])

    if (!imageStatus) {
        return <p>Loading...</p>
    }

    return (
        <img src={image} alt="A Random Dog"></img>
    )
}

export default App;