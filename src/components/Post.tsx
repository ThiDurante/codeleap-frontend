import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { PostsDiv, PostHeader, PostBody, IconsDiv, PostInfoDiv } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type PostProps = {
  post: {
    title: string;
    content: string;
    username: string;
    created_datetime: string;
  };
};

export default function Post({ post }: PostProps) {
  const { name } = useSelector((state: RootState) => state.user)
  const calculateTime = (date: string) => {
    const currentDate = new Date();
    const postDate = new Date(date);
    const diff = currentDate.getTime() - postDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else {
      return 'less than an hour ago';
    }
  };

  const handleDelete = () => {

  }

  return (
    <PostsDiv>
      <PostHeader>
        {post.title}
        {
          name === post.username &&
          <IconsDiv>
            <BsTrash onClick={handleDelete} />
            <AiOutlineEdit />
          </IconsDiv>

        }
      </PostHeader>
      <PostBody>
        <PostInfoDiv>
          <span>@{post.username}</span>
          <span>{calculateTime(post.created_datetime)}</span>
        </PostInfoDiv>
        {post.content}
      </PostBody>
    </PostsDiv>
  );
}
