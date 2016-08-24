
HiToast.js
=========

## Summary

HiToast.js is a simple notification library similar to Toast designed to be used in mobile apps . 

Hitoast.js is based on the development of jQuery or Zepto .

## Installation

Dependency: [jQuery](http://jquery.com/) or [Zepto](http://zeptojs.com/).

Download HiToast.js:
- from [GitHub](https://github.com/hicoldcat/HiToast/blob/master/hitoast.js)
- with Npm :  

	npm install hitoast.js

Add a div.hitoast which will contain the alerts :

	<div id="hitoast"></div>

## Usage

To call a notification, use hiToast(text, options). Examples :

	hiToast("Successfully Create Your Account",{thems:'Success',position:'top'});
	hiToast("Hi Toast! You are so handsome",{thems:'Info',position:'center',duration: 5000});
	hiToast("Please Check Your Code",{thems:'Waring',fade-time:'fast'});
	hiToast("Sorry, bug is coming.",{thems:'Error',position:'bottom','duration': 3000});

To remove a notification, use hiToastX().

Toast are automatically bound to a click event and hiToastX() is called when the toast is clicked.

## Styling:
Before using , please add the following styles to your CSS file :

	.toast {	
		padding: 5px 15px;
		border: 1px solid #eed3d7;
		border-radius: 4px;
		position: fixed;height: 20px;
	}
	.toast-Error {
		color: white;
		background-color: #DA4453;
	}
	.toast-Success {
		color: white;
		background-color: #37BC9B;
	}
	.toast-Info {
		color: white;
		background-color: #4A89DC;
	}
	.toast-Waring {
		color: white;
		background-color: #F6BB42;
	}

##Demo

You can see a [demo](https://hicoldcat.github.io/HiToast/) here.

## Contribution

If you have good comments or suggestions, please give me a issue or pull request. 