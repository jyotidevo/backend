const cors = require("cors");
const express = require("express");
const db = require("./Config/db");
const app = express();
const PORT = 8000;
const UserRoute = require('./Routes/UserRoute');
const StudentRoute = require('./Routes/StudentRoute');
const ProductRoute = require('./Routes/ProductRoute');


app.use(cors());

app.use(express.json());
app.use('/api/user', UserRoute);
app.use('/api/student', StudentRoute);
app.use('/api/product', ProductRoute);
db.authenticate().then(() => {
    console.log("Database connected successfully");
    db.sync({ alter: true });    //to drop the existing table and create new one
}).catch((err) => {
    console.error("Error connecting to database:", err);
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});