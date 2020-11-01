

// Get info from the form
$('#form').on("submit", function(event){
    //stops page form reloading automatically
    event.preventDefault();

    //Creating a new Burger
    let newBurger = {
        burger_name : $('#inputBurger').val().trim()
    }
    console.log(newBurger)


  $.ajax("/", {
    method : POST,
    data: newBurger
}).then(function(){
    location.reload();
})
});
