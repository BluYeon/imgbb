import React from 'react'
import Row from './Row.jsx'

function Table({ content }) {
    const rows = content.map((arr,index) => <Row text={arr.url} count={index} copytxt={"Copy"} key={index}/>);
    return (
            <table style={{ border: '1px solid black' }}>
                <thead>
                <tr>
                    <th>Content</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
                
            </table>
    )
}

export default Table;