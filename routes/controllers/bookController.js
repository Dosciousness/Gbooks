const db = require("../../models")

module.exports = {
    add: function (req, res) {

        const newBook = req.body;
        db.book.create(newBook)
            .then(function (dataBack) {
                res.json(dataBack)
            })
    },
    getAll: function (req, res) {

        db.book.find({}).then(function (dataBack) {
            console.log(dataBack)
            res.json(dataBack)
        })
    },
    delOne: function (req, res) {
        const id = req.params.id;
        console.log("/delete")
        db.book.deleteOne({"_id":id}).then(function (dataBack){
            res.json(id)
        })
    }

}