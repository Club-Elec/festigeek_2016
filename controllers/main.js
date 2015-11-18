// create application
var app = angular.module( "app", ["ngRoute", "ngAnimate", "ngSanitize"]);

// create routing
var routes = [{
    route: "/home",
    path:  "views/home.html",
    controller: "home"
}, {
    route: "/",
    path: "views/home.html",
    controller: "home"
},{
    route: "/404",
    path: "views/404.html",
    controller: "home"
}];

app.config(["$routeProvider", function( $routeProvider ) {
    // bind each routes
    for( var i in routes ) {
        $routeProvider.when( routes[i].route, {
            templateUrl: routes[i].path,
            controller:  routes[i].controller
        });
    }

    // default routing
    $routeProvider.otherwise({
        redirectTo: "/404"
    });
}]);
