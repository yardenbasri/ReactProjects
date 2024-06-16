import React from "react"
import locationLogo from "./images/location-logo.png"

export default function Card(prop) {
  return (
    <div className="card-container">
      <img src={prop.prop.image_url} alt="place-logo" className="card-image" />
      <div className="card-content">
        <div className="line-one">
          <img
            src={locationLogo}
            alt="location-logo"
            className="location-logo"
          />
          <p>
            <span className="country">{prop.prop.country}</span>{" "}
            <a
              href={prop.prop.googleMapLink}
              target="_blank"
              className="googleMapsLink"
            >
              View on Google Maps
            </a>
          </p>
        </div>

        <h2 className="card-title">{prop.prop.title}</h2>
        <h3 className="card-dates">{prop.prop.dates}</h3>
        <p className="card-par">{prop.prop.paragraph}</p>
      </div>
      <div className="seperator"></div>
    </div>
  )
}
