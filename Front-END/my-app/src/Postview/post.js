import postviewimg from "../Postview/sunflower.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './postview.css'

export default function Post(props) {
    return (

    <div>
        <div className="row justify-content-md-center pt-5">
        <div className="card px-0 py-5 maincard">
            <div class="row">
             <div class="col col-lg-6">
             <p className="name">{props.title}</p>
             <p className="Place">Hyderabad</p>
         </div>
         <div class="col col-lg-6 fontawesome1">
       <i class="fa fa-ellipsis-h "></i>
        </div>
           
            </div>
          <img src={postviewimg} className="card-img-top" alt="..." />
           <div className="card-body">
            {/* <h5 className="card-title">{dataObj.title}</h5> */}
            
            <div>
        <div class="row">
        <div class="col ">
        <i class="fa fa-heart-o fontawesome"></i>
         <i class="fa fa-paper-plane-o fontawesome"></i>
         </div>
        
         <div class="col col-lg-4">
           10-Jan-2021
         </div>
       </div>
     </div>
    <p className="card-text">likes</p>  
            <p className="description">{props.body}</p>
         </div>
         <div class="row">
                    <div class="col-lg-6">
                    <a href="/login/posts/edit" className="link"><button class="btn btn-primary m-3">Edit</button></a>
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-primary m-3">Delete</button>
                </div>
                </div>
        </div>
       
        </div>
        </div>
    );
}