import React, {useState, useEffect} from 'react';
import { render } from "react-dom";
import './styles/app.css';
import axios from "axios";

export default function App() {
    const [chansons, setChansons] = useState([]);
    const url = "https://127.0.0.1:8000/api/chansons"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                response = JSON.stringify(response.data['hydra:member']);
                response = JSON.parse(response);
                setChansons(response);
                console.log(response);
            })
    }, [])
    return (
        <div>
            <h1>React</h1>
            {
                chansons.map((chanson) => {
                    return(
                        <div key={chanson['@id']} style={{display:'flex'}}>
                            <h2>{chanson.titre} - {chanson.artiste}</h2>
                        </div>
                    );
                })
            }
        </div>
    );
}

render(<App/>, document.getElementById('root'))

