const { checkSchema, validationResult } = require('express-validator')

module.exports = [
    checkSchema({
        namaKelas: {
            notEmpty: true,
            errorMessage: "Nama kelas tidak boleh kosong!"
        },

        kompetensiKeahlian: {
            notEmpty: {
                bail: true,
                errorMessage: "Kompetensi keahlian tidak boleh kosong!"
            },
            isIn: {
                options: [['RPL', 'TKJ']],
                errorMessage: "Kompetensi keahlian hanya dapat diisi 'RPL' atau 'TKJ'"
            },
        }
    }),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }
        else {
            next()
        }
    }
]