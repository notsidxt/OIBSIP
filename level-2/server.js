require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const secretKey = "secret";
const saltRounds = 10;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
  user: { type: String, lowercase: true },
  pass: { type: String },
});

const User = mongoose.model("User", userSchema);

app.post('/api/signup', async (req, res) => {
    console.log(req.body.user,req.body.pass,req.body.confirm_pass)
  if (req.body.pass !== req.body.confirm_pass) {
    res.sendStatus(202);
  } else{
    const newUser = {
      user: req.body.user,
      pass: req.body.pass,
    };
    console.log("hi")
    try {
      const accountExists = await User.exists({ user: newUser.user });

      if (accountExists) {
        res.sendStatus(201);
      } else {
        const hashedPassword = await bcrypt.hash(newUser.pass, saltRounds);
        const addUser = new User({
          user: newUser.user,
          pass: hashedPassword,
        });

        addUser.save();
        console.log("saved")
        const token = jwt.sign({ user: newUser.user }, secretKey, { expiresIn: "1h" });
        res.json({ token: token });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).send('Internal Server Error');
    }
  }
});

app.post('/api/signin', async (req, res) => {
  try {
    const user = await User.findOne({ user: req.body.user });

    if (!user) {
      res.sendStatus(201); 
    } else {
      const isValidPassword = await bcrypt.compare(req.body.pass, user.pass);

      if (isValidPassword) {
        const token = jwt.sign({ user: req.body.user }, secretKey, { expiresIn: "1h" });
        res.json({ token: token });
      } else {
        res.sendStatus(201); 
      }
    }
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
