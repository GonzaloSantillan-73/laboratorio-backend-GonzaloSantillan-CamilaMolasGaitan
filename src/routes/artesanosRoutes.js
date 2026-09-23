import express from 'express'
import {
    mostrarArtesanos,
    crearArtesano,
    actualizarArtesanoId
} from '../controllers/artesanosController.js'

const routes = express.Router()

routes.get(`/`, mostrarArtesanos)
routes.post(`/crear`, crearArtesano)
routes.put(`/:id`, actualizarArtesanoId)

export default routes