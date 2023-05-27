import styled from 'styled-components';

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border: 1px solid #cccccc;
  width: 500px;
  height: 205px;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: #ffffff;
`;

export const Button = styled.button.attrs((props: any) => ({
  background: props.background || '#7695ec',
}))`
  width: 111px;
  height: 32px;
  background-color: ${(props) => props.background};
  color: white;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  align-self: flex-end;
  margin-top: 25px;
  margin-right: 20px;
`;

export const Input = styled.input`
  width: 452px;
  height: 32px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #777777;
  align-self: center;
  margin-top: 10px;
`;

export const Label = styled.label`
  width: 199px;
  height: 19px;
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
  color: #000000;
`;

export const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #000000;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: -20px;
`;
