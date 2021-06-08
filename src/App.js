import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import TitleContainer from './Component/TitleContainer';
import data from './showcaseData/showcasesAsc.json'
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
        {this.state.dataLoaded ? 
                <Container fluid className="test">
                {Object.entries(this.state.artShowcaseData).map( ([date, value]) =>
                          <TitleContainer key={date} title={this.state.artShowcaseData[date]["prompt"]} date={date} columns={this.state.artShowcaseData[date]["submissions"]}/>
                )}
      
                {/* <TitleContainer title={"hot springs / hot tub!"} date={" — 05/23/2021"} media={[]}/> */}
              </Container>

              : <></>
        }
      </div>

    );
  }

}

export default App;
