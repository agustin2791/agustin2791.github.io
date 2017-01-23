var app = angular.module('JandSon', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'templates/about.html'
    }).when('/work', {
      templateUrl: 'templates/work.html',
      controller: 'WorkCtrl'
    }).when('/contact', {
      templateUrl: 'templates/contact.html',
      controller: 'ContactCtrl'
    }).otherwise({
      redirectTo: '/'
    });
}]);

app.service('JandSonService', function() {
  return {
    'services': [
      {
        'name': 'Painting',
        'slug': 'painting',
        'shortDesc': 'We specialize in painting and re-painting boats. traditional to custom paint jobs. We cover from top to bottom, from the bow to the stern. Click on the button below to see some our previous jobs.',
        'image': 'misc13.jpg'
      },
      {
        'name': 'Varnishing',
        'slug': 'varnishing',
        'shortDesc': 'Varnish protects the painting from dirt and dust and evens out the painting\'s final appearance, making it all equally glossy or matt. This makes the boat look clean and beautiful. Take a look at our previous work he had done with varnishing by clicking on the button below.',
        'image': 'boat_back2.jpg'
      },
      {
        'name': 'Fiberglass',
        'slug': 'fiberglass',
        'shortDesc': 'We perform fiberglass restoration and repair from the smallest scratch all the way up to major structural damage, as well as paint boats, anti-foul the bottoms and custom work such as customizing an old dash to incorporate new electronics. Check out our work by clicking on the button below.',
        'image': 'misc2.jpg'
      }
    ],
    'projects': [
      {
        'name': 'Boat: Camp David',
        'category': 'Fiberglass',
        'year': '2016',
        'desc': 'For this Power boat cruiser we Sanded, primed and painted the hull. The hull was originally white and the customer wanted a more classic military style color. We used AWL-GRIP space grey. Customer also wanted custom fiberglass lighting as he works in lighting business and wanted custom light surrounding his boat. After paint the hull we worked with him to get just the right lighting. You can currently see him at night from a mile away!',
        'image': 'camp_david.jpg'
      },
      {
        'name': 'Selene',
        'category': 'Varnishing',
        'year': '2016',
        'desc': 'The owner of Selene was looking to varnish his sail boat. Initially wanting varnish we actually persuaded him in going with using Awl-Bright, a linear polyurethane clear coat. Instead of applying 12 coats of varnish to get that rich coat, we applied 5 West System coats of resin as it would save him money. We stripped the old varnish, added the build up coats, and rolled and tipped the Awl-Bright.',
        'image': 'selene.jpg'
      },
      {
        'name': 'Easterly',
        'category': 'Varnishing',
        'year': '2016',
        'desc': 'Easterly is a beautiful classic boat that we maintain and make it look like new. We varnish it once every six months using roll and tipping fighting, sometimes, against the environmental factors like wind, rain, or heat!',
        'image': 'easterly.jpg'
      },
      {
        'name': 'King David 40ft',
        'category': 'Painting',
        'year': '2016',
        'desc': 'For this power boat cruiser we sanded, primed and painted the hull. However this wasn\'t just any ordinary project as the customer works in lighting business and wanted custom light surrounding his boat. After paint the hull we worked with him to get just the right lighting. You can currently see him at night from a mile away.',
        'image': 'king_david.jpg'
      },
      {
        'name': 'Pelagial',
        'category': 'Painting',
        'year': '2016',
        'desc': 'For pelagial the owner was looking to get it painted and refinished. We painted the hull and upper deck. The owner originally wanted wood however we suggested removing the wood and using non-skid texture and paint which would last longer and be closer to his budget. The end result was exactly what he wanted and after this project we were hired to work on his other boat the Pangea.',
        'image': 'pelagial.jpg'
      },
      {
        'name': 'Panga',
        'category': 'Fiberglass',
        'year': '2016',
        'desc': 'For this particular panga we were contacted to paint the floor but we quickly realized that some areas were completely dry rotted. We took the old wood out, installed marine plywood, and laid down more fiber glass. Now it’s ready for the next fishing season!',
        'image': 'panga.jpg'
      },
      {
        'name': 'Gotta Go',
        'category': 'Painting',
        'year': '2016',
        'desc': 'For this classic 31’ Bertram, the owner wanted to paint the upper house and deck of his boat to sell it. We sanded, primed, and painted using roll and tipping. After we were done, the owner decided it would be best to keep it! Good choice.',
        'image': 'gattago.jpg'
      },
      {
        'name': 'Talisman 70ft',
        'category': 'Painting',
        'year': '2014',
        'desc': 'After enduring a hurricane in Cabo, owner of Talisman was looking to get the whole boat repainted and finished. This included the hull and superstructure. The hull was made from aluminum and had accumulated a number of blisters which need grinding and fairing compound before we could prime and paint. We pride ourselves on using the best materials which includes Awlgrip.',
        'image': 'talisman.jpg'
      },
      {
        'name': 'Courtesy Chevrolet Office',
        'category': 'Varnishing',
        'year': '2013',
        'desc': 'For this job we did his boat and he wanted his personal office to look like his boat. The office had was made from custom wood. We sand and varnished walls, desk, and chairs. We used a technique called roll and tip. It was a very successful project and the customer was very happy with the end project.',
        'image': 'office.jpg'
      },
      {
        'name': 'Hi-Ball 120ft',
        'category': 'Painting',
        'year': '2012',
        'desc': 'Hi-Ball we painted the hull the fiberglass needed some with blisters repair. We grinded and laid down additional fiber glass for sections of the boat that where necessary. After fiber glass repair we laid down fairing compound, primed and painted. The owner wanted the paint to be rich so instead of spraying like we would normally do, we rolled and tipped the entire Hull!',
        'image': 'hi-ball.jpg'
      }
    ]
  };
});

app.controller('MainCtrl', function($http, $scope, JandSonService) {
  $scope.services = JandSonService.services;
  $scope.result = 'hidden';
  $scope.submitButtonDisabled = false;
  $scope.resultMessage;
  $scope.submit = function(data) {
    if(data) {
      $http({
        method: 'POST',
        url: 'home-form.php',
        // data: $.param($scope.data),
        header: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data) {
        console.log(data);
        if(data.success){
          $scope.submitButtonDisabled = true;
          $scope.resultMessage = data.message;
          $scope.result = 'bg-success';
        } else {
          $scope.submitButtonDisabled = false;
          $scope.resultMessage = data.message;
          $scope.result='bg-danger';
        }
      }).error(function(data) {
        console.log(data);
      });
    } else {
      $scope.submitButtonDisabled = false;
      $scope.resultMessage = 'Failed Please fill out all the fields.';
      $scope.result='bg-danger';
      console.log(data);
    }
  }
});

app.controller('WorkCtrl', function($scope, JandSonService) {
  $scope.projects = JandSonService.projects;
  $scope.category = '';


})

app.controller('ContactCtrl', function($http, $scope) {
  $scope.result = 'hidden';
  $scope.submitButtonDisabled = false;
  $scope.resultMessage;
  $scope.submit = function(data) {
    if(data) {
      $http({
        method: 'POST',
        url: 'contact-form.php',
        // data: $.param($scope.data),
        header: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data) {
        console.log(data);
        if(data.success){
          $scope.submitButtonDisabled = true;
          $scope.resultMessage = data.message;
          $scope.result = 'bg-success';
        } else {
          $scope.submitButtonDisabled = false;
          $scope.resultMessage = data.message;
          $scope.result='bg-danger';
        }
      }).error(function(data) {
        console.log(data);
      });
    } else {
      $scope.submitButtonDisabled = false;
      $scope.resultMessage = 'Failed Please fill out all the fields.';
      $scope.result='bg-danger';
      console.log(data);
    }
  }
});

app.controller('GeneralCtrl', function($scope) {
  $scope.mobileScreen = false;
  $scope.desktopScreen = false;
  var screenSize = window.innerWidth;
  if (screenSize < 990) {
    $scope.mobileScreen = true;
  } else {
    $scope.desktopScreen = true;
  }
  $scope.date = new Date();
})
