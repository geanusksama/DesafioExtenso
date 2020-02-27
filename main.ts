import * as restify from 'restify'
import { numeroPorExtenso } from './convert';

//instanciando o servidor restify
const server = restify.createServer({
    name:'Servidor CERTI',
    version:'1.0.1'
})
 
server.use(restify.plugins.queryParser())
//preparando URL 
server.get('/:numero',(req,res,next)=>{
    
    //verificando se o valor é negativo para concatenar 
    //o valor com a palavra
   if(req.params.numero[0]=='-'){
    var monta = "Menos "+numeroPorExtenso(req.params.numero) 
    res.json({   
        extenso:monta   
     })//se não mostra o Json normal
   }else{
    res.json({   
        extenso:numeroPorExtenso(req.params.numero)   
     }) 
   }
   return next
})
//definindo a porta 
server.listen(3000,()=>{
    console.log("Escutando em  http://localhost:3000")
})
