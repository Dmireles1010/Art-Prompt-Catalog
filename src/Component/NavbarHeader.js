import { Component } from "react";
import {Navbar, Nav,OverlayTrigger,Popover} from 'react-bootstrap';


const popover = (
    <Popover id="popover-basic" data-trigger="focus" >
      <Popover.Title as="h3">About</Popover.Title>
      <Popover.Content>
        Select a showcase, then click an image to expand and view any comments from author <br/>
        <hr/>
        Any <strong>NSFW</strong> art is blurred out. Clicking image will unblur and expand. <br/>
        <hr/>
        Visit <i>Gatorbooru</i> for more art of the community.<br/>
        <hr/>
        Website built by <strong>Davu#8785</strong>. <br/>Message me on discord for any issues or concerns. 
      </Popover.Content>
    </Popover>
  );


class NavbarHeader extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg" variant="dark" className="">
                <Navbar.Brand href="#">The Golden Gator Art Showcase Archive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  href={"https://discord.gg/RUGUd7H"} target="_blank" rel="noopener noreferrer">Discord</Nav.Link>
                        <Nav.Link  href={"https://www.reddit.com/r/thegoldengator/"} target="_blank" rel="noopener noreferrer">Reddit</Nav.Link>
                        <Nav.Link  href={"https://www.twitch.tv/roflgator"} target="_blank" rel="noopener noreferrer">Rolfgator's Twitch</Nav.Link>
                        <Nav.Link  href={"https://goldengator.booru.org/index.php?page=post&s=list&tags=all"} target="_blank" rel="noopener noreferrer">Gatorbooru</Nav.Link>
                        <Nav.Link href={"https://vrchat-legends.fandom.com/wiki/The_Golden_Gator"} target="_blank" rel="noopener noreferrer" >Wiki</Nav.Link>
                        <OverlayTrigger trigger="click" placement="auto" rootClose overlay={popover}>
                            <Nav.Link >About</Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
          </Navbar>

        );
    }
}
export default NavbarHeader;