export const upload = async (req, res) => {
    const { filename } = req.file;
    res.status(200).send({
        url: filename
    });
};