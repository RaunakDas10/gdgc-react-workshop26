//Form Handleling 


// import React from 'react'

// function Register() {
//   function RegisterHandle(event) {
//     event.preventDefault() //its hold the screen not to reload
//     console.log('Registered Successfully')
//   }

//   return (
//       <form>
       
//           <div>
//             <input type='email' placeholder='Enter Your Email' />
//             <button type='submit' onClick={RegisterHandle}>
//               Submit
//             </button>
//           </div>
//         ) 
//       </form>
//   )
// }

// export default Register;
// //Its not the recursion remember

import React from 'react'

function Register() {
  function RegisterHandle(event) {
    event.preventDefault()
    console.log('Registered Successfully')
  }
  let age=12

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
//Conditional Rendering 