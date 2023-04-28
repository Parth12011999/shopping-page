import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Banner from "../Components/Banner";
import Banner1 from "../Components/Banner1";

function Homepage() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Banner1  img='https://m.media-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/Sale-live-now/D77911710_IN_WLME_SamsungM_M145G_Launch_catpage_1400x800._CB590368077_.jpg'/>  
        <Banner  img='https://m.media-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/Sale-live-now/D77911710_IN_WLME_SamsungM_M145G_Launch_catpage_1400x800._CB590368077_.jpg' title='OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)' price=' ₹19,999'/>  
        <Banner img='https://images-eu.ssl-images-amazon.com/images/I/41Xe96WtZoL._AC_SX184_.jpg' title='OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)' price=' ₹19,999'/>
        <Card img='https://images-eu.ssl-images-amazon.com/images/I/41Xe96WtZoL._AC_SX184_.jpg' title='OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)'/>
        <Card img='https://m.media-amazon.com/images/I/91HRACirFrL._SX679_.jpg' title='Samsung Galaxy M14 '/>
        <Card img='https://m.media-amazon.com/images/I/81phFG96VXL._SX679_.jpg' title='realme Narzo 50 Pro 5G'/>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
