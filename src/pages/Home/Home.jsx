import React from 'react';
import { Navbar, Header } from '../../components';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer" />
    </div>
  );
}
