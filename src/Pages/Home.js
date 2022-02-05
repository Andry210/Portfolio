import React,{useState} from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Service from '../components/Service';

const Container = styled.div``
const Home = () => {
 
  return (
      <Container>

      <Hero/>
      <Service />
      <Projects/>
      <Contact/>
  
      </Container>
  )
  
};

export default Home;
