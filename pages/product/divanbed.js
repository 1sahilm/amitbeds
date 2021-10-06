import Image from "next/image/";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Head from "next/head";
import Header from "../../components/Header";
import Review from "../../components/Review";
import Footer from "../../components/Footer";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductBox from "../../components/comps/ProductBox";
import { useRouter } from "next/router";
// import Mobilemenu from "../../components/comps/Mobilemenu";

function Divanbed({ response }) {
  const router = useRouter();
  console.log(response);

  return (
    <div>
      <div>
        <Head>
          <title>DivanBed</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo (1).png" />
        </Head>
        <div>
          <Header />
          {/* <Mobilemenu/> */}

          <div className="section hero-slide-item2">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="mt-10 For-margin">
                    <h2 className="DivanPageH">
                      <b>
                        Save upto 60% with <br /> Divan Beds
                      </b>
                    </h2>
                    <p
                      className="mt-4"
                      style={{ color: "#141414", fontSize: "15px" }}
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut
                    </p>
                    <div className="mt-10">
                      <button
                        className="ShopMobile "
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#f22222",
                          padding: "9px",
                          borderRadius: "42px",
                          paddingLeft: "26px",
                          paddingRight: "26px",
                          fontSize: "18px",
                          paddingTop: "7px",
                          paddingBottom: "5px",
                        }}
                      >
                        {" "}
                        <b>SHOP NOW</b>{" "}
                      </button>
                    </div>
                    <hr style={{ width: "84%" }} />
                  </div>
                </div>
                <div
                  className="col-md-6 mt-8 MobileSection"
                  style={{ position: "relative", left: "16px" }}
                >
                  <Image
                  
                  priority={true}
                    className="responsiveImage"
                    src="/assets/images/banner/Group 488.png"
                    width={680}
                    height={400}
                    alt="BedsDivan"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-2" style={{ backgroundColor: "#EC9E17" }}>
            <div className="container text-center p-3">
              <h3 style={{ color: "#141414" }}>
                {" "}
                <strong> Quick Delivery - </strong>Shop our beds available
                within 2 weeks
              </h3>
            </div>
          </div>

          <div
            className="BodyMobileHeight"
            style={{ backgroundColor: "#f3f3f8", height: "1156px" }}
          >
           <div className="section mb-10 pt-100px  ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="section-title">
                      <h2
                        className="title"
                        style={{ color: "#222178", fontWeight: "700" }}
                      >
                        {" "}
                        Shop By Size
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="size-box">
                    <div className="single-box">
                      <a href="#">
                        {" "}
                        <Image
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 477.svg"
                          alt="BedsDivan"
                        />
                      </a>

                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Single </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        {" "}
                        <Image
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 478.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Small Double </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 479.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Double </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 480.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center mt-2"
                        style={{ color: "#222178" }}
                      >
                        <b> King</b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 481.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center mt-2"
                        style={{ color: "#222178" }}
                      >
                        <b> Super King</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center" data-aos="fade-up">
                  <div className="section-title mb-0">
                    <h2 className="title colorfirst">BedsDivans.co.uk</h2>{" "}
                  </div>
                  <p className="sub-title mb-6" style={{ fontWeight: "600" }}>
                    {" "}
                    We’re one of the UK’s leading manufacturers of{" "}
                    <span style={{ color: "#262884" }}>cheap divan beds</span> ,
                    offering a rich selection of products in a variety of
                    styles. At BedsDivans, we are committed to improving comfort
                    and sleep quality without compromising style. We believe
                    shopping for a bed, mattress, or set of{" "}
                    <span style={{ color: "#262884" }}>rattan furniture</span>{" "}
                    for your garden should be an enjoyable experience all the
                    way through.{" "}
                  </p>
                  <hr />
                </div>
              </div>
            </div>

            {/* <div className="section  ">
        <div className="container ">
            <div className="row">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-10 mt-8 bg-white Coupen-Section2 text-center" style={{position:"relative", left:"16px"}}>
                <div className="">
                        <div className="CoupeSection">
                            
                             </div>
                             <div >
                                 
                             </div>
                             <Image className="overlapeImg" src="/assets/images/DivanBedsicon/Mask Group 13.png"  width={500} height={200} alt="" />
                           
                        
                    </div>
                    <br />
                    <div className="MobileNone" style={{position:"relative", left:"101px"}}>
                    <h2 style={{color:"#00B2BD",fontWeight:"800",fontSize:"45px"}}><strong>UK's Latest </strong></h2>
                    <p style={{fontSize:"26px",color:"#4E4E4E"}}>Range of Divan Beds in <br /> Affordable Prices</p>
                    <div>
                        <Image src="/assets/images/DivanBedsicon/off.png" width="50%"  height={400} alt="" />
                    </div>
                    <p>June 23rd - July 6th</p>
                    <div className="mt-10">
                            <button className="ShopMobile" style={{color:"#ffffff", backgroundColor:"#f22222", padding:"9px", borderRadius: "0px",paddingLeft:"33px",paddingRight:"37px", fontSize:"18px", paddingTop:"7px",paddingBottom: "5px" }}> <b>SHOP NOW</b> </button>
                        </div>
                    </div>
                    
                       
                    
                </div>
            </div>

        </div>


    </div>  */}
            <div className="section mb-10  pt-100px bg-white MobileShopClr">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="section-title">
                      <h2
                        className="title"
                        style={{ color: "#222178", fontWeight: "700" }}
                      >
                        {" "}
                        Shop By Color
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="size-box">
                    <div className="single-box">
                      <a href="#">
                        {" "}
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 491.svg"
                          alt="BedsDivan"
                        />
                      </a>

                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Irish Blue </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        {" "}
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 492.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Brown </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 493.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center  mt-2"
                        style={{ color: "#222178" }}
                      >
                        {" "}
                        <b> Grey </b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 494.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center mt-2"
                        style={{ color: "#222178" }}
                      >
                        <b> Blue</b>
                      </p>
                    </div>

                    <div className="single-box">
                      <a href="#">
                        <Image
                        priority={true}
                          width={100}
                          height={120}
                          src="/assets/images/DivanBedsicon/Group 492.svg"
                          alt="BedsDivan"
                        />
                      </a>
                      <p
                        className="text-center mt-2"
                        style={{ color: "#222178" }}
                      >
                        <b> Pink</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section hero-slide-item3">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-10 For-margin">
                      <h2 className="DivanPageH2" style={{ marginTop: "10px" }}>
                        <b>Sleepmotion</b>
                      </h2>
                      <p
                        className="mt-4"
                        style={{ color: "#ffffff", fontSize: "15px" }}
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna
                      </p>
                      <div className="mt-10">
                        <button
                          className="ShopMobile"
                          style={{
                            color: "#ffffff",
                            backgroundColor: "#f22222",
                            padding: "9px",
                            borderRadius: "0px",
                            paddingLeft: "33px",
                            paddingRight: "37px",
                            fontSize: "18px",
                            paddingTop: "7px",
                            paddingBottom: "5px",
                          }}
                        >
                          {" "}
                          <b>SHOP NOW</b>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 mt-8 MobileSection"
                    style={{ position: "relative", left: "16px" }}
                  >
                    <Image
                    priority={true}
                      className="responsiveImage"
                      src="/assets/images/DivanBedsicon/lower-bed.png"
                      width={500}
                      height={300}
                      alt="BedsDivan"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-10">
              <div className="text-center">
                <h4 style={{ color: "#F22222" }}>
                  {" "}
                  <b> OUR EXCLUSIVE </b>{" "}
                </h4>
                <h2
                  className="title mt-2"
                  style={{ color: "#222178", fontWeight: "800" }}
                >
                  {" "}
                  Complete Divan Bed Set Range
                </h2>
                <p
                  className="mt-2 mb-6"
                  style={{ color: "#7c7c7c", fontSize: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod <br /> tempor invidunt ut labore et dolore
                  magna
                </p>
              </div>
              {/* Filter Tag Start */}
              <div
                className="container mt-4 mb-4 rounded"
                style={{ backgroundColor: "#f2f2f2" }}
              >
                <div className="row" style={{ padding: "10px" }}>
                  <div className="col-md-3">
                    <span
                      style={{ marginRight: "0 !important", margin: "0 auto" }}
                    >
                      <select
                        className="dropdown-section"
                        onChange={(e) =>
                          router.push(`/product/divanbed?size=${e.target.value}`)
                        }
                      >
                        <option label="Beds" />
                        <option value="2FT 6" label="2 6Feet" />
                        <option value="3FT" label="3Feet" />
                        <option value="4FT" label="4Feet" />
                        <option value="4FT 6" label="4 6Feet" />
                        <option value="5FT" label="5 Feet" />
                        <option value="6FT" label="6 Feet" />
                      </select>
                    </span>
                  </div>
                  <div className="col-md-3">
                    <span
                      style={{ marginRight: "0 !important", margin: "0 auto" }}
                    >
                      <select className="dropdown-section">
                        <option label="Color" />
                        <option value="2FT 6" label="2Feet" />
                        <option value="2FT 6" label="2Feet" />
                        <option value="2FT 6" label="2Feet" />
                        <option value="2FT 6" label="2Feet" />
                      </select>
                    </span>
                  </div>
                  <div className="col-md-3">
                    <span
                      style={{ marginRight: "0 !important", margin: "0 auto" }}
                    >
                      <select className="dropdown-section">
                        <option label="Price" />
                        <option value="2FT 6" label="2Feet" />
                        <option value="2FT 6" label="2Feet" />
                        <option value="2FT 6" label="2Feet" />
                        <option value="2FT 6" label="2Feet" />
                      </select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                {response.map((item) => {
                  console.log(item);
                  return (
                    <ProductBox
                      src={item.images[0].color1.base_url}
                      title={item.product_name}
                      price={item.price}
                    />
                  );
                })}
              </div>
              {/* Filter Tag End */}

              {/* <div className="row">


                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                        
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                        
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                        
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                        
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6  mb-md-30px mb-lm-30px"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                       
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-es-30px"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                       
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-6 "
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="product productfor2">
                    <div className="thumb thumbfor2">
                      <a
                        href="shop-left-sidebar.html"
                        className="image imagefor2"
                      >
                        <Image
                          src="/assets/images/product-image/1.jpg"
                          alt="Product"
                          width={210}
                          height={10}
                        />
                         
                      </a>
                      <span className="badges">
                        <span className="new" style={{ fontSize: "18px" }}>
                          50% OFF
                        </span>
                      </span>

                      <p className="sale">APRIL SALE</p>
                    </div>
                    <div className="content reco-pr">
                      <h5 className="title">
                        <a href="shop-left-sidebar.html">
                          Simple minimal Chair{" "}
                        </a>
                      </h5>
                      <span className="price">
                        <span className="old">NOW $48.50</span>
                        <span className="new">FROM $38.50</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="section pb-100px pt-100px bg-brown">
              <div className="container-fluid coustmer-review">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-up">
                    <div className="section-title text-center mb-11">
                      <h2 className="title colorsecond">
                        DISCOVER THE BENEFITS OF SHOPPING ONLINE AT BEDSDIVANS
                      </h2>
                      <p>
                        When looking for a new bed why not try the new designed
                        divan bed. It is affordable and looks great. At
                        bedsdivans we spent years in improving our wide
                        selection of beds and we can assure you will love our
                        latest selection of divan beds. At Bedsdivans we aim to
                        work around your needs whether it comes to short notice
                        delivery dates or the slightest adjustment to your bed
                        we are always here to help you get the bed right for
                        you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="">
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{ borderRadius: "36px", marginBottom: "23px" }}
                    >
                      More Services
                    </a>
                  </div>
                </div>

                <Review />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Divanbed;

export async function getServerSideProps(context) {
  const { req } = context;
  const size = req?.__NEXT_INIT_QUERY?.size;
  let sizes = "";

  size ? (sizes = size) : (sizes = "2FT 6");
  const data = await axios.post(
    "https://staggingx.bedsdivans.co.uk/api/products/getbeds",
    {
      method: "size",
      value: sizes,
    }
  );
  const response = data.data.data;
  return {
    props: { response }, // will be passed to the page component as props
  };
}
