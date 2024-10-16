const crypto = require("crypto");

// Generate a random key (32 bytes)
const key = crypto.randomBytes(32).toString("base64");
console.log("Generated key:", key);