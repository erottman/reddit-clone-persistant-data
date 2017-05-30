(function () {
  angular.module('reddit')
    .controller('EditPostController', EditPostController)

    function EditPostController($http, $stateParams, $state) {
      const vm = this

      vm.$onInit = function () {
        $http.get('/api/posts/' + $stateParams.id, $stateParams).then(res => {
          vm.edittedPost = res.data
        })
      }
      vm.editPost = function (id) {
        $http.patch('/api/posts/' + id, vm.edittedPost).then(res => {
          $state.go('list')
        })
      }
    }
})()
