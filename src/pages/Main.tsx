import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const { name } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!name) {
      navigate('/login')
    }
  }, [name, navigate])
  return (
    <div>Main</div>
  )
}
