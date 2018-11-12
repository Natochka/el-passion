import React from 'react'
import BarButtons from './BarButtons'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <BarButtons />
      <ul className="navbar-list">
        <li className="navbar-list-item navbar-list-item--all active">
          <div className="navbar-list-item__name">All</div>
          <div className="navbar-list-item__count">12</div>
        </li>
        <li className="navbar-list-item navbar-list-item--open">
          <div className="navbar-list-item__name">Open</div>
          <div className="navbar-list-item__count">4</div>
        </li>
        <li className="navbar-list-item navbar-list-item--closed">
          <div className="navbar-list-item__name">Closed</div>
          <div className="navbar-list-item__count">8</div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
