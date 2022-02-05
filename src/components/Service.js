import React,{useContext} from 'react';
import styled from 'styled-components';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import {FaReact } from 'react-icons/fa';
import { DiNodejs} from 'react-icons/di';
import { IoLogoCss3} from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";
import {DiJavascript1} from 'react-icons/di';
import {FaBootstrap } from 'react-icons/fa';
import {DiMaterializecss} from 'react-icons/di';
import {SiMaterialui} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';
import {GoDeviceMobile} from 'react-icons/go';
import {RiDatabaseLine} from 'react-icons/ri';
import { Block } from '@mui/icons-material';
import { ThemeContext } from '../context';
import { mobile,smallTablet,largeTablet } from '../responsive';
import {Link} from 'react-router-dom'
const Container = styled.div`
color:white;
padding:80px 80px;
background-color:black;
${largeTablet({paddingBottom:"60px",padding:"20px 16px"})};
${smallTablet({padding:"20px 10px"})};
`
const Title = styled.div`
font-size:40px;
letter-spacing:5px;
font-weight:100;
text-transform:uppercase;
color:white;
text-align:center;
padding-bottom:30px;
`
const Wrapper = styled.div`
margin-top:30px;
display:flex;
justify-content:space-between;
${smallTablet({display:"flex",justifyContent:"space-around",flexWrap:"wrap",})};
`
const First = styled.div`
width:25%;
height:70vh;
${largeTablet({width:"32%"})};
${smallTablet({width:"47%"})};
${mobile({width:"70%"})};
`
const Second = styled.div`
width:25%;
height:70vh;
${largeTablet({width:"32%"})};
${smallTablet({width:"47%"})};
${mobile({width:"70%",marginTop:"30px"})};
`
const Third = styled.div`
width:25%;
height:70vh;
${largeTablet({width:"32%"})};
${smallTablet({width:"45%",marginTop:"30px"})};
${mobile({width:"70%"})};
`
const TitleIcon = styled.div`
margin-top:10px;
text-align:center;
`
const H3 = styled.h3`
margin-top:20px;
font-size:30px;
margin-left:30px;
font-weight:600;
letter-spacing:5px;
color:grey;
`
const IconGroup = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
margin:20px 0;
margin-top:30px;
`
const Icon = styled.div``
const Span = styled.span`
font-size:20px;
margin-left:2px;
color:white;

font-weight:100;
`
const CardSideFront = styled.div`
background-color:#18191A;
width:100%;
height:100%;
transition:all .8s ease;
position:absolute;
top:0;
left:0;
backface-visibility:hidden;
`
const CardSideBack = styled.div`
position:absolute;
top:0;
left:0;
background-color:#3d3d3d;
width:100%;
height:100%;
backface-visibility:hidden;
transform : rotateY(180deg);
transition:all .8s ease;

`
const Card = styled.div`
perspective:150rem;
width:100%;
height:70vh;
cursor:pointer;
position:relative;
 transition:all .8s ease;   
        &:hover ${CardSideFront}{
            transform : rotateY(180deg)
        }
        &:hover ${CardSideBack}{
            transform : rotateY(0)
        }

`
const Heading = styled.h3`
font-size:28px;
width:80%;
padding:0 5px;
letter-spacing:2px;
font-weight:100;
margin-top:100px;
margin-left:30px;
word-spacing:3px;
color:white;
`
const Button = styled.button`
padding:15px 18px;
font-size:13px;
border-radius:30px;
margin-top:40px;
margin-left:70px;
border:1px solid grey;
background-color:black;
color:white;
letter-spacing:1px;
cursor:pointer;
transition:all .5s ease;
        &:hover{
          transform:scale(1.2)
        }
`
const NodeGroup = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Spandev = styled.span`
margin-left:30px;
color:black;
font-weight:600;
font-size:28px;
`
const Service = () => {
  const theme = useContext(ThemeContext)
  const lightmode = theme.state.lightmode;
  return (
    <Container style={{backgroundColor : lightmode && "white"}}>
        <Title style={{color : lightmode && "#555",
      fontWeight: lightmode && "300" }}>Services</Title>
        <Wrapper>
        <First>
            <Card>
                 <CardSideFront
                 style={{backgroundColor: lightmode && "white",
                boxShadow : lightmode && "10px 10px 10px grey"
                }}
               
               >
            <TitleIcon>
                <DesignServicesIcon style={{color:lightmode ? "grey" : "black",fontSize:"50px"
              }}/>
            </TitleIcon>
            <H3
            style={{fontWeight : lightmode && "300"}}
            >Front-End</H3>
            <IconGroup>
                <Icon
                > <ImHtmlFive2 style={{color:"grey",fontSize:"20px"}}/><Span
                style={{color: lightmode && "#000"}}
                >Html-5</Span></Icon>
                <Icon style={{color:"grey",fontSize:"20px"}}>  <IoLogoCss3 /><Span
                style={{color: lightmode && "#000"}}
                >Css-3</Span></Icon>
              
                
            </IconGroup>
           
            <IconGroup>
            <Icon  style={{color:"grey",fontSize:"20px"}}>  <FaBootstrap/><Span
            style={{color: lightmode && "#000"}}
            >Bootstrap</Span></Icon>
            <Icon  style={{color:"grey",fontSize:"20px"}}>  <SiMaterialui/><Span
            style={{color: lightmode && "#000"}}
            >mui</Span></Icon>
            </IconGroup>
          
          
            <IconGroup>
            <Icon   style={{color:"grey",fontSize:"20px"}}> <DiJavascript1 /><Span
            style={{color: lightmode && "#000"}}
            >Javascript</Span></Icon>
            <Icon   style={{color:"grey",fontSize:"20px"}}> <FaReact/><Span
            style={{color: lightmode && "#000"}}
            >React</Span></Icon>
               
           </IconGroup> 
        
           </CardSideFront> 
        <CardSideBack
        style={{backgroundColor : lightmode && "#dddada",
      boxShadow : lightmode && "8px 8px 8px grey" 
      }}
        >
                <Heading
                  style={{color: lightmode && "#555",
                  fontWeight: lightmode && "300"}}
                >Lets discuss  your projects</Heading>
                <Link to='/contact'>
                <Button
                 style={{backgroundColor : lightmode && "#fff",
                 color : lightmode && "black"
                 }}
                >Contact Me</Button>
                </Link>
           </CardSideBack>
        </Card>
        </First>
        <Second>
        <Card>
                 <CardSideFront
                  style={{backgroundColor: lightmode && "white",
                  boxShadow : lightmode && "10px 10px 10px grey"
                  }}
                 >
            <TitleIcon>
                <RiDatabaseLine style={{color:lightmode ? "grey"
                :"black"
                ,fontSize:"50px"}}/>
            </TitleIcon>
            <H3
             style={{fontWeight : lightmode && "300"}}
            >Backend</H3>
            <IconGroup>
                
              <NodeGroup style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  <Icon  style={{color:"grey",fontSize:"40px"}}>  <DiNodejs /><Span
              style={{color: lightmode && "#000"}}
              >Node js</Span></Icon>
              </NodeGroup>
                <Icon  style={{color:"grey",fontSize:"20px"}}>  <SiExpress/><Span
                style={{color: lightmode && "#000"}}
                >Express</Span></Icon>
                
            </IconGroup>
        
           </CardSideFront>
        <CardSideBack
        style={{backgroundColor : lightmode && "#dddada",
        boxShadow : lightmode && "8px 8px 8px grey"
      }}
        >
                <Heading
                  style={{color: lightmode && "#555",
                  fontWeight: lightmode && "300"}}
                >Lets discuss  your projects</Heading>
                <Link to="/contact">
                <Button
                 style={{backgroundColor : lightmode && "#fff",
                 color : lightmode && "black"
                 }}
                >Contact Me</Button>
                </Link>
           </CardSideBack>
        </Card>
        </Second>
        <Third>
        <Card>
                 <CardSideFront
                  style={{backgroundColor: lightmode && "white",
                  boxShadow : lightmode && "10px 10px 10px grey"
                  }}
                 >
            <TitleIcon>
                <GoDeviceMobile style={{color: lightmode ? "grey" :"black",fontSize:"50px",
            }}/>
            </TitleIcon>
            <H3 
             style={{fontWeight : lightmode && "300"}}
            >Mobile </H3>
            <Spandev style={{color:"grey",
          fontWeight : lightmode && "300"
          }}>development</Spandev>
            <IconGroup>
                
             <Icon  style={{color:"grey",fontSize:"40px"}}>  <FaReact /><Span
             style={{color: lightmode && "#000"}}
             >React Native</Span></Icon>
             
            </IconGroup>
        
           </CardSideFront> 
        <CardSideBack
        style={{backgroundColor : lightmode && "#dddada",
        boxShadow : lightmode && "8px 8px 8px grey"}}
        >
                <Heading
                style={{color: lightmode && "#555",
              fontWeight: lightmode && "300"
              }}
                >Lets discuss  your projects</Heading>
               <Link to="/contact">
                <Button
                style={{backgroundColor : lightmode && "#fff",
              color : lightmode && "black"
              }}
                >Contact Me</Button>
                </Link>
           </CardSideBack>
        </Card>
        </Third>
        </Wrapper>
    </Container>
  )
};

export default Service;
