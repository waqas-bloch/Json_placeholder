import { useEffect , useState } from 'react'
import axios from 'axios'

function App() {
  const [comments, setComments] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((result) => {
      //setComments(result.data) 
      console.log(result.data);cd
    }) 
  } , []);
  return (
    <div className="container mt-6">
      {
        comments && comments.map(comment=>{
          return(
            <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}>
            <h4>{comment.id}</h4>
            <h4>{comment.title}</h4>
            <div>
            <p >{comment.body}</p>
            <button type="button" className="btn btn-danger mt-3 " >Delete</button>
            <button type="button" className="btn btn-warning mt-3 ms-3">Edit</button>
            </div>
          </div>
          )

        })
      }
    </div>
  )
}


export default App;
