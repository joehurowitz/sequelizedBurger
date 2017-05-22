 // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };
// // Export the database functions for the controller (burgers_Controller.js).
// module.exports = burger;

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger",{
  
    burger_name:{
          type: DataTypes.STRING,
          allowNull: false

      },
    devoured: {
          type: DataTypes.BOOLEAN,
          default : false
    }

  });
   // burgers.sync();

  return Burger;

    };
// var Burger = sequelize.define("Burger",{


//   burger_name:{
//           type: Sequelize.STRING,
//           allowNull: false

//       },
//     devoured: {
//           type: Sequelize.BOOLEAN,
//           default : false
//     }



// });

// Burger.sync();
// module.exports = Burger;






