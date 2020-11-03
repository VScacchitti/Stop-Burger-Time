const orm = require("../config/orm.js");

let burger = {
  selectAll : async() => {
      const response = await orm.selectAll('burgers');
      return response;
  },

  insertBurger: async(burgerName) => {
    const response = await orm.insertBurger('burgers', burgerName);
    return response;

  },

  updateBurger: async(itemId)=>{
      const response = await orm.updateBurger('burgers', itemId);
      return response;
  }
        
   }

  
   



module.exports = burger;