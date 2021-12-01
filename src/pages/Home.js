import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/>
            </div>

        )
    }
}

export default Home;