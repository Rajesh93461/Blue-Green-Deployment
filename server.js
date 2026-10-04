const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "1.0";
const ENVIRONMENT = process.env.ENVIRONMENT || "BLUE";

const isGreen = ENVIRONMENT === "GREEN";

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Blue-Green Deployment | Student Portal</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Segoe UI", Arial, sans-serif;
            min-height: 100vh;
            background:
                radial-gradient(circle at top left, #1e3a8a, transparent 35%),
                radial-gradient(circle at bottom right, #065f46, transparent 35%),
                #0f172a;
            color: white;
            padding: 40px 20px;
        }

        .container {
            max-width: 1100px;
            margin: auto;
        }

        /* Header */

        .header {
            text-align: center;
            margin-bottom: 35px;
        }

        .logo {
            font-size: 48px;
            margin-bottom: 10px;
        }

        .header h1 {
            font-size: 38px;
            margin-bottom: 10px;
        }

        .header p {
            color: #cbd5e1;
            font-size: 17px;
        }

        /* Main Card */

        .main-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(18px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.35);
            margin-bottom: 25px;
        }

        .deployment-status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .status-title {
            font-size: 18px;
            color: #cbd5e1;
            margin-bottom: 8px;
        }

        .environment {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 18px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 15px;
            background: ${isGreen ? "#064e3b" : "#1e3a8a"};
            border: 1px solid ${isGreen ? "#10b981" : "#3b82f6"};
        }

        .dot {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: ${isGreen ? "#22c55e" : "#60a5fa"};
            box-shadow: 0 0 12px ${isGreen ? "#22c55e" : "#60a5fa"};
        }

        /* Version */

        .version-box {
            text-align: center;
            margin: 35px 0;
        }

        .version-label {
            color: #94a3b8;
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .version {
            font-size: 80px;
            font-weight: 800;
            background: linear-gradient(90deg, #60a5fa, #34d399);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 5px 0;
        }

        .version-text {
            color: #cbd5e1;
            font-size: 16px;
        }

        /* Health */

        .health {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #86efac;
            font-weight: bold;
            font-size: 17px;
        }

        .health-dot {
            width: 12px;
            height: 12px;
            background: #22c55e;
            border-radius: 50%;
            box-shadow: 0 0 15px #22c55e;
        }

        /* Cards */

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 25px;
        }

        .card {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 18px;
            padding: 25px;
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-6px);
            background: rgba(255,255,255,0.11);
        }

        .card-icon {
            font-size: 30px;
            margin-bottom: 12px;
        }

        .card h3 {
            margin-bottom: 8px;
        }

        .card p {
            color: #94a3b8;
            font-size: 14px;
            line-height: 1.6;
        }

        /* Workflow */

        .workflow {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 25px;
        }

        .workflow h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        .steps {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
        }

        .step {
            background: #1e293b;
            border: 1px solid #334155;
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 14px;
            text-align: center;
        }

        .arrow {
            color: #60a5fa;
            font-size: 20px;
        }

        /* Footer */

        footer {
            text-align: center;
            color: #64748b;
            font-size: 14px;
            padding: 20px;
        }

        .devops {
            color: #60a5fa;
            font-weight: bold;
        }

        /* Responsive */

        @media (max-width: 750px) {

            .cards {
                grid-template-columns: 1fr;
            }

            .header h1 {
                font-size: 28px;
            }

            .main-card {
                padding: 25px;
            }

            .version {
                font-size: 60px;
            }

            .steps {
                flex-direction: column;
            }

            .arrow {
                transform: rotate(90deg);
            }
        }

    </style>
</head>

<body>

<div class="container">

    <div class="header">
        <div class="logo">🚀</div>

        <h1>Student Portal</h1>

        <p>
            Blue-Green Deployment Demonstration
        </p>
    </div>


    <div class="main-card">

        <div class="deployment-status">

            <div>
                <div class="status-title">
                    Current Deployment
                </div>

                <h2>
                    ${ENVIRONMENT} Environment
                </h2>
            </div>

            <div class="environment">

                <span class="dot"></span>

                ${ENVIRONMENT} ACTIVE

            </div>

        </div>


        <div class="version-box">

            <div class="version-label">
                Application Version
            </div>

            <div class="version">
                v${VERSION}
            </div>

            <div class="version-text">
                Currently serving users through the
                ${ENVIRONMENT} environment
            </div>

        </div>


        <div class="health">

            <span class="health-dot"></span>

            Application Healthy & Running

        </div>

    </div>


    <div class="cards">

        <div class="card">

            <div class="card-icon">🐳</div>

            <h3>Docker</h3>

            <p>
                Application is packaged and deployed
                using a Docker container.
            </p>

        </div>


        <div class="card">

            <div class="card-icon">⚙️</div>

            <h3>Jenkins</h3>

            <p>
                Continuous integration and deployment
                pipeline automates the release process.
            </p>

        </div>


        <div class="card">

            <div class="card-icon">🔄</div>

            <h3>Blue-Green</h3>

            <p>
                New versions are tested separately
                before traffic is switched.
            </p>

        </div>

    </div>


    <div class="workflow">

        <h2>Deployment Workflow</h2>

        <div class="steps">

            <div class="step">👨‍💻 Developer</div>

            <div class="arrow">→</div>

            <div class="step">📦 GitHub</div>

            <div class="arrow">→</div>

            <div class="step">⚙️ Jenkins</div>

            <div class="arrow">→</div>

            <div class="step">🐳 Docker</div>

            <div class="arrow">→</div>

            <div class="step">🟢 Green</div>

            <div class="arrow">→</div>

            <div class="step">🌐 Traffic Switch</div>

        </div>

    </div>


    <footer>

        <span class="devops">
            Blue-Green Deployment
        </span>

        • DevOps Project

        <br><br>

        Safe Deployment • Zero Downtime • Easy Rollback

    </footer>

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

    console.log(
        `Application running on port ${PORT}`
    );

});