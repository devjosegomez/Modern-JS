let age = 28
let message = ''

if ( age <= 7 ) 
{
    message = "You are a child, you have 30% OFF discount!"
}
else if ( age >= 65 )
{
    message = "You are a senior, you have 50% OFF discount!"
}
else
{
    message = "You do not have any discount ):"
}

console.log ( message )