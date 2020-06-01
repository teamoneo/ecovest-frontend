import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  h3 {
    font-size: 35px;
    color: #f58220;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    div {
      display: flex;
      flex-direction: column;
      width: 33%;
    }
    p {
      font-size: 8px;
    }
  }
`;

export const TitleArea = styled.div`
  display: flex;
  height: 180px;
  width: 100%;
  align-items: center;
  justify-content: center;
  span {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const ExplanationContainer = styled.div`
  background-color: #e6e7e8;
  padding: 75px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    p {
      color: #4d4d4f;
    }
    div {
      justify-content: flex-end;
      align-items: center;
      p {
        margin: 15px;
        font-size: 12px;
      }
      img {
        width: 60%;
      }
    }
  }
`;
export const AccountButton = styled.div`
  background-color: #f58220;
  width: 180px;
  height: 50px;
  border-radius: 5px;
  margin: 95px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
