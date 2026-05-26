import app from "./app.js";
import mongoose from "./database.js";

const PORT = process.env.PORT || 3000;

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});