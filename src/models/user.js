var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // cdUsuario: String, 
    cdLocal: String,
    cdContexto: String,
    nmUsuario: String,
    nmSenha: String,
    nmSobrenome: String,
    deEmail: String,
    nuIdade: String,
    dtCadastro: String,
    posicaofavorita: String,
    peFavorito: String,
});

module.exports = mongoose.model("User", UserSchema)