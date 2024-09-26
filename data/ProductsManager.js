import { resolve } from "path";
import crypto from "crypto"

class ProductsManager {
    static #all = [{
        id: crypto.randomBytes(12).toString("hex"),
        category: "shoes",
        tittle: "ladystork00,",
        prine: 100,
        stock: 1000,
        photo: "photo.png",
    },{
        id: crypto.randomBytes(12).toString("hex"),
        category: "shoes",
        tittle: "manstork,",
        prine: 50,
        stock: 2000,
        photo: "photo.png",
    }];
    create(data){
        const promesa = new Promise((resolve, reject) => {
            try{
                data.id = crypto.randomBytes(12).toString("hex"),
                ProductsManager.#all.push(data);
                console.log("exito al crear: ID-" + data.id);
                resolve(data);
            }   catch (error){
                reject(error);
            }
        });
        return promesa;
    }
    readAll() {
        try {
            const promesa = new Promise((resolve, reject) => {
                if (ProductsManager.#all.length > 0){
                    resolve(ProductsManager.#all);
                }   else{
                    reject("error al leer todos");
                }
            });
            return promesa;
        }   catch (error){
            reject(error);
        }
    }
}

async function test() {
    try {
        const manager = new ProductsManager();
        await manager.readAll();
        manager.create({
            category: "shoes",
            tittle: "ladystork00,",
            prine: 100,
            stock: 1000,
            photo: "photo.png",
        });
        manager.create({
            category: "shoes",
            title: "nike",
            price: 120,
            stock: 500,
            photo: "photo2.jpg",
        });
        await manager.readAll();
    }   catch (error) {
        console.log(error);
    }
}

// test();

const productsManager = new ProductsManager();
export default ProductsManager
// 6. exporto