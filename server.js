const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "1.0";
const ENVIRONMENT = process.env.ENVIRONMENT || "BLUE";

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Portal</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f4f6f8;
                }

                .box {
                    background: white;
                    width: 500px;
                    margin: auto;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                }

                h1 {
                    color: #222;
                }

                .version {
                    font-size: 24px;
                    margin: 20px;
                }
            </style>
        </head>

        <body>
            <div class="box">

                <h1>Student Portal</h1>

                <div class="version">
                    Version: ${VERSION}
                </div>

                <p>
                    Environment:
                    <b>${ENVIRONMENT}</b>
                </p>

                <p>Blue-Green Deployment Demo</p>

            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        version: VERSION,
        environment: ENVIRONMENT
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});