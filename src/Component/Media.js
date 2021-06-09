
import {Component} from 'react';
import {Modal} from 'react-bootstrap';
import YoutubeEmbed from './YoutubeEmbed';
import "../CSS/main.css";
class Media extends Component{
    constructor(props) {
        super(props);
        this.state = {
          show:false,
        }
    }; 
    handleShow = () => {
        this.setState({show:true})
    }
    handleClose = () => {
        this.setState({show:false})
    }


    render(){
      return (
          <>
            { this.props.showcaseClicked ? 
                (this.props.mediaType==="image" ? 
                    (this.props.spoiler==="false" ? 
                        <img alt="" src={this.props.mediaLink} onClick={this.handleShow} /> :    
                        <img className={"spoiler"} alt="" src={this.props.mediaLink} onClick={this.handleShow} />
                    )
                    :
                    <YoutubeEmbed embedId={this.props.mediaLink} />
                )
                :
                <img alt=""/>
            }
            <Modal centered show={this.state.show} onHide={this.handleClose} size='xl'>
                <Modal.Body>
                    { this.props.showcaseClicked && this.props.mediaType==="image"? 
                        <img alt="" src={this.props.mediaLink}/>:
                        <img alt=""/>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <p className="text-modal">
                    {this.props.text && this.props.author ? this.props.text +" -"+this.props.author :
                        this.props.author ? " -"+this.props.author :null }
                    </p>

                    <a className="discordMessageLink" href={this.props.discordLink} target="_blank" rel="noopener noreferrer">Discord Message Link</a>
                </Modal.Footer>
            </Modal>
          </>

      );
    }
  
  }
  
  export default Media;
  