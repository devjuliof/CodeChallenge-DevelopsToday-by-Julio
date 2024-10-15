export const fetchThreeCharCode = async (twoCharCode) => {
  const response = await fetch(
    `${import.meta.env.VITE_CONVERT_TWO_CHAR_CODE}/${twoCharCode}`,
  );
  const data = await response.json();
  return data[0].cca3;
};
