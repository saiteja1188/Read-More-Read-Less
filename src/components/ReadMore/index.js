// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Content,
  ReadHeading,
  ReadParagraph,
  ReactImg,
  MoreParagraph,
  Button,
} from './styledComponents'

const ReadMore = () => {
  const [button, setButton] = useState(false)

  const onClickButton = () => setButton(prev => !prev)

  const buttonText = button ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <Content>
        <ReadHeading>React Hooks</ReadHeading>
        <ReadParagraph>Hooks are a new addition to React</ReadParagraph>
        <ReactImg
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <MoreParagraph>
          Hooks allow function components to have access to state and other
          React features. Because of this, class components are generally no
          longer needed. Although Hooks generally replace class components,
          there are no plans to remove classes from React.Hooks allow function
          components to have access to state and other React features. Because
          classes from React.
        </MoreParagraph>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </Content>
    </MainContainer>
  )
}

export default ReadMore
