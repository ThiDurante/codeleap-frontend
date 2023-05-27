import React from 'react'
import { Button, Label, PageTitle } from '../pages/styled'
import { NewPostDiv, Input, TextBox } from './styled'

export default function NewPost() {
  const [activateButton, setActivateButton] = React.useState('#666')
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const checkButton = () => {
    if (content.length > 0 && title.length > 0) {
      setActivateButton('')
    } else {
      setActivateButton('#666')
    }
  }
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    checkButton()
  }
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    checkButton()
  }
  return (
    <NewPostDiv>
      <PageTitle>What's on your mind?</PageTitle>
      <Label>Title</Label>
      <Input onChange={handleTitle} />
      <Label>Content</Label>
      <TextBox
        onChange={handleContent}
      />
      <Button background={activateButton}>Create</Button>
    </NewPostDiv>

  )
}
