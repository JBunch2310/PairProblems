const tempC = 8.5;
function cToF(temp) {
  const tempF = temp * (9 / 5) + 32;
  console.log(`${temp} degrees Celsius is equal to ${tempF} degrees Fahrenheit`);
}
cToF(tempC);