import React,{useContext} from 'react';
import styled from 'styled-components';
import Typical from 'react-typical'
import { mobile,smallTablet,largeTablet } from '../responsive';
import { ThemeContext } from '../context';
import {Link} from 'react-router-dom'
const Container = styled.div`
padding:20px 80px;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
color:white;
${smallTablet({paddingBottom:"40px"})};
`
const Wrapper = styled.div`
`
const H3 = styled.h3`
margin-top:30px;
font-size:40px;
letter-spacing:2;
font-weight:100;
color:grey;
display:inline-block;
background-image:linear-gradient(to right bottom,
  rgba(0,0,0,0.1),
 #3d3d3d);
-webkit-background-clip:text;
color:transparent;
text-transform:uppercase;

${smallTablet({fontSize:"30px"})};
${smallTablet({fontSize:"22px"})};
`
const Title = styled.h1`
font-size:70px;
letter-spacing:10px;
font-weight:100;
color:#dfe4ea;
text-transform:uppercase;
${smallTablet({fontSize:"50px"})};
${mobile({fontSize:"30px"})};

`
const Span = styled.span`
display:block;

`
const Button1 = styled.button`
margin-top:40px;  
border:1px solid black;
padding:15px 40px;
  cursor:pointer;
background-color:#dfe4ea;
cursor:pointer;
border-radius:60px;
  &:hover{
    
  }
  ${mobile({padding:"10px 20px"})};
`
const ButtonGroup = styled.div`
display:block;
`
const Button2 = styled.button`
margin-top:40px;  
padding:15px 28px;
  cursor:pointer;
background-color:black;
color:white;
cursor:pointer;
border-radius:60px;
border:1px solid grey;
transition:all .5s ease;
  &:hover{
    transform : scale(1.12)
  }
  ${mobile({padding:"10px 13px"})};
`

const Hero = () => {
  const theme = useContext(ThemeContext)
  const lightmode = theme.state.lightmode;
  return (
    <Container style={{backgroundColor: lightmode? "#dddada" : "rgba(0,0,0,0.96)",
    }}>
      <Wrapper>
        <Title   style={{color: lightmode? "#555" : "grey"}}
        ><Span
        style={{color: lightmode? "#555" : "grey"}}
        >Hi,</Span> I am andry</Title>

       <H3> 
         <Typical
          loop={Infinity}
      steps={[
          'web developer!',
           1000, 
           'mern stack developer!', 
           1000,
          ]}
          wrapper="div"
      />
      </H3>
          <ButtonGroup>
        <Link to="contact">
      <Button2
      style={{backgroundColor : lightmode && "white",
          color : lightmode && "#555",border: lightmode && "1px solid #555"
    }}
      >Contact Me</Button2>
         </Link>
          </ButtonGroup>
    </Wrapper>
    </Container>

  )
};

export default Hero;
