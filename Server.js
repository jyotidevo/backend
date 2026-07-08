
const cors = require("cors");
const express = require("express");
const db = require("./Config/db");

const app = express();
const PORT = process.env.PORT || 8000;



const userRoutes = require("./Routes/UserRoute");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Backend API is running" });
});

app.use("/api/users", userRoutes);

const startServer = async () => {
    try {
        await db.authenticate();
        console.log("Database connected successfully");

        await db.sync();
        console.log("Database synced successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
};

startServer();
