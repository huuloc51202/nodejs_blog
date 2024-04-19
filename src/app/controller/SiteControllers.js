const Course = require('../models/Course');
class SiteController {
    //[Get] /home
    index(req, res, next) {


        Course.find().exec()
            .then(courses => {
                // Xử lý kết quả
                courses = courses.map(course => course.toObject())
                res.render('home', {courses});
            })
            .catch(err => {
                // Xử lý lỗi
                next(err);
            });


        // res.render('home');
    }

    // [Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
