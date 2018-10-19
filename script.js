  angular.module('Pics', [])
    .controller('MainCtrl', [
      '$scope',
      function($scope) {
        $scope.test = 'Hello world!';
        $scope.names = ["Good", "Evil"];
        $scope.posts = [{
            title: 'Merlin',
            image: "https://png.pngtree.com/element_origin_min_pic/16/10/28/236cc8cd87b2140c5752f4fc84dd68df.jpg",
            contributor: "Wizard",
            upvotes: 10,
            selectedValue: "Good"
          },
          {
            title: 'Draco',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuu7GnDR7BT3Kbb3G4tmhJtdy1ezW72dWwrryIrEeMLsv39B_",
            contributor: "Dragon",
            upvotes: 3,
            selectedValue: "Evil"
          },
          {
            title: 'Timmy',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHY_oJXGjWmU1WheT3F5DtlNAfeeZ6QQlsCrKc7lPA7AO4zx-PA',
            contributor: "Knight",
            upvotes: 2,
            selectedValue: "Evil"
          }
        ]

        $scope.addPost = function() {
          if ($scope.imageURL === '' || $scope.title === '' || $scope.contributor === '' || $scope.imageURL === undefined || $scope.title === undefined || $scope.contributor === undefined) {
            alert("Please try again. All fields are required.")

          }
          // else if ($scope.imageURL === '' && $scope.title === '' && $scope.contributor === '') { return; }
          else {
            console.log($scope.title);
            $scope.posts.push({
              title: $scope.title,
              image: $scope.imageURL,
              contributor: $scope.contributor,
              upvotes: 8,
              selectedValue: $scope.selectedValue
            });
            $scope.title = "";
            $scope.imageURL = "";
            $scope.contributor = "";
            $scope.selectedValue = "";
          }
        };

        $scope.restoreHealth = function(post) {
          post.upvotes += 5;
        }

        $scope.changeSides = function(post) {
          if (post.selectedValue === "Good") {
            post.selectedValue = "Evil"
          }
          else {
            post.selectedValue = "Good"
          }
        }

        $scope.kill = function(post) {
          post.upvotes = 0;
        }

        $scope.damage = function(post) {
          if (post.upvotes > 0) {
            post.upvotes -= 1;
          }
        };
      }
    ]);

  function createFunction() {
    document.getElementById("buildform").style.display = " block";
    document.getElementById("start").style.display = "none";

  }
  