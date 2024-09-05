const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  headquarters: { type: String, required: true },
  industry: { type: String, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
});

module.exports = mongoose.model("Company", companySchema);
