import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Row (props){
    // function submitFunc(id) {
    //     document.getElementById(id).textContent = "Copied";
    // }
    const {text,count} = props
    const [copy, setCopy] = React.useState("Copy")

    React.useEffect(() => {
        setCopy("Copy")
    }, [props])
    let id = `copy ${count.toString()}`;
    return(
        <tr>
            <td>{text}</td>
            <td><CopyToClipboard text={text}><button id={id} onClick={() => setCopy("Copied")}>{copy}</button></CopyToClipboard></td>
        </tr>
    )

}
export default Row;