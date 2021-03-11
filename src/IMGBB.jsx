import React, { useState } from 'react'
import Table from './Table.jsx'

function IMGBB() {
    const [results, setResults] = useState([])

    async function submitFunc() {
        var content = document.getElementById("content").value;
        var result = [];

        var contentarr = content.split("\n");

        contentarr.forEach((element, idx) => {
            if (element.includes("jpg")) {
                result.push({
                    text: "Copy",
                    url: element.slice(element.indexOf("src=") + 5, element.indexOf("jpg") + 3)
                })
            } else {
                result.push(
                    {
                        text: "Copy",
                        url: element.slice(element.indexOf("src=") + 5, element.indexOf("png") + 3)
                    })
            }
        });
        await setResults(result)

    }
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <textarea id="content" rows="50" cols="50"></textarea>
                <button onClick={submitFunc}>Submit</button>
            </div>
            <Table content={results} />
        </div>
    )
}

export default IMGBB;