import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Sub = styled.p`
  font-size: 15px;
  color: #555;
`;

export const DateInputWrapper = styled.div`
  margin-bottom: 25px;

  label {
    font-weight: 500;
    margin-right: 10px;
  }
`;

export const DateInput = styled.input`
  padding: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    border-color: gray;
    outline: none;
  }
`;

export const FetchMessage = styled.span`
  margin-left: 12px;
  color: #888;
  font-size: 13px;
`;

export const Content = styled.section``;

export const MealList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MealItem = styled.li`
  background-color: #f5f5f5;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 15px;
`;

export const Message = styled.p`
  color: ${(props) => (props.error ? "#e53935" : "#333")};
  font-size: 14px;
`;
