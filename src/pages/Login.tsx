import React, { useState } from "react";
import { Button, Input, Label, LoginMain, PageTitle } from "./styled";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [activateButton, setActivateButton] = useState('#666');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogin = () => {
    dispatch(login(user));
    navigate('/');
  };

  return (
    <LoginMain>
      <PageTitle>Welcome to CodeLeap network!</PageTitle>
      <Label htmlFor="username">Please enter your username</Label>
      <Input
        onChange={(username) => {
          setUser(username.target.value)
          username.target.value.length > 0 ? setActivateButton('') : setActivateButton('#666');
        }}
        type="text"
        id="username"
        placeholder="John Doe"
      />
      <Button background={activateButton} onClick={handlelogin}>ENTER</Button>
    </LoginMain>
  );
}
