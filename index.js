const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send(`
    <html>
        <body>
            The Acme
        </body>
    </html>
    `)
})






const port = process.env.PORT || 3000

const init = async () => {

    app.listen(port, ()=> {
        console.log(`listening on port ${port}`)
    })   
}

init()
