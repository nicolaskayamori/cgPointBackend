const Point = require("../models/point.model")

const getAllPoints = async (req, res) => {
    try {
        const points = await Point.find({})
        res.status(200).json(points)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getPoint = async (req, res) => {
    try {
        const { id } = req.params;
        const point = await Point.findById(id)
        res.status(200).json(point)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postPoint = async (req, res) => {
    try {
        const point = await Point.create(req.body);
        res.status(200).json(point);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putPoint = async (req, res) => {
    try {
        const { id } = req.params;

        const point = await Point.findByIdAndUpdate(id, req.body);

        if (!point) {
            return res.status(404).json({ message: "Point não achado" })
        }

        const updatedPoint = await Point.findById(id);
        res.status(200).json(updatedPoint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deletePoint = async (req, res) => {
    try {
        const { id } = req.params;

        const point = await Point.findByIdAndDelete(id)

        if (!point) {
            res.status(404).json({ message: "Point não foi encontrado" });
        } else {
            res.status(200).json({ message: "Point deletado com sucesso!" })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getPoint,
    getAllPoints,
    postPoint,
    putPoint,
    deletePoint,
}