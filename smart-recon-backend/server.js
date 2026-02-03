require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
app.use(
  cors({
    origin: "https://smart-audit-frontend.onrender.com",
  }),
);
