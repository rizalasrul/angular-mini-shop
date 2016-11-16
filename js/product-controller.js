angularMiniShopApp.controller('productCtrl', function($scope)
{
	$scope.products		= [
							{	id 			: 1,
								name 		: "Smart Phone Apple",
							  	image 		: "product-1.jpg",
							  	category	: "Phone",
							 	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							 	price 		: 10500000,
							 	stock 		: 30,
							 	like 		: 0,
							 	in_cart 	: false,
							 	buy 		: 0},
					        {	id 			: 2,
					        	name 		: "Book and Pen",
							  	image 		: "product-2.jpg",
							  	category	: "Accessory",
							 	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							 	price 		: 150000,
							 	stock 		: 30,
							 	like 		: 0,
							 	in_cart 	: false,
							 	buy 		: 0},
							{	id 			: 3,
								name 		: "Mobile iOS",
							  	image 		: "product-3.jpg",
							  	category	: "Phone",
							 	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							 	price 		: 13000000,
							 	stock 		: 30,
							 	like 		: 0,
							 	in_cart 	: false,
							 	buy 		: 0},
							{	id 			: 4,
								name 		: "An iPad",
							  	image 		: "product-4.jpg",
							  	category	: "iPad",
							 	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							 	price 		: 10000000,
							 	stock 		: 30,
							 	like 		: 0,
							 	in_cart 	: false,
							 	buy 		: 0},
							{	id 			: 5,
								name 		: "iPhone 5s",
							  	image 		: "product-5.jpg",
							  	category	: "Phone",
							 	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							 	price 		: 9000000,
							 	stock 		: 30,
							 	like 		: 0,
							 	in_cart 	: false,
							 	buy 		: 0},
							{	id 			: 6,
								name 		: "Flatty Phone with Earphone",
							  	image 		: "product-6.jpg",
							  	category	: "Phone",
							 	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
							 	price 		: 7500000,
							 	stock 		: 30,
							 	like 		: 0,
							 	in_cart 	: false,
							 	buy 		: 0}];
	$scope.query		= "";
	$scope.buy 			= function(id) 
	{
		if($scope.products[id - 1].stock > 0)
		{
        	$scope.products[id - 1].in_cart	= true;
        	$scope.products[id - 1].buy++;
        	$scope.products[id - 1].stock--;
        	$.Notify({type: 'info', caption: 'Thanks', content: $scope.products[id - 1].name +" add to cart",icon: "<span class='mif-cart'></span>"});
        }
        else
        {
        	$.Notify({type: 'warning', caption: 'Uups', content: "Out of stock, dude",icon: "<span class='mif-cart'></span>"});	
        }
    }
});
