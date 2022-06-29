
const app = require("./app");
const http = require("http");
const { connectDB } = require("./db/mongoose");

// Error/Exception handling
process
    .on("unhandledRejection", (reason, p) => {
        console.error(reason, "Unhandled Rejection at Promise", p);
    })
    .on("uncaughtException", (err) => {
        console.error(err, "Uncaught Exception thrown");
        process.exit(1);
    });

connectDB()
    .then(() => {
        console.log("MongoDB: Connected to Database !");
        const port = process.env.PORT || 3000;
        app.set("port", port);


        const server = http.createServer(app);
        server.listen(port, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("server started");


        });
    })
    .catch((err) => {
        console.error("Could not connect to MongoDB!");
        console.log(err);
    });
