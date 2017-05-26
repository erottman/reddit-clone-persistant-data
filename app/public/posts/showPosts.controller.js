(function () {
  angular.module('reddit')
    .controller('ShowPostsController', ShowPostsController)

    function ShowPostsController($http, moment) {
      const vm = this
      console.log("this controller is working");

      vm.$onInit = function () {
        $http.get('/api/posts').then(res => {
          console.log(res);
          vm.posts = res.data
        })
      }
    }
})()
