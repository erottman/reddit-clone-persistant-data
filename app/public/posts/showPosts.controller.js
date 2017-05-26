(function () {
  angular.module('reddit')
    .controller('ShowPostsController', ShowPostsController)

    function ShowPostsController() {
      console.log("this controller is working");
    }
})()
