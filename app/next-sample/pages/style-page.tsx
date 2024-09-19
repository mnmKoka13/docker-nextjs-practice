import { NextPage } from 'next'
import styled, { css } from 'styled-components'

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: salmon;
  border-radius: 16px;
`

type ButtonProps = {
  color: string
  backgroundcolor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  backgroung: ${(props) => props.backgroundcolor};
  border: 2px solid ${(props) => props.color};

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`
const font = css`
  color: #1e90ff;
  font-size: 2em;
`
const Button2 = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;

  ${redBox}
  ${font}
`

const Text = styled.p`
  font-weight: bold;
  ${font}
`

const Text2 = styled.p`
  color: blue;
  font-weight: bold;
`

const BorderedText = styled(Text2)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`

const StylePage: NextPage = () => {
  return (
    <div>
      <div>
        <Badge>Hello world!</Badge>
        <Button backgroundcolor="transparent" color="#FF0000">Hello</Button>
        <Button backgroundcolor="1E90FF" color="white">World</Button>
      </div>
      <div>
        <Button2>Hello</Button2>
        <Text>World</Text>
        <Text2>Hello</Text2>
        <BorderedText>World</BorderedText>
        <Text as="a" href="/">Go to index</Text>
      </div>
    </div>
  )
}

export default StylePage