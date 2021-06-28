import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import TitleContainer from './Component/TitleContainer';
import data from './showcaseData/totalShowcaseData.json'
import NavbarHeader from './Component/NavbarHeader';
import CookieConsent from "react-cookie-consent";
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      artShowcaseData:[],
      dataLoaded:false
    };
  }
  componentDidMount(){
    this.setState({artShowcaseData:data,dataLoaded:true})
  }

  render(){
    return (
      <div>
        <NavbarHeader/>
        {this.state.dataLoaded ? 
              <Container fluid className="test">
                {Object.entries(this.state.artShowcaseData).map( ([date, value]) =>
                          <TitleContainer key={date} title={this.state.artShowcaseData[date]["prompt"]} date={date} columns={this.state.artShowcaseData[date]["submissions"]}/>
                )}
              </Container>
              : <div></div>
        }
        <CookieConsent
          location="bottom"
          style={{ background: "#343a40"}}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      </div>

    );
  }

}

export default App;
