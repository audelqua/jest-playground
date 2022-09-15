import React, { useEffect, useState } from 'react';
import './App.css';

interface ResponseObject { 

}

const App: React.FC = () => {
  const [state, setState] = useState<ResponseObject>()
  console.log('state', state);
  
    // fetching the GET route from the Express server which matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    console.log('response', response);
    
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  useEffect(() => {
    callBackendAPI()
      .then(res => setState({ data: res.express }))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
