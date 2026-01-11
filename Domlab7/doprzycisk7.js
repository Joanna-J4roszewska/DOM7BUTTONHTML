const mojPrzycisk = document.getElementById('przycisk1')
const kontener = document.getElementById('kontener1')
const przyciskUsuwania = document.getElementById('przycisk2')
const kontener2 = document.getElementById('kontener2')
const kolorowyPrzycisk = document.getElementById('przycisk3')
const kontener3 = document.getElementById('kontener3')
const nowyTekst = document.getElementById('przycisk4')
const kontener4 = document.getElementById('kontener4')

mojPrzycisk.addEventListener('click', function(){
    const nowyDiv = document.createElement("div")
    nowyDiv.innerText = "Nowy Div";

    nowyDiv.classList.add("do-usuniecia");

    kontener.appendChild(nowyDiv);

    //const sasiad = document.createElement("button") 
    //sasiad.style.display ="block"; //wymuszenie by ten button byl blockiem bo buttony zwykle obok siebie sie stackuja a divy pod soba
    //sasiad.innerText ="sasiad, niby div niby button, eksperymenmt ";
    //document.body.appendChild(sasiad);

    
}),

przyciskUsuwania.addEventListener('click', function(){
const usunDiv = document.querySelectorAll('.do-usuniecia');
const ostatni = usunDiv[usunDiv.length - 1];
ostatni.remove();
})

kolorowyPrzycisk.addEventListener('click', function(){
kolorowyPrzycisk.style.backgroundColor = "red";
})

nowyTekst.addEventListener('click', function(){
const wszystkieElementy = document.querySelectorAll('button, .do-usuniecia');
wszystkieElementy.forEach(function(element){
    element.innerText = "Nowy tekst";
})
})