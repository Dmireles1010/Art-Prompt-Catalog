import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import TitleContainer from './Component/TitleContainer';
import data from './showcaseData/showcasesNew.json'
import NavbarHeader from './Component/NavbarHeader';
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
      </div>

    );
  }

}

export default App;
