(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/common/service/middleServerConfig.ts":
/*!******************************************************!*\
  !*** ./src/app/common/service/middleServerConfig.ts ***!
  \******************************************************/
/*! exports provided: MiddleServerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleServerConfig", function() { return MiddleServerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiddleServerConfig = /** @class */ (function () {
    function MiddleServerConfig(http) {
        this.http = http;
        this.middleServerUrl = 'http://45.119.146.51:8124';
        this.postCommandUrl = this.middleServerUrl + '/control_rasp';
    }
    MiddleServerConfig.prototype.sendCommandToServer = function () {
        console.log(this.postCommandUrl);
        return this.http.post(this.postCommandUrl, { todo: 'go_front;go_back;turn_left;go_front;' });
    };
    MiddleServerConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MiddleServerConfig);
    return MiddleServerConfig;
}());



/***/ }),

/***/ "./src/app/main/main-routing/main.routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/main-routing/main.routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/main.component */ "./src/app/main/main/main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_part_menu_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-part/menu-part.component */ "./src/app/main/menu-part/menu-part.component.ts");
/* harmony import */ var _common_service_tycoGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/service/tycoGuard */ "./src/app/common/service/tycoGuard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        canActivateChild: [_common_service_tycoGuard__WEBPACK_IMPORTED_MODULE_4__["TycoGuard"]],
        children: [{ path: '', redirectTo: 'menu' },
            { path: 'menu', component: _menu_part_menu_part_component__WEBPACK_IMPORTED_MODULE_3__["MenuPartComponent"] },
            { path: 'study', loadChildren: '../../study/study.module#StudyModule' },
            { path: 'typing', loadChildren: '../../typing/typing.module#TypingModule' },
            { path: 'car-handle', loadChildren: '../../car-handle/car-handle.module#CarHandleModule' }
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main/main.component.ts");
/* harmony import */ var _main_routing_main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing/main.routing.module */ "./src/app/main/main-routing/main.routing.module.ts");
/* harmony import */ var _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material-injector/material-injector.module */ "./src/app/material-injector/material-injector.module.ts");
/* harmony import */ var _menu_part_menu_part_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-part/menu-part.component */ "./src/app/main/menu-part/menu-part.component.ts");
/* harmony import */ var _common_service_tycoGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/service/tycoGuard */ "./src/app/common/service/tycoGuard.ts");
/* harmony import */ var _common_service_middleServerConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/service/middleServerConfig */ "./src/app/common/service/middleServerConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _main_routing_main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"],
                _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_4__["MaterialInjectorModule"]
            ],
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _menu_part_menu_part_component__WEBPACK_IMPORTED_MODULE_5__["MenuPartComponent"]],
            providers: [_common_service_tycoGuard__WEBPACK_IMPORTED_MODULE_6__["TycoGuard"], _common_service_middleServerConfig__WEBPACK_IMPORTED_MODULE_7__["MiddleServerConfig"]],
            exports: []
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/main/main.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/main/main.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainComponentSkeleton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n}\r\n.containerHeader {\r\n  background-color: #21252D;\r\n}\r\n.main-nav-title {\r\n  font-weight: 900;\r\n  font-sizes: 20px;\r\n  color: #ffffff;\r\n}\r\n.vert {\r\n  color: #ffffff;\r\n}\r\n.bodyDiv{\r\n  flex: 1;\r\n}\r\n.headProfile {\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztDQUNmO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsUUFBUTtDQUNUO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29tcG9uZW50U2tlbGV0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb250YWluZXJIZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MkQ7XHJcbn1cclxuLm1haW4tbmF2LXRpdGxlIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZXM6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnZlcnQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ib2R5RGl2e1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuLmhlYWRQcm9maWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainComponentSkeleton\">\n  <mat-toolbar class=\"containerHeader\">\n    <mat-toolbar-row>\n      <span class=\"main-nav-title\">TyCo</span>\n      <span>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon class=\"vert\">more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"logout()\">\n            <mat-icon>cancel_presentation</mat-icon>\n            <span>로그아웃</span>\n          </button>\n          <button mat-menu-item (click)=\"toMain()\">\n            <mat-icon>undo</mat-icon>\n            <span>메인으로</span>\n          </button>\n        </mat-menu>\n      </span>\n      <div class=\"headProfile\">\n        <span class=\"main-nav-title\">사용자</span>\n        <button mat-icon-button [matMenuTriggerFor]=\"hello\">\n          <mat-icon class=\"vert\">art_track</mat-icon>\n        </button>\n        <mat-menu #hello>\n          <span mat-menu-item>이름: {{userInformation? userInformation.nickName: ''}}</span>\n          <span mat-menu-item>타이핑 점수: {{userInformation? userInformation.typingScore: '0'}}</span>\n          <span mat-menu-item>문제풀이 점수: 0</span>\n        </mat-menu>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"bodyDiv\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_AppService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/service/AppService */ "./src/app/common/service/AppService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service_middleServerConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/service/middleServerConfig */ "./src/app/common/service/middleServerConfig.ts");
/* harmony import */ var _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/service/userInformationService */ "./src/app/common/service/userInformationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(appService, _router, route, middleServerConfig, userInformationService) {
        this.appService = appService;
        this._router = _router;
        this.route = route;
        this.middleServerConfig = middleServerConfig;
        this.userInformationService = userInformationService;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userInformationService.userInformation.subscribe(function (data) {
            if (data) {
                _this.userInformation = data;
                _this.userInformation.typingScore = data.typingStepUserStudy
                    .map(function (d) { return d.typingStep.stepScore; }).reduce(function (ac, value) { return ac + value; });
            }
        });
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MainComponent.prototype.logout = function () {
        this.appService.logout();
    };
    MainComponent.prototype.toMain = function () {
        this._router.navigate(['/main']);
    };
    MainComponent.prototype.sendCommand = function () {
        console.log('command');
        this.middleServerConfig.sendCommandToServer().subscribe(function (result) { console.log(result); });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_service_middleServerConfig__WEBPACK_IMPORTED_MODULE_3__["MiddleServerConfig"], _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_4__["UserInformationService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/menu-part/menu-part.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/menu-part/menu-part.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menuPartDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 100px;\r\n}\r\n.menuItemDiv{\r\n  display: block;\r\n  position: relative;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  width: 300px;\r\n  height: 300px;\r\n  margin-left: 1%;\r\n  margin-right: 1%;\r\n}\r\n.menuItemDivImg {\r\n  width: 90%;\r\n  height: 90%;\r\n  border-radius: 50%;\r\n  border: 10px solid black;\r\n  display: inline-block;\r\n}\r\n.menuItemDivImg:hover {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.menuItemDivName {\r\n  font-size: 2em;\r\n  font-weight: 900;\r\n  font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51LXBhcnQvbWVudS1wYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtDQUN2QjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQ0FBa0M7Q0FDbkMiLCJmaWxlIjoic3JjL2FwcC9tYWluL21lbnUtcGFydC9tZW51LXBhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51UGFydERpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubWVudUl0ZW1EaXZ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4ubWVudUl0ZW1EaXZJbWcge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tZW51SXRlbURpdkltZzpob3ZlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5tZW51SXRlbURpdk5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/menu-part/menu-part.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/menu-part/menu-part.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menuPartDiv\">\n  <div *ngFor=\"let menu of menuList\" class=\"menuItemDiv\" [routerLink] = \"[menu.routerUrl]\">\n    <img [src] = \"menu.img\" class=\"menuItemDivImg\">\n    <p class=\"menuItemDivName\">{{menu.name}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/menu-part/menu-part.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/menu-part/menu-part.component.ts ***!
  \*******************************************************/
/*! exports provided: MenuPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPartComponent", function() { return MenuPartComponent; });
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

var MenuPartComponent = /** @class */ (function () {
    function MenuPartComponent() {
        this.menuList = [{ img: 'assets/keyboard_main.png', name: '타자 연습', routerUrl: '/main/typing' },
            { img: 'assets/puzzle_main.png', name: '문제 연습', routerUrl: '/main/study' },
            { img: 'assets/car_main.png', name: '자동차 조종', routerUrl: '/main/car-handle' }];
    }
    MenuPartComponent.prototype.ngOnInit = function () {
    };
    MenuPartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-part',
            template: __webpack_require__(/*! ./menu-part.component.html */ "./src/app/main/menu-part/menu-part.component.html"),
            styles: [__webpack_require__(/*! ./menu-part.component.css */ "./src/app/main/menu-part/menu-part.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuPartComponent);
    return MenuPartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map