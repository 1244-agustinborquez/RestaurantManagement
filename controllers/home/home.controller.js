

const homeController = async (req,res,next) => {
    await res.render('home')
}



module.exports = {
    homeController
};