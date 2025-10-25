const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

const produtos = [
    { id: 1, nome: 'Smartphone Motorola G85', marca: 'Motorola', preco: 1800.00, quantidade: 50 }, 
    { id: 2, nome: 'TV Lg 42 polegadas', marca: 'Motorola', preco: 1499.99, quantidade: 12 },
    { id: 3, nome: 'Notebook Dell Inspiron', marca: 'Dell', preco: 3299.99, quantidade: 8 },
    { id: 4, nome: 'Smartphone Galaxy S23', marca: 'Samsung', preco: 2899.00, quantidade: 15 },
    { id: 5, nome: 'Tablet iPad Air', marca: 'Apple', preco: 4199.90, quantidade: 6 },
    { id: 6, nome: 'Fone de Ouvido Bluetooth', marca: 'JBL', preco: 299.99, quantidade: 25 },
    { id: 7, nome: 'Mouse Gamer RGB', marca: 'Logitech', preco: 189.90, quantidade: 30 },
    { id: 8, nome: 'Teclado Mecânico', marca: 'Razer', preco: 599.00, quantidade: 18 },
    { id: 9, nome: 'Monitor 27 polegadas', marca: 'LG', preco: 1299.99, quantidade: 10 },
    { id: 10, nome: 'Cadeira Gamer', marca: 'ThunderX3', preco: 899.90, quantidade: 14 },

]
/** Ponto de entrada raíz da aplicação 
 * @param req objeto com os dados da requisição HTTP
 * @param res objeto para tratar a resposta HTTP
*/
app.get('/', (req, res) => { res.redirect('/produtos') })
/** Devolve a lista de todos os produtos */
app.get('/produtos', (req, res) => { res.json(produtos) })
/** Devolve um produto específico pelo seu id */
app.get('/produtos/:id', (req, res) => {
    const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { 
          res.json(prod) 
        } else { 
          res.json({}) 
        }
    } else {
      res.json({})
    }
})
//Obter o preço de um produto dado o seu id
app.get('/produtos/:id/preco', (req, res) => {
  const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { 
          res.json(prod.preco) 
        } else { 
          res.json({}) 
        }
    } else {
      res.json({})
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})