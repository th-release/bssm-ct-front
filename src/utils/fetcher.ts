import axios from "axios"

export default async function fetcher(path: string, options: object) {
  const res = await axios(path, options)
  return res.data
}
