const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'shopfast-api' });
});

app.post('/checkout', (req, res) => {
  // TODO: create payment intent, reserve inventory, write order row
  res.status(501).json({ error: 'not implemented' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`shopfast-api listening on ${PORT}`));
