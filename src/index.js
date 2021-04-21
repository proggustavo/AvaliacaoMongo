// arquivo de configuração da aplicação
var http = require("http");
var express = require("express");
var app = express();
const cors = require('cors');
var { nanoid } = require('nanoid');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gustavo:gustavo@cluster0.qezch.mongodb.net/db_fut?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());

// chamada do model
var User = require("./models/user");

var router = express.Router();

router.use(function (req, res, next) {
    console.log("Acesso a primeira camada da aplicação");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    app.use(cors());
    next();
});

//Rota padrão de acesso à aplicação
app.get("/", (req, res) => {
    console.log("Esse é o GET");
    res.json({ message: "Esse é o get"});
});

// Rota padrão /api/users
router.route("/users")

    //Acesso GET /api/users
    .get(function (req, res) {
        User.find( function (error, users) {
            if (error) res.send(error)
            res.json(users)
        }, {limit: 10})
    })

    //Acesso POST /api/users
    .post(function (req, res) {
        const {nmUsuario, nmSobrenome, deEmail, nmSenha, nuIdade, posicaofavorita, peFavorito  } = req.body
        var user = new User({nmUsuario, nmSobrenome, deEmail, nmSenha, nuIdade, posicaofavorita, peFavorito } );
        user.dtCadastro = new Date();
        user.save(function (error){
            if (error) res.send(error);
            res.json({message: "Cadastrado com sucesso"})
        });
    });

//Acesso ../api/users/:id
router.route("/users/:id")

    .get((req, res) => {
        User.findById(req.params.id, (error, user) => {
            if(error) res.send(error);
            res.json(user);
        })
    })

    //Acesso PUT
    .put((req, res) => {
        User.findById(req.params.id, function (error, user){
            if(error) res.send(error);
            user.nmUsuario = req.body.nmUsuario || user.nmUsuario;
            user.nmSobrenome = req.body.nmSobrenome || user.nmSobrenome;
            user.deEmail = req.body.deEmail || user.deEmail;
            user.nuIdade = req.body.nuIdade || user.nuIdade;
            user.dtCadastro = req.body.dtCadastro || user.dtCadastro;
            user.posicaofavorita = req.body.posicaofavorita || user.posicaofavorita;
            user.peFavorito = req.body.peFavorito || user.peFavorito;
            
            user.save((error) => {
                if(error) res.send(error);
                res.json({message: "Usuário atualizado com sucesso"})
            })
        })
    })

    // Acesso delete
    .delete((req, res) => {
        User.remove(
            {
                _id: req.params.id
            }, 
            function (error) {
                if (error) res.send(error);
                    res.json({ message: "Usuário excluído com sucesso!" });
        })
    });

// Adiciona o pré-fixo /api
app.use("/api", router)

//create a server object:
app.listen(3000);
console.log("Iniciando a aplicação");
