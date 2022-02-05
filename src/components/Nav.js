import React, { useContext,useState } from 'react';
import styled  from 'styled-components';
import {FaMoon} from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { ThemeContext } from '../context';
import { GiHamburgerMenu } from "react-icons/gi";
import {MdCancelPresentation } from "react-icons/md";
import { mobile,smallTablet,largeTablet } from '../responsive';
import {NavLink,Link} from 'react-router-dom'

const Container = styled.div`
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 40;

`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 80px;
max-width: 1500px;
`
const DarkMode = styled.div`
color:black;
background-color:grey;
width:50px;
height:25px;
border-radius:20px;
display:flex;
justify-content:space-around;
align-items:center;
position:relative;
border:1px solid black;
margin-left:10px;
`

const ToggleButton = styled.div`
width:25px;
height:25px;
border-radius:50%;
background-color:black;
position:absolute;
cursor:pointer;

left:0;
`

const Navmenu = styled.ul`
display: flex;
list-style: none;
text-align: center;
margin-right: 2rem;
z-index:40;
height:50px;
align-items:center;
${smallTablet({display:"flex",flexDirection:"column",width:"100%",
borderTop:"1px solid #fff",position:"absolute",
top:"50px",left:"-110%",opacity:1,transition:"all .5s ease",
height:"auto"
})};
`
const Navitem = styled.li`
line-height: 40px;
margin-right: 1rem;
padding:20px 0;
&:after{
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }
`
const Navlink = styled (NavLink)`
 color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;
`
const NavIcon = styled.div`
display:none;

${smallTablet({display:"block",position:"absolute",
top:"10px",right:"30px",fontSize:"30px",cursor:"pointer",color:"white"})};
`



const Nav = () => {
    const theme = useContext(ThemeContext)
    const lightmode = theme.state.lightmode;
    const[click,setClick] = useState(false);
const ClickHandler = () =>{
    theme.dispatch({type:"Toggle"})
}
const handleClick = () =>{
    setClick(!click)
}
    return(
        <Container style={{backgroundColor: lightmode? "#dddada" : "black"}}
    
        >
            <Wrapper
            >
                <DarkMode
                style={{backgroundColor: lightmode? "white" : "#dddada"}}
                >  
                <FaMoon style={{fontSize:"15px"}}/>
                <BsSun/>
                <ToggleButton onClick={ClickHandler}
                style={{left : theme.state.lightmode ? 0 : "25px"}}
                ></ToggleButton>
             </DarkMode>
             <Navmenu style={{backgroundColor: click && 
             (lightmode ? "#dddada" : "black"),
        left : click && "0px", opacity : click && 1, transition : click && "all .5s ease",
        zIndex : 60
        }}>
         
            <Navitem>
              <Navlink style={{color: lightmode && "black"}}
                exact
                to="/"
                activeStyle={{
                  color: lightmode ? "white" : "#dddada",
                  borderBottom : lightmode ? "1px solid black" : "1px solid #dddada",paddingBottom : "10px"
                }}
                onClick={handleClick}
              >
                Home
              </Navlink>
            </Navitem>
          <Navitem >
              <Navlink 
             
              style={{color: lightmode && "black"}}
              activeStyle={{
                color: lightmode ? "white" : "#dddada",
                borderBottom : lightmode ? "1px solid black" : "1px solid #dddada",paddingBottom : "10px"
              }}
              exact
                to="/service"
              
                onClick={handleClick}
              >
                Service
              </Navlink>
            </Navitem>
            <Navitem>
              <Navlink style={{color: lightmode && "black"}}
                exact
                to="/projects"
                activeStyle={{
                  color: lightmode ? "white" : "#dddada",
                  borderBottom : lightmode ? "1px solid black" : "1px solid #dddada",paddingBottom : "10px"
                }}
                onClick={handleClick}
              >
                Projects
              </Navlink>
            </Navitem>
            <Navitem>
              <Navlink style={{color: lightmode && "black"}}
                exact
                to="/contact"
                activeStyle={{
                  color: lightmode ? "white" : "#dddada",
                  borderBottom : lightmode ? "1px solid black" : "1px solid #dddada",paddingBottom : "10px"
                }}
                onClick={handleClick}
              >
                Contact 
              </Navlink>
            </Navitem>
          </Navmenu>
          <NavIcon onClick={handleClick}
          style={{color : lightmode && "black"}}
          >
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
            {
                click ? <MdCancelPresentation/>
               : <GiHamburgerMenu/> 
              }
          </NavIcon>
            </Wrapper>
       

</Container>
    )
};

export default Nav;
