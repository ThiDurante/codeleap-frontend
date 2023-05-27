import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { MainDiv } from './styled';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

export default function Main() {
  const [posts, setPosts] = useState([])
  const [flag, setFlag] = useState(false)
  const { name } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!name) {
      navigate('/login')
    }
    //fetch with axios 
    const url = 'https://dev.codeleap.co.uk/careers/'
    const fetchPosts = async () => {
      const response = await fetch(url)
      const data = await response.json()

      setPosts(data.results)
    }
    fetchPosts()

  }, [name, navigate, flag])

  return (
    <MainDiv>
      <Header />
      <NewPost username={name} setFlag={setFlag} flag={flag} />
      {posts.length > 1 && posts.map((post: any) => {
        return <Post key={post.id} post={post} />
      })}
    </MainDiv>
  )
}
