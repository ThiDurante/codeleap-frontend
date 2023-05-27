import styled from 'styled-components';

export const HeaderDiv = styled.div`
  background-color: #7695ec;
  width: 100vw;
  height: 80px;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const NewPostDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  height: 334px;
  border-radius: 16px;
`;

export const Label = styled.label`
  width: 199px;
  height: 19px;
  font-size: 16px;
  font-weight: 400;
  padding-top: 10px;
  color: #000000;
`;

export const Input = styled.input`
  width: 452px;
  height: 32px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #777777;
  margin-top: 10px;
`;

export const TextBox = styled.textarea`
  width: 452px;
  height: 74px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #777777;
  margin-top: 10px;
`;

export const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 16px;
  margin-top: 20px;
`;

export const PostHeader = styled.div`
  background-color: #7695ec;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  width: 100%;
  height: 70px;
  border-radius: 16px 16px 0px 0px;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  border-radius: 0px 0px 16px 16px;
  color: #000000;
`;

export const IconsDiv = styled.div`
  color: white;
  font-weight: 700;
  margin-right: 20px;
  width: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  color: #777777;
`;

export const Model = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;
