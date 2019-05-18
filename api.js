`use strict`
const debug = require('debug')('sena:api:routes')
const express = require('express')
const api = express.Router()

const userList = require('./Utils/user')

api.get('/user',(req, res) => {
    debug('A request has come to /user')
    res.send({
        data: userList,
        message: 'User list'
    })
})

api.get('/user/:uuid',(req, res, next) => {
    const { uuid } = req.params 
    if(!(uuid >= 0 && uuid <4)){
        return next(new Error('User not found'))
    }
    res.send({
        data: userList[uuid],
        message: 'User post'
    })
})

api.get('/user/:uuid/:type',(req, res) =>{
    const {uuid, type} = req.params
    res.send({uuid,type})
})

api.post('/user', (req,res) => {
    debug('A request has come to /user with post')
    res.send({
        data: userList[0],
        message: 'User post'
    })
})

api.put('/user/:uuid', (req, res) => {
    debug('A request has come to /user with put')
    res.send({
        data: userList,
        message: 'User update'
    })
})

api.delete('/user', (req, res) => {
    debug('A request has come to /user with delete')
    res.send({
        data: userList[0],
        message: 'User delete'
    })
})

module.exports = api
