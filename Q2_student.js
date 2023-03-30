// Q2: 

const mongoose = require('mongoose');
const userModel = require('./Models/userModel');



const UserSchema = userModel.extend({
    name: String,
    email: String,
  });

 

var WorksnapsTimeEntry = userModel.extend({
    student: {
      type: Schema.ObjectId,
      ref: 'Student'
    },
    timeEntries: {
      type: Object
    }
  });
  
  var StudentSchema = userModel.extend({
    firstName: {
      type: String,
      trim: true,
      default: ''
      // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
      type: String,
      trim: true,
      default: ''
      // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    },
    displayName: {
      type: String,
      trim: true
    },
    municipality: {
      type: String
    }
  });
  
  WorksnapsTimeEntry.find().populate('student').exec(function (err, timeEntries) {
    if (err) {
      console.log(err);
    } else {
      timeEntries.forEach(function (timeEntry) {
        console.log(timeEntry.student.firstName + ' ' + timeEntry.student.lastName + ':');
        console.log(timeEntry.timeEntries);
      });
    }
  });

  module.exports = mongoose.model('User', UserSchema);