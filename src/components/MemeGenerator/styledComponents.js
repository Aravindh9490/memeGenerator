import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Heading = styled.h1`
  color: #35469c;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: ${props => +props.fontSize}px;
  text-align: center;
`

export const Input = styled.input``

export const ImgContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 600px;
  height: 400px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
