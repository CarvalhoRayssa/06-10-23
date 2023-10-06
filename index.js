const express = require('express')
const app = express()
const port = 3000


app.get('/avioes',(req, res) => {
    const fs = require('fs');
    let rawdata = fs.readFileSync('avioes.json');
    let avioes = JSON.parse(rawdata);
    res.send(avioes);
  });
  
  app.get('/boeing', (req, res) => {
    const filesystem = require('fs');
    let dados = filesystem.readFileSync('avioes.json')
    let avioes = JSON.parse(dados);
    let aviaoBuscado = [];
  
   avioes.forEach(aviao => {
    if(aviao.fabricante == 'Boeing'){
      aviaoBuscado.push(aviao)
    }
   });
   res.send(aviaoBuscado)
  })

  app.get('/avioesnovos', (req, res) => {
    const filesystem = require('fs');
    let dados = filesystem.readFileSync('avioes.json')
    let avioes = JSON.parse(dados);
    let avioesBuscado = [];
  
   avioes.forEach(aviao => {
    if(aviao.ano > 2010){
      avioesBuscado.push(aviao)
    }
   });
   res.send(avioesBuscado);
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  