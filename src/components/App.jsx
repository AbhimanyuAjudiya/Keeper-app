import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Notes from "../notes"

function App(){
    return(
        <div>
            <Header />
            {Notes.map(data =>(
        <Note 
            key={data.key}
            title={data.title}
            content={data.content}
        />
    ))}
            <Footer />
        </div>

    )
}

export default App;