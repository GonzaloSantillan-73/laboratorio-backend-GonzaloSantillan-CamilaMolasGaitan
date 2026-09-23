import express from 'express'
import {
    mostrarArtesanos,
    crearArtesano,
    actualizarArtesanoId,
    eliminarArtesanoId
} from '../controllers/artesanosController.js'

const routes = express.Router()

routes.get(`/`, mostrarArtesanos)
routes.post(`/crear`, crearArtesano)
routes.delete(`/:id`, eliminarArtesanoId)
routes.put(`/:id`, actualizarArtesanoId)

export default routes