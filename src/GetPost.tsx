import React, { FC } from 'react';
import { Get } from "restful-react";
import { States, Actions, Meta } from "restful-react/dist/Get";

type TChildren<TData = any, TError = any> = (data: TData | null, states: States<TData, TError>, actions: Actions<TData>, meta: Meta) => React.ReactNode

type TPost = {
  id: number,
  title: string,
  body: string,
  userId: number,
}

const GetPost : FC<{
  id: number,
  children: TChildren<TPost>,
}> = ({ id, children }) => {
  return (
    <Get
      path={`/posts/${id}`}
      resolve={(res: TPost) => res}
    >
      {children}
    </Get>
  )
}

export default GetPost;
