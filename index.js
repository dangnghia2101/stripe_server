const express = require("express")
const stripe = require("stripe")("sk_test_51LksFaBV28KdDJtDghRwcFhArVGvyu9jl05AZt3xHUOxY8C9FQ1NlIAZv7XxtQopv6pBDpZB3hYHVc7zGB13KNxS00BwXKTRh7");

const PORT = 4000;

const app = express();
app.use(express.static("public"));
app.use(express.json());


app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;

  console.log("=====> REQ ", req)

  const payableAmount = parseInt(amount) * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd' // put your currency
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get('/create-payment', (req, res) => {
  res.send('hello world')
})


app.listen(PORT, () => {
  console.log(`Listening to the port number ${PORT}`)
})