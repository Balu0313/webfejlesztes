function skalazas(){
    let szam = document.getElementById("skala").value;
    document.getElementById("skalaertek").innerHTML = `${szam}`;
}

function szovegkiiras(gomb){
    melyik = document.getElementById("valszolg")
    switch(gomb){
        case "raktar":{
            melyik.innerHTML = `Raktárlogisztika`
            document.getElementById("raktarlog").style.display = "flex"
            document.getElementById("szaktanacs").style.display = "none"
            document.getElementById("szallitmany").style.display = "none"
            break
        };
        case "szak":{
            melyik.innerHTML = `Szaktanácsadás`
            document.getElementById("raktarlog").style.display = "none"
            document.getElementById("szaktanacs").style.display = "flex"
            document.getElementById("szallitmany").style.display = "none"
            break
        };
        case "szall":{
            melyik.innerHTML = `Szállítmányozás`
            document.getElementById("raktarlog").style.display = "none"
            document.getElementById("szaktanacs").style.display = "none"
            document.getElementById("szallitmany").style.display = "flex"
            break
        };
    }
}

function szamolo(){
    /*Szaktanácsadás*/
    hetekszama = Number(document.getElementById("hossz").value)
    vizsgalat = document.getElementById("vizsgalat").checked
    kihelyezett = document.getElementById("kihelyezett").checked
    dolgozokszama = Number(document.getElementById("emberek").value)
    
    document.getElementById("alap").innerHTML = `${hetekszama * 100000} Ft`
    
    if(vizsgalat){
        document.getElementById("tvizsgalat").innerHTML = `${500000} Ft`
        vizsgalatertek = 500000
    }
    else{
        document.getElementById("tvizsgalat").innerHTML = `${0} Ft`
        vizsgalatertek = 0
    }
    
    if(kihelyezett){
        document.getElementById("kihelyezettk").innerHTML = `${hetekszama * 100000} Ft`
        kihelyezettertek = hetekszama * 100000
    }
    else{
        document.getElementById("kihelyezettk").innerHTML = `${0} Ft`
        kihelyezettertek = 0
    }
    
    document.getElementById("kepzes").innerHTML = `${300000 * dolgozokszama} Ft`
    
    document.getElementById("vegosszeg").innerHTML = `${
        hetekszama * 100000 +
        vizsgalatertek +
        kihelyezettertek +
        300000 * dolgozokszama
    } Ft`
    
    /*Raktárlogisztika*/
    hetekszama2 = Number(document.getElementById("hossz2").value)
    elelmiszer = document.getElementById("elelmiszer").checked
    hutott = document.getElementById("hutott").checked
    aru = Number(document.getElementById("aru").value)

    document.getElementById("alap2").innerHTML = `${hetekszama2 * 50000} Ft`
    
    if(elelmiszer){
        document.getElementById("elelmiszerr").innerHTML = `${500000} Ft`
        elelmiszerertek = 500000
    }
    else{
        document.getElementById("elelmiszerr").innerHTML = `${0} Ft`
        elelmiszerertek = 0
    }
    
    if(hutott){
        document.getElementById("hutottr").innerHTML = `${hetekszama2 * 150000} Ft`
        hutottertek = hetekszama2 * 150000
    }
    else{
        document.getElementById("hutottr").innerHTML = `${0} Ft`
        hutottertek = 0
    }
    
    document.getElementById("suly").innerHTML = `${100000 * aru} Ft`
    
    document.getElementById("vegosszeg2").innerHTML = `${
        hetekszama2 * 50000 +
        elelmiszerertek +
        hutottertek +
        100000 * aru
    } Ft`

    /*Szállítmányozás*/
    tavolsag = Number(document.getElementById("hossz3").value)
    nemzetkozi = document.getElementById("nemzetkozi").checked
    hutott2 = document.getElementById("hutott2").checked
    aru2 = Number(document.getElementById("aru2").value)

    document.getElementById("alap3").innerHTML = `${tavolsag * 5000} Ft`
    
    if(nemzetkozi){
        document.getElementById("nemzetkozisz").innerHTML = `${250000} Ft`
        nemzetkoziertek = 250000
    }
    else{
        document.getElementById("nemzetkozisz").innerHTML = `${0} Ft`
        nemzetkoziertek = 0
    }
    
    if(hutott2){
        document.getElementById("hutottr2").innerHTML = `${tavolsag * 2000} Ft`
        hutott2ertek = tavolsag * 2000
    }
    else{
        document.getElementById("hutottr2").innerHTML = `${0} Ft`
        hutott2ertek = 0
    }
    
    document.getElementById("suly2").innerHTML = `${3000 * aru2 * tavolsag} Ft`
    
    document.getElementById("vegosszeg3").innerHTML = `${
        tavolsag * 5000 +
        nemzetkoziertek +
        hutott2ertek +
        3000 * aru2 * tavolsag
    } Ft`
}

function ugras(){
    location.href = '#valszolg'
}