import express from 'express';
import productsRoutes from "./routes/products.routes.js"
import morgan from "morgan";
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API de Productos. El servidor está en línea y esperando peticiones.');
});

//Routes
app.use(productsRoutes);

//Start server

export default app;