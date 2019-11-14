window.onload = async () => {
    let username = "user22"
    let passkey = "ykeZdCYNLs2dqbMc"
    let token = btoa(username + ":" + passkey)

    let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/product/", {
        headers:{
        "Authorization":"Basic " + token
        }
    })
    let jsonResponse = await response.json ()
    
    document.querySelector("#productsColumn").innerHTML = jsonResponse.map(products =>`
        <div>
            <img src="${products.imageUrl}"/>
            <p>${products.name} - ${products.price}</p>
        </div>
    `)
    console.log (jsonResponse)
}

addProduct = async (product) => {
    let username = "user22"
    let passkey = "ykeZdCYNLs2dqbMc"
    let token = btoa(username + ":" + passkey)

    let response = await fetch ("https://strive-school-testing-apis.herokuapp.com/api/product/",{
        method: "POST",
        body:JSON.stringify(product),
        headers:{ 
            "Authorization":"Basic " + token,
            "Content-type" :"application/json"
        } 
    })
    let jsonResponse = await response.json()
    console.log(jsonResponse) 
}

handleSubmit = async () =>{
    event.preventDefault();
    const myProduct = { 
        name: document.querySelector("#name").value,
        description: document.querySelector("description").value,
        brand: document.querySelector("#brand").value,
        image: document.querySelector("#imageUrl").value,
        price: document.querySelector("#price").value
    }
    console.log("myProduct", myProduct)
}
//     const response = await addProduct(myProduct)

//     if (response.ok) {
//         alert("Product has been uploaded successfully");
//     } else {
//         alert("Failed to upload product");
//     }
// }