    let pula_hasel = [
       'Co nagle to po diable',
        'Bez pracy nie ma kołaczy',
        'Kto rano wstaje temu Pan Bóg daje',
'Jak sobie pościelesz tak się wyśpisz',
'Gdzie kucharek sześć tam nie ma co jeść',
'Nie chwal dnia przed zachodem słońca',
'Lepszy wróbel w garści niż gołąb na dachu',
'Co ma wisieć nie utonie',
'Kto pod kim dołki kopie ten sam w nie wpada',
'Kto mieczem wojuje ten od miecza ginie',
'Kto pyta nie błądzi',
'Kto szuka ten znajdzie',
'Kto późno przychodzi sam sobie szkodzi',
'Kto pierwszy ten lepszy',
'Kto nie pracuje ten nie je',
'Kto sieje wiatr ten zbiera burzę',
'Kto ma pszczoły ten ma miód',
'Kto ma szczęście ten na byle czym jedzie',
'Kto ma głowę na karku ten da sobie radę',
'Kto chce psa uderzyć ten kij znajdzie',
'Kto ma uszy niechaj słucha',
'Kto się czubi ten się lubi',
'Kto dużo mówi ten mało robi',
'Kto dużo obiecuje ten mało daje',
'Kto milczy ten się zgadza',
'Kto nie ryzykuje ten nie pije szampana',
'Kto nie ma w głowie ten ma w nogach',
'Kto oszczędza ten ma',
'Jak Kuba Bogu tak Bóg Kubie',
'Jak trwoga to do Boga',
'Jak grochem o ścianę',
'Jak cię widzą tak cię piszą',
'Jakie życie taka śmierć',
'Jaki pan taki kram',
'Jaki ojciec taki syn',
'Jaka praca taka płaca',
'Jaka matka taka córka',
'Jaki początek taki koniec',
'Gdzie dwóch się bije tam trzeci korzysta',
'Gdzie drwa rąbią tam wióry lecą',
'Gdzie diabeł nie może tam babę pośle',
'Gdzie zgoda tam siła',
'Gdzie praca tam i zapłata',
'Gdzie serce tam i szczęście',
'Co za dużo to niezdrowo',
'Co się odwlecze to nie uciecze',
'Co kraj to obyczaj',
'Co dwie głowy to nie jedna',
'Co z oczu to z serca',
'Co było a nie jest nie pisze się w rejestr',
'Co się stało to się nie odstanie',
'Co komu pisane to go nie minie',
'Co głowa to rozum',
'Nie od razu Kraków zbudowano',
'Nie ma dymu bez ognia',
'Nie ma róży bez kolców',
'Nie wszystko złoto co się świeci',
'Nie szata zdobi człowieka',
'Nie taki diabeł straszny jak go malują',
'Nie mów hop póki nie przeskoczysz',
'Nie wywołuj wilka z lasu',
'Nie czyń drugiemu co tobie niemiłe',
'Ciężka praca popłaca',
'Praca uszlachetnia',
'Praca czyni mistrza',
'Do odważnych świat należy',
'Cierpliwość popłaca',
'Wytrwałość prowadzi do celu',
'Zgoda buduje',
'Niezgoda rujnuje',
'Wiedza to potęga',
'Ćwiczenie czyni mistrza',
'Każdy początek jest trudny',
'Małymi krokami dojdziesz do celu',
'Kropla drąży skałę',
'Po trudach przychodzi odpoczynek',
'Po burzy zawsze wychodzi słońce',
'Po każdej nocy przychodzi dzień',
'Po deszczu wychodzi słońce',
'Po nitce do kłębka',
'Po owocach poznaje się drzewo',
'Po czynach poznaje się człowieka',
'Prawdziwych przyjaciół poznaje się w biedzie',
'Przyjaciel w potrzebie to prawdziwy przyjaciel',
'Człowiek człowiekowi wilkiem',
'Człowiek uczy się całe życie',
'Człowiek jest kowalem własnego losu',
'Dobrymi chęciami piekło jest wybrukowane',
'Mowa jest srebrem a milczenie złotem',
'Milczenie jest złotem',
'Słowa uczą a przykłady pociągają',
'Każdy ma swoje pięć minut',
'Każdy kij ma dwa końce',
'Każdy medal ma dwie strony',
'Każdy orze jak może',
'Każdy ma swój dzień',
'Każdy nosi swój krzyż'
    ];

let losowy_indeks = Math.floor(Math.random() * pula_hasel.length);

var haslo = pula_hasel[losowy_indeks].toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
    if(haslo.charAt(i)==" ")haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}
function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;

}
window.onload = start;

var litery = new Array(35);

litery[0] = "A"
litery[1] = "Ą"
litery[2] = "B"
litery[3] = "C"
litery[4] = "Ć"
litery[5] = "D"
litery[6] = "E"
litery[7] = "Ę"
litery[8] = "F"
litery[9] = "G"
litery[10] = "H"
litery[11] = "I"
litery[12] = "J"
litery[13] = "K"
litery[14] = "L"
litery[15] = "Ł"
litery[16] = "M"
litery[17] = "N"
litery[18] = "Ń"
litery[19] = "O"
litery[20] = "Ó"
litery[21] = "P"
litery[22] = "Q"
litery[23] = "R"
litery[24] = "S"
litery[25] = "Ś"
litery[26] = "T"
litery[27] = "U"
litery[28] = "V"
litery[29] = "W"
litery[30] = "X"
litery[31] = "Y"
litery[32] = "Z"
litery[33] = "Ż"
litery[34] = "Ź"

function start()
{
    var tresc_diva="";

    for(i=0; i<=34; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva +'<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if( (i+1)  % 7 ==0)tresc_diva = tresc_diva +'<div style="clear:both";></div>'
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length - 1) return this.toString();
    else return this.substring(0, miejsce) + znak + this.substring(miejsce+1);
}

function sprawdz(nr)
{
    var trafiona = false;

    for(i=0; i<dlugosc; i++)
    {
        if(haslo.charAt(i) == litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }

    if(trafiona == true)
    {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo()
    }
    else
    {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        
        //skucha
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"alt=""/>';
    }

    //wygrana
    if(haslo == haslo1)
    document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+
    '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

    //przegrana
    if(ile_skuch>=9)
        document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło to: "+haslo+
    '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
