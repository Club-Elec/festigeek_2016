var app = angular.module( "app", ["ngRoute", "ngAnimate", "ngSanitize"]);

app.config(["$routeProvider", function( $routeProvider ) {
    // create routing
    var routes = [{
        route: "/home",
        path:  "views/home.html",
        controller: "home"
    }];

    // bind each routes
    for( var i in routes ) {
        $routeProvider.when( routes[i].route, {
            templateUrl: routes[i].path,
            controller:  routes[i].controller
        });
    }

    // default routing
    $routeProvider.otherwise({
        redirectTo: "/home"
    });
}]);
