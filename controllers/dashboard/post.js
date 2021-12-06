const moment = require('moment')
const posts = [
    {id: 1,title: 'Lorem Ipsum',body: 'Dolar sit amet',createAt: Date()},
    {id: 2,title: 'Lorem Ipsum',body: 'Dolar sit amet',createAt: Date()}
]
module.exports = {
    index: (req, res) => {
        const locals = {
                data: {
            posts: posts.map(i => {
                i.fromNow = moment(i.createAt).fromNow()
                return i
            }),
        },
        contentName: 'Post'
    }
    res.render('pages/dashboard/post', locals)
    }
}