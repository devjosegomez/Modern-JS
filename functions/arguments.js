//Multiple args
let add = ( a, b, c) => a + b + c 

let result = add ( 10, 30, 23 )
console.log ( result )

//Default args
let greeting = ( language = 'EN', user = 'Anonymous' ) => 
{   
    let message = 'Welcome!'
    if ( language == 'ES' ) 
    {
        if ( user === undefined )
        {
            user = 'Anonimo'
        }
        message = '¡Bienvenido!'
    }
    return `${ message } ${ user }`
}

console.log ( greeting ( undefined, 'Mark' ) )
console.log ( greeting ( 'ES', 'José' ) )
console.log ( greeting ( 'ES' ) )

//Challenge tipCalculator
let calculateTip = ( total, tip = 0.2) => `Tip: --$ ${ total * tip } USD`
console.log ( calculateTip ( 300, 0.5 ) )
console.log ( calculateTip ( 300 ) )
console.log ( calculateTip ( 27.3, 0.3 ) )