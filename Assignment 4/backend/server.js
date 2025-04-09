const express = require('express');
const app = express();  
const PORT = 500;

app.use(express.json());

//GET
app.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to Express!" });
});



// In-memory users array
let users = [
    {id: 1, name: "Alice", email: "alice@example.com"},
    {id: 2, name: "Bob", email: "bob@example.com"},
    {id: 3, name: "Charlie", email: "charlie@example.com"}
];

//GET all users
app.get("/users",(req,res)=>{
    res.json(users);
});


//POST new user
app.post("/users",(req,res)=>{
    const { name, email }= req.body;
    const newUser = {id:Date.now(),name,email};
    users.push(newUser);
    res.status(201).json(newUser); // Respond with the created user
});


//PUT update user
app.put("/users/:id",(req,res)=>{
    const {id} = req.params;
    const {name,email} = req.body;
    const user = users.find(user => user.id === parseInt(id));
    if(!user){
        return res.status(404).json({message:"User not found"});
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    res.json(user); 
});


//DELETE user
app.delete("/users/:id",(req,res)=>{
    const {id} = req.params;
    users = users.filter((u) => u.id !== parseInt(id));
    res.json({message: "User deleted"});
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});