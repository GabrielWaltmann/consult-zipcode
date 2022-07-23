/* Consts globals */
const firstCEP = document.querySelector("#firstCEP")
const secondCEP = document.querySelector("#secondCEP")
const calc = document.querySelector(".calc")

/* when clicked on button */
calc.addEventListener("click", (event)=>{
    let firstValue = firstCEP.value
    let secondValue = secondCEP.value
    if(validCEPs(firstValue, secondValue) === true){
        calcDistance(firstValue, secondValue)
    }
})

/* Calculate distance */
async function  calcDistance(firstCEP, secondCEP){
    const origin = firstCEP/* '04335-000'; */
    const destination = secondCEP/* '01311000'; */
    
    try{
        const response = await axios.get(`https://distancep.herokuapp.com/distance/${firstCEP}/${secondCEP}`)
        showInScreen(response.data)

    }catch{
        alert("Não foi possivel encontrar os valores. Por favor informe os CEPs no segunte formato: '0000-0000'")
    }
}

/* Check if is valid */
function validCEPs(firstCEP, secondCEP){
    if(firstCEP.length >= 8 && secondCEP.length >= 8) return true
    else return false
}

/* Show result on screen */
function showInScreen(data){
    const result = document.querySelector(".result")
    const distance = data.distance
    const firstAdress = data.cepsInfo[0]
    const secondAdress = data.cepsInfo[1]

    console.log(firstAdress, secondAdress)

    result.innerHTML = `<h3>Distancia: ${distance}km</h3>
                        <ul>
                            <li>CEP de origem: ${firstAdress.cep}</li>
                            <li>Cidade: ${firstAdress.localidade}</li>
                            <li>Endereço: ${firstAdress.logradouro}</li>
                            <li>Estado: ${firstAdress.uf}</li>
                        <ul>
                        <ul>
                            <li>CEP de destino: ${secondAdress.cep}</li>
                            <li>Cidade: ${secondAdress.localidade}</li>
                            <li>Endereço: ${secondAdress.logradouro}</li>
                            <li>Estado: ${secondAdress.uf}</li>
                        <ul>
                        ` 
    result.classList.add("animation")
    firstCEP.value = ""
    secondCEP.value = ""
}
