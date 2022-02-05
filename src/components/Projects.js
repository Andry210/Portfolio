import React,{useContext} from 'react';
import styled from 'styled-components';
import Ecommerence from './../img/Esto-ecommerence.png'
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsBoxArrowUpRight} from "react-icons/bs";
import { mobile,smallTablet,largeTablet } from '../responsive';
import { ThemeContext } from '../context';
const Container = styled.div`
padding-bottom: 100px;
padding-top:10px;
color:white;
height:100vh;
width:100%;
${largeTablet({paddingBottom:"60px"})};
${smallTablet({paddingBottom:"100px"})}
`
const TextGroup = styled.div`
text-align:center;
`
const Para = styled.p`

color:white;
letter-spacing:5px;
font-weight:100;
margin-top:20px;
margin-bottom:10px;
font-size:14px;
`
const Title = styled.div`
text-transform:uppercase;
text-align:center;
font-size:35px;
letter-spacing:5px;
color:white;
`

const ProjectsGroup = styled.div``
const FirstProject = styled.div`
margin-top:40px;
display:flex;
align-items:center;
justify-content:center;
`
const Wrap = styled.div`
background-color:#18191A;
width:25%;
height:70vh;
${largeTablet({width:"32%",height:"80vh"})}
${smallTablet({width:"52%",height:"90vh"})}
${mobile({width:"80%",height:"90vh"})}
`
const Img = styled.div`
height:100%;
width:100%;
background-size:cover;
background-image:linear-gradient(to right bottom,rgba(1,1,1,0.7),rgba(0,0,0,0.9)),url(${Ecommerence});
position:relative;
`
const Tech = styled.div`
margin-top:5px;
`
const Span = styled.span`
margin:7px 10px;
background-color:#3d3d3d;
font-size:13px;
`
const TechGroup = styled.div`
position:absolute;
background-color:#18191A;
width:100%;
height:10%;
top:90%;
left:0;
`
const Name = styled.div`
position:absolute;
width:45%;
height:20px;
top:55%;
margin-left:70px;
margin-top:10px;

`
const Nametext = styled.p`
margin-top:5px;
display:flex;
justify-content:center;
align-items:center;
${smallTablet({marginLeft:"18px"})}
${mobile({display:"flex",alignItems:"center",justifyContent:"center"})}
`
const Icon = styled.div`
position:relative;
top:45%;
background-color:#18191A;
width:40px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
border-radius:20px;
left:40%;
cursor:pointer;
z-index : 20;
transition : all .5s ease;
  &:hover {
    transform : scale(1.18)
  }
`
const Background = styled.div`
position:absolute;
background-color:rgba(0,0,0,0.7);
top:50%;
width:100%;
height:50%;

`
const Link = styled.a``
const Projects = () => {
  const theme = useContext(ThemeContext)
  const lightmode = theme.state.lightmode;
  return (
      <Container style={{backgroundColor: lightmode? "#dddada" : "rgba(0,0,0,0.96)"}}>
          <TextGroup>
          <Para
          style={{color : lightmode && "#555"}}
          >my latest</Para>
          <Title
          style={{color : lightmode && "#555"}}
          >project</Title>
          <ProjectsGroup>
            <FirstProject
            >
                <Wrap>
                  <Img
                    style={{backgroundImage: lightmode &&  
                      `linear-gradient(to right bottom,rgba(1,1,1,0.1),rgba(1,1,1,0.2)),url(${Ecommerence})`
                    }}
                  >
                   <Background 
                   style={{backgroundColor : lightmode && "rgba(1,1,1,0.1)"}}
                   />
                  
                  <Icon
                  style={{backgroundColor : lightmode && "#dddada"}}
                  >
                    <Link href="https://esto-ecommerence.herokuapp.com/"
                    style={{color:"grey"}}
                    >
                  <BsBoxArrowInRight style={{fontSize : "20px",marginRight:"8px",
                color: lightmode && "grey"
                }}/>
                </Link>
                  </Icon>
                  <Name>
                    <Nametext
                    style={{color : lightmode ? "#dddada" : "white"}}
                    >
                      Ecommerence
                    </Nametext>
                  </Name>
                  <TechGroup
                   style={{backgroundColor : lightmode && "#fff"}}
                  >
                    <Tech
                    >
                     <Span
                      style={{backgroundColor : lightmode && "#dddada",
                    color : lightmode && "grey"
                    }}
                     >Mongodb</Span>
                    <Span
                    style={{backgroundColor : lightmode && "#dddada",
                    color : lightmode && "grey"
                    }}
                    >Express</Span>
                    <Span
                    style={{backgroundColor : lightmode && "#dddada",
                    color : lightmode && "grey"
                    }}
                    >React</Span>
                    <Span
                    style={{backgroundColor : lightmode && "#dddada",
                    color : lightmode && "grey"
                    }}
                    >Node</Span>
                     </Tech> 
                      </TechGroup>
                
                
                  </Img>
                </Wrap>
            </FirstProject>
            </ProjectsGroup>
        </TextGroup>
    </Container>
  )
};

export default Projects;
