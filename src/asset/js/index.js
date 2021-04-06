// les helpers
function $ ( expr, con )
{
    return typeof expr === "string" ?
        ( con || document ).querySelector( expr ) :
        expr;
}

function $$ ( expr, con )
{
    return Array.prototype.slice.call( ( con || document ).querySelectorAll( expr ) );
}

var animeContent = $( "#anime__content" );
var butG1 = $( "#button__G1" );
var G1 = $( "#G1" );
var animeContent_But = 0;

butG1.addEventListener( "click", function ()
{
    if ( animeContent_But == 0 )
    {
        G1.style.display = "unset";
        animeContent_But = 1;
    }
    else
    {
        G1.style.display = "none";
        animeContent_But = 0;
    }
} );
