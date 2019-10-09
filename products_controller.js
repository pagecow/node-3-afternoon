module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body;

        dbInstance.create_product([name, description, price, image_url])
            .then( () => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"});
                console.log(err)
            })
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.read_product(id)
            .then( product => res.sendStatus(200).send(product))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went very wrong!"})
                console.log(err)
            })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
            .then( products => res.sendStatus(200).send(products))
            .catch(err => {
                res.sendStatus(500).send({errorMessage: 'Something is very, very wrong! Why are you still here?!'})
                console.log(err)
            })
            },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_product([params.id, query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.sendStatus(500).send({errorMessage: 'Holy Crap, you are still here!! People are dying! Get out while you still have a chance! It is the Joker!! Something is very, very, very wrong!!'})
                console.log(err)
            })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product(id) 
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.sendStatus(500).send({errorMessage: 'Welcome to Heaven! You are dead! Something went very, very, very, very wrong while you were still on Earth. At least you made the real Jesus of the Bible your Lord and Savior while you were alive on the Earth. Now you get to spend eternity in Paradise, unlike the Joker...'})
                console.log(err)
            })
    }
};
