import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchSchoolMeal } from "../Apis/api";
import styled from "styled-components";
import * as S from "./Style";

const SchoolMeal = () => {
  const [date, setDate] = useState("");
  const [mealInfo, setMealInfo] = useState([]);

  const {
    data: meal,
    isPending,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: ["meal", date],
    queryFn: () => fetchSchoolMeal(date),
    enabled: !!date,
  });

  const handleDateChange = (e) => {
    const value = e.target.value.replaceAll("-", "");
    setDate(value);
  };

  useEffect(() => {
    if (isSuccess) {
      const dishString = meal?.mealServiceDietInfo?.[1]?.row?.[0]?.DDISH_NM;
      if (dishString) {
        const dishes = dishString.split("<br/>");
        setMealInfo(dishes);
      } else {
        setMealInfo([]);
      }
    }
  }, [meal, isSuccess]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>🍱 오늘의 급식</S.Title>
        <S.Sub>날짜를 선택하면 급식 정보를 보여드립니다.</S.Sub>
      </S.Header>

      <S.DateInputWrapper>
        <label htmlFor="date">📅 날짜 선택:</label>
        <S.DateInput type="date" id="date" onChange={handleDateChange} />
        {isFetching && <S.FetchMessage>업데이트 중...</S.FetchMessage>}
      </S.DateInputWrapper>

      <S.Content>
        {isPending && <S.Message>데이터를 불러오는 중...</S.Message>}
        {isError && <S.Message error>에러 발생: {error.message}</S.Message>}
        {isSuccess &&
          (mealInfo.length > 0 ? (
            <S.MealList>
              {mealInfo.map((item, index) => (
                <S.MealItem key={index}>🍽️ {item}</S.MealItem>
              ))}
              <hr />
              {}
            </S.MealList>
          ) : (
            <S.Message>해당 날짜에는 급식 정보가 없습니다.</S.Message>
          ))}
      </S.Content>
    </S.Container>
  );
};

export default SchoolMeal;
