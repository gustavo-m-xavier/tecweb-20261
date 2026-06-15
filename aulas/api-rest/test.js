import { createProduct, listProducts, getProduct, updateProduct, deleteProduct } from "./client.js";

const product = {
    "name": "melão",
    "price": 1.8,
    "quantity": 24,
}

async function main() {
    const createResponse = await createProduct(product)
    console.log(createResponse)

    const listResponse = await listProducts()
    console.log(listResponse) 
    
    const getProductResponse = await getProduct(listResponse[0])
    console.log(getProductResponse)

    getProductResponse.name = "limão"
    getProductResponse.price = 0.5
    const updateResponse = await updateProduct(getProductResponse)
    console.log(updateResponse)

    const deleteResponse = await deleteProduct(updateResponse)
    console.log(updateResponse)
}

main()