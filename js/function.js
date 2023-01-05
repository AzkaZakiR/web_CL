export async function getCategory() {
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    type: "GET",
    dataType: "json",
    success: function (response) {
      response.categories.map((item) => {
        console.log(item);
      });
    },
    fail: function (err) {
      console.error(err.message);
    },
  });
}

//https://pokeapi.co/api/v2/ability/

export async function getAbility() {
  $.ajax({
    url: "https://pokeapi.co/api/v2/ability/",
    type: "GET",
    dataType: "json",
    success: function (response) {
      response.count.map((item) => {
        console.log(item);
      });
    },
  });
}
