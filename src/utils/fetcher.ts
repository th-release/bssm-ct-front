import axios from "axios"

export default async function fetcher(path: string) {
  const res = await axios(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.data
}