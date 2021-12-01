export default function Header(){
    return(
        <div>
                    <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to={0} className="active" />
                            <li data-target="#carousel" data-slide-to={1} />
                            <li data-target="#carousel" data-slide-to={2} />
                        </ol>
                        {/* Carousel items */}
                        <div className="carousel-inner">
                            <div className="active item">
                                <div className="caption zoomIn wow animated">
                                    <h2>BEAUTY <br /><strong>Beauty can be seen in all things</strong></h2>
                                </div>
                                <img className src="img/slide1.jpg" alt /></div>
                            <div className="item">
                                <div className="caption zoomIn wow animated">
                                    <h2>SPA<br /><strong>Best Dreams Happen</strong></h2>
                                </div>
                                <img className src="img/slide2.jpg" alt /></div>
                            <div className="item">
                                <div className="caption zoomIn wow animated">
                                    <h2>HAIR STYLE<br /><strong>Take it before its too late</strong></h2>
                                </div><img className src="img/slide3.jpg" alt /></div>
                        </div>
                        {/* Carousel nav */}
                        <a className="carousel-control left" href="#carousel" data-slide="prev">‹</a>
                        <a className="carousel-control right" href="#carousel" data-slide="next">›</a>
                    </div>
                    {/*Header_section*/}
                    <header id="header_wrapper">
                        <div className="container">
                            <div className="header_box">
                                {/*<div class="logo"><a href="#">Resume</a></div>*/}
                                <nav className="navbar navbar-inverse" role="navigation">
                                    <div className="navbar-header">
                                        <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                                    </div>
                                    <div id="main-nav" className="collapse navbar-collapse navStyle">
                                        <ul className="nav navbar-nav" id="mainNav">
                                            <li className="active"><a href="#carousel" className="scroll-link">Home</a></li>
                                            <li><a href="#aboutUs" className="scroll-link">About Me</a></li>
                                            <li><a href="#service" className="scroll-link">Our Services	</a></li>
                                            <li><a href="#Portfolio" className="scroll-link">Gallery</a></li>
                                            <li><a href="#experience" className="scroll-link">Testimonial</a></li>
                                            <li><a href="#contact" className="scroll-link">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>
                    {/*Header_section*/}
                    <section id="aboutUs">{/*Aboutus*/}
                        <div className="inner_wrapper about-us aboutUs-container fadeInLeft animated wow">
                            <div className="container">
                                <h2>About Us</h2>
                                <h6>A persone who loves Nature and It's creations</h6>
                                <div className="inner_section">
                                    <div className="row">
                                        <div className="col-md-6"> <img className="img-responsive" src="img/about1.png" align /> </div>
                                        <div className="col-md-6">
                                            <h3>Trending Styles</h3>
                                            <p>Lorem ipsum dolor sit amet, quo meis voluptaria, erant bonorum albucius et per, ei placerat eu, te eos porro veniam. An everti maiorum detracto mea. Eu eos dicam voluptaria, erant bonorum albucius et per, ei sapientem accommodare est. Saepe dolorum constituam ei vel. Te sit malorum ceteros repudiandae, ne tritani adipisci vis.</p>
                                            <p>Lorem ipsum dolor sit amet, voluptaria, erant bonorum albucius et per, ei meis audire placerat eu, te eos porro veniam. An everti maiorum detracto mea. Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.
                                            </p>
                                            <ul className="about-us-list">
                                                <li className="points">Consectetur Morbi sagittis, sem quisci ipsum gravida tortor</li>
                                                <li className="points">Sagittis, sem quis lacinia faucibus, orci ipsum gravida </li>
                                                <li className="points">Ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci</li>
                                            </ul>{/* /.about-us-list */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Aboutus*/}
                    {/*Service*/}
                    <section id="service">
                        <div className="container">
                            <h2>Our Services</h2>
                            <h6>Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
                            <div className="service_wrapper">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="service_icon delay-03s animated wow  zoomIn"> <span><i className="fa fa-tree" /></span> </div>
                                        <div className="service_block">
                                            <h3 className="animated fadeInUp wow">Photography</h3>
                                            <p className="animated fadeInDown wow">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="service_icon icon2  delay-03s animated wow zoomIn"> <span><i className="fa fa-crosshairs" /></span> </div>
                                        <div className="service_block">
                                            <h3 className="animated fadeInUp wow">Editing Skills</h3>
                                            <p className="animated fadeInDown wow">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="service_icon icon3  delay-03s animated wow zoomIn"> <span><i className="fa fa-building-o " /></span> </div>
                                        <div className="service_block">
                                            <h3 className="animated fadeInUp wow">Lighting</h3>
                                            <p className="animated fadeInDown wow">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="service_icon icon3  delay-03s animated wow zoomIn"> <span><i className="fa fa-twitter" /></span> </div>
                                        <div className="service_block">
                                            <h3 className="animated fadeInUp wow">Dimensions</h3>
                                            <p className="animated fadeInDown wow">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
    )
}