import React from 'react';
import { Navbar, Header, Featured } from '../../components';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </div>
  );
}
