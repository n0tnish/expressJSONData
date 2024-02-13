import express from 'express'
const app = express( )
// router
const router = express.Router( )
// port number
const port = +process.env.PORT || 4000 
// JSON DATA
const dataUrl = 'https://sjodie1157.github.io/todayPortfolioData/data/'
// middleware
app.use(
    router
)
// Home page
router.get('^/$|/ejd', (req, res) => { 
    res.json({
        status: res.statusCode,
        msg: 'This is the home page'
    })
})
//education
router.get('/education', async (req, res) => { 
    let { education } = await (await fetch(dataUrl)).json()
    // or 
    /*
    let res = await fetch(dataURL).json( )
    let{ education } = await res 
    */
   
    res.json({
        status: res.statusCode,
        education
    })
})
app.listen(port , () => {
    console.log(`Server is running on port http://localhost:${port}`);
})