
export async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getProductById(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch product with id");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}