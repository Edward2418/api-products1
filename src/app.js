import express from 'express';
import productsRoutes from "./routes/products.routes.js"
import morgan from "morgan";
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routes

app.use(productsRoutes);

//Start server 

export default app;

