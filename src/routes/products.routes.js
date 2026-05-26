import productsControllers from "../controlers/products.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", productsControllers.getAll);
router.get("/getAll", productsControllers.getAll);
router.get("/getOne/:barcode", productsControllers.getOne);
router.post("/insertOne", productsControllers.insertOne);
router.delete("/deleteOne/:barcode", productsControllers.deleteOne);
router.put("/updateOne/:barcode", productsControllers.updateOne);
export default router;