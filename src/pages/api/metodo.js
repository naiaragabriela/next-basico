export default (req, res) => {
    if(req.methodo === "GET") {
        res.status(200).json({
            nome: "Pedro"
        })
    } else {
        res.status(200).json({
            nome: "Maria"
        })
    }

}