function insert(num)
{
    var numero = document.getElementById('resul').innerHTML;
    document.getElementById('resul').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resul').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resul').innerHTML;
    document.getElementById('resul').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular(){
    var resul = document.getElementById('resul').innerHTML;
    if(resul){
        document.getElementById('resul').innerHTML = eval(resul)
    }
    else
    {
        document.getElementById('resul').innerHTML = "Nada"
    }
}