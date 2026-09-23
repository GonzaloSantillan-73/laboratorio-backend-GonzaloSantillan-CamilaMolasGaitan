import express from 'express'
import {
    crearArtesano,
    actualizarArtesanoId
} from '../controllers/artesanosController.js'

const routes = express.Router()

routes.post(`/crear`, crearArtesano)
routes.put(`/:id`, actualizarArtesanoId)

export default routes