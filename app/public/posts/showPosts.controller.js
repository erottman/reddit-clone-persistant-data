(function () {
  angular.module('reddit')
    .controller('ShowPostsController', ShowPostsController)

    function ShowPostsController($http, moment) {
      const vm = this

      vm.$onInit = function () {
        $http.get('/api/posts').then(res => {
          vm.posts = res.data
        })
      }
      vm.upVote = function (post) {
        let upVoteUrl = '/api/posts/' + post.id + '/votes'
        $http.post(upVoteUrl, post).then(res => {
          $http.get('/api/posts').then(res => {
            vm.posts = res.data
          })
        })
      }

      vm.downVote = function (post) {
        let downVoteUrl = '/api/posts/' + post.id + '/votes'
        if (post.vote_count >= 1 ) {
          $http.delete(downVoteUrl, post).then(res => {
            $http.get('/api/posts').then(res => {
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
      return vm.selected === id;
    }

    vm.addComment = function (id) {
      let commentUrl = '/api/posts/' + id + '/comments'
        $http.post(commentUrl, vm.newComment).then(res => {
          console.log(res);
          $http.get('/api/posts').then(res => {
            console.log(res);
            vm.posts = res.data
            delete vm.newComment
        })
      })
    }
  }
})()
