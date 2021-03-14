const weather = require('./index.js')

weather('成都')
.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

