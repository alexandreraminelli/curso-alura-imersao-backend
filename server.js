import express from "express" // importação do Express

/*
 * Array (lista) de posts com fotos e textos.
 * Array de objetos (delimitados por {}).
 *
 * Mock: base de dados de exemplo.
 *
 * Toda vez que cria um registro numa base de dados, é necessário criar um identificador (id).
 */
const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato brincando com um novelo de lã",
    imagem: "https://placekitten.com/400/200",
  },
  {
    id: 3,
    descricao: "Paisagem com um pôr do sol incrível",
    imagem: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 4,
    descricao: "Cachorro correndo na praia",
    imagem: "https://place.dog/200/300",
  },
  {
    id: 5,
    descricao: "Comida deliciosa e colorida",
    imagem: "https://loremflickr.com/320/240/food",
  },
  {
    id: 6,
    descricao: "Uma bela flor em close",
    imagem: "https://placecats.com/millie/300/150",
  },
]

/* Criar variável para usar o Express
 *  Executa função express que inicia o servidor
 */
const app = express()

// Rota para converter texto em server.
app.use(express.json())

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

// Criação de rota do tipo get
// GET: obtêm dados do servidor
app.get(
  "/posts", // endpoint
  (
    req, // requisição
    res // resposta
  ) => {
    // mandar resposta com o status e um texto
    // status - Código HTTP 200: OK (tudo certo :) !)
    res.status(200).json(posts)
  }
)

/**
 *
 */
function buscarPostPorId(id) {
  // findIndex - método que busca por id
  return posts.findIndex((post) => {
    // Retornar o objeto post cujo id corresponde ao informado
    return post.id === Number(id)
  })
}

app.get(
  "/posts/:id", // endpoint
  // :id - substituído por um dado variável no browser
  (
    req, // requisição
    res // resposta
  ) => {
    // chamar a função e obter o objeto
    const index = buscarPostPorId(req.params.id)

    // mandar resposta com o objeto solicitado
    res.status(200).json(posts[index])
  }
)
