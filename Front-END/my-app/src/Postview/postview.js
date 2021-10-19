import React,{useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './postview.css'
// import postviewimg from "../Postview/sunflower.jpg";
import Post from './post'
// import './App.css';
// import {Component} from 'react';
import axios from 'axios';
// import rose from '../src/assets/rose.jpg'
// import sunflower from '../src/assets/sunflower.jpg'
// export default class Postview extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       MyPostData:[  {
//         title: 'First Data Jahnavi',
//         body: 'aslkgaskldhf',
//         image: ' data:616d504bb19c7ac97d88573f'
//       }]
//     }

//   }

//   componentDidMount() {
//     axios.get("localhost:8000/posts",{headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ1ODExNDMsImRhdGEiOiI2MTZkYWM3ZDE3ZGY1ZmNkMjBmZGVkMTYiLCJpYXQiOjE2MzQ1Nzc1NDN9.3YQe7N9beV3kgp88bNRfkawQ1h9U6XWV0u7gZ4EPot4"}})
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log(result)
//           this.setState({
//             MyPostData: result
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           console.log(error)
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render(){
//     return(
      
//         <div className="contanier px-5">
//          <div className="py-5">
//        <nav className="navbar navbar-light bg-light justify-content-between maintext px-5">
//         <p className="navbar-brand" ><i class="fa fa-user-circle-o" aria-hidden="true"></i>Instaclone</p>
//           <i className="fa fa-camera"></i>
//       </nav>
// </div>
//         {/* <h1>My api call</h1> */}
//         {this.state.MyPostData.map(function(dataObj){
//           return ( <div className="card main-card">
//             <div class="row">
//             <div class="col col-lg-6">
//             <p className="name">sreedevi</p>
//             <p className="Place">Hyderabad</p>
//         </div>
//         <div class="col col-lg-6 fontawesome1">
//         <i class="fa fa-ellipsis-h "></i>
//         </div>
           
//             </div>
//           <img src={dataObj.image} className="card-img-top" alt="..." />
//           <div className="card-body">
//             {/* <h5 className="card-title">{dataObj.title}</h5> */}
            
//             <div>
//         <div class="row">
//         <div class="col ">
//         <i class="fa fa-heart-o fontawesome"></i>
//         <i class="fa fa-paper-plane-o fontawesome"></i>
//         </div>
        
//         <div class="col col-lg-4">
//           10-Jan-2021
//         </div>
//       </div>
//     </div>
//     <p className="card-text">{dataObj.likes}</p>  
//             <p className="description">{dataObj.description}</p>
//           </div>
//         </div>
//         );
//       }
//       )
//       }
//         {/* <p>
//           {JSON.stringify(this.state.MyPostData)}
//         </p> */}
//       </div>
//     );
//   }
// }

export default function PostView() {
  const [posts , setPosts] = useState([])
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8000/posts',{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ2Mjk5NTAsImRhdGEiOiI2MTZlNmIyYjFlM2ZmOThiZDQ5MmJkZmUiLCJpYXQiOjE2MzQ2MjYzNTB9.W4awBVh7v0g6wXTgR2SP2eH8reAsOhcQ2wsgATRcgBI"}})
        .then(response =>{
          //console.log(response)
          setTimeout(()=>{setPosts(response.data)},3000)
          
          console.log(posts)
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
});
  return (
    <div class="container">
    <div className="py-5">
       <nav className="navbar navbar-light bg-light justify-content-between maintext px-5">
        <p className="navbar-brand" ><i class="fa fa-user-circle-o" aria-hidden="true"></i>Instaclone</p>           <a href="/login/posts/upload" className="link"><i className="fa fa-camera"></i></a>
      </nav>
      </div>
        {
        posts.map(post => (
      <Post key={post._id} title= {post.title} body={post.body} image={post.image}></Post>))
      }
        {/* <img src={postviewimg} className="img" alt="Landing image"></img>
          <div className="card-body">
            <h5 className="card-title">card title</h5>
            <div className="container">
            <div className="row justify-content-md-center">
              <div className="cd-md-5"> 
                <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
           <div className="cd-md-5">
           <h3>09-Sep-2021</h3>
           </div>
           </div>
            </div>
            <p className="card-text"> kick start your career with a bang</p>
          </div> */}
        </div>

     
  );
}