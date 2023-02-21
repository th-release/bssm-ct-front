import styled from "styled-components"

export default function ErrorComponent({ desc }: { desc: string }) {
  return (
    <NotFoundBody>
      <div>
        <h1>Error</h1>
        <div>
          <h2>{desc}</h2>
        </div>
      </div>
    </NotFoundBody>
  )
}

const NotFoundBody = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div >h1 {
    display: inline-block;
    margin: 0;
    margin-right: 20px;
    padding: 0 23px 0 0;
    font-size: 24px;
    font-weight: 500;
    vertical-align: top;
    line-height: 49px;
    border-right: 1px solid black;
  }

  div >div {
    display: inline-block;
    text-align: left;
    line-height: 49px;
    height: 49px;
    vertical-align: middle;
  }

  div > div > h2 {
    font-size: 14px;
    font-weight: normal;
    line-height: 49px;
    margin: 0;
    padding: 0;
  }
`