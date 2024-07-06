import axios from "axios";

const http = axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
});

export class ProductApiService {
    getProducts() {
        return http.get('');
    }
}