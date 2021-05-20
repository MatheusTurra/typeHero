const Text = require("../models/Text");

module.exports = {

    async showTexts(req, res) {
        const allTexts = await Text.findAll({
            attributes: ["id", "text"]
        });
        
        return res.json(allTexts);
    },

    async createText(req, res) {
        const { text } = req.body;

        const createdText = Text.create({"text": text});
        
        return res.json({createdText});
    },

    async deleteText(req, res) {
        const urlParam = req.params;

        const removedText = Text.destroy({
            where: {
                "id": urlParam.id
            }
        });

        res.json({removedText});
    },

    async updateText(req, res) {
        const urlParam = req.params;
        const newText = req.body.text;

        const updatedText = Text.update({text: newText}, {
            where: {
                "id": urlParam.id
            }
        })

        res.json({updatedText});
    }
}