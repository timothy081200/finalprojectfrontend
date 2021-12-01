export default function Footer(){
    return(
        <div>
        {/*Footer*/}
        <footer className="footer_wrapper" id="contact">
            <div className="container">
                <section className="page_section contact" id="contact">
                    <div className="contact_section">
                        <h2>Contact Us</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 wow fadeInLeft">
                            <div className="contact_info">
                                <div className="detail">
                                    <h4>UNIQUE Infoway</h4>
                                    <p>104, Some street, NewYork, USA</p>
                                </div>
                                <div className="detail">
                                    <h4>call us</h4>
                                    <p>+1 234 567890</p>
                                </div>
                                <div className="detail">
                                    <h4>Email us</h4>
                                    <p>support@sitename.com</p>
                                </div>
                            </div>
                            <ul className="social_links">
                                <li className="twitter animated bounceIn wow delay-02s"><a href="javascript:void(0)"><i className="fa fa-twitter" /></a></li>
                                <li className="facebook animated bounceIn wow delay-03s"><a href="javascript:void(0)"><i className="fa fa-facebook" /></a></li>
                                <li className="pinterest animated bounceIn wow delay-04s"><a href="javascript:void(0)"><i className="fa fa-pinterest" /></a></li>
                                <li className="gplus animated bounceIn wow delay-05s"><a href="javascript:void(0)"><i className="fa fa-google-plus" /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8 wow fadeInLeft delay-06s">
                            <div className="form">
                                <input className="input-text" type="text" name defaultValue="Your Name *" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" />
                                <input className="input-text" type="text" name defaultValue="Your E-mail *" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" />
                                <textarea className="input-text text-area" cols={0} rows={0} onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" defaultValue={"Your Message *"} />
                                <input className="input-btn" type="submit" defaultValue="send message" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container">
                <div className="footer_bottom"><span>Copyright © reserved,    Template by <a href="http://webthemez.com">WebThemez.com</a>. </span> </div>
            </div>
        </footer>
    </div>
    )
}