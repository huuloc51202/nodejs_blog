const mongoose = require('mongoose');

async function connect (){
    try {
        await mongoose.connect('mongodb://localhost:27017/kc_blog_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('successful');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect };