import { artesanos } from "../data/artesanos.js"

export const mostrarArtesanos = (req, res) => {
    res.json(artesanos)
}

export const crearArtesano = (req, res, next) => {
    if (!req.body.nombre || !req.body.localidad || !req.body.rubro) {
        const error = new Error(`Los campos 'nombre', 'localidad' y 'rubro' son obligatorios.`)
        error.status = 400
        return next(error)
    }

    const nuevoArtesano = {
        id: artesanos.length + 1,
        nombre: req.body.nombre,
        localidad: req.body.localidad,
        rubro: req.body.rubro,
        estado: `PENDIENTE`
    }
    artesanos.push(nuevoArtesano)
    res.status(201).json(nuevoArtesano)
}

export const actualizarArtesanoId = (req, res, next) => {
    const id = parseInt(req.params.id)
    const artesano = artesanos.find(a => a.id === id)
    
    if (!artesano) {
        const error = new Error(`El artesano no existe`)
        error.status = 404
        return next(error)
    }

    if (!req.body.nombre || !req.body.localidad || !req.body.rubro || !req.body.estado) {
        const error = new Error(`Los campos 'nombre', 'localidad', 'rubro' y 'estado' son obligatorios.`)
        error.status = 400
        return next(error)
    }

    artesano.nombre = req.body.nombre
    artesano.localidad = req.body.localidad
    artesano.rubro = req.body.rubro
    artesano.estado = req.body.estado
    
    res.json(artesano)
}

export const eliminarArtesanoId = (req, res, next) => {
    const id = parseInt(req.params.id)
    const index = artesanos.findIndex(a => a.id === id)
    if (index === -1) {
        const error = new Error(`El artesano no existe`)
        error.status = 404
        return next(error)
    }
    artesanos.splice(index, 1)
    res.status(204).send()
}