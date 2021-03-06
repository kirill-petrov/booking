import React from 'react';
import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
  MailList,
  Footer,
} from '../../components';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
