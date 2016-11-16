var angularMiniShopApp = angular.module('angularMiniShop', ['ngRoute']);
angularMiniShopApp.config(function($routeProvider) 
{
	$routeProvider
	.when("/", 
	{
    	template : ""+
    "<div class='grid'>"+
    "	<div class='row cells5' data-ng-show='query != &apos;&apos;'>"+
    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='box-shadow: 0px 0px 2px #888888; background-color: white'><h6>Queries: {{ query }}</h6></div>"+
    "	</div>"+
    "	<div class='row cells5 padding10' style='box-shadow: 0px 0px 2px #888888; background-color: white' data-ng-repeat='product in products | filter : query'>"+
    "    	<div class='cell colspan3'>"+
    "        	<div class='image-container'>"+
    "            	<div class='frame'><img src='images/{{ product.image }}''></div>"+
    "        	</div>"+
    "    	</div>"+
    "    	<div class='cell colspan2'>"+
    "        	<h3>{{ product.name }}</h3>"+
    "        	<p>{{ product.description }}</p>"+
    "        	<div>"+
    "            	<h5 class='place-left'>{{ product.price | currency: 'IDR ' }}</h5>"+
    "            	<h5 class='place-right'><b>Stock:</b> {{ product.stock }} pcs</h5>"+
    "        	</div>"+
    "        	<div style='margin-top: 125px; background-color: blue'>"+
    "            	<span class='place-left'>"+
    "                	<button class='button bg-lightRed' data-ng-click='product.like = product.like + 1'><span class='mif-heart fg-white'></span><font class='fg-white'> Like</font></button>"+
    "                	<div class='dropdown-button'>"+
    "                    	<button class='button dropdown-toggle bg-lightGreen fg-white'><span class='mif-share fg-white'></span><font class='fg-white'> Share</font></button>"+
    "                    	<ul class='split-content d-menu' data-role='dropdown'>"+
    "                        	<li><a href='#/'><span class='mif-facebook fg-darkBlue'></span><font class='fg-darkBlue'> Facebook</font></a></li>"+
    "                        	<li><a href='#/'><span class='mif-twitter fg-lightBlue'></span><font class='fg-lightBlue'> Twitter</font></a></li>"+
    "                    	</ul>"+
    "                	</div>"+
    "            	</span>"+
    "            	<span class='place-right'>"+
    "                	<button class='button cycle-button bg-lightBlue' data-ng-click='buy(product.id)'><span class='mif-cart fg-white'></span></button>"+
    "            	</span>"+
    "        	</div>"+
    "    	</div>"+
    "	</div>"+
	"</div>"
  	})
  	.when("/cart", 
  	{
    	template : ""+
    "<div class='grid'>"+
    "	<div class='row cells5'>"+
    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='box-shadow: 0px 0px 2px #888888; background-color: white'><h6>Total cart: {{ (products | filter: { in_cart : true }).length }}</h6></div>"+
    "	</div>"+
    "	<div class='row cells5 padding10' style='box-shadow: 0px 0px 2px #888888; background-color: white' data-ng-repeat='product in products | filter : qry.in_cart=true'>"+
    "    	<div class='cell colspan3'>"+
    "        	<div class='image-container'>"+
    "            	<div class='frame'><img src='images/{{ product.image }}''></div>"+
    "        	</div>"+
    "    	</div>"+
    "    	<div class='cell colspan2'>"+
    "        	<h3>{{ product.name }}</h3>"+
    "        	<p>{{ product.description }}</p>"+
    "        	<div>"+
    "            	<h5 class='place-left'>{{ product.price * product.buy | currency: 'IDR ' }}</h5>"+
    "            	<h5 class='place-right'><b>Buy:</b> {{ product.buy }} pcs</h5>"+
    "        	</div>"+
    "    	</div>"+
    "	</div>"+
	"</div>"
  	})
  	.when("/category", 
  	{
    	template : ""+
    "<div class='grid'>"+
    "	<div class='row cells5' data-ng-show='query != &apos;&apos;'>"+
    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='box-shadow: 0px 0px 2px #888888; background-color: white'><h6>Queries: Only show in home page</h6></div>"+
    "	</div>"+
    "	<div class='row cells5 padding10' style='box-shadow: 0px 0px 2px #888888; background-color: white' data-ng-repeat='product in products | filter : queryObj'>"+
    "    	<div class='cell colspan3'>"+
    "        	<div class='image-container'>"+
    "            	<div class='frame'><img src='images/{{ product.image }}''></div>"+
    "        	</div>"+
    "    	</div>"+
    "    	<div class='cell colspan2'>"+
    "        	<h3>{{ product.name }}</h3>"+
    "        	<p>{{ product.description }}</p>"+
    "        	<div>"+
    "            	<h5 class='place-left'>{{ product.price | currency: 'IDR ' }}</h5>"+
    "            	<h5 class='place-right'><b>Stock:</b> {{ product.stock }} pcs</h5>"+
    "        	</div>"+
    "        	<div style='margin-top: 125px; background-color: blue'>"+
    "            	<span class='place-left'>"+
    "                	<button class='button bg-lightRed' data-ng-click='product.like = product.like + 1'><span class='mif-heart fg-white'></span><font class='fg-white'> Like</font></button>"+
    "                	<div class='dropdown-button'>"+
    "                    	<button class='button dropdown-toggle bg-lightGreen fg-white'><span class='mif-share fg-white'></span><font class='fg-white'> Share</font></button>"+
    "                    	<ul class='split-content d-menu' data-role='dropdown'>"+
    "                        	<li><a href='#category'><span class='mif-facebook fg-darkBlue'></span><font class='fg-darkBlue'> Facebook</font></a></li>"+
    "                        	<li><a href='#category'><span class='mif-twitter fg-lightBlue'></span><font class='fg-lightBlue'> Twitter</font></a></li>"+
    "                    	</ul>"+
    "                	</div>"+
    "            	</span>"+
    "            	<span class='place-right'>"+
    "                	<button class='button cycle-button bg-lightBlue' data-ng-click='buy(product.id)'><span class='mif-cart fg-white'></span></button>"+
    "            	</span>"+
    "        	</div>"+
    "    	</div>"+
    "	</div>"+
	"</div>"
  	});
});
