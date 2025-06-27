import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchSchoolMeal = async (YMD) => {
  const response = await axios.get(
    `${BASE_URL}?KEY=${API_KEY}&Type=json&pIndex=1&Size=100&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530656&MLSV_YMD=${YMD}`
  );
  return response.data;
};
