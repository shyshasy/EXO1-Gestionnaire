import express from "express";
import bodyParser from "body-parser";
import { Customer } from "./gestionComande.js";

const app = express();
const port = 3080;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Bonjour les simploniens");
});
app.post("/customers", (req, res) => {
  const customer = new Customer();
  customer.createCustomer({ id: 1, name: "Fatima", email: "fatima@gmail.com" });
  res.send(`Welcome ${customer.name}`);
});

app.put("/customers/:id", (req, res) => {
  // declaration du modele
  const customer = new Customer();
  customer.loadDataFromDb({ id: 5, name: "Mariame", email: "mari@gmail.com" });
  console.log(`old id is ${customer.id}`);

  customer.editCustomer({ id: 10, name: "Harouna", email: "hr@gmail.com" });
  console.log(`current id is ${customer.id}`);
  res.send(`Welcome ${customer.name}`);
});
app.listen(port, () => {
  console.log(`L'application est en ecoute sur port ${port}`);
});
