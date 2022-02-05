import React,{useRef,useState,useContext} from 'react';
import styled from 'styled-components';
import { AiFillPhone } from "react-icons/ai";
import { mobile,smallTablet,largeTablet } from '../responsive';
import { IoIosMail} from "react-icons/io";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context';

const Container = styled.div`
padding-top:50px;
background-color:black;
color:white;
height:100vh;
${largeTablet({paddingBottom:"80px"})};
${smallTablet({paddingBottom:"180px"})};
`
const TextGroup = styled.div`
text-align:center;
`
const Para = styled.p`
font-size:14px;
letter-spacing:5px;
`
const Title = styled.h1`
font-size:30px;
font-weight:100;
margin-top:20px;
letter-spacing:5px;
text-transform:uppercase;
`
const Wrapper = styled.div`
display:flex;
${smallTablet({flexDirection:"column"})};
`

const Left = styled.div`
flex:1;
${smallTablet({margin:"0 auto"})};
`
const Wrap = styled.div`
margin-top:150px;
margin-left:100px;
display:flex;
${smallTablet({margin:"40px auto"})};
`
const Icon = styled.div`
border:1px solid grey;
background-color:#18191A;
width:20px;
padding:10px;
border-radius:50%;
`
const Grouptext = styled.div`
margin-left:15px;
`
const Phtext = styled.p`

`
const Ph = styled.p``
const Secwrap = styled.div`
margin-left:100px;
margin-top:20px;
display:flex;
${smallTablet({margin:"0 auto"})};
`

const Right = styled.div`
flex:1;
background-color:black;

`
const Border = styled.div`
background-color:#18191A;
width:60%;
height:65vh;
margin-top:70px;
${largeTablet({width:"70%",height:"72vh"})};
${smallTablet({width:"50%",margin:"50px auto"})};
${mobile({width:"80%"})};
`
const Form = styled.form`
color:white;
display:flex;
flex-direction:column;
`

const Formtitle = styled.p`
margin-top:20px;
margin-left:30px;
font-size:20px;
letter-spacing:2px;
`
const Input = styled.input`
border:none;
background-color:transparent;
border-bottom:1px solid black;
width:60%;
margin-left:30px;
padding-bottom:20px;
margin-top:30px;
color:white;
`
const Button = styled.button`
padding:15px 18px;
font-size:13px;
border-radius:30px;
margin-top:15px;
margin-left:25px;
border:1px solid grey;
background-color:black;
color:white;
letter-spacing:1px;
cursor:pointer;
width:30%;
transition:all .5s ease;
        &:hover{
          transform:scale(1.12)
        }
`
const MessageReply = styled.div`
color:red;
margin-left:23px;
font-size:15px;
font-weight:600;
margin-top:10px;
`
const Contact = () => {
    const form = useRef();
    const theme = useContext(ThemeContext)
    const lightmode = theme.state.lightmode;
const [message,setmessage] = useState(false);
const [name,setname] = useState('');
const [email,setemail] = useState('');
const [textmessage,settextmessage] = useState('');
const sendEmail= (event) =>{
        event.preventDefault();
        emailjs.sendForm('service_a46xdzj',
         'template_l2yi4ph', 
         form.current, 
         'user_xnMY5dmp35OF334MsNOiX')
      .then((result) => {
          console.log(result.text);
            setemail('');
            setname('');
            settextmessage('');          
          setmessage(true)
           
      }, (error) => {
          console.log(error.text);
      });
    
    }
    return (
      <Container style={{backgroundColor : lightmode ? "white" : "black"}}>
           <TextGroup>
          <Para
          style={{color:lightmode && "black"}}
          >Contact Me</Para>
          <Title
          style={{color : lightmode && "#555",
        fontWeight : lightmode && "300"
        }}
          >Have a Project?</Title>
        </TextGroup>
        <Wrapper>
            <Left>
                <Wrap>
                    <Icon style={{backgroundColor : lightmode && "#dddada",
                border: lightmode && "1px solid #dddada"
                }}>
                        <AiFillPhone
                        style={{color: lightmode && "black"}}
                        />
                    </Icon>
                    <Grouptext>
                        <Phtext
                        style={{color: lightmode && "black"}}
                        >phone</Phtext>
                        <Ph
                     style= {{color:lightmode && "black"}}
                        >09 755645428</Ph>
                    </Grouptext>
                </Wrap>
                <Secwrap>
                <Icon
                style={{backgroundColor : lightmode && "#dddada",
                border: lightmode && "1px solid #dddada"
                }}>
                
                   <IoIosMail
                     style={{color: lightmode && "black"}}
                   />
                    </Icon>
                    <Grouptext>
                        <Phtext
                        style={{color : lightmode && "black"}}
                        >E-mail</Phtext>
                        <Ph
                        style={{color:lightmode && "black"}}
                        >an210dry@gmail.com</Ph>
                    </Grouptext>
                </Secwrap>
            </Left>
            <Right style={{backgroundColor : lightmode && "white"}}>
                <Border 
                style={{backgroundColor : lightmode && "#dddada"}}
                >
                    <Form ref={form} 
                    onSubmit={sendEmail}>
                        <Formtitle
                        style={{color: lightmode && "#555"}}
                        >Send Message</Formtitle>
                        <Input type="text"
                        value={name}
                        placeholder="full name" 
                        onChange={(e) =>setname(e.target.value)}
                        name="user_name"
                        style={{color : lightmode && "black"}}
                        />
                        <Input type="email" 
                       value={email}
                       placeholder="Email"
                       onChange={(e) =>setemail(e.target.value)}
                       name="user_email"
                       style={{color : lightmode && "black"}}
                        />
                        <Input type="text"
                        value={textmessage}                       
                        placeholder="Type your message"
                        onChange={(e) =>settextmessage(e.target.value)}
                        name="user_message"
                        style={{color : lightmode && "black"}}
                        />
                        {message && <MessageReply>Thank you for Contacting me!</MessageReply>}
                        <Button
                        style={{backgroundColor : lightmode && "white",
                    color : lightmode && "black"}}
                        >Send</Button>
                    </Form>
                </Border>
            </Right>
        </Wrapper>

      </Container>
  )
};

export default Contact;
