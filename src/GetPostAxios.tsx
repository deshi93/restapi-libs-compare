import React, { FC } from 'react';

import { useGet } from './use'

type TPost = {
  id: number,
  title: string,
  body: string,
  userId: number,
}

const GetPostAxios : FC<{ id: number }> = ({ id }) => {
  const { fetch, data, loading, error, cancel } = useGet<TPost>(`/posts/${id}`)

  return (
    <div>
      {loading && <div>loading...</div>}
      {data && !loading && <div>{ data.title }</div>}
      {error && <div>{error.message}, <button type="button" onClick={() => console.log(error)}>show error</button></div>}
      <button onClick={fetch}>refetch</button>
      <button onClick={cancel}>cancel</button>
    </div>
  )
}

export default GetPostAxios;
