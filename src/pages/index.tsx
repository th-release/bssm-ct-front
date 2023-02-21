import ErrorComponent from "@/components/Error";
import { Header } from "@/components/Header";
import fetcher from "@/utils/fetcher";
import styled from "styled-components";
import useSWR from 'swr'

export default function Home() {
  const { data, error } = useSWR("", fetcher)

  if (error) {
    return (
      <ErrorComponent desc="백앤드 서버에 오류가 발생했습니다." />
    )
  }

  if(!data) {
    return (
      <></>
    )
  } else {
    return (
      <>
        <Header />
        {Object.values(data.return).map((value: any, index) => {
          <Box key={index}>
            <h1>{value.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: value.desc }}>
            </div>
          </Box> 
        })}
      </>
    )
  }

}

const Box = styled.div`
  margin: 20px;
  padding: 10px;
  background: #EAEAEA;
  border-radius: 10px;

  h1 {
    background: white;
    margin: 0;
    padding: 15px 0 15px 4px;
    font-size: 25px;
    font-weight: 600;
    border-radius: 5px;
  }

  div {
    margin-top: 20px;
    padding: 10px 0 10px 8px;
    background: white;
    border-radius: 5px;
  }
`