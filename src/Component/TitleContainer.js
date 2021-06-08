import {Component} from 'react';
import {Row, Accordion,Col, Collapse} from 'react-bootstrap';
import "../CSS/title.css";
import Media from "./Media";
class TitleContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          open:false,
        }
    }; 
    setOpen = (isOpen) => {
        this.setState({open:!isOpen})
    }
    render(){
      return (
        <Accordion>
            <Row className="titleContainer" 
                aria-controls="example-collapse-text" aria-expanded={this.state.open}>
                <Col className={!this.state.open ? 'coltest1': 'coltest1expanded'} onClick={()=>this.setOpen(this.state.open)}  >
                    <svg id="chart" viewBox="0 0 10 75" height="100%" width="10px" preserveAspectRatio="none">
                        <line x1="5" y1="0" x2="5" y2="75" nonepre/>
                    </svg>
                </Col>
                <Col className="coltest2" >
                    <Row className="rowtest1" onClick={()=>this.setOpen(this.state.open)} >
                        <h3>{this.props.date +" "+this.props.title}</h3>
                    </Row>
                    <Collapse in={this.state.open}>
                        <div className="testRowContainer2">
                             <div className="column">
                                 {this.props.columns[0].map((mediaInfo,num)=>
                                    <Media showcaseClicked={this.state.open} key={num} mediaType={mediaInfo.mediaType} mediaLink={mediaInfo.mediaLink} author={mediaInfo.author} text={mediaInfo.text}/>) }
                             </div>
                             <div className="column">
                                {this.props.columns[1].map((mediaInfo,num)=>
                                    <Media showcaseClicked={this.state.open} key={num} mediaType={mediaInfo.mediaType} mediaLink={mediaInfo.mediaLink} author={mediaInfo.author} text={mediaInfo.text}/>) }
                             </div>
                             <div className="column">
                                {this.props.columns[2].map((mediaInfo,num)=>
                                    <Media showcaseClicked={this.state.open} key={num} mediaType={mediaInfo.mediaType} mediaLink={mediaInfo.mediaLink} author={mediaInfo.author} text={mediaInfo.text}/>) }
                             </div>
                             <div className="column">
                                {this.props.columns[3].map((mediaInfo,num)=>
                                    <Media showcaseClicked={this.state.open} key={num} mediaType={mediaInfo.mediaType} mediaLink={mediaInfo.mediaLink} author={mediaInfo.author} text={mediaInfo.text}/>) }
                             </div>
                             
                        </div>

                        
                    </Collapse>

                </Col>
            </Row>
        </Accordion>





      );
    }
  
  }
  
  export default TitleContainer;
  