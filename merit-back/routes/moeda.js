var express = require('express');
var router = express.Router();

let extrato = [
  {
    id: 1, //id sequencial da transacao
    usr: 1, //usr origem
    usr_destino: 2, //usr destino
    data_movimentacao: '2019-08-01',
    tipo_movimentacao: 'TRANSFERENCIA', //TRANSFERENCIA, CREDITO, RESGATE
    historico: 'TRANSFERENCIA DO USR 1 PARA USR 2',
    valor: 10
  },
  {
    id: 2, //id sequencial da transacao
    usr: 0, //usr origem (COFRE = USR = 0)
    usr_destino: 1, //usr destino
    data_movimentacao: '2019-08-02',
    tipo_movimentacao: 'CREDITO', //TRANSFERENCIA, CREDITO, RESGATE
    historico: 'TRANSFERENCIA DO COFRE PARA USR 1',
    valor: 100
   },
   {
    id: 3, //id sequencial da transacao
    usr: 1, //usr origem
    usr_destino: 0, //usr destino (COFRE = USR = 0)
    data_movimentacao: '2019-08-03',
    tipo_movimentacao: 'RESGATE', //TRANSFERENCIA, CREDITO, RESGATE
    historico: 'RESGATE PREMIO: PS4',
    valor: 110
   },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('moeda');
});

//solicitar credito mensal 100und
router.get('/', function(req, res, next) {
  //verificar se usr já solicitou crédito no mes atual
  //chamar método de transferencia do usr = 0 (cofre) origem para usr logado destino
  //metodo_transferencia
  res.send('moeda');
});

//listar movimento do perido
//filtro de data e retornar obj com id trans, data, tipo movim, valor
//Metodo com periodo inicial e periodo final

//retornar saldo atual do usr logado


module.exports = router;
