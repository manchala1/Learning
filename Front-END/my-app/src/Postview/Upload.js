import React, {useState} from 'react';
import axios from "axios";

function Upload() {
    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [image , setimage] = useState(null)

    function submitButton(){
        const formData=new FormData();
        formData.append(
            "my-file",
            image,image.name
        )
        axios
        .post(`http://localhost:8000/posts`, {
            title:name,
            body:body,
            formData:image
        
        },{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ2Mjk5NTAsImRhdGEiOiI2MTZlNmIyYjFlM2ZmOThiZDQ5MmJkZmUiLCJpYXQiOjE2MzQ2MjYzNTB9.W4awBVh7v0g6wXTgR2SP2eH8reAsOhcQ2wsgATRcgBI"}})
        .then((response) => {
            console.log('test',response)
        });

    }
    
    return (
      <div className="App">
        
            <input 
            type="text" 
            name="first_name" 
            onChange={e => setname(e.target.value)}
            placeholder="Name" 
            value={name}/>

            <br/>

            <input 
            type="text" 
            name="email" 
            onChange={e => setbody(e.target.value)}
            placeholder="Description" 
            value={body}/>

            <br/>
            <input 
            type="file" 
            name="image" 
            onChange={(event) =>{
                console.log(event.target.files[0])
                setimage(event.target.files[0])
            } } 
            placeholder="image"/>

            <br/>
            <button onClick={submitButton} >Upload</button>
      </div>
    );
  }
  export default Upload;