import React, {useState} from 'react';
import axios from "axios";

function Edit() {
    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [image , setimage] = useState(null)

    function submitButton(){
        axios
        .put(`http://localhost:3000/posts/616d61661983bde0d0a7cac2`, {
            title:name,
            body:body,
            image:image
        
        },{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ2Mjc3NTYsImRhdGEiOiI2MTZlNjI3NDIxZDlhYjE1YmNmOTYyNDEiLCJpYXQiOjE2MzQ2MjQxNTZ9.SpCHEyeystegoXuPP9Rc20xrS5KyrppnGAyXTwSPMSM"}})
        .then((response) => {
            console.log('test',response)
        });

    }
    
    return (
      <div className="App">
        <h2>Edit Your Post</h2>
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
  export default Edit;