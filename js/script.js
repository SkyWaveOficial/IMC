var idSubmit = document.getElementById("submit-button");
var title = document.getElementById("title");
var inputContent = document.getElementById("input-content");
var resultado = document.getElementById("resultado")

    idSubmit.addEventListener("click",function(){
    //Alterando o título do texto
    title.innerHTML = "Resultado";
})


    //Capturand os valores digitados nos campos de texto (input)
    idSubmit.addEventListener("click", function(){
    var idName = document.getElementById("id-name").value;
    var idWeight = Number(document.getElementById("id-weight").value);
    var idHeight = Number(document.getElementById("id-height").value);
    //console.log(typeof(idWeight));

    var imc = idWeight / Math.pow(idHeight, 2);

    console.log("Seu IMC" + imc.toFixed(3));
    //Injetando dados no elemento HTML
    resultado.innerHTML = idName +  ", Seu IMC é " + imc.toFixed(3) + "kg/m²";

    //Fazendo desaparecer os inputs e monstrando o resultado
    inputContent.style.display = "none";
    resultado.style.display = "block";

    if(imc < 18.5){
        console.log("Abaixo do peso");
        resultado.innerHTML += "<br>Situação: Abaixo do peso!";
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal");
        resultado.innerHTML += "<br>Situação: Peso normal!";
    }else if(imc >= 25 && imc < 30){
        console.log("Acima do peso");
        resultado.innerHTML += "<br>Situação: Acima do peso!";
    }else if(imc >= 30 && imc < 40){
        console.log("Obeso");
        resultado.innerHTML += "<br>Situação: Obeso!";
    }else{
        console.log("Obesidade");
        resultado.innerHTML += "<br>Situação: Obesidade!";
    }

    var weightIdealMin = (18.5 * Math.pow(idHeight, 2));
    var weightIdealMax = (25 * Math.pow(idHeight, 2));

    console.log("Peso ideal: \nmin: " +
             weightIdealMin.toFixed(3) + " kg\nmax: " + 
             weightIdealMax.toFixed(3) + " kg");

    resultado.innerHTML += "<hr>Peso ideal para sua altura:" + 
                    "<br>Min: " + weightIdealMin.toFixed(3) + "kg " + 
                    "<br>Max: " + weightIdealMax.toFixed(3) + "kg" 
});