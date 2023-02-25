const orphanages =  require('./database/fakedata.js');



module.exports = {

    index(req, res){
        const city = req.query.city;
        return res.render('index')
    },
    createOrphanage(req, res){
        return res.render('create-orphanage')
    },
    orphanage(req, res){
       
        return res.render('orphanage')
    },
    orphanages(req, res){
        
        return res.render('orphanages', {orphanages})
    }
}