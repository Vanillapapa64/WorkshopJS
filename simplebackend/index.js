const express=require('express')
const app=express()
app.use(express.json())
const port=3000
app.listen(port)
console.log(`App listening at ${port} port`)
const database=[
    {
        id:1,
        name:"Navkirat",
        age:18
    },
    {
        id:2,
        name:"Harman",
        age:20
    },
    {
        id:3,
        name:"Karan",
        age:16
    }
]



app.post('/greet',async(req,res)=>{
    const body=req.body;
    console.log(body)
    const response=`Good morning Mr.${body.name}`
    res.json({response})
})

app.get('/legal',async(req,res)=>{
    const legalnames=database.filter(data=>data.age>=18)
    res.json({legalname:legalnames})
})
app.post('/createuser',async(req,res)=>{
    const body=req.body;
    database.push({
        id:(database.length+1),
        name:body.name,
        age:body.age
    })
    res.json(database)
})
app.put('/update',async(req,res)=>{
    const id=req.headers.id;
    const newage=req.body;
    const person=database.find(name=>name.id===parseInt(id))
    person.age=newage.age
    res.json({database})
})
app.delete('/delete',async(req,res)=>{
    const id = req.headers.id;
    const person=database.pop({id:parseInt(id)})
    res.json(database)
})