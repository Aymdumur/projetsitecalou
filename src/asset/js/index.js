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
var animeContent_But = 0;

butG1.addEventListener( "click", function ()
{
    if(animeContent_But == 0){
        var animeContentG = $("#G1");
        func_AnimeGundam(animeContentG);
        animeContent_But = 1;
    }
    else{
        func_Desactiv();
        animeContent_But = 0;
    }
} );

function func_AnimeGundam ()
{
    animeContentG.style.display = "unset";
    console.log(animeContentG)
}

function func_Desactiv() {
    animeContentG.style.display = "none";
}