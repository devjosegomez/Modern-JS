// Example of variable shadowing
// Global ( name )
    //  local ( name )
        //  local
    //  local

let name = 'José'

if ( true )
{
    let name = 'Carmen'
    
    if ( true )
    {
        console.log ( name )
    }
}

if ( true )
{
    console.log ( name )
}