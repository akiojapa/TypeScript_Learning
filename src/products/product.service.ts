import Product from "./Product";
import { ProductType} from "./Types/ProductTypes";

class ProductService {

    async createProduct(data: ProductType) {
        const result = await Product.create(data)
        console.log("Produto criado")
        return result
    }

    async list() {
        const listedProducts = await Product.find()

        return listedProducts
    }

    async find(id) {
        const findedProduct = await Product.findById(id)

        return findedProduct
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await Product.findOneAndUpdate({_id: id}, {
            nome: dataToUpdate.nome,
            qtde: dataToUpdate.qtde,
            preco: dataToUpdate.preco

        }, {new: true})

        return updatedProduct
    }

    async delete(id) {
        await Product.findOneAndDelete({_id: id})
        return
    }

    async getStock() {

        const productList = await this.list()

        const stockProducts = productList.map(item => {
            let stock = {            
            nome: item.nome,
            qtde: item.qtde,
            preco: item.preco,
            valor_stock: item.qtde * item.preco
            }
            return stock
        })

        return stockProducts

    }

}

export default new ProductService()