// Challenge Tempeture Convertor
let fahrenheit = 32

// Formula to convert F to C (32 °F − 32) × 5/9 = 0 °C
// Formula to convert F to K (32 °F − 32) × 5/9 + 273.15
let toCelcius = ( fahrenheit - 32 ) * 5/9
let toKelvin = ( fahrenheit - 32) * 5/9 + 273.15 
console.log ( toCelcius , toKelvin )