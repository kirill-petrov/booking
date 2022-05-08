import React from 'react';
import { Header, Navbar } from '../../components';
import './Hotel.css';

export default function Hotel() {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
        </div>
      </div>
    </div>
  );
}
