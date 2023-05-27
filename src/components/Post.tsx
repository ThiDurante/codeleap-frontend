import React from 'react'

export default function Post({ title, content }: any) {
  return (
    <div>
      <div>{title}
        <div>Delete/Edit</div>
      </div>
      <div>{content}</div>
    </div>
  )
}
