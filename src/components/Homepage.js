import React, { Component } from 'react';
import '../assets/css/style.css';
import Dealstimer from '../assets/images/dealstimer-logo.png';
import Playstore from '../assets/images/play-store-logo.png';
import Appstore from '../assets/images/app-store-icon.png';
import Hero1 from '../assets/images/hero-1.jpg';
import Hero2 from '../assets/images/hero-2.jpg';
import Hero3 from '../assets/images/hero-3.jpg';
import Micro from '../assets/images/micro.jpg';
import Aliexpress from '../assets/images/aliexpress.png';
import Amazon from '../assets/images/amazon.png';
import Watch from '../assets/images/2.webp';
import Mobile from '../assets/images/1.webp';
import Perfume from '../assets/images/3.webp';
import Amazon1 from '../assets/images/store-amazon.webp';
import Laptop from '../assets/images/4.webp';
import Headphone from '../assets/images/5.webp';
import Microless from '../assets/images/store-microless.webp';
import Nike from '../assets/images/store-nike.webp';
import Noon from '../assets/images/logo_noon.webp';
import SharfDG from '../assets/images/logo_SharafDG.webp';
import Virgin from '../assets/images/logo_virgin.webp';
import Item1 from '../assets/images/item-1.png';
import { Link, withRouter } from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <div className="body-background" >
                <header className="shadow">
                    {/*
                    <div className="dt-container top-header top-height-ot">
                        <div className="row top-height-oi">
                            <div className="col-sm-6 col-6 align-self-center brand logo">
                                <img alt="" src={Dealstimer} className="logo-md logo-op" />
                            </div>

                        </div>
                    </div>
                    */}


                    <div className="container-fluid top-search girl">
                        <div className="row search-row">
                            <div className="col-md-6 offset-md-3" >
                                <div className="form-group search-box">
                                    <div className="btn-search-box">
                                        <input className="form-control" placeholder="Type Product Name, Store" type="text" />
                                        <button className="btn btn-head-btn">Go</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dt-container bg-white top-nav" styles="padding: 5px;">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Categories <span
                                            className="fa fa-angle-down"></span></Link>
                                        <div className="dropdown-menu"></div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Top Sales</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">All Deals</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Stores</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="align-self-center text-right float-right">
                                <div className="">
                                    <Link className="app-store-icons" to="#">
                                        <img alt="" src={Playstore} />

                                    </Link>
                                    <Link className="app-store-icons" to="#">
                                        <img alt="" src={Appstore} />
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                <main>
                    <div className="dt-container hero-slider" styles="marginTop:20px;padding: 5px;">
                        <div className="row m-0">
                            <div className="hero-slider col-md-8 pl-lg-0 pr-md-2">
                                <div className="hero-slider-inner shadow position-relative radius-md-5" styles="width: 100%;">
                                    <div className="carousel slide" data-ride="carousel" id="hero-slides">

                                        <ul className="carousel-indicators">
                                            <li className="active" data-slide-to="0" data-target="hero-slides"></li>
                                            <li data-slide-to="1" data-target="hero-slides" className=""></li>
                                            <li data-slide-to="2" data-target="hero-slides" className=""></li>
                                        </ul>

                                        <div className="carousel-inner" styles="">
                                            <div className="carousel-item active">
                                                <img alt="Los Angeles" className="radius-md-5" src={Hero1} />
                                            </div>
                                            <div className="carousel-item">
                                                <img alt="Chicago" className="radius-md-5" src={Hero2} />
                                            </div>
                                            <div className="carousel-item">
                                                <img alt="New York" className="radius-md-5" src={Hero3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-coupons radius-md-5 col-md-4 pl-md-2 pr-lg-0 smart-scroll">
                                <div className="hero-coupons-inner shadow radius-md-5 hero-coupons-inner-custom">
                                    <div className="hero-coupons-head hch-custom">
                                        <h6 className="float-left p-0">COUPONS</h6>
                                        <span className="float-right">
                                            <Link to="#">View All</Link>
                                        </span>
                                    </div>
                                    <hr className="mb-0" />
                                    <div className="hero-coupons-body row hero-fonts">

                                        <div className="hero-coupon-item col-12 col-sm-6 col-6 col-md-12">
                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>

                                            <div className="row  m-0 p-0 coupon-height">
                                                <div className="col-sm-3 col-lg-2 col-md-3 col-3 m-0 p-0 align-self-center">
                                                    <img alt="" src={Micro} className-="micro-row" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-6 col-lg-8 col-6 mt-1"><Link to="#">75%</Link> Off
                                    Coupons
                                    <br />From <Link to="#">Daraz</Link></div>
                                                <div className="col-md-3 col-lg-2 col-3 col-sm-3  m-0 p-0 align-self-center"><Link
                                                    className="btn btn-red-mini" to="#">View</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dt-container mt-25 home-brand-logos brand-min-height">
                        <div className="MultiCarousel shadow radius-md-5 brand-background-min-height" data-interval="1000" data-items="1,3,5,6"
                            data-slide="1" id="MultiCarousel">
                            <div className="MultiCarousel-inner owl-carousel items-8 logos-slider logo-top-margin">
                                <div className="item">
                                    <div className="pad15">
                                        <img alt="" src={Aliexpress} />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pad15">
                                        <img alt="" src={Amazon} />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pad15">
                                        <img alt="" src={Aliexpress} />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pad15">
                                        <img alt="" src={Amazon} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="dt-container mt-25 top-products" style={{ zIndex: "1" }}>
                        <div className="top-products-inner radius-md-5 bg-white min-height-op">
                            <div className="row  section-heading ml-0 height-product-mp">
                                <div className="col-md-12 pt-2 text-center position" >
                                    <hr className="m-4 margin-imp" />
                                    <div className="section-title d-inline product-white">
                                        <h4 className="d-inline mr-4 top-products-imp">Top Products</h4>
                                        <Link to="#">( View all )</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="slider">
                                <div className="owl-carousel owl-carousels ">

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Item1} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Mobile} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Perfume} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Headphone} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Laptop} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Item1} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Item1} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                            <div className="product-lg-image text-center">
                                                <img alt="" src={Item1} className="top-products-row-measure" />
                                            </div>

                                            <hr className="m-auto top-product-widht" />

                                            <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                            <div className="product-price color-dark ml-2 top-product-font" >
                                                AED 799
                                                        </div>

                                            <div className="product-dealer ml-2 row ">
                                                <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                                <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                            </div>

                                            <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                            <div className="product-stores m-2">
                                                <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                                <div className="product-store row product-store-row-padding" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Noon</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                            AED 1199                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row product-bottom" >
                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                    </div>
                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">SharafDG</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                            AED 1299                                                </div>
                                                    </div>
                                                </div>

                                                <div className="product-store row  product-padding-vx" >

                                                    <div className="col-md-5 align-self-center product-store-image">
                                                        <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                    </div>

                                                    <div className="col-md-7 align-self-center pl-0">
                                                        <div className="product-store-name">Virgin Mega store</div>
                                                        <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                            AED 1399                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end of Suggested div*/}

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Features Product*/}

                    <div className="dt-container mt-25 top-products">
                        <div className="top-products-inner radius-md-5 bg-white min-height-op">
                            <div className="row  section-heading ml-0 height-product-mp">
                                <div className="col-md-12 pt-2 text-center position" >
                                    <hr className="m-4 margin-imp" />
                                    <div className="section-title d-inline product-white">
                                        <h4 className="d-inline mr-4 top-products-imp">Features Products</h4>
                                        <Link to="#">( View all )</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="slider">
                                <div className="owl-carousel owl-carousels ">


                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Mobile} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                                        </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Item1} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                                        </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                        Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Mobile} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                                    </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                    Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Item1} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                                </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                                Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Mobile} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                            </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                            Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Item1} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                        </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                        Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Mobile} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                    </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                    Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                    <div className="border m-2 product radius-md-5 hover-shadow pb-1">

                                        <div className="product-lg-image text-center">
                                            <img alt="" src={Item1} className="top-products-row-measure" />
                                        </div>

                                        <hr className="m-auto top-product-widht" />

                                        <h5 className="product-label top-product-huawie">Huawei MediaPad</h5>
                                        <div className="product-price color-dark ml-2 top-product-font" >
                                            AED 799
                                </div>

                                        <div className="product-dealer ml-2 row ">
                                            <img alt="" className="col-md-4 pl-0 pr-1 align-self-center top-product-measurement" src={Aliexpress} />
                                            <div className="product-dealer-name col-md-8 align-self-center">AliExpress</div>
                                        </div>

                                        <Link className="product-compare-link m-2 show-popup top-product-text-decoration">Compare
                                Prices</Link>

                                        <div className="product-stores m-2">
                                            <span className="font-weight-bold text-muted">SUGGESTED STORES</span>

                                            <div className="product-store row product-store-row-padding" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center top-alighment" src={Noon} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Noon</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-size" >
                                                        AED 1199                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row product-bottom" >
                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center width-product" src={SharfDG} />
                                                </div>
                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">SharafDG</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold product-line-height" >
                                                        AED 1299                                                </div>
                                                </div>
                                            </div>

                                            <div className="product-store row  product-padding-vx" >

                                                <div className="col-md-5 align-self-center product-store-image">
                                                    <img alt="" className="col-md-4 pl-0 align-self-center product-width-vx" src={Virgin} />
                                                </div>

                                                <div className="col-md-7 align-self-center pl-0">
                                                    <div className="product-store-name">Virgin Mega store</div>
                                                    <div className="product-store-price font-italic text-hard-blue font-weight-bold line-height-vx">
                                                        AED 1399                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end of Suggested div*/}

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* Features Product*/}

                    <div className="dt-container mt-25 top-deals" id="top-deals" >
                        <div className="top-products-inner radius-md-5 bg-white" style={{ minHeight: "430px" }}>
                            <div className="row  section-heading ml-0 height-product-mp">
                                <div className="col-md-12 pt-2 text-center position" >
                                    <hr className="m-4 margin-imp" />
                                    <div className="section-title d-inline product-white">
                                        <h4 className="d-inline mr-4 top-products-imp">Top Deals</h4>
                                        <Link to="#">( View all )</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="slider" data-slides="5" data-scroll="2" data-interval="1">
                                <div className="owl-carousel  items-8">
                                    <div>
                                        <div className="border radius-md-5 product-small hover-shadow">
                                            <div className="inner">
                                                <div className="product-image text-center">
                                                    <img alt="" src={Watch} className="watch-op" />
                                                </div>
                                                <h5 className="product-label pic-label" >Samsung Glaxy Watch</h5>
                                                <div className="product-price color-dark price-opt">AED 190
                                                </div>
                                                <div className="product-store-count count-op">
                                                    From 7  online shops
                                                </div>


                                                <div className="product-stores m-1">
                                                    <span className="font-weight-bold text-muted watch-ht">SUGGESTED STORES</span>
                                                    <div className="product-store row watch-bo ">
                                                        <div className="col-md-5 align-self-center product-store-image">
                                                            <img alt="" className="col-md-4 pr-1 pl-0 align-self-center max-watch" src={Noon} />
                                                        </div>
                                                        <div className="col-md-7 align-self-center pl-0">
                                                            <div className="product-store-name">Noon</div>
                                                            <div className="product-store-price font-italic text-hard-blue font-weight-bold noon-op" >
                                                                AED 1199                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-store row op-padding">
                                                        <div className="col-md-5 align-self-center product-store-image">
                                                            <img alt="" className="col-md-4 pr-1 pl-0 align-self-center max-watch" src={SharfDG} />
                                                        </div>
                                                        <div className="col-md-7 align-self-center pl-0">
                                                            <div className="product-store-name">SharafDG</div>
                                                            <div className="product-store-price font-italic text-hard-blue font-weight-bold noon-op" >
                                                                AED 1299                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-store row  foo-bar">
                                                        <div className="col-md-5 align-self-center product-store-image">
                                                            <img alt="" className="col-md-4 pr-1 pl-0 align-self-center max-watch" src={Virgin} />
                                                        </div>
                                                        <div className="col-md-7 align-self-center pl-0">
                                                            <div className="product-store-name">Virgin Mega store</div>
                                                            <div className="product-store-price font-italic text-hard-blue font-weight-bold noon-op" >
                                                                AED 1399                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="border radius-md-5 product-small hover-shadow">
                                            <div className="inner">
                                                <div className="product-image text-center">
                                                    <img alt="" src={Perfume} className="watch-op" />
                                                </div>
                                                <h5 className="product-label pic-label" >Azzaro Chrome instense for men</h5>
                                                <div className="product-price color-dark price-opt">AED 190
                                        </div>
                                                <div className="product-store-count count-op">
                                                    From 7  online shops
                                        </div>


                                                <div className="product-stores m-1">
                                                    <span className="font-weight-bold text-muted watch-ht">SUGGESTED STORES</span>
                                                    <div className="product-store row watch-bo ">
                                                        <div className="col-md-5 align-self-center product-store-image">
                                                            <img alt="" className="col-md-4 pr-1 pl-0 align-self-center max-watch" src={Watch} />
                                                        </div>
                                                        <div className="col-md-7 align-self-center pl-0">
                                                            <div className="product-store-name">Noon</div>
                                                            <div className="product-store-price font-italic text-hard-blue font-weight-bold noon-op" >
                                                                AED 1199                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-store row op-padding">
                                                        <div className="col-md-5 align-self-center product-store-image">
                                                            <img alt="" className="col-md-4 pr-1 pl-0 align-self-center max-watch" src={Watch} />
                                                        </div>
                                                        <div className="col-md-7 align-self-center pl-0">
                                                            <div className="product-store-name">SharafDG</div>
                                                            <div className="product-store-price font-italic text-hard-blue font-weight-bold noon-op" >
                                                                AED 1299                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-store row  foo-bar">
                                                        <div className="col-md-5 align-self-center product-store-image">
                                                            <img alt="" className="col-md-4 pr-1 pl-0 align-self-center max-watch" src={Watch} />
                                                        </div>
                                                        <div className="col-md-7 align-self-center pl-0">
                                                            <div className="product-store-name">Virgin Mega store</div>
                                                            <div className="product-store-price font-italic text-hard-blue font-weight-bold noon-op" >
                                                                AED 1399                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products on Store*/}


                    <div className="dt-container mt-25 top-products">
                        <div className="top-products-inner radius-md-5 bg-white min-height-op">
                            <div className="row  section-heading ml-0 height-product-mp">
                                <div className="col-md-12 pt-2 text-center position" >
                                    <hr className="m-4 margin-imp" />
                                    <div className="section-title d-inline product-white">
                                        <h4 className="d-inline mr-4 top-products-imp">Products on Store</h4>
                                        <Link to="#">( View all )</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row mr-sm-auto ml-sm-auto">
                                <div className="col-sm-12 col-md-2 text-center pr-0">
                                    <div className="mt-5 mb-5">
                                        <img src={Amazon1} alt="" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-10 pr-0 pl-sm-0">
                                    <div className="row m-0">
                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Mobile} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Watch} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Perfume} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Laptop} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Headphone} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Mobile} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-sm-9 col-9 col-md-10">
                                            <hr />
                                        </div>
                                        <div className="col-sm-3 col-3 col-md-2 text-right">
                                            <a href="#" className="pr-3">View all</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mr-sm-auto ml-sm-auto">
                                <div className="col-sm-12 col-md-2 text-center pr-0">
                                    <div className="mt-5 mb-5">
                                        <img src={Nike} alt="" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-10 pr-0 pl-sm-0">
                                    <div className="row m-0">
                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Mobile} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Watch} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Perfume} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Laptop} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Headphone} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Mobile} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-sm-9 col-9 col-md-10">
                                            <hr />
                                        </div>
                                        <div className="col-sm-3 col-3 col-md-2 text-right">
                                            <a href="#" className="pr-3">View all</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mr-sm-auto ml-sm-auto">
                                <div className="col-sm-12 col-md-2 text-center pr-0">
                                    <div className="mt-5 mb-5">
                                        <img src={Microless} alt="" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-10 pr-0 pl-sm-0">
                                    <div className="row m-0">
                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Mobile} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Watch} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Perfume} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Laptop} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Headphone} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-6 col-md-3 col-lg-2 pb-2">
                                            <div className="border radius-md-5 product-small hover-shadow">
                                                <div className="border radius-md-5 product-small hover-shadow">
                                                    <div className="product-image text-center">
                                                        <img alt="" src={Mobile} className="style-store-product"
                                                        />
                                                    </div>
                                                    <h5 className="product-label label-m"
                                                    >Huawei nova 5T</h5>
                                                    <div className="product-price color-dark price-n"
                                                    >
                                                        AED 1198                                        </div>
                                                    <div className="product-store-count count-store-product">From
                                                    8 shops
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-sm-9 col-9 col-md-10">
                                            <hr />
                                        </div>
                                        <div className="col-sm-3 col-3 col-md-2 text-right">
                                            <a href="#" className="pr-3">View all</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >

                <footer className="bg-footer-gray pt-1 mt-25 pt-25">
                    <div className="dt-container pb-3">
                        <div className="row  main-footer">
                            <div className="col-md-3 col-sm-6 col-6">
                                <h4 className="footer-heading text-white footer-m">Stores</h4>
                                <div className="footer-n" >
                                    <hr className="footer-heading-line background-dark foot-back"
                                    />
                                </div>
                                <ul className="footer-nav p-0 nav-fot-m">
                                    <li className=" mb-2"><a href="#" className="text-light">Amazon AE</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Noon</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Supermart</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Wallmart</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Kinokuniya</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Earlybird</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Aswaaqonline</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Brands For Less</a></li>
                                    <li className=" mb-2"><a href="#">More...</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <h4 className="footer-heading text-white footer-m">Categories</h4>
                                <div className="footer-n" >
                                    <hr className="footer-heading-line background-dark foot-back"
                                    />
                                </div>
                                <ul className="footer-nav p-0 nav-fot-m">
                                    <li className=" mb-2"><a href="#" className="text-light">Mobile Phones</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Tablets</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Smart Watches</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Tv's</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Computers</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Cameras</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Gamming Consoles</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Home Appliances</a></li>
                                    <li className=" mb-2"><a href="#">More...</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6">
                                <h4 className="footer-heading text-white footer-m">Popoular Products</h4>
                                <div className="footer-n" >
                                    <hr className="footer-heading-line background-dark foot-back"
                                    />
                                </div>
                                <ul className="footer-nav p-0 nav-fot-m">
                                    <li className=" mb-2"><a href="#" className="text-light">Iphone 8 UAE</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Samsung Glaxy S7 UAE</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Apple AirPods Pro</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Google Pixel 4</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Google Pixel 4 Mobile Phone</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">Case, Tianyd Color Series</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">OnePlus 3T</a></li>
                                    <li className=" mb-2"><a href="#" className="text-light">LG G6</a></li>
                                    <li className=" mb-2"><a href="#">View All...</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-heading text-white up-date">Stay Up-to-Date</h4>
                                <div className=" vc-black" >
                                    <hr className="footer-heading-line background-dark hr-k"
                                    />
                                </div>
                                <div className="text-light">
                                    Subscribe our newsletter receive news & special offers
                                </div>
                                <div className="footer-subscribe pt-3 pr-2">
                                    <div className="btn-search-box">
                                        <input className="form-control" placeholder="Write email..." type="email" />
                                        <button className="btn btn-head-btn">Subscribe</button>
                                    </div>
                                </div>
                                <ul className="footer-social-links mt-3 text-center p-0">
                                    <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="bottom-color-footer">
                        <div className="dt-container pt-4 pb-3">
                            <div className="row  disclaimer">
                                <div className="col-md-12">
                                    <p className="text-light">
                                        <span className="font-weight-bold">Disclaimer:</span>
                                        <span> <a href="#">Dealstimer.com</a> only acts as online price comparison website, all product names, trademarks, service marks, logos, brands, industrial models and designs featured or referred to within this site are the sole property of their respective owners and/or right holders and are only provided for the purpose of this site. Dealstimer.com acts as independent party and shall not be considered the representative, agent, employee, sponsor, joint venture partner or otherwise of such owners or right holders. © 2019 Dealstimer FZ LLC. All rights reserved.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div >
        )

    }

}

export default Homepage