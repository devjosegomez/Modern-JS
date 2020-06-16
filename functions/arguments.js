//Multiple args
let add = ( a, b, c) => a + b + c 

let result = add ( 10, 30, 23 )
console.log ( result )

//Default args
let greeting = ( language = 'EN', user = 'Anonymous' ) => 
{   
    let message = 'Welcome!'
    if ( language == 'ES' ) {
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
console.log ( greeting ( 'ES') )