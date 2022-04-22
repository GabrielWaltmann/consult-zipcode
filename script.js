cep = document.querySelector("#cep")

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-", "")

    const options = {
        method: "get",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${search}
    /json`, options)
    .then(Response=>{Response.json().then()})
    
    console.log()
})