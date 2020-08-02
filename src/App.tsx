import React from 'react';
import { RestfulProvider } from "restful-react";

import './App.css';
import ReactRestfulExample from './MyComponent';
import CreatePost from './CreatePost';
import GetPost from './GetPost';
import GetPostAxios from './GetPostAxios';

function App() {
  return (
    <RestfulProvider
      base={'https://jsonplaceholder.typicode.com/'}
    >
      <h1>Restful React</h1>
      <ReactRestfulExample />
      <GetPost id={99}>
        {(post) => post && <p>{post.title}</p>}
      </GetPost>
      <CreatePost />

      <h1>Axios</h1>
      <GetPostAxios id={1} />
    </RestfulProvider>
  );
}

export default App;
