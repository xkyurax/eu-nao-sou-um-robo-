const checkbox = document.getElementById("checkbox");
const submitBtn= document.querySelector("button[type=submit]");


//desliga checkbox // disable checkbox//
checkbox.disabled = true;
submitBtn.disabled = true;


const elements = document.querySelectorAll(".element");
const selectColor= document.getElementById("selectColor")

console.log(selectColor);
//Atribui uma cor para Elements // assign one color to Elements//
elements.forEach(function (element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML=color;
    selectColor.innerHTML= color;
});
// gera cor aleatória // Generate random color //
function getRandomColor (){
    const letter = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i<6; i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
    
}

//teste se carrega as cores corretamente no console do navegador // 
//You should test if you browser is loading the colors correctly//

// se você for humano a checkbox será marcada e o botão liberado, se não a página vai recarregar//
// if you are an human the checkbox will be checked and the button enbled, if not the page will reload//
elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML){
            alert("Você é um humano!");
            checkbox.checked=true;
            submitBtn.disabled=false;
            submitBtn.classList.remove("btn-light");
            submitBtn.classList.add("btn-success");
        }else{
            alert("Por favor, certifique-se de que você é humano!")
            location.reload(true)
        }
    })
})

