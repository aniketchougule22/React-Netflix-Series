import React from "react";
import Cards from "./Cards";
import SeriesData from "./SeriesData";
import './index.css';

const App = () => {
    return(
        <>
            <h1 className="heading_style">List of Top Netflix series</h1>

            { SeriesData.map((value) => {
                console.log('value', value);
                return(
                    <Cards
                        imgsrc = { value.imgsrc }
                        title = { value.title }
                        sname = { value.sname }
                        link = { value.link }
                    />
                )
            }) }
        </>
    )
}

export default App;