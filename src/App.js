import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Container, Switch } from "@mui/material";
import { withStyles } from "@mui/material/styles"
import { grey } from "@mui/material/colors";
import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";
import Definitions from './componenets/Definitions/Definitions';

function App() {
    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en");

    const [LightTheme, setLightTheme] = useState(false);
    const dictionaryApi = async() => {
        try {
            const data = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
            );
            setMeanings(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(meanings);
    useEffect(() => {
        dictionaryApi();
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [word, category]);
    const PurpleSwitch = withStyles({
        switchBase: {
            color: grey[50],
            "&$checked": {
                color: grey[900],
            },
            "&$checked + $track": {
                backgroundColor: grey[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);
    return ( <
        div className = "App"
        style = {
            { height: "100vh", backgroundColor: LightTheme ? "#fff" : "#282c34", color: LightTheme ? "black" : "white", transition: "all 0.5s linear", }
        } >
        <
        Container maxw = "md"
        style = {
            { display: "flex", flexDirection: "column", heigh: "100vh", justifyContent: "space-evenly", }
        } > < div style = {
            { position: "absolute", top: 0, right: 15, paddingTop: 10 }
        } >
        <
        span > { LightTheme ? "Dark" : "Light" }
        Mode < /span> <
        PurpleSwitch checked = { LightTheme }
        onChange = {
            () => setLightTheme(!LightTheme)
        }
        /> < /
        div > < Header category = { category }
        setCategory = { setCategory }
        word = { word }
        setWord = { setWord }
        />{meanings&&( <
        Definitions word = { word }
        meanings = { meanings }
        category = { category }
        / >)} < /
        Container > < Footer / > < /
        div >
    );
}

export default App;