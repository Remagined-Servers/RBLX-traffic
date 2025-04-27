const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const discordWebhook = "https://discord.com/api/webhooks/yourWebhook"; // <-- replace with YOUR webhook

app.post('/forward', async (req, res) => {
    try {
        await axios.post(discordWebhook, { content: req.body.content });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.get('/', (req, res) => {
    res.send('Proxy is running.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy running on port ${port}`));
