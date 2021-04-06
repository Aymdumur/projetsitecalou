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
var gundamAnimeTab = [
    [
        [
            "<div> <h1>Mobile Suit Gundam</h1> <p>Année de sortie : 1979</p> <img src='/png/gundamPoster.webp'> </div>"
        ]
        [
            "<div> <h2>Les personnages principaux de la série</h2> <div><p><b>Char Aznable</b></p></div></div>"
        ]
    ]
];

butG1.addEventListener( "click", function ()
{
    func_AnimeGundam();
} );

function func_AnimeGundam ()
{
    animeContent.innerHTML = gundamAnimeTab;
}