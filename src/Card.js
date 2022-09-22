import React from "react"



export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card--photo-container">
            <img src={`../images/${props.item.image}`} className="card--photo" alt=""/>
            </div>
            <div className="card--data">
                <img src="./images/geoloc-logo.png" className="card--geoloc" alt="" />
                <span className="card--country"> {props.item.location} </span>
                <span className="card--maps"> 
                    <a href="{props.item.googleMapsUrl}" className="card--maps" target='_blank'>View on Google Maps </a>
                </span>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}