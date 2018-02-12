$( document ).ready(function() { 

});

function colorChange(num) {
var e1 = '#'+'logo'+num ;
var e2 = e1+num ;
if($(e1).css('backgroundColor')=='rgb(255, 127, 80)'){
    $(e1).css('backgroundColor','rgb(255,255,255)') ;
    $(e2).attr("src", "resource/line.png");
}
else{
    $(e1).css('backgroundColor','rgb(255, 127, 80)');
    $(e2).attr("src", "resource/aline.png")
    for(var i = 1 ; i < 4 ; i++){
    if(num != i){
    var e ='#'+'logo'+i ;
    var ee = e+i ;
    $(e).css('backgroundColor','rgb(255, 255, 255)');
    $(ee).attr("src", "resource/line.png");
    }
    }
}
}


var myApp = angular.module('myApp', ['ui.router']);


myApp.controller('indexCtrl', ['$scope','$state',function($scope,$state) {

$state.go('home');
}]);

myApp.config(function($stateProvider) {
  $stateProvider
 
    .state('contactUs', {
        url:"/contactus",
  templateUrl:'contact.html'
})
    .state('animation', {
        url:"/animation",
  templateUrl:'animation.html'
})
  .state('home', {
      url: "/",
      templateUrl: "home.html"
    })
});