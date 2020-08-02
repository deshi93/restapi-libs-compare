import { useState, useEffect } from 'react'

import axios from './Axios'
// import axios from 'redaxios'

export const useCancelToken = () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source()

  const cancel = (): void => source.cancel('Operation canceled by the user.')

  return { token: source.token, cancel }
}

export const useGet = <TData = any>(url: string) => {
  const { token, cancel } = useCancelToken()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<TData | null>(null);

  const fetch = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<TData>(url, { cancelToken: token });
      await new Promise((resolve) => { setTimeout(resolve, 3500) })
      setData(res.data);
    } catch(error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch(url)
    return () => cancel() // cancel request on unmounted
  }, [url])

  return {
    data, loading, error, fetch: () => fetch(url), cancel,
  }
}
