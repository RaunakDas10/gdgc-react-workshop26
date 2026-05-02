import React from 'react'

function Title({name,Contact,Collegename,Rollno}){
  return (
    <div>
<h1 style={{fontSize: 50,color:'crimson'}}>{name}</h1>
<h1 style={{fontSize: 70,color:'cyan'}}>{Contact}</h1>
<h1 style={{fontSize: 50,color:'crimson'}}>{Collegename}</h1>
<h1 style={{fontSize:30,color:'crimson'}}>{Rollno}</h1>
        </div>
  )
}

export default Title
