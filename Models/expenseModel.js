const mongoose = require('mongoose')
//Creating a Schema so that the model can interact with the database and define the type of data.
const expenseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Your Expense"]
        },
        amount: {
            type: Number,
            required: [true, "Please Enter the Amount you Spend"],
            default: 0,
        },
        category: {
            type: String,
            required: [true, "Please Select a Category"]
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)
//Creating the model
const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense;
//After this we save the data in the Database
