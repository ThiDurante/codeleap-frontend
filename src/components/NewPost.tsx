import React, { useState } from 'react'
import { Button, PageTitle } from '../pages/styled'
import { NewPostDiv, Input, TextBox, Label } from './styled'

export default function NewPost({ username, setFlag, flag }: { username: string, setFlag: any, flag: boolean }) {
  const [activateButton, setActivateButton] = useState('#666')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleCreate = () => {
    const url = 'https://dev.codeleap.co.uk/careers/'
    const post = {
      username,
      title: title,
      content: content
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }
    fetch(url, options)
      .then(response => response.json())
      .then(() => setFlag(!flag))
      .catch(err => console.log(err))
  }

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
      <Button onClick={handleCreate} background={activateButton}>Create</Button>
    </NewPostDiv>

  )
}
