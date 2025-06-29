import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: white;
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
  color: gray;
`;

export const DateInputWrapper = styled.div`
  margin-bottom: 25px;

  label {
    font-weight: bold;
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

export const MealList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MealItem = styled.li`
  background-color: whitesmoke;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 15px;
`;

export const NtrItem = styled.li``;

export const Message = styled.p`
  color: #333;
  font-size: 14px;
  justify-items: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const Section = styled.section`
  flex-direction: column;
`;
