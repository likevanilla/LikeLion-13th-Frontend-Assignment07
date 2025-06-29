import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchSchoolMeal } from "../Apis/api";
import styled from "styled-components";
import * as S from "./Style";
import { ClockLoader } from "react-spinners";

const SchoolMeal = () => {
  const [date, setDate] = useState("");
  const [mealInfo, setMealInfo] = useState([]);
  const [calInfo, setCalInfo] = useState(null);
  const [ntrInfo, setNtrInfo] = useState([]);

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
      const calString = meal?.mealServiceDietInfo?.[1]?.row?.[0]?.CAL_INFO;
      const ntrString = meal?.mealServiceDietInfo?.[1]?.row?.[0]?.NTR_INFO;
      if (dishString) {
        const dishes = dishString.split("<br/>");
        const ntrs = ntrString.split("<br/>");
        setMealInfo(dishes);
        setCalInfo(calString);
        setNtrInfo(ntrs);
      } else {
        setMealInfo([]);
        setCalInfo(null);
        setNtrInfo([]);
      }
    }
  }, [meal, isSuccess]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>🍱 오늘의 급식</S.Title>
        <S.Sub>날짜를 선택하면 금촌고등학교의 급식 정보를 보여드립니다.</S.Sub>
      </S.Header>

      <S.DateInputWrapper>
        <label htmlFor="date">📅 날짜 선택:</label>
        <S.DateInput type="date" id="date" onChange={handleDateChange} />
        {isFetching && (
          <S.Message>
            <ClockLoader />
            데이터를 가져오는 중입니다!
          </S.Message>
        )}
      </S.DateInputWrapper>

      <S.Section>
        {isPending && (
          <S.Message>
            <ClockLoader />
            입력을 기다리는 중입니다!
          </S.Message>
        )}
        {isError && (
          <S.ErrorMessage error>에러 발생: {error.message}</S.ErrorMessage>
        )}
        {isSuccess &&
          (mealInfo.length > 0 ? (
            <S.MealList>
              {mealInfo.map((item, index) => (
                <S.MealItem key={index}>🍽️ {item}</S.MealItem>
              ))}
              <hr />
              칼로리: {calInfo}
              {ntrInfo.map((item, index) => (
                <S.NtrItem key={index}>{item}</S.NtrItem>
              ))}
            </S.MealList>
          ) : (
            <S.Message>해당 날짜에는 급식 정보가 없습니다.</S.Message>
          ))}
      </S.Section>
    </S.Container>
  );
};

export default SchoolMeal;
