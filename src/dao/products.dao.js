const productsDAO={};
import Product from "../models/Product.js";
productsDAO.getAll = async() => {
    return await Product.find();

}
productsDAO.getOne = async(barcode) => {
    const product = await Product.findOne({
        barcode: barcode
    });
    return product;
}
productsDAO.insertOne = async(product) => {
    const newProduct = await Product.create(product);
    return newProduct;
};
productsDAO.deleteOne = async(barcode) => {
    const deletedProduct = await Product.findOneAndDelete({barcode : barcode});
    return deletedProduct;
}
productsDAO.updateOne = async(barcode,product) => {
    const updatedProduct = await Product.findOneAndUpdate({barcode : barcode},product);
    return updatedProduct;
}
export default productsDAO;