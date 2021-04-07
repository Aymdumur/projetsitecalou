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

// Les fonctions pour changer de présentation d'un animé 

// Les variables

// Récupération des boutons / des textes
var animeContent = $( "#anime__content" );
var butQuickchangeNext = $( "#quickchangeNext" );
var butQuickchangePrev = $( "#quickchangePrev" );
var butG1 = $( "#button__G1" );
var butG2 = $( "#button__G2" );
var butG3 = $( "#button__G3" );
var G1 = $( "#G1" );
var G2 = $( "#G2" );
var G3 = $( "#G3" );

// Les valeurs par défauts des boutons
var animeContent_ButG1 = 0;
var animeContent_ButG2 = 0;
var animeContent_ButG3 = 0;

// Les fonctions pour afficher/masquer chaque partie
function func__butG1 ()
{
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

function func__butG2 ()
{
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

function func__butG3 ()
{
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

// Les EventListener pour chaque bouton
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

// Les EventListener pour les boutons de changement rapide d'animé
butQuickchangeNext.addEventListener( "click", function ()
{
    if ( animeContent_ButG1 == 1 )
    {
        func__butG2();
    }
    else if ( animeContent_ButG2 == 1 )
    {
        func__butG3();
    }
    else
    {
        func__butG1();
    }
} );

butQuickchangePrev.addEventListener( "click", function ()
{
    if ( animeContent_ButG1 == 1 )
    {
        func__butG3();
    }
    else if ( animeContent_ButG2 == 1 )
    {
        func__butG1();
    }
    else if ( animeContent_ButG3 == 1 )
    {
        func__butG2();
    }
    else
    {
        func__butG3();
    }
} );

//les functions pour le changement de police et de taille de police

//la fonction gérant le changement de police
var nbdystexte = 0;
var html = $( "body" );

function fun_dystexte ()
{
    if ( nbdystexte == 0 )
    {
        //passe en police dysléxique
        console.log( "Changement police dyslexique" );
        dystexte = "font-family:OpenDyslexic-Regular;";
        nbdystexte = 1;
    } else
    {
        //passe en police arial
        console.log( "Changement police initial" );
        dystexte = "font-family:arial;";
        nbdystexte = 0;
    }
    return ( dystexte );
}

// les fonctions gérant la taille de la police
var diminutiontxt = -2;
var augmentationtxt = 2;
var nbtailletxt = 20;
var tailletxt = "";

//diminution de la taille de la police
function fun_dimtailletxt ()
{
    if ( diminutiontxt < 0 )
    {
        nbtailletxt = nbtailletxt - 2;
        tailletxt = "font-size:" + nbtailletxt + "px;";
        augmentationtxt = augmentationtxt + 1;
        diminutiontxt = diminutiontxt + 1;
        console.log( "Diminution taille de la police" );
    } else
    {
        console.log( "Trop de changement de taille" );
    }
    return ( tailletxt );
}

//augmentation de la taille de la police
function fun_augtailletxt ()
{
    if ( augmentationtxt > 0 )
    {
        nbtailletxt = nbtailletxt + 2;
        tailletxt = "font-size:" + nbtailletxt + "px;";
        augmentationtxt = augmentationtxt - 1;
        diminutiontxt = diminutiontxt - 1;
        console.log( "Augmentation taille de la police" );
    } else
    {
        console.log( "Trop de changement de taille" );
    }
    return ( tailletxt );
}

//bouton dyslexie
var dysbutton = $( "#dystexte" );
dysbutton.addEventListener( "click", function ()
{
    fun_dystexte();
    html.setAttribute( "style", tailletxt + dystexte );
} );

//bouton de la taille de la police
var txtplus = $( "#txtplus" );
var txtmoins = $( "#txtmoins" );

//augmentation
txtplus.addEventListener( "click", function ()
{
    fun_augtailletxt();
    html.setAttribute( "style", tailletxt + dystexte );
} );

//diminution
txtmoins.addEventListener( "click", function ()
{
    fun_dimtailletxt();
    html.setAttribute( "style", tailletxt + dystexte );
} );