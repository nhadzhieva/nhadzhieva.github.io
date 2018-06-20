(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipe-list/recipe-list.component.ts");
/* harmony import */ var _box_detail_box_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-detail/box-detail.component */ "./src/app/box-detail/box-detail.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'recipes', component: _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__["RecipeListComponent"]
    },
    {
        path: 'recipe/:id', component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailComponent"]
    },
    {
        path: 'box', component: _box_detail_box_detail_component__WEBPACK_IMPORTED_MODULE_4__["BoxDetailComponent"]
    },
    {
        path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
    },
    {
        path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .img-logo {\r\n  height: auto;\r\n  width: auto;\r\n  max-height: 60px;\r\n  max-width: 75px;\r\n  padding-top: 10px;\r\n}\r\n  \r\n  .spacer {\r\n  flex: 1 1 auto;\r\n  /* overflow-y: auto; */\r\n}\r\n  \r\n  .all-wrap {\r\n  min-height: 100vh;\r\n}\r\n  \r\n  .page-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n  \r\n  .content {\r\n  flex: 1;\r\n}\r\n  \r\n  /*\r\n * Make the Component injected by Router Outlet full height:\r\n */\r\n  \r\n  .all-wrap {\r\n  min-height: 100vh;\r\n}\r\n  \r\n  .page-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n  \r\n  .content {\r\n  flex: 1;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"all-wrap\" fullscreen>\n  <mat-toolbar class=\"cl\" color=\"primary\">\n    <mat-toolbar-row>\n      <a routerLink=\"/home\">\n        <img class=\"img-logo\" src=\"/assets/images/logo-green.png\">\n      </a>\n      <a routerLink=\"/recipes\" mat-button>Recipes</a>\n      <a routerLink=\"/box\" mat-button>The Box</a>\n      <!-- <a routerLink=\"/about\" mat-button>About</a> -->\n      <span class=\"example-spacer\"></span>\n      <a routerLink=\"/login\" mat-button>Login</a>\n      <a routerLink=\"/checkout\" mat-button>\n        <i matBadge={{totalOrders()}} matBadgeColor=\"warn\" class=\"material-icons\">shopping_basket</i>\n      </a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"page-wrap\">\n    <main class=\"content\">\n      <router-outlet></router-outlet>\n    </main>\n    <mat-toolbar>\n      <span class='spacer'></span>\n      <h3>© Copyright Fresh Box.</h3>\n      <span class='spacer'></span>\n    </mat-toolbar>\n  </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-mock */ "./src/app/order-mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.orders = _order_mock__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.title = 'app';
    }
    AppComponent.prototype.totalOrders = function () {
        return this.orders.length;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipe-list/recipe-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _box_detail_box_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./box-detail/box-detail.component */ "./src/app/box-detail/box-detail.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_14__["RecipeListComponent"],
                _box_detail_box_detail_component__WEBPACK_IMPORTED_MODULE_16__["BoxDetailComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"],
                _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_20__["RecipeDetailComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/box-detail/box-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/box-detail/box-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-centered{\r\ntext-align: center;\r\n}\r\n.card-purchase{\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n.header{\r\n    margin-top: 25px;\r\n    margin-bottom: 50px;\r\n}\r\n.quantity input {\r\n    width: 46px;\r\n    height: 40px;\r\n    border-color: #e3e3e3;\r\n    border-radius: 5px;\r\n    padding-left: 3px;\r\n    color: #898989;\r\n    font-weight: 700;\r\n    box-sizing: border-box;\r\n    padding-left: 10px;\r\n    padding-top: 4px;\r\n  }\r\n.btn-info{\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n  }\r\n.orange-color.mat-button{\r\n    background-color: #FB6126;\r\n    color: #FFF;\r\n}\r\n.mat-card.info{\r\n   -ms-word-break: break-all;\r\n   /* margin-right: 25px; */\r\n     margin-left: 50px;\r\n     margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/box-detail/box-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/box-detail/box-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography text-centered\">\n    <h1 class=\" header mat-display-1\">Purchase a recipe box. </h1>\n    <mat-grid-list cols=\"2\">\n        <mat-grid-tile>\n            <mat-card class=\"info\">\n                <img mat-card-image src=\"/assets/images/veggie-box.jpg\" alt=\"Box details\">\n                <mat-card-content>\n                    <p>\n                        In the box you will products for find 4 recipes and special cards with detailed instructions how to cook them. Meals are\n                        simple to prepare, taking under 30 minutes to make, and full of exciting flavours to help break your\n                        mealtime routine. We do all the planning and shopping, so you can prepare exciting dinners AND have\n                        more time to spend doing the things you enjoy most.\n                    </p>\n                </mat-card-content>\n                <mat-card-actions class=\"btn-info\">\n                    <a mat-button class=\"orange-color \" routerLink=\"/recipes\">See the recipes included</a>\n                </mat-card-actions>\n            </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n\n            <mat-card class=\"card-purchase\">\n                <mat-card-content>\n                    <h1 md-title>$47.95</h1>\n                    <h2 md-subhead>Fresh Box 11-18 August</h2>\n                    <form>\n                            <mat-form-field color=\"primary\">\n                              <input matInput [(ngModel)]=\"counterOfOrders\" name=\"ordersCount\" type=\"number\" placeholder=\"Quantity\" id=\"myNumber\"  min=\"1\">\n                            </mat-form-field>\n                            </form>\n                </mat-card-content>\n                <mat-card-actions>\n                    <a mat-raised-button (click)=\"addOrder()\" routerLink=\"/checkout\" color=\"primary\">Purchase</a>\n                </mat-card-actions>\n            </mat-card>\n        </mat-grid-tile>\n\n    </mat-grid-list>\n\n</div>"

/***/ }),

/***/ "./src/app/box-detail/box-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/box-detail/box-detail.component.ts ***!
  \****************************************************/
/*! exports provided: BoxDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxDetailComponent", function() { return BoxDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order.model */ "./src/app/order.model.ts");
/* harmony import */ var _order_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-mock */ "./src/app/order-mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoxDetailComponent = /** @class */ (function () {
    function BoxDetailComponent() {
        this.orders = _order_mock__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.order = new _order_model__WEBPACK_IMPORTED_MODULE_1__["Order"](undefined, undefined, undefined);
        this.counterOfOrders = 1;
        this.order.title = 'Fresh Box for week 11-18 August';
        this.order.price = 47.00;
        this.order.id = this.orders.length + 1;
    }
    BoxDetailComponent.prototype.ngOnInit = function () { };
    BoxDetailComponent.prototype.addOrder = function () {
        for (var i = 0; i < this.counterOfOrders; i++) {
            this.orders.push(this.order);
        }
    };
    BoxDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-box-detail',
            template: __webpack_require__(/*! ./box-detail.component.html */ "./src/app/box-detail/box-detail.component.html"),
            styles: [__webpack_require__(/*! ./box-detail.component.css */ "./src/app/box-detail/box-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoxDetailComponent);
    return BoxDetailComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    width: 100%;\r\n}\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n/* .orders {\r\n    margin: 0 0 0 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .orders li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n   \r\n    border-radius: 4px;\r\n  }\r\n  .orders li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .orders li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  } */\r\n/* .orders .text {\r\n    position: relative;\r\n    top: -3px;\r\n  } */\r\n.button-fixed{\r\n    position: absolute;\r\n    right: 45px;\r\n    margin-top: 10px;\r\n    /* bottom: 0px; */\r\n  }\r\n.md-36 { font-size: 36px;\r\n }\r\n.md-24 { font-size: 24px;\r\n }"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"img\" src=\"assets/images/red-yellow.jpg\">\n<div class=\"mat-typography\">\n  <mat-list>\n    <mat-list-item *ngFor=\"let order of orders\" [class.selected]=\"order === selectedOrder\" (click)=\"onSelect(order)\">\n      <h3 matLine>{{ order.title }} </h3>\n      <mat-icon>attach_money </mat-icon>{{order.price}}\n      <button mat-icon-button class=\"material-icons close\"\n          (click)=\"deleteOrder(order.id)\">\n        <i class=\"material-icons\">close</i>\n      </button>\n\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>\n      <h2 matLine>Total amount </h2>\n      <mat-icon >attach_money </mat-icon>{{totalPrice()}}\n    </mat-list-item>\n\n      <a class=\"button-fixed\"mat-raised-button color=\"primary\" routerLink=\"/login\">ORDER</a>\n\n   \n  </mat-list>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order-mock */ "./src/app/order-mock.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router) {
        this.router = router;
        this.orders = _order_mock__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.onSelect = function (order) {
        this.selectedOrder = order;
    };
    CheckoutComponent.prototype.totalPrice = function () {
        var sum = 0;
        for (var i = 0; i < this.orders.length; i++) {
            sum += this.orders[i].price;
        }
        return sum;
    };
    CheckoutComponent.prototype.deleteOrder = function (id) {
        if (confirm('You are going to refuse this order!')) {
            var index = this.orders.findIndex(function (bl) { return bl.id === id; });
            this.orders.splice(index, 1);
        }
    };
    CheckoutComponent.prototype.isLogged = function () {
        if (true) {
            this.router.navigate(['login']);
        }
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-centered{\r\n  text-align: center;\r\n  \r\n}\r\n\r\n.bg{\r\n    width: 100%;\r\n    height: 100%;\r\n    /* background: url('/assets/images/background.jpg') no-repeat center; */\r\n    background-size: 100% 100%;\r\n    background-position: top center;\r\n    \r\n  }\r\n\r\n.get-cooking{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container img {\r\n  width: 100%;\r\n  height: 598px;\r\n}\r\n\r\n.container .btn {\r\n  position: absolute;\r\n  top: 90%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  background-color: #3F51B5;\r\n  color: black;\r\n  font-size: 16px;\r\n  padding: 16px 30px;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.welcome-container{\r\n  text-align: center;\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background-color: #FFFFFF;\r\n  width: 300px;\r\n  height: 200px;\r\n  top: 100px;\r\n  left: 8%;\r\n  padding: 100px 50px;\r\n  z-index: 2;\r\n  /* opacity: 0.8; */\r\n  \r\n}\r\n\r\n.welcome-container h1{\r\n  margin-bottom: 0;\r\n}\r\n\r\n.round-img{\r\n    border-radius: 50%;\r\n \r\n}\r\n\r\n.values{\r\n  max-height: 250px;\r\n  min-height: 150px;\r\n  max-width: 150px;\r\n  min-width: 50px;\r\n\r\n}\r\n\r\n.home-cooking-container h1{\r\n  margin-top: 20px;\r\n  margin-bottom: 0px;\r\n  \r\n}\r\n\r\n.how-container h1{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.how-works{\r\nwidth:200px;\r\n}\r\n\r\n.how-works-img{\r\n  max-height: 150px;\r\n  min-height: 50px;\r\n  max-width: 70px;\r\n  min-width: 40px;\r\n}\r\n\r\n.inside-box{\r\n  /* text-align: center; */\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background-color:#FFFFFF;\r\n  width: 350px;\r\n  height:250px;\r\n  padding: 100px 50px;\r\n  z-index: 2;\r\n  word-break: break-all;\r\n  word-wrap: break-word;\r\n  /* opacity: 0.8; */\r\n  \r\n  \r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  color: white;\r\n}\r\n\r\n.top-right {\r\n  position: absolute;\r\n  top: 97px;\r\n  right: 150px;\r\n}\r\n\r\n.top-left {\r\n  position: absolute;\r\n    top: 8px;\r\n    left: 16px;\r\n}\r\n\r\n.centered {\r\n  position: absolute;\r\n  left: 0;\r\n  text-align:center;\r\n  top: 12px;\r\n  width: 100%\r\n}\r\n\r\n.text-left{\r\n  text-align: left;\r\n}\r\n\r\n.button-fixed{\r\n  margin-top:2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mat-typography text-centered\">\n\n<div class=\"container \">\n  <img class=\"start-img\"src=\"/assets/images/background.jpg\" alt=\"How it works\" style=\"width:100%\">\n  <!-- <button class=\"btn\" mat-button>GET COOKING</button> -->\n</div>\n<div class=\"welcome-container\">\n  <h1 class=\"mat-display-1\">A recipe box. Simple.</h1>\n  <h2 class=\"mat-subheading-2\">Fresh ingredients and delicious recipes. Good food for good live.</h2>\n  <a class=\"button-fixed\" mat-raised-button color=\"primary\"routerLink=\"/box\">GET COOKING</a>\n\n</div>\n<div class=\"home-cooking-container\">\n  <h1 class=\"mat-display-2\">Home cooking is important</h1>\n  <h2>Good intentions to cook can crumble on busy days. So we make it simple. (And tasty.)</h2>\n  <div>\n    <mat-grid-list  cols=\"3\" role=\"list\">\n        <mat-grid-tile>\n          <div>\n        <img class=\"round-img values\" src=\"/assets/images/quality.jpg\" alt=\"quality\">\n        <h3 class=\"mat-heading\">Quality</h3>\n            \n        <p>Fresh ingredients, so feel unique taste of every bite.</p>\n      </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div>\n          <img class=\"round-img values\" src=\"/assets/images/simple.jpg\" alt=\"simpicity\">\n            <h3 class=\"mat-heading\">Simplicity</h3>\n          <p>Foolproof recipes, so anyone can cook a delicious meal. (Really.)</p>\n        </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n              <div>\n            <img class=\"round-img values\" src=\"/assets/images/variety.jpg\" alt=\"variety\">\n            <h3 class=\"mat-heading\">Variety</h3>\n            <p>Choose what you like: wholesome, adventurous, vegetarian, meat, fish.</p>\n          </div>\n            </mat-grid-tile>\n      \n\n    </mat-grid-list>\n  </div>\n</div>\n\n<div class=\"how-container\">\n    <h1 class=\"mat-display-2\">How it works?</h1>\n    \n      <mat-grid-list  cols=\"3\" role=\"list\">\n        <mat-grid-tile class=\"how-works\">\n            <div>\n          <img class=\"round-img how-works-img\" src=\"/assets/images/recipes.png\" alt=\"recipes\">\n          <p>We create easy-to-follow recipes</p>\n        </div>\n        </mat-grid-tile >\n        <mat-grid-tile class=\"how-works\">\n            <div>\n          <img class=\"round-img how-works-img\" src=\"/assets/images/delivery.png\" alt=\"\">\n          <p>We deliver fresh, seasonal, perfectly measured ingredients delivered right to your door</p>\n        </div>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"how-works\">\n            <div>\n          <img class=\"round-img how-works-img\"src=\"/assets/images/cook.png\" alt=\"\">\n          <p>You follow our recipes and enjoy delicious, unforgettable meals, cooked from scratch </p>\n        </div>\n        </mat-grid-tile>\n          \n  \n      </mat-grid-list>\n    \n  </div>\n  <div class=\"container\">\n    <img class=\"start-img\" src=\"/assets/images/banner.jpg\" alt=\"How it works\" style=\"width:100%\">\n    <div class=\"inside-box top-right\">\n      <mat-list class=\"text-left\" >\n          <mat-list-item>\n            <mat-icon  mat-list-icon color=\"primary\">check_circle</mat-icon>\n            <p mat-line>Perfectly measured ingredients</p>\n          </mat-list-item>\n          <mat-list-item >\n              <mat-icon  mat-list-icon color=\"primary\">check_circle</mat-icon>\n              <p mat-line>Easy-to-follow recipe cards</p>\n            </mat-list-item>\n            <mat-list-item>\n                <mat-icon   mat-list-icon color=\"primary\">check_circle</mat-icon>\n                <p mat-line>2 servings per recipe</p>\n              </mat-list-item>\n              <mat-list-item>\n                  <mat-icon  mat-list-icon color=\"primary\">check_circle</mat-icon>\n                  <p mat-line>Special packaging to keep food cool</p>\n                </mat-list-item>\n      </mat-list>\n      <a class=\"button-fixed\" mat-raised-button color=\"primary\" routerLink=\"/box\">GET COOKING</a>\n      \n  </div>\n  </div>\n         \n       \n     \n  \n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   .content{\r\n        margin-top: 5em;\r\n    margin-right: 28em;\r\n    margin-left: 28em;\r\n    display: flex;\r\n    flex-direction: column;\r\n  } \r\n\r\n   \r\n      "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <mat-toolbar> Login</mat-toolbar>\n    <mat-form-field>\n        <input matInput placeholder=\"Enter your email\" required>\n        <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n      </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n      <button mat-raised-button type=\"submit\" color=\"primary\">LOGIN</button>\n<mat-divider></mat-divider>\n<a  mat-button  color=\"primary\" routerLink=\"/signup\">SIGN UP</a>      \n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/order-mock.ts":
/*!*******************************!*\
  !*** ./src/app/order-mock.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.model */ "./src/app/order.model.ts");

/* harmony default export */ __webpack_exports__["default"] = ([
    new _order_model__WEBPACK_IMPORTED_MODULE_0__["Order"]('Fresh Box for week 11-18 August', 47.00, 1),
    new _order_model__WEBPACK_IMPORTED_MODULE_0__["Order"]('Fresh Box for week 11-18 August', 47.00, 2),
]);


/***/ }),

/***/ "./src/app/order.model.ts":
/*!********************************!*\
  !*** ./src/app/order.model.ts ***!
  \********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id;
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n  /* max-width: 500px;\r\n  margin: auto; */\r\n  margin-right: 15em;\r\n  margin-left: 15em;\r\n}\r\n.round-img{\r\n    border-radius: 50%;\r\n \r\n}\r\n.values{\r\n  max-height: 250px;\r\n  min-height: 150px;\r\n  max-width: 150px;\r\n  min-width: 50px;\r\n}\r\n.iframe{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n.text-centered{\r\n  text-align: center;\r\n}\r\n.list{\r\n  height: 200px;\r\n}\r\n.btn-purchase{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-typography\">\r\n<h1>Ten-Min Ginger Chicken Stir-Fry</h1>\r\n    <mat-divider></mat-divider>\r\n<div>\r\n  {{editedRecipe.caption}}\r\n    <div>\r\n        <i class=\"material-icons\">access_time</i>\r\n     {{editedRecipe.timeForCook}} mins time for cook\r\n    </div>\r\n   <div> \r\n       <i class=\"material-icons\">location_on</i>{{editedRecipe.type}} Cuisine\r\n    </div>\r\n    \r\n</div>\r\n<mat-divider></mat-divider>\r\n<h2>\r\n    In your box\r\n</h2>\r\n<div class=\"list\">\r\n<mat-grid-list cols=\"5\" role=\"list\">\r\n    <mat-grid-tile>\r\n      <div>\r\n    <img class=\"round-img values\" src=\"/assets/images/ingr/chicken.jpg\" alt=\"quality\">\r\n    <p> 250g chicken breast</p>\r\n  </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div>\r\n      <img class=\"round-img values\" src=\"/assets/images/ingr/baby-corn-2-x200.jpg\" alt=\"simpicity\">\r\n       <p>120g baby corn</p>\r\n    </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n          <div>\r\n        <img class=\"round-img values\" src=\"/assets/images/ingr/sugarsnap-peas-x200.jpg\" alt=\"variety\">\r\n        <p>80g sugar snap peas</p>\r\n      </div>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <div>\r\n          <img class=\"round-img values\" src=\"/assets/images/ingr/spring-onion-x200.jpg\" alt=\"variety\">\r\n          <p>1 spring onion</p>\r\n        </div>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <div>\r\n          <img class=\"round-img values\" src=\"/assets/images/ingr/fine-egg-noodles-x200.jpg\" alt=\"variety\">\r\n         <p>2 fine egg noodle nests</p>\r\n        </div>\r\n          </mat-grid-tile>\r\n  \r\n\r\n</mat-grid-list>\r\n</div>\r\n<mat-divider></mat-divider>\r\n<h3>What you will need:</h3>\r\n<p>\r\n    Butter, Salt, Vegetable oil\r\n</p>\r\n<mat-divider></mat-divider>\r\n    <iframe  class=\"iframe\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OtLfLQPqRm0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n    <div class=\"text-centered btn-purchase\" >\r\n            <a  mat-raised-button  color=\"primary\" routerLink=\"/box\">Get all intructions and products</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipe.model.ts");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.recipe = new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"](undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    RecipeDetailComponent.prototype.getRecipe = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.recipeService.getRecipe(id)
            .subscribe(function (recipe) { return _this.recipe = recipe; });
    };
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecipe();
        this.route.paramMap.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (parmMap) { return parmMap.get('id'); }), Object(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (id) { return !!id; }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (id) { return _this.recipeService.getRecipe(id); })).subscribe(function (recipe) {
            _this.recipe = recipe || _this.recipe,
                _this.reset();
        });
        this.reset();
    };
    RecipeDetailComponent.prototype.reset = function () {
        this.editedRecipe = __assign({}, this.recipe);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecipeDetailComponent.prototype, "recipe", void 0);
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    /* max-width: 400px; */\r\n    width: 400px;\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n    margin-right: 25px;\r\n      margin-left: 25px;\r\n      /* margin-top: 10px; */\r\n      margin-bottom: 10px;\r\n    \r\n  }\r\n  .text-centered{\r\n      text-align: center;\r\n  }\r\n  .orange-color.mat-button{\r\n      background-color: #FB6126;\r\n      color: #FFF;\r\n  }\r\n  .button-fixed{\r\n    position: absolute;\r\n    right: 45px;\r\n    bottom: 15px;\r\n  }\r\n\r\n    "

/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>Week of 11 - 18 August\n    <a class=\"button-fixed\" mat-raised-button color=\"primary\" routerLink=\"/box\">GET COOKING</a>\n</mat-card>\n<mat-grid-list rowHeight=\"520\" cols=\"4\" role=\"list\">\n  <mat-grid-tile *ngFor=\"let recipe of recipes\" role=\"listitem\">\n    <mat-card class=\"example-card\">\n      <img mat-card-image class=\"example-header-image\" [src]=\"recipe.imageUrl\" alt=\"Photo of a Ginger-Chicken-Noodles\">\n      <mat-card-content>\n        <h4 >{{recipe.title}}</h4>\n        <p>\n          <i class=\"material-icons\">access_time</i>\n          Takes {{recipe.timeForCook}} mins\n          <i class=\"material-icons\">location_on</i>{{recipe.type}} Cuisine\n        </p>\n</mat-card-content>\n<mat-card-actions class=\"text-centered\">\n  <a class=\"orange-color \" mat-button mat-raised-button routerLink=\"/recipe/{{recipe.id}}\">More info</a>\n </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n<mat-card>Week of 19 - 26 August\n    <a class=\"button-fixed\" mat-raised-button color=\"primary\" routerLink=\"/box\">GET COOKING</a>\n</mat-card>\n<mat-grid-list rowHeight=\"520\" cols=\"4\" role=\"list\">\n  <mat-grid-tile *ngFor=\"let recipe of recipes\" role=\"listitem\">\n    <mat-card class=\"example-card\">\n      <img mat-card-image class=\"example-header-image\" [src]=\"recipe.imageUrl\" alt=\"Photo of a Ginger-Chicken-Noodles\">\n      <mat-card-content>\n        <h4 >{{recipe.title}}</h4>\n        <p>\n          <i class=\"material-icons\">access_time</i>\n          Takes {{recipe.timeForCook}} mins\n          <i class=\"material-icons\">location_on</i>{{recipe.type}} Cuisine</p>\n       </mat-card-content>\n<mat-card-actions class=\"text-centered\">\n    <a class=\"orange-color \" mat-button mat-raised-button routerLink=\"/recipe/{{recipe.id}}\">More info</a>\n </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipe.model.ts");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.recipe = new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"](undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    RecipeListComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; });
    };
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecipes();
        this.route.paramMap.pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (parmMap) { return parmMap.get('id'); }), Object(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (id) { return !!id; }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (id) { return _this.recipeService.getRecipe(id); })).subscribe(function (recipe) {
            _this.recipe = recipe || _this.recipe,
                _this.reset();
        });
        this.reset();
    };
    RecipeListComponent.prototype.reset = function () {
        this.editedRecipe = __assign({}, this.recipe);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecipeListComponent.prototype, "recipe", void 0);
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipe.model.ts":
/*!*********************************!*\
  !*** ./src/app/recipe.model.ts ***!
  \*********************************/
/*! exports provided: Recipe, Ingredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredients", function() { return Ingredients; });
var Recipe = /** @class */ (function () {
    function Recipe(title, timeForCook, type, addOns, imageUrl, caption, id) {
        if (imageUrl === void 0) { imageUrl = ''; }
        this.title = title;
        this.timeForCook = timeForCook;
        this.type = type;
        this.addOns = addOns;
        this.imageUrl = imageUrl;
        this.caption = caption;
        this.id = id;
    }
    return Recipe;
}());

var Ingredients = /** @class */ (function () {
    function Ingredients(urls) {
        this.urls = urls;
    }
    return Ingredients;
}());



/***/ }),

/***/ "./src/app/recipe.service.ts":
/*!***********************************!*\
  !*** ./src/app/recipe.service.ts ***!
  \***********************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes-mock-data */ "./src/app/recipes-mock-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeService = /** @class */ (function () {
    function RecipeService() {
    }
    RecipeService.prototype.getRecipes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_recipes_mock_data__WEBPACK_IMPORTED_MODULE_1__["default"]);
    };
    RecipeService.prototype.getRecipe = function (id) {
        var index = +id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_recipes_mock_data__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (recipe) { return recipe.id === index; }));
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes-mock-data.ts":
/*!**************************************!*\
  !*** ./src/app/recipes-mock-data.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.model */ "./src/app/recipe.model.ts");

/* harmony default export */ __webpack_exports__["default"] = ([
    new _recipe_model__WEBPACK_IMPORTED_MODULE_0__["Recipe"]('Ten-Min Ginger Chicken Stir-Fry', 10, 'Asian', 'Noodles', 'https://production-media.gousto.co.uk/cms/mood-image/1565-Ten-Min-Ginger-Chicken-Noodles-x1500.jpg', 
    // tslint:disable-next-line:max-line-length
    'This tasty stir-fry will be ready in a flash! Cook diced chicken with baby corn and sugar snaps in a fragrant ginger and honey sauce. Serve over fine egg noodles and top with black sesame seeds and spring onion – yum!', 1),
    new _recipe_model__WEBPACK_IMPORTED_MODULE_0__["Recipe"]('Ten-Min Ginger Chicken Stir-Fry', 10, 'Asian', 'Noodles', 'https://production-media.gousto.co.uk/cms/mood-image/1565-Ten-Min-Ginger-Chicken-Noodles-x1500.jpg', 'This tasty stir-fry will be ready in a flash! Cook diced chicken with baby corn and sugar snaps in a fragrant ginger and honey sauce. Serve over fine egg noodles and top with black sesame seeds and spring onion – yum!', 2),
    new _recipe_model__WEBPACK_IMPORTED_MODULE_0__["Recipe"]('Ten-Min Ginger Chicken Stir-Fry', 10, 'Asian', 'Noodles', 'https://production-media.gousto.co.uk/cms/mood-image/1565-Ten-Min-Ginger-Chicken-Noodles-x1500.jpg', 'This tasty stir-fry will be ready in a flash! Cook diced chicken with baby corn and sugar snaps in a fragrant ginger and honey sauce. Serve over fine egg noodles and top with black sesame seeds and spring onion – yum!', 3),
    new _recipe_model__WEBPACK_IMPORTED_MODULE_0__["Recipe"]('Ten-Min Ginger Chicken Stir-Fry', 10, 'Asian', 'Noodles', 'https://production-media.gousto.co.uk/cms/mood-image/1565-Ten-Min-Ginger-Chicken-Noodles-x1500.jpg', 'This tasty stir-fry will be ready in a flash! Cook diced chicken with baby corn and sugar snaps in a fragrant ginger and honey sauce. Serve over fine egg noodles and top with black sesame seeds and spring onion – yum!', 4),
]);


/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    margin-top: 5em;\r\nmargin-right: 28em;\r\nmargin-left: 28em;\r\ndisplay: flex;\r\nflex-direction: column;\r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <mat-toolbar> Sign up</mat-toolbar>\n    <mat-form-field>\n        <input matInput placeholder=\"Enter your name\" required>\n        <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n      </mat-form-field>\n      <mat-form-field>\n          <input matInput placeholder=\"Enter your last name\" required>\n          <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n        </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Enter your email\" required>\n        <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n      </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n          <input matInput placeholder=\"Enter password(again)\" [type]=\"hide ? 'password' : 'text'\" required>\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n      <mat-divider></mat-divider>\n<a  mat-raised-button  color=\"primary\" routerLink=\".\">SIGN UP</a>      \n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.hide = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CourseMMT\homework\fresh-box\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map