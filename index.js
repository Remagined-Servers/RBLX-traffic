const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const discordWebhook = "https://discord.com/api/webhooks/1366060956072939581/_ahfJu2oqH2XXGN-jNHR0jM86EXW8A7LOSa4kE1s2ayBW2zCGi9-ARpXJ0uk09q1h-lF";

app.post('/forward', async (req, res) => {
    try {
        await axios.post(discordWebhook, { content: req.body.content });
        res.sendStatus(200);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/', (req, res) => {
    res.send('Proxy is running.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy running on port ${port}`));
