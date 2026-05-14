const url = 'http://localhost:5173/produtos'

async function createProduct(product) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json"
            }
        })

        const data = await response.json()
        return data
    } catch (err) {
        return { msg: err.message }
    }
}

async function updateProduct(product) {
    try {
        const response = await fetch(`${url}/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json"
            }
        })

        const data = await response.json()
        return data
    } catch (err) {
        return { msg: err.message }
    }
}

async function getProduct(product) {
    try {
        const response = await fetch(`${url}/${product.id}`)

        const data = await response.json()
        return data
    } catch (err) {
        return { msg: err.message }
    }
}

async function listProducts() {
    try {
        const response = await fetch(url)

        const data = await response.json()
        return data
    } catch (err) {
        return { msg: err.message }
    }
}

async function deleteProduct(product) {
    try {
        const response = await fetch(`${url}/${product.id}`, {
            method: 'DELETE'
        })

        const data = await response.json()
        return data
    } catch (err) {
        return { msg: err.message }
    }
}

export { createProduct, listProducts, updateProduct, deleteProduct, getProduct }