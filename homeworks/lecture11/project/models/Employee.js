const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: { type: Date, required: true },
  jobTitle: { type: String, required: true },
  resigned: { type: Boolean, default: false },
  salary: { type: Number, required: true },
  manager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
