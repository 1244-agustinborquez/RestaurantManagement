const {DB,DB_HOST,DB_PORT,DB_NAME} = process.env
module.exports = {
    mongoDB: {
        URI: `${DB}://${DB_HOST}:${DB_PORT}/${DB_NAME}`
    }
}