﻿//SAVE THE SELECTION OF THE USER IN THE QUERY PARAMETERS


function Suit_Model_Listen() {
    document.getElementById('SuitSkirt1').addEventListener('onclick', Suit_Model_Save('Suit_Skirt'));
    document.getElementById('SuitSkirt2').addEventListener('onclick', Suit_Model_Save('Suit_Skirt'));
}

function Suit_Model_Save(choice) {
   
    let queryParams = new URLSearchParams(window.location.search);
    
    queryParams.set('Suit', choice);
    history.pushState(null, null, "?" + queryParams.toString());

    window.localStorage.setItem('Suit_choice', JSON.stringify(choice))
    var SuitChoosen = JSON.parse(window.localStorage.getItem('Suit_choice'));
    console.log(SuitChoosen);

    window.setTimeout(window.location.replace("../../ladies/suit/Suit_Presentation.html" + "?" + queryParams.toString()), 5000);
}


    

    

