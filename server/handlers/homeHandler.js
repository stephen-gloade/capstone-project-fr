const getHome = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Hello World"
    })
}

module.exports = { getHome }