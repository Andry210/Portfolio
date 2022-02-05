import React,{useContext} from 'react';
import styled from 'styled-components';
import { mobile,smallTablet,largeTablet } from '../responsive';
import { ThemeContext } from '../context';
const Container = styled.div`
background-color:rgba(0,0,0,0.96);
height:30vh;
display:flex;
justify-content:center;
align-items:center;
color:white;
text-transform:uppercase;
letter-spacing:10px;
${smallTablet({letterSpacing:"2px"})};
${mobile({letterSpacing:"1px",fontSize:"15px"})}

`
const Footer = () => {
  const theme = useContext(ThemeContext)
  const lightmode = theme.state.lightmode;
  return (
  <Container style={{backgroundColor: lightmode ? "#dddada" : "rgba(0,0,0,0.96)",
  color:lightmode && "black"
  }}>
        Copyright© 2022 Andry.All right Reseverd
  </Container>
  )};

export default Footer
