import React, { Component } from "react";
import AskTV from "../components/fontview/AskTV";
import Header from "../components/fontview/Header";
import SecTv from "../components/fontview/SecTv";
import Footer from "../components/fontview/Footer";

export default class Front extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisble: false,
      ant:'asds'
    };
  }
      enterModal=()=>{
      this.setState({
        modalVisble:true
      })
    }

  render() {
    return (
      <div>
        <Header ban={this.state.ant} qiymat={this.state.modalVisble} enter={this.enterModal}/>
        <SecTv />
        <AskTV />
        <Footer />
      </div>
    );
  }
}
