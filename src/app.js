import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import { errorHandler } from "./errors";
import { categoryRouter, productRouter } from "./routers";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();
app.use(json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true, customSiteTitle: "Products&Categories - API" }));

app.use(errorHandler);

export default app