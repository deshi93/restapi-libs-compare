import React from "react";
import { useMutate } from "restful-react";

const CreatePost = () => {
  const { mutate, loading } = useMutate({
    verb: 'POST',
    path: '/posts/',
  });

  const body = {
    title: 'foo',
    body: 'bar',
    userId: 1
  }

  const requestOptions = {
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }

  const callback = (res: any) => console.log(res)

  return loading ? <div>loading</div> : (
    <button onClick={() => (
      mutate(body, requestOptions).then(callback)
    )}>create</button>
  );
};

export default CreatePost;
