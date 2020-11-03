$('#form').on("submit", function(event){

  event,preventDefault();

  let newBurger = {
    burger_name: $("#inputBurger").val().trim()
  }
  console.log(newBurger)

  //Send ajax POST request
  $.ajax('/', {
    method: 'POST',
    data: newBurger
  }).then(function(){
    location.reload();
  })
});

$('eatBurger').on("click", function(){
  const id = $(this).data('id');
  const eaten = $(this).data("eaten")
  console.log(id)


  let changeBurger = {
    eaten: eaten
  }

  $.ajax(`/${id}`, {
    method: 'PUT',
    data: changeBurger
  }).then(function(){
    location.reload();
  })

});
  