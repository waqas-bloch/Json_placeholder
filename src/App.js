import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);

  const handleEditClick = (id) => {
    // history.push(`${id}/edit`)
  };

  const handleDeleteClick = async (id) => {
    const result = await axios.delete(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
    console.log(result.data);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
      setComments(result.data);
    });
  }, []);
  return (
    <div className="container mt-6">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            style={{ alignItems: 'center', margin: '20px 60px' }}
          >
            <h4>{comment.id}</h4>
            <h4>{comment.title}</h4>
            <div>
              <p>{comment.body}</p>
              <button
                type="button"
                onClick={() => handleDeleteClick(comment.id)}
                className="btn btn-danger mt-3 "
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => handleEditClick(comment.id)}
                className="btn btn-warning mt-3 ms-3"
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// react-router-dom

// redirect using history object of rrd
