import express, { response } from 'express'; //importar o express que é responsabel por dar ceudos as rotas
import routes from './routes' //./ pois eh um arquivo da mesma aplicacao
import connection from './database/connection'
import path from 'path'


const app = express();

app.use(express.json())//precisa setar para conseguir retorno do insomnia em json
app.use(routes) //para utilizarmos as rotas do arquivo routes
 
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads'))) //funcao static para acesso direto ex:img, pdfs, words, quando deixamos p download, etc

app.listen(3333); //porta que iremos ouvir

