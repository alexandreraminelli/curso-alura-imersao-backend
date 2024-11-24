import express from "express" // importação do Express

/* Criar variável para usar o Express
 *  Executa função express que inicia o servidor
 */
const app = express()
app.listen(
  3000, // porta utilizada pelo servidor
  () => {
    /* função executada ao acessar o servidor */

    console.log("Servidor em funcionamento...")
  }
)
/*
 * Porta utilizada: onde o servidor irá aguardar uma requisição
 */

//
app.get(
  "/api", // endpoint
  (
    req, // requisição
    res // resposta
  ) => {
    // mandar resposta com o status e um texto
    res.status(200).send("Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque cras integer risus varius; metus dictum suscipit.")
  }
)
