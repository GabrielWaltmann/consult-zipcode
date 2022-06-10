cep = document.querySelector("#cep")

cep.addEventListener("focusout", searchCep =  async() =>{
    const value = cep.value
    const url = `https://viacep.com.br/ws/${value}/json`

        const search = await fetch(url).catch(error => {
            if(value != ""){           
                 document.querySelector(".message").style.display = "flex"

                 cep.value = ""
            }
        })

        const  information = await search.json()

        let city = document.querySelector("#city").value = information.localidade
        let adress = document.querySelector("#adress").value = information.logradouro
        let district = document.querySelector("#district").value = information.bairro
        let state = document.querySelector("#state").value = information.uf

})

function hide(){
    document.querySelector(".message").style.display = "none"
}