const convertToCelcius = (kelvin) => {
  const celcius = kelvin - 273.15;
  return celcius;
};

const result = convertToCelcius(24);
console.log(result);

const convertToKelvin = (celcius) => {
  const kelvin = celcius + 273.15;
  return kelvin;
};

const result2 = convertToKelvin(45);
console.log(result2);
module.exports = { convertToCelcius, convertToKelvin };
