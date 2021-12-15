const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Contact = require("../../modals/Contact")

router.post('/',
[
    check("firstName", "name is required")
      .not()
      .isEmpty(),
    check("email", "please include a valid email").isEmail(),
    
  ], async (req, res) => {

    const errors = validationResult(req);
    //need to understand
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {firstName, lastName, email, city, state, zip} = req.body

    const contact = new Contact({
        firstName,
        lastName,
        email,
        city,
        state,
        zip
    })
    await contact.save()
// console.log("req.body", req.body)
    res.send("ok")
})
module.exports = router;