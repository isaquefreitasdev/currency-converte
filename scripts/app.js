let url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';



function convert() {
    let input = document.getElementById("currencyValue");
    let valor = input.value;

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data.USDBRL.high)
            let moeda = data.USDBRL.high;
           
            let result = `${valor * moeda} doláres`;
            if(valor == ""){
                verificando();
            }else{
            document.getElementById("convertido").innerHTML = result;
            }
        }) 

}
function verificando() {
    alert("Preencha o campo para prosseguir")
}

