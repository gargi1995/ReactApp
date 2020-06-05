import React from 'react'
import styled from'styled-components'


 const Body = () => {
    return (
        <BodyContainer>
           <form>
    <label for="fname">First Name</label>&nbsp;&nbsp;
    <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <label for="lname">Last Name</label>&nbsp;&nbsp;
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <label for="country">Country</label>&nbsp;
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
    <br/>
  
    <input type="submit" value="Submit"/>
  </form>
        </BodyContainer>
    )
}

export default Body

const BodyContainer= styled.div`
input[type=text], select {
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  label{
      left-margin: 0px; 
  }
  
  input[type=submit] {
    width: 10%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
`;

