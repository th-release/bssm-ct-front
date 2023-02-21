import styled from "styled-components"

export const Header = () => {
  return (
    <HeaderBody>
      <p>부소마 Today 급식</p>
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 1px solid #EAEAEA;
  display: flex;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;

  p {
    color: black;
    font-Weight: 700;
    font-size: 18px;
  }
`