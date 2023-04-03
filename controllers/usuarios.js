const { response, request } = require('express');

const usuariosGet = (req, res) => {

    const query = req.query;

    res.json({
        msg: 'get API - cotrolador',
        query
    });
}

const usuariosPost = (req = request, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - cotrolador',
        body
    });
}


const usuariosPut = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - cotrolador',
        id
    });

}

const usuariosPatch = (req = request, res = response) => {

    res.json({
        msg: 'patch API - cotrolador'
    });

}

const usuariosDelete = (req = request, res = response) => {

    res.json({
        msg: 'delete API - cotrolador'
    });

}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}