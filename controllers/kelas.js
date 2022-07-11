const { Kelas } = require('../models')

module.exports = {

    get: async function (req, res) {
        res.send(await Kelas.findAll())
        // include: [{ model: Siswa, as: 'siswa', include: [{ model: Pembayaran, as: 'pembayaran' }] }]
    },

    getById: async function (req, res) {
        const result = await Kelas.findByPk(req.params.id)
        res.send()
    },

    insert: async function (req, res) {
        const result = await Kelas.create(req.body)
        res.send(result)
    },

    update: async function (req, res) {
        const { id } = req.params
        const result = await Kelas.update(req.body, { where: { id } })
        res.send(result)
    },

    destroy: async function (req, res) {
        const { id } = req.params
        const result = await Kelas.destroy({ where: { id } })
        res.json(result)
    }

}