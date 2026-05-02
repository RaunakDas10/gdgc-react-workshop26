//List
import React from 'react'

function List() {
  return (
    <div>
        <ul>
            <li>Web/App Domain</li>
            <li>Aiml Domain</li>
            <li>Cloud Domain</li>
            <li>UI/UX domain</li>
        </ul>

    </div>
  )
}

export default List


//Title
import React from 'react'

function Title() {
  return (
    <div>Welcome to Gdgc Workshop</div>
  )
}

export default Title


// Title 
import React from 'react'

function Title({name,Contact,Collegename,Rollno}){
  return (
    <div>
<h1 style={{fontSize: 100,color:'crimson'}}>{name}</h1>
<h1 style={{fontSize: 70,color:'cyan'}}>{Contact}</h1>
<h1 style={{fontSize: 50,color:'crimson'}}>{Collegename}</h1>
<h1 style={{fontSize:30,color:'crimson'}}>{Rollno}</h1>
        </div>
  )
}

export default Title

// HtmlBoilerPlate
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Home</h1>
//      <h1>about</h1>
//       <h1>contactjs</h1>
//        <h1>Home</h1>
// </body>
// </html>



//About 
//Boilerplate of Reactjs
import React from 'react';//for hooks,States 
import Title from '../Components/Title';
import List from '../Components/List';
 function About(){
    return (
    <>
   
    <Title name="Raunak Das " Contact="123-456-7890" Collegename="MSIT"Rollno="12345"/>
    </>);

 }
 export default About;







 //Contact 
 import React from 'react'
import Title from '../Components/Title';

function Contact() {
  return (
    <div> 
        <h1>Contact Us</h1>
        <p>This is a contact page</p>

  <Title/>
    </div>
  )
}

export default Contact;


//Form Handling
import React from 'react'

function Register() {
  function RegisterHandle(event) {
    event.preventDefault()
    console.log('Registered Successfully')
  }

  return (
      <form>
       
          <div>
            <input type='email' placeholder='Enter Your Email' />
            <button type='submit' onClick={RegisterHandle}>
              Submit
            </button>
          </div>
        ) 
      </form>
  )
}

export default Register;




//Conditional Rendering
import React from 'react'

function Register() {
  function RegisterHandle(event) {
    event.preventDefault()
    console.log('Registered Successfully')
  }
  let age=11

  return (
      <form>
        {age >= 18 ? (
          <div>
            <input type='email' placeholder='Enter Your Email' />
            <button type='submit' onClick={RegisterHandle}>
              Submit
            </button>
          </div>
        ) : (
          <div>
        <img src='https://static.india.com/wp-content/uploads/2026/03/dhurandhar-memes.jpg' alt='Not Eligible' />
        </div>
        )}
      </form>
  )
}

export default Register;