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
var animeContentG = $("#G" + "0");
var animeContent_But = 0;

butG1.addEventListener( "click", function ()
{
    if(animeContent_But == 0){
        var animeContentG = $("#G" + "1");
        func_AnimeGundam();
        animeContent_But = 1;
    }
    else{
        func_Desactiv();
        animeContent_But = 0;
    }
} );

function func_AnimeGundam ()
{
    animeContentG.style.display = "initial";
    console.log(animeContentG)
}

function func_Desactiv() {
    animeContentG.style.display = "none";
}