const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let vet = []
let objeto = {}

app.get('/mostrar', (req, res) => {
  res.send(vet)
})

app.post('/mandar', (req, res) => {

  let nome = req.query.n1
  let senha = req.query.n2

  if(nome != "" && senha != ""){

    objeto = {
      name:nome,
      senha:senha
    }
    vet.push(objeto)

    res.send(vet)

  }else{

    res.send("preencha os campos")

  }
})

app.delete('/deletar', (req, res) => {
    let posicao = req.query.posicao 
    let senha = req.query.senha 

    if(vet[posicao].senha == senha){

      vet[posicao] = ""
      res.send(vet)

    }

})

app.put('/editar', (req, res) => {
  let posicao = req.query.posicao 
  let senha = req.query.senha 
  let novaSenha = req.query.senhanova 
  let novaNome = req.query.novonome 

  if(vet[posicao].senha == senha){

    vet[posicao] = {
      name:novaNome,
      senha:novaSenha
    }
    res.send(vet)

  }

})

app.listen(port, () => {
  console.log(`tá funcionando na porta ${port}`)
})