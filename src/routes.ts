import {Router} from 'express'
import userController from './user/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'
import pokemonController from './pokemon/pokemon.controller'
import teamController from './team/team.controller'


const routes = Router()



// Pokemons //
routes.get('/pokemonsURL', pokemonController.Pokecreate)
routes.post('/savepokemons', pokemonController.SavePokeData)
routes.get('/savetype', pokemonController.savetype)
routes.get('/pokemons', pokemonController.list)
routes.get('/pokemonsDex/:dex', pokemonController.findDex)
routes.get('/pokemonsType/:type', pokemonController.findType)
routes.get('/pokemonsMove/:move', pokemonController.findMove)

//  Team  //

routes.post('/teamCreate', teamController.create)
routes.get('/teams', teamController.list)
routes.get('/trainerName/:trainerName', teamController.findTrainer)
routes.put('/trainerName/:trainerName', teamController.updateByTrainer)
routes.delete('/trainerName/:trainerName', teamController.deleteByTrainer)

// Products //
routes.post('/product', productController.create)
routes.get('/product', productController.list)
routes.get('/product/:id', productController.find)
routes.put('/product/:id', productController.update)
routes.delete('/product/:id', productController.delete)
routes.get('/products/random', productController.random)

// Stock //

routes.get('/stock', stockController.stock)
routes.get('/stock/value', stockController.totalvalue)

// Read and Write file //

routes.get('/readfile', productController.ProductreadFile)
routes.get('/writefile', productController.ProductWriteFile)

// Users //

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

export default routes