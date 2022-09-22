import React from "react"
import Navbar from "./Navbar.js"
import Card from "./Card.js"
import data from "./data.js"
import "./index.css"


export default function App() {
    const trips = data.map(item => {
     return (
         <Card 
            key = {item.id}
            item = {item}
            />
            )       
            })  
    return (
        <div>
            <Navbar />
            {trips}
        </div>
    )
}