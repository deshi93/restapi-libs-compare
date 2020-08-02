import React from "react";
import { useGet } from "restful-react";

type TData = {
  message: string
  status: 'success' | 'error'
}

type TQueryParams = {
  a: string,
  b: number,
}

const MyComponent = () => {
  const { data, loading, refetch, error, cancel } = useGet<TData, any, TQueryParams>({
    base: 'https://dog.ceo/api',
    path: '/breeds/image/random',
  });

  return loading ? (
    <div>
      <h1>Loading!</h1>
      <div><button onClick={cancel}>cancel</button></div>
    </div>
  ) : (
    <div>
      <div>{data && <img alt="Here's a good boye!" src={data.message} />}</div>
      <div>{error && <button onClick={() => console.log(error)}>show error</button>}</div>
      <div><button onClick={() => refetch()}>refetch</button></div>
    </div>
  );
};

export default MyComponent;
