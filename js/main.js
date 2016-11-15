var angularMiniShopApp = angular.module('angularMiniShop', ['ngRoute']);
angularMiniShopApp.config(function($routeProvider) 
{
	$routeProvider
	.when("/", 
	{
    	templateUrl : "product_list.htm"
  	})
  	.when("/cart", 
  	{
    	templateUrl : "cart.htm"
  	})
  	.when("/category", 
  	{
    	templateUrl : "category_list.htm"
  	});
});
