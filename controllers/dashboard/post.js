const moment = require('moment')
const posts = [
    {id: 1,tittle: 'Lorem Ipsum', body: 'Dolar sit amet',createAt: Date()},
    {id: 2,tittle: 'Lorem Ipsum', body: 'Dolar sit amet',createAt: Date()},
]
module.exports = {
    index: (req, res) => {
        const locals = {
            data: {
        posts: posts.map(i => {
            i.fromNow = moment(i.createAt)
        })
            }
        }
    }
}