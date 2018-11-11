import React from 'react'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar-header">
        <li className="navbar-header-circle navbar-header-circle-red" />
        <li className="navbar-header-circle navbar-header-circle-yellow" />
        <li className="navbar-header-circle navbar-header-circle-green" />
      </ul>
      <ul className="navbar-list">
        <li className="navbar-list-item navbar-list-all active">
          <div className="navbar-list-item-name">All</div>
          <div className="navbar-list-item-count">12</div>
        </li>
        <li className="navbar-list-item navbar-list-open">
          <div className="navbar-list-item-name">Open</div>
          <div className="navbar-list-item-count">4</div>
        </li>
        <li className="navbar-list-item navbar-list-closed">
          <div className="navbar-list-item-name">Closed</div>
          <div className="navbar-list-item-count">8</div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
