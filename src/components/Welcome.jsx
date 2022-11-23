import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Robot from "../assets/robot.gif"
const Welcome = ({currentUser}) => {
    // const [userName, setUserName] = useState("");
    // useEffect(async() => {
    //     setUserName(
    //         await JSON.parse(
    //             localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY).username
    //         )
    //     )
     
    // }, [])
    
  return (
    <Container>
        <img src={Robot} alt="robot" />
        <h1>
            Welcome,<span>{currentUser.username}!</span>
            <h3>
                please,select a chat to start messaging
            </h3>
        </h1>
    </Container>
  )
}

export default Welcome;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;
img {
  height: 20rem;
}
span {
  color: #4e0eff;
}

`