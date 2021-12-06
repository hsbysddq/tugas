// const { Post, Visitor } = require('../../models')

module.exports = {
    home: async (req, res) => {
        const locals = {
            data: [{
                Post: await Post.count(), 
                Visitor: await Visitor.count()
                // Reader: await Post.Sum('read')
            }],
            contentName: 'Statistic',
            layout: 'layouts/dashboard'
        }
        res.render('pages/dashboard/home', locals)
    },
    post: require('./post')
}