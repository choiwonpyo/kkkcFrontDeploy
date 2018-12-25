(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-handle-car-handle-module"],{

/***/ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".from {\r\n  background-color: orange;\r\n  padding: 10px;\r\n}\r\n.to {\r\n  background-color: orangered;\r\n  padding: 10px;\r\n}\r\n.containerOut{\r\n  height:100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  position: relative;\r\n}\r\n.leftParent{\r\n  flex-grow: 1.5;\r\n  flex-basis: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.baseCommand {\r\n  text-align: center;\r\n  flex-grow: 1;\r\n  background-color: #1864ab;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n}\r\n.commandList {\r\n  min-height: 200px;\r\n  padding-top: 5px;\r\n  background-color: #dee2e6;\r\n  flex-grow: 1;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n.droppedCommand{\r\n  flex-grow: 2;\r\n  text-align: center;\r\n  min-height: 100px;\r\n  width: 50%;\r\n  background-color: #1864ab;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.dropCommandList{\r\n  min-height: 200px;\r\n  padding-top: 5px;\r\n  background-color: #dee2e6;\r\n  flex-grow: 1;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n.rightParent{\r\n  flex-basis: 0;\r\n  flex-grow: 3;\r\n  background-color: #1971c2;\r\n}\r\n.layerTitle{\r\n  font-size: 35px;\r\n  font-weight: 900;\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  color: whitesmoke;\r\n}\r\n.containerHeader{\r\n  background-color: #21252D;\r\n  color: #dee2e6;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.playDiv button{\r\n  border: 3px solid black;\r\n  border-radius: 10px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.stageSelector{\r\n  background-color: #dee2e6;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWhhbmRsZS9jYXItaGFuZGxlLW1haW4tc2tlbGV0b24vY2FyLWhhbmRsZS1tYWluLXNrZWxldG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztDQUNmO0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUlEO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2Nhci1oYW5kbGUvY2FyLWhhbmRsZS1tYWluLXNrZWxldG9uL2Nhci1oYW5kbGUtbWFpbi1za2VsZXRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyb20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi50byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lck91dHtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxlZnRQYXJlbnR7XHJcbiAgZmxleC1ncm93OiAxLjU7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmJhc2VDb21tYW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvbW1hbmRMaXN0IHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZHJvcHBlZENvbW1hbmR7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5kcm9wQ29tbWFuZExpc3R7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJpZ2h0UGFyZW50e1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgZmxleC1ncm93OiAzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTcxYzI7XHJcbn1cclxuLmxheWVyVGl0bGV7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmNvbnRhaW5lckhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJEO1xyXG4gIGNvbG9yOiAjZGVlMmU2O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ucGxheURpdiBidXR0b257XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4uc3RhZ2VTZWxlY3RvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerOut\">\n  <div class=\"container\">\n      <div class=\"leftParent\">\n        <div class=\"baseCommand\">\n          <div class=\"layerTitle\"> 명령들 </div>\n          <div  dragula=\"VAMPIRES\" [(dragulaModel)] =\"items\" class=\"commandList\" id=\"commandList\">\n             <div *ngFor=\"let item of items\" class=\"list-group-item\">\n               <div *ngIf=\"item.getType() === studyNodeService.normalType\">\n                  <app-normal-node [node]=\"item\"></app-normal-node>\n               </div>\n               <div *ngIf=\"item.getType() === studyNodeService.forType\">\n                 <app-for-node [forNode]=\"item\" [canContain]=\"false\"></app-for-node>\n               </div>\n             </div>\n          </div>\n        </div>\n        <div class=\"droppedCommand\">\n            <div class=\"layerTitle\"> 입력창<div class=\"playDiv\"><button (click)=\"onPlayButtonClick()\"><mat-icon>play_arrow</mat-icon></button></div></div>\n            <div  dragula=\"VAMPIRES\" [(dragulaModel)] = \"droppedItems\" class=\"dropCommandList\" id=\"dropCommandList\">\n               <div *ngFor=\" let item of droppedItems\" class=\"list-group-item\">\n                   <div *ngIf=\"item.getType() === studyNodeService.normalType\">\n                      <app-normal-node [node]=\"item\"></app-normal-node>\n                   </div>\n                   <div *ngIf=\"item.getType() === studyNodeService.forType\">\n                      <app-for-node [forNode]=\"item\" [canContain]=\"true\"></app-for-node>\n                   </div>\n               </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"rightParent\">\n      입력된 명령: {{putCommand}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CarHandleMainSkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarHandleMainSkeletonComponent", function() { return CarHandleMainSkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../study/node-core/node */ "./src/app/study/node-core/node.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _study_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../study/node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarHandleMainSkeletonComponent = /** @class */ (function () {
    function CarHandleMainSkeletonComponent(dragulaService, studyNodeService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.studyNodeService = studyNodeService;
        this.items = [
            new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["NormalNode"](_study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].FRONT, this.studyNodeService.globalNodeId++),
            new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["NormalNode"](_study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT, this.studyNodeService.globalNodeId++),
            new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["NormalNode"](_study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT, this.studyNodeService.globalNodeId++),
            new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["NormalNode"](_study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].BACK, this.studyNodeService.globalNodeId++),
            new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["ForNode"](this.studyNodeService.globalNodeId++)
        ];
        this.droppedItems = [];
        this.carStage = 1;
        this.title = 'my-dream-app';
        dragulaService.createGroup('VAMPIRES', {
            removeOnSpill: true,
            copy: function (el, source) { return source.id === 'commandList'; },
            copyItem: function (item) {
                console.log(_this.droppedItems);
                if (item.getType() === _this.studyNodeService.normalType) {
                    return new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["NormalNode"](item.getEvery()[0], _this.studyNodeService.globalNodeId++);
                }
                else if (item.getType() === _this.studyNodeService.forType) {
                    return new _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["ForNode"](_this.studyNodeService.globalNodeId++);
                }
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.id !== 'commandList';
            }
        });
    }
    CarHandleMainSkeletonComponent.prototype.ngOnInit = function () {
    };
    CarHandleMainSkeletonComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('VAMPIRES');
    };
    CarHandleMainSkeletonComponent.prototype.carStageSelected = function (value) {
        console.log(value);
        this.carStage = value;
    };
    // left 2
    // up 0
    /*
      go_front
    go_back
    turn_left
    turn_right
     */
    CarHandleMainSkeletonComponent.prototype.onPlayButtonClick = function () {
        var inputCommand = this.droppedItems.reduce(function (ac, value, index, array) { return (ac.concat(value.getEvery())); }, []);
        var finalInput = inputCommand.map(function (input) {
            if (input === _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT) {
                return 'turn_left;go_front;';
            }
            if (input === _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT) {
                return 'turn_right;go_front;';
            }
            if (input === _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].FRONT) {
                return 'go_front;';
            }
            if (input === _study_node_core_node__WEBPACK_IMPORTED_MODULE_1__["Direction"].BACK) {
                return 'go_back;';
            }
        }).join('');
        this.putCommand = finalInput;
    };
    CarHandleMainSkeletonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-handle-main-skeleton',
            template: __webpack_require__(/*! ./car-handle-main-skeleton.component.html */ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.html"),
            styles: [__webpack_require__(/*! ./car-handle-main-skeleton.component.css */ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaService"], _study_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_3__["StudyNodeService"]])
    ], CarHandleMainSkeletonComponent);
    return CarHandleMainSkeletonComponent;
}());



/***/ }),

/***/ "./src/app/car-handle/car-handle-routing/car-handle.routing.handle.ts":
/*!****************************************************************************!*\
  !*** ./src/app/car-handle/car-handle-routing/car-handle.routing.handle.ts ***!
  \****************************************************************************/
/*! exports provided: CarHandleRoutingHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarHandleRoutingHandle", function() { return CarHandleRoutingHandle; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _car_handle_main_skeleton_car_handle_main_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../car-handle-main-skeleton/car-handle-main-skeleton.component */ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'carHandle',
    },
    {
        path: 'carHandle',
        component: _car_handle_main_skeleton_car_handle_main_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["CarHandleMainSkeletonComponent"]
    }
];
var CarHandleRoutingHandle = /** @class */ (function () {
    function CarHandleRoutingHandle() {
    }
    CarHandleRoutingHandle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], CarHandleRoutingHandle);
    return CarHandleRoutingHandle;
}());



/***/ }),

/***/ "./src/app/car-handle/car-handle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/car-handle/car-handle.module.ts ***!
  \*************************************************/
/*! exports provided: CarHandleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarHandleModule", function() { return CarHandleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-injector/material-injector.module */ "./src/app/material-injector/material-injector.module.ts");
/* harmony import */ var _study_study_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../study/study.module */ "./src/app/study/study.module.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _car_handle_routing_car_handle_routing_handle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-handle-routing/car-handle.routing.handle */ "./src/app/car-handle/car-handle-routing/car-handle.routing.handle.ts");
/* harmony import */ var _car_handle_main_skeleton_car_handle_main_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-handle-main-skeleton/car-handle-main-skeleton.component */ "./src/app/car-handle/car-handle-main-skeleton/car-handle-main-skeleton.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CarHandleModule = /** @class */ (function () {
    function CarHandleModule() {
    }
    CarHandleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _car_handle_routing_car_handle_routing_handle__WEBPACK_IMPORTED_MODULE_6__["CarHandleRoutingHandle"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _study_study_module__WEBPACK_IMPORTED_MODULE_4__["StudyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaModule"].forRoot(),
                _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_3__["MaterialInjectorModule"],
            ],
            declarations: [_car_handle_main_skeleton_car_handle_main_skeleton_component__WEBPACK_IMPORTED_MODULE_7__["CarHandleMainSkeletonComponent"]],
            providers: [],
            exports: []
        })
    ], CarHandleModule);
    return CarHandleModule;
}());



/***/ })

}]);
//# sourceMappingURL=car-handle-car-handle-module.js.map