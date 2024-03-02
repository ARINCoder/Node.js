const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Expense = require('./Models/expenseModel')
//Creating an App
app.use(express.json())
//We can declare route
app.get('/', (req, res) => {
    res.send('Hello Rest API')
})
//Lets try and create another route
app.get('/mark', (req, res) => {
    res.send('Mark is a beast, watch out!!. He will execute the program')
})

//Save the data in the database
app.post('/expenses', async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    try {
        const expense = await Expense.create(req.body)
        res.status(200).json(expense);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })

    }

})

//Adding more data in the DataBase
app.get('/expenses', async (req, res) =>{
    try {
        const expense = await Expense.find({})
        res.status(200).json(expense)
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})
//Getting using ID
app.get('/expenses/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const expense = await Expense.findById(id);
        res.status(200).json(expense);
        // const expense = await Expense.findById(id)
        // res.status(200).json(expense)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// Update a data(expense) in the database
app.put('/expenses/:id', async (req, res) =>{
    try{
        const {id} = req.params;
        const expense = await Expense.findByIdAndUpdate(id, req.body);
        if(!expense){
            return res.status(404).json({message: `Cannot find the expense with ID ${id}`});
        }
        const updatedExpense = await Expense.findById(id)
        res.status(200).json(updatedExpense)

    } catch(error){
        res.status(500).json({message: error.message})

    }
})

// app.get('/expenses', async (req, res) => {
//     try {
//         const expense = await Expense.find({})
//         res.status(200).json();
//     } catch (error) {
//         res.status(500).json({ message: error.message })

//     }

// })


//
mongoose.connect('mongodb+srv://MarvinsAPI:<PASSWORD>.@mongodb.rexh3de.mongodb.net/Node_API?retryWrites=true&w=majority&appName=MongoDB')
    .then(() => {
        console.log('Connected to MongoDB')
        PORT = 3000
        app.listen(PORT, () => {
            console.log(`This app is running on port ${PORT}`)
        })
        //
    }).catch((err) => {
        console.log(err)
    })
//

