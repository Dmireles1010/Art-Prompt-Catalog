
import {Component} from 'react';
import {Modal} from 'react-bootstrap';
import YoutubeEmbed from './YoutubeEmbed';
import handleViewport from 'react-in-viewport';
import "../CSS/main.css";
class MediaBlock extends Component{
    constructor(props) {
        super(props);
        this.state = {
          show:false,
          imageAlreadyLoaded:false
        }
    }; 
    handleShow = () => {
        this.setState({show:true})
    }
    handleClose = () => {
        this.setState({show:false})
    }
    getStyle = () => {
        const {inViewport} = this.props;
        //Fade in only the first time we enter the viewport
        if (inViewport) {
          if(this.state.imageAlreadyLoaded===false){
            this.setState({imageAlreadyLoaded:true})
          }
          return { WebkitTransition: 'opacity 0.75s ease-in-out'};
        } else if (!inViewport) {
          return { WebkitTransition: 'none', opacity: '0' };
        } else {
          return {};
        }
      }
    render(){
      return (
          <>
            <div className="content" style={this.getStyle()}>
                { this.state.imageAlreadyLoaded ?
                    (this.props.mediaType==="image" ? 
                        (this.props.spoiler==="false" ? 
                            (this.props.thumbnailLink ? <div className={"img-container-hidden"}  onClick={this.handleShow}> <img alt="" src={this.props.thumbnailLink}/></div>: <div className={"img-container-hidden"}  onClick={this.handleShow}> <img alt="" src={this.props.mediaLink}/></div> ):    
                            (this.props.thumbnailLink ? <div className={"img-container-hidden"}  onClick={this.handleShow}> <img className={"spoiler"} alt="" src={this.props.thumbnailLink}/></div>: <div className={"img-container-hidden"}  onClick={this.handleShow}> <img className={"spoiler"} alt="" src={this.props.mediaLink}/></div>)
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
            </div>
          </>

      );
    }
  
  }
  const Media = handleViewport(MediaBlock, { rootMargin: '-1.0px' });
  export default Media;
  