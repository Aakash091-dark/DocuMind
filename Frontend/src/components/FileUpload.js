import React, { useState } from "react";
import axios from "../services/api";

function FileUpload() {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("document", file);

        try {
            const response = await axios.post("/upload", formData);
            console.log(response.data);
        } catch (error) {
            console.error("Upload failed", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;
