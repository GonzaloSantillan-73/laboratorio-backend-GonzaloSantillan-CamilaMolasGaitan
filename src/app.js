import express from 'express'
import artesanosRoutes from './routes/artesanosRoutes.js'

const app = express()
const PORT = 3002

app.use(express.json())

app.use((req, res, next) => {
    console.log(`Method: ${req.method}\nUrl: ${req.url}`)
    next()
})
    
app.use(`/api/artesanos`, artesanosRoutes)

app.use((req, res, next) => {
    const error = new Error(`Ruta no encontrada`)
    error.status = 404
    return next(error)
})

app.use((err, req, res, next) => {
    console.log(`Error capturado por el middleware`)
    console.log(err.message)

    const statuscode = err.status || 500

    res.status(statuscode).json({ message: err.message || `Ha ocurrido un error` })
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto http://localhost:${PORT}`)
})