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
      vm.upVote = function (post) {
        let upVoteUrl = '/api/posts/' + post.id + '/votes'
        $http.post(upVoteUrl, post).then(res => {
          console.log(res);
          $http.get('/api/posts').then(res => {
            console.log(res);
            vm.posts = res.data
          })
        })
      }

      vm.downVote = function (post) {
        let downVoteUrl = '/api/posts/' + post.id + '/votes'
        if (post.vote_count >= 1 ) {
          $http.delete(downVoteUrl, post).then(res => {
            console.log(res);
            $http.get('/api/posts').then(res => {
              console.log(res);
              vm.posts = res.data

          })
        })
      }
    }

    vm.selected = -1
    vm.setShowComments = function(id) {
      vm.selected = id
    }

    vm.commentsOn = function(id) {
      return vm.selected === id
    }
  }
})()
