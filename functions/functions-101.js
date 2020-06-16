let greeting = () =>
{ 
    console.log ( 'Hello from the function' )
}
greeting ()

let square = (number) => 
{
    return number * number
}
console.log ( square ( 3 ) )

//Challange Convert F to C
let fahrenheitToCelcius = ( tempeture ) => ( tempeture - 32 ) * 5/9

console.log ( fahrenheitToCelcius ( 50 ) ) //Should return 10