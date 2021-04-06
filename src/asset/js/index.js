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
var butG2 = $( "#button__G2" );
var butG3 = $( "#button__G3" );
var G1 = $( "#G1" );
var G2 = $( "#G2" );
var G3 = $( "#G3" );
var animeContent_But = 0;
var animeContent_ButActive = 0;


butG1.addEventListener( "click", function ()
{
    G2.style.display = "none";
    G3.style.display = "none";
    if ( animeContent_But == 0 || animeContent_ButActive == 1)
    {
        G1.style.display = "unset";
        animeContent_But = 1;
        animeContent_ButActive = 1;
    }
    else
    {
        G1.style.display = "none";
        animeContent_But = 0;
        animeContent_ButActive = 0;
    }
} );

butG2.addEventListener( "click", function ()
{
    G1.style.display = "none";
    G3.style.display = "none";
    if ( animeContent_But == 0 || animeContent_ButActive == 1)
    {
        G2.style.display = "unset";
        animeContent_But = 1;
        animeContent_ButActive = 1;
    }
    else
    {
        G2.style.display = "none";
        animeContent_But = 0;
        animeContent_ButActive = 0;
    }
} );

butG3.addEventListener( "click", function ()
{
    G1.style.display = "none";
    G2.style.display = "none";
    if ( animeContent_But == 0 || animeContent_ButActive == 1)
    {
        G3.style.display = "unset";
        animeContent_But = 1;
        animeContent_ButActive = 1;
    }
    else
    {
        G3.style.display = "none";
        animeContent_But = 0;
        animeContent_ButActive = 0;
    }
} );
