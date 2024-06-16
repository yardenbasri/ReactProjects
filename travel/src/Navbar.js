import React from "react"
import worldLogo from "./images/world-logo.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={worldLogo} alt="world-logo" className="nav-img" />
      <p className="nav-par">my travel journal</p>
    </div>
  )
}
