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
var butQuickchangeNext = $("#quickchangeNext");
var butQuickchangePrev = $("#quickchangePrev");
var butG1 = $( "#button__G1" );
var butG2 = $( "#button__G2" );
var butG3 = $( "#button__G3" );
var G1 = $( "#G1" );
var G2 = $( "#G2" );
var G3 = $( "#G3" );
var animeContent_ButG1 = 0;
var animeContent_ButG2 = 0;
var animeContent_ButG3 = 0;


function func__butG1() {
    if ( animeContent_ButG2 == 1 || animeContent_ButG3 == 1 )
    {
        G2.style.display = "none";
        G3.style.display = "none";
        animeContent_ButG3 = 0;
        animeContent_ButG2 = 0;
    }
    if ( animeContent_ButG1 == 0 )
    {
        G1.style.display = "unset";
        animeContent_ButG1 = 1;
    }
    else
    {
        G1.style.display = "none";
        animeContent_ButG1 = 0;
    }
}

function func__butG2() {
    if ( animeContent_ButG1 == 1 || animeContent_ButG3 == 1 )
    {
        G1.style.display = "none";
        G3.style.display = "none";
        animeContent_ButG1 = 0;
        animeContent_ButG3 = 0;
    }
    if ( animeContent_ButG2 == 0 )
    {
        G2.style.display = "unset";
        animeContent_ButG2 = 1;
    }
    else
    {
        G2.style.display = "none";
        animeContent_ButG2 = 0;
    }
}

function func__butG3() {
    if ( animeContent_ButG1 == 1 || animeContent_ButG2 == 1 )
    {
        G1.style.display = "none";
        G2.style.display = "none";
        animeContent_ButG1 = 0;
        animeContent_ButG2 = 0;

    }
    if ( animeContent_ButG3 == 0 )
    {
        G3.style.display = "unset";
        animeContent_ButG3 = 1;
    }
    else
    {
        G3.style.display = "none";
        animeContent_ButG3 = 0;
    }
}

butG1.addEventListener( "click", function ()
{
    func__butG1();
} );

butG2.addEventListener( "click", function ()
{

    func__butG2();
} );

butG3.addEventListener( "click", function ()
{

    func__butG3();

} );

butQuickchangeNext.addEventListener("click", function(){
    if (animeContent_ButG1 == 1) {
        func__butG2();
    }
    else if(animeContent_ButG2 == 1){
        func__butG3();
    }
    else{
        func__butG1();
    }
})

butQuickchangePrev.addEventListener("click", function(){
    if (animeContent_ButG1 == 1) {
        func__butG3();
    }
    else if(animeContent_ButG2 == 1){
        func__butG1();
    }
    else if(animeContent_ButG3 == 1){
        func__butG2();
    }
    else{
        func__butG3();
    }
})