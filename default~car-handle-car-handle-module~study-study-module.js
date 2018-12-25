(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~car-handle-car-handle-module~study-study-module"],{

/***/ "./node_modules/ng-drag-drop/index.js":
/*!********************************************!*\
  !*** ./node_modules/ng-drag-drop/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng_drag_drop_module_1 = __webpack_require__(/*! ./src/ng-drag-drop.module */ "./node_modules/ng-drag-drop/src/ng-drag-drop.module.js");
exports.NgDragDropModule = ng_drag_drop_module_1.NgDragDropModule;
var drop_event_model_1 = __webpack_require__(/*! ./src/shared/drop-event.model */ "./node_modules/ng-drag-drop/src/shared/drop-event.model.js");
exports.DropEvent = drop_event_model_1.DropEvent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-drag-drop/src/directives/draggable.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-drag-drop/src/directives/draggable.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ng_drag_drop_service_1 = __webpack_require__(/*! ../services/ng-drag-drop.service */ "./node_modules/ng-drag-drop/src/services/ng-drag-drop.service.js");
var dom_helper_1 = __webpack_require__(/*! ../shared/dom-helper */ "./node_modules/ng-drag-drop/src/shared/dom-helper.js");
var Draggable = /** @class */ (function () {
    function Draggable(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         * Currently not used
         */
        this.dragEffect = 'move';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dragScope = 'default';
        /**
         * The CSS class applied to a draggable element. If a dragHandle is defined then its applied to that handle
         * element only. By default it is used to change the mouse over pointer.
         */
        this.dragHandleClass = 'drag-handle';
        /**
         * CSS class applied on the source draggable element while being dragged.
         */
        this.dragClass = 'drag-border';
        /**
         * CSS class applied on the drag ghost when being dragged.
         */
        this.dragTransitClass = 'drag-transit';
        /**
         * Event fired when Drag is started
         */
        this.onDragStart = new core_1.EventEmitter();
        /**
         * Event fired while the element is being dragged
         */
        this.onDrag = new core_1.EventEmitter();
        /**
         * Event fired when drag ends
         */
        this.onDragEnd = new core_1.EventEmitter();
        /**
         * @private
         * Backing field for the dragEnabled property
         */
        this._dragEnabled = true;
    }
    Object.defineProperty(Draggable.prototype, "dragImage", {
        get: function () {
            return this._dragImage;
        },
        /**
         * The url to image that will be used as custom drag image when the draggable is being dragged.
         */
        set: function (value) {
            this._dragImage = value;
            this.dragImageElement = new Image();
            this.dragImageElement.src = this.dragImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draggable.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        /**
         * Defines if drag is enabled. `true` by default.
         */
        set: function (value) {
            this._dragEnabled = value;
            this.applyDragHandleClass();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Draggable.prototype.ngOnInit = function () {
        this.applyDragHandleClass();
    };
    Draggable.prototype.ngOnDestroy = function () {
        this.unbindDragListeners();
    };
    Draggable.prototype.dragStart = function (e) {
        var _this = this;
        if (this.allowDrag()) {
            // This is a kludgy approach to apply CSS to the drag helper element when an image is being dragged.
            dom_helper_1.DomHelper.addClass(this.el, this.dragTransitClass);
            setTimeout(function () {
                dom_helper_1.DomHelper.addClass(_this.el, _this.dragClass);
                dom_helper_1.DomHelper.removeClass(_this.el, _this.dragTransitClass);
            }, 10);
            this.ng2DragDropService.dragData = this.dragData;
            this.ng2DragDropService.scope = this.dragScope;
            // Firefox requires setData() to be called otherwise the drag does not work.
            // We don't use setData() to transfer data anymore so this is just a dummy call.
            if (e.dataTransfer != null) {
                e.dataTransfer.setData('text', '');
            }
            // Set dragImage
            if (this.dragImage) {
                e.dataTransfer.setDragImage(this.dragImageElement, 0, 0);
            }
            e.stopPropagation();
            this.onDragStart.emit(e);
            this.ng2DragDropService.onDragStart.next();
            this.zone.runOutsideAngular(function () {
                _this.unbindDragListener = _this.renderer.listen(_this.el.nativeElement, 'drag', function (dragEvent) {
                    _this.drag(dragEvent);
                });
            });
        }
        else {
            e.preventDefault();
        }
    };
    Draggable.prototype.drag = function (e) {
        this.onDrag.emit(e);
    };
    Draggable.prototype.dragEnd = function (e) {
        this.unbindDragListeners();
        dom_helper_1.DomHelper.removeClass(this.el, this.dragClass);
        this.ng2DragDropService.onDragEnd.next();
        this.onDragEnd.emit(e);
        e.stopPropagation();
        e.preventDefault();
    };
    Draggable.prototype.mousedown = function (e) {
        this.mouseDownElement = e.target;
    };
    Draggable.prototype.allowDrag = function () {
        if (this.dragHandle) {
            return dom_helper_1.DomHelper.matches(this.mouseDownElement, this.dragHandle) && this.dragEnabled;
        }
        else {
            return this.dragEnabled;
        }
    };
    Draggable.prototype.applyDragHandleClass = function () {
        var dragElement = this.getDragHandleElement();
        if (!dragElement) {
            return;
        }
        if (this.dragEnabled) {
            dom_helper_1.DomHelper.addClass(dragElement, this.dragHandleClass);
        }
        else {
            dom_helper_1.DomHelper.removeClass(this.el, this.dragHandleClass);
        }
    };
    Draggable.prototype.getDragHandleElement = function () {
        var dragElement = this.el;
        if (this.dragHandle) {
            dragElement = this.el.nativeElement.querySelector(this.dragHandle);
        }
        return dragElement;
    };
    Draggable.prototype.unbindDragListeners = function () {
        if (this.unbindDragListener) {
            this.unbindDragListener();
        }
    };
    Draggable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[draggable]'
                },] },
    ];
    /** @nocollapse */
    Draggable.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 },
        { type: ng_drag_drop_service_1.NgDragDropService },
        { type: core_1.NgZone }
    ]; };
    Draggable.propDecorators = {
        dragData: [{ type: core_1.Input }],
        dragHandle: [{ type: core_1.Input }],
        dragEffect: [{ type: core_1.Input }],
        dragScope: [{ type: core_1.Input }],
        dragHandleClass: [{ type: core_1.Input }],
        dragClass: [{ type: core_1.Input }],
        dragTransitClass: [{ type: core_1.Input }],
        dragImage: [{ type: core_1.Input }],
        dragEnabled: [{ type: core_1.HostBinding, args: ['draggable',] }, { type: core_1.Input }],
        onDragStart: [{ type: core_1.Output }],
        onDrag: [{ type: core_1.Output }],
        onDragEnd: [{ type: core_1.Output }],
        dragStart: [{ type: core_1.HostListener, args: ['dragstart', ['$event'],] }],
        dragEnd: [{ type: core_1.HostListener, args: ['dragend', ['$event'],] }],
        mousedown: [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] }, { type: core_1.HostListener, args: ['touchstart', ['$event'],] }]
    };
    return Draggable;
}());
exports.Draggable = Draggable;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "./node_modules/ng-drag-drop/src/directives/droppable.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-drag-drop/src/directives/droppable.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var drop_event_model_1 = __webpack_require__(/*! ../shared/drop-event.model */ "./node_modules/ng-drag-drop/src/shared/drop-event.model.js");
var ng_drag_drop_service_1 = __webpack_require__(/*! ../services/ng-drag-drop.service */ "./node_modules/ng-drag-drop/src/services/ng-drag-drop.service.js");
var dom_helper_1 = __webpack_require__(/*! ../shared/dom-helper */ "./node_modules/ng-drag-drop/src/shared/dom-helper.js");
var Droppable = /** @class */ (function () {
    function Droppable(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         *  Event fired when Drag dragged element enters a valid drop target.
         */
        this.onDragEnter = new core_1.EventEmitter();
        /**
         * Event fired when an element is being dragged over a valid drop target
         */
        this.onDragOver = new core_1.EventEmitter();
        /**
         * Event fired when a dragged element leaves a valid drop target.
         */
        this.onDragLeave = new core_1.EventEmitter();
        /**
         * Event fired when an element is dropped on a valid drop target.
         */
        this.onDrop = new core_1.EventEmitter();
        /**
         * CSS class that is applied when a compatible draggable is being dragged over this droppable.
         */
        this.dragOverClass = 'drag-over-border';
        /**
         * CSS class applied on this droppable when a compatible draggable item is being dragged.
         * This can be used to visually show allowed drop zones.
         */
        this.dragHintClass = 'drag-hint-border';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dropScope = 'default';
        /**
         * @private
         * Backing field for the dropEnabled property
         */
        this._dropEnabled = true;
        /**
         * @private
         * Field for tracking drag state. Helps when
         * drag stop event occurs before the allowDrop()
         * can be calculated (async).
         */
        this._isDragActive = false;
        /**
         * @private
         * Field for tracking if service is subscribed.
         * Avoids creating multiple subscriptions of service.
         */
        this._isServiceActive = false;
    }
    Object.defineProperty(Droppable.prototype, "dropEnabled", {
        get: function () {
            return this._dropEnabled;
        },
        /**
         * Defines if drop is enabled. `true` by default.
         */
        set: function (value) {
            this._dropEnabled = value;
            if (this._dropEnabled === true) {
                this.subscribeService();
            }
            else {
                this.unsubscribeService();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Droppable.prototype.ngOnInit = function () {
        if (this.dropEnabled === true) {
            this.subscribeService();
        }
    };
    Droppable.prototype.ngOnDestroy = function () {
        this.unsubscribeService();
        this.unbindDragListeners();
    };
    Droppable.prototype.dragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onDragEnter.emit(e);
    };
    Droppable.prototype.dragOver = function (e, result) {
        if (result) {
            dom_helper_1.DomHelper.addClass(this.el, this.dragOverClass);
            e.preventDefault();
            this.onDragOver.emit(e);
        }
    };
    Droppable.prototype.dragLeave = function (e) {
        dom_helper_1.DomHelper.removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        this.onDragLeave.emit(e);
    };
    Droppable.prototype.drop = function (e) {
        var _this = this;
        this.allowDrop().subscribe(function (result) {
            if (result && _this._isDragActive) {
                dom_helper_1.DomHelper.removeClass(_this.el, _this.dragOverClass);
                e.preventDefault();
                e.stopPropagation();
                _this.ng2DragDropService.onDragEnd.next();
                _this.onDrop.emit(new drop_event_model_1.DropEvent(e, _this.ng2DragDropService.dragData));
                _this.ng2DragDropService.dragData = null;
                _this.ng2DragDropService.scope = null;
            }
        });
    };
    Droppable.prototype.allowDrop = function () {
        var _this = this;
        var allowed = false;
        /* tslint:disable:curly */
        /* tslint:disable:one-line */
        if (typeof this.dropScope === 'string') {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.ng2DragDropService.scope === this.dropScope;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.ng2DragDropService.scope.indexOf(this.dropScope) > -1;
        }
        else if (this.dropScope instanceof Array) {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.dropScope.indexOf(this.ng2DragDropService.scope) > -1;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.dropScope.filter(function (item) {
                    return _this.ng2DragDropService.scope.indexOf(item) !== -1;
                }).length > 0;
        }
        else if (typeof this.dropScope === 'function') {
            allowed = this.dropScope(this.ng2DragDropService.dragData);
            if (allowed instanceof rxjs_1.Observable) {
                return allowed.pipe(operators_1.map(function (result) { return result && _this.dropEnabled; }));
            }
        }
        /* tslint:enable:curly */
        /* tslint:disable:one-line */
        return rxjs_1.of(allowed && this.dropEnabled);
    };
    Droppable.prototype.subscribeService = function () {
        var _this = this;
        if (this._isServiceActive === true) {
            return;
        }
        this._isServiceActive = true;
        this.dragStartSubscription = this.ng2DragDropService.onDragStart.subscribe(function () {
            _this._isDragActive = true;
            _this.allowDrop().subscribe(function (result) {
                if (result && _this._isDragActive) {
                    dom_helper_1.DomHelper.addClass(_this.el, _this.dragHintClass);
                    _this.zone.runOutsideAngular(function () {
                        _this.unbindDragEnterListener = _this.renderer.listen(_this.el.nativeElement, 'dragenter', function (dragEvent) {
                            _this.dragEnter(dragEvent);
                        });
                        _this.unbindDragOverListener = _this.renderer.listen(_this.el.nativeElement, 'dragover', function (dragEvent) {
                            _this.dragOver(dragEvent, result);
                        });
                        _this.unbindDragLeaveListener = _this.renderer.listen(_this.el.nativeElement, 'dragleave', function (dragEvent) {
                            _this.dragLeave(dragEvent);
                        });
                    });
                }
            });
        });
        this.dragEndSubscription = this.ng2DragDropService.onDragEnd.subscribe(function () {
            _this._isDragActive = false;
            dom_helper_1.DomHelper.removeClass(_this.el, _this.dragHintClass);
            _this.unbindDragListeners();
        });
    };
    Droppable.prototype.unsubscribeService = function () {
        this._isServiceActive = false;
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragEndSubscription) {
            this.dragEndSubscription.unsubscribe();
        }
    };
    Droppable.prototype.unbindDragListeners = function () {
        if (this.unbindDragEnterListener) {
            this.unbindDragEnterListener();
        }
        if (this.unbindDragOverListener) {
            this.unbindDragOverListener();
        }
        if (this.unbindDragLeaveListener) {
            this.unbindDragLeaveListener();
        }
    };
    Droppable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[droppable]'
                },] },
    ];
    /** @nocollapse */
    Droppable.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 },
        { type: ng_drag_drop_service_1.NgDragDropService },
        { type: core_1.NgZone }
    ]; };
    Droppable.propDecorators = {
        onDragEnter: [{ type: core_1.Output }],
        onDragOver: [{ type: core_1.Output }],
        onDragLeave: [{ type: core_1.Output }],
        onDrop: [{ type: core_1.Output }],
        dragOverClass: [{ type: core_1.Input }],
        dragHintClass: [{ type: core_1.Input }],
        dropScope: [{ type: core_1.Input }],
        dropEnabled: [{ type: core_1.Input }],
        drop: [{ type: core_1.HostListener, args: ['drop', ['$event'],] }]
    };
    return Droppable;
}());
exports.Droppable = Droppable;
//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "./node_modules/ng-drag-drop/src/ng-drag-drop.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng-drag-drop/src/ng-drag-drop.module.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var draggable_directive_1 = __webpack_require__(/*! ./directives/draggable.directive */ "./node_modules/ng-drag-drop/src/directives/draggable.directive.js");
var droppable_directive_1 = __webpack_require__(/*! ./directives/droppable.directive */ "./node_modules/ng-drag-drop/src/directives/droppable.directive.js");
var ng_drag_drop_service_1 = __webpack_require__(/*! ./services/ng-drag-drop.service */ "./node_modules/ng-drag-drop/src/services/ng-drag-drop.service.js");
var NgDragDropModule = /** @class */ (function () {
    function NgDragDropModule() {
    }
    NgDragDropModule.forRoot = function () {
        return {
            ngModule: NgDragDropModule,
            providers: [ng_drag_drop_service_1.NgDragDropService]
        };
    };
    NgDragDropModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ],
                    exports: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ]
                },] },
    ];
    return NgDragDropModule;
}());
exports.NgDragDropModule = NgDragDropModule;
//# sourceMappingURL=ng-drag-drop.module.js.map

/***/ }),

/***/ "./node_modules/ng-drag-drop/src/services/ng-drag-drop.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-drag-drop/src/services/ng-drag-drop.service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var NgDragDropService = /** @class */ (function () {
    function NgDragDropService() {
        this.onDragStart = new rxjs_1.Subject();
        this.onDragEnd = new rxjs_1.Subject();
    }
    NgDragDropService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NgDragDropService.ctorParameters = function () { return []; };
    return NgDragDropService;
}());
exports.NgDragDropService = NgDragDropService;
//# sourceMappingURL=ng-drag-drop.service.js.map

/***/ }),

/***/ "./node_modules/ng-drag-drop/src/shared/dom-helper.js":
/*!************************************************************!*\
  !*** ./node_modules/ng-drag-drop/src/shared/dom-helper.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var DomHelper = /** @class */ (function () {
    function DomHelper() {
    }
    /**
     * Polyfill for element.matches()
     * See: https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
     * @param element
     * @param selectorName
     */
    DomHelper.matches = function (element, selectorName) {
        var proto = Element.prototype;
        var func = proto['matches'] ||
            proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
        return func.call(element, selectorName);
    };
    /**
     * Applies the specified css class on nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.addClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.add(className);
        }
    };
    /**
     * Removes the specified class from nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.removeClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.remove(className);
        }
    };
    /**
     * Gets element with valid classList
     *
     * @param elementRef
     * @returns ElementRef | null
     */
    DomHelper.getElementWithValidClassList = function (elementRef) {
        var e = elementRef instanceof core_1.ElementRef ? elementRef.nativeElement : elementRef;
        if (e.classList !== undefined && e.classList !== null) {
            return e;
        }
        return null;
    };
    return DomHelper;
}());
exports.DomHelper = DomHelper;
//# sourceMappingURL=dom-helper.js.map

/***/ }),

/***/ "./node_modules/ng-drag-drop/src/shared/drop-event.model.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng-drag-drop/src/shared/drop-event.model.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropEvent = /** @class */ (function () {
    function DropEvent(event, data) {
        this.nativeEvent = event;
        this.dragData = data;
    }
    return DropEvent;
}());
exports.DropEvent = DropEvent;
//# sourceMappingURL=drop-event.model.js.map

/***/ }),

/***/ "./src/app/study/main-skeleton/main-skeleton.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/study/main-skeleton/main-skeleton.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".from {\r\n  background-color: orange;\r\n  padding: 10px;\r\n}\r\n.to {\r\n  background-color: orangered;\r\n  padding: 10px;\r\n}\r\n.containerOut{\r\n  height:100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  position: relative;\r\n}\r\n.leftParent{\r\n  flex-grow: 1.5;\r\n  flex-basis: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.baseCommand {\r\n  text-align: center;\r\n  flex-grow: 1;\r\n  background-color: #1864ab;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n}\r\n.commandList {\r\n  min-height: 200px;\r\n  padding-top: 5px;\r\n  background-color: #dee2e6;\r\n  flex-grow: 1;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n.droppedCommand{\r\n  flex-grow: 2;\r\n  text-align: center;\r\n  min-height: 100px;\r\n  width: 50%;\r\n  background-color: #1864ab;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.dropCommandList{\r\n  min-height: 200px;\r\n  padding-top: 5px;\r\n  background-color: #dee2e6;\r\n  flex-grow: 1;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n.rightParent{\r\n  flex-basis: 0;\r\n  flex-grow: 3;\r\n  background-color: #1971c2;\r\n}\r\n.layerTitle{\r\n  font-size: 35px;\r\n  font-weight: 900;\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  color: whitesmoke;\r\n}\r\n.containerHeader{\r\n  background-color: #21252D;\r\n  color: #dee2e6;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.playDiv button{\r\n  border: 3px solid black;\r\n  border-radius: 10px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.stageSelector{\r\n  background-color: #dee2e6;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvbWFpbi1za2VsZXRvbi9tYWluLXNrZWxldG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztDQUNmO0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUlEO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5L21haW4tc2tlbGV0b24vbWFpbi1za2VsZXRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyb20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi50byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lck91dHtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxlZnRQYXJlbnR7XHJcbiAgZmxleC1ncm93OiAxLjU7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmJhc2VDb21tYW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvbW1hbmRMaXN0IHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZHJvcHBlZENvbW1hbmR7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5kcm9wQ29tbWFuZExpc3R7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJpZ2h0UGFyZW50e1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgZmxleC1ncm93OiAzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTcxYzI7XHJcbn1cclxuLmxheWVyVGl0bGV7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmNvbnRhaW5lckhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJEO1xyXG4gIGNvbG9yOiAjZGVlMmU2O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ucGxheURpdiBidXR0b257XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4uc3RhZ2VTZWxlY3RvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/study/main-skeleton/main-skeleton.component.html":
/*!******************************************************************!*\
  !*** ./src/app/study/main-skeleton/main-skeleton.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerOut\">\n  <div class=\"container\">\n      <div class=\"leftParent\">\n        <div class=\"baseCommand\">\n          <div class=\"layerTitle\"> 명령들 </div>\n          <div  dragula=\"VAMPIRES\" [(dragulaModel)] =\"items\" class=\"commandList\" id=\"commandList\">\n             <div *ngFor=\"let item of items\" class=\"list-group-item\">\n               <div *ngIf=\"item.getType() === studyNodeService.normalType\">\n                  <app-normal-node [node]=\"item\"></app-normal-node>\n               </div>\n               <div *ngIf=\"item.getType() === studyNodeService.forType\">\n                 <app-for-node [forNode]=\"item\" [canContain]=\"false\"></app-for-node>\n               </div>\n             </div>\n          </div>\n        </div>\n        <div class=\"droppedCommand\">\n            <div class=\"layerTitle\"> 입력창<div class=\"playDiv\"><button (click)=\"onPlayButtonClick()\"><mat-icon>play_arrow</mat-icon></button></div></div>\n            <div  dragula=\"VAMPIRES\" [(dragulaModel)] = \"droppedItems\" class=\"dropCommandList\" id=\"dropCommandList\">\n               <div *ngFor=\" let item of droppedItems\" class=\"list-group-item\">\n                   <div *ngIf=\"item.getType() === studyNodeService.normalType\">\n                      <app-normal-node [node]=\"item\"></app-normal-node>\n                   </div>\n                   <div *ngIf=\"item.getType() === studyNodeService.forType\">\n                      <app-for-node [forNode]=\"item\" [canContain]=\"true\"></app-for-node>\n                   </div>\n               </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"rightParent\">\n      <app-car-adventure-selector (stage)=\"carStageSelected($event)\"></app-car-adventure-selector>\n      <app-tutorial1 *ngIf=\"carStage === 1\"></app-tutorial1>\n      <app-stage1 *ngIf=\"carStage === 2\"></app-stage1>\n      <app-stage2 *ngIf=\"carStage === 3\"></app-stage2>\n      <app-stage3 *ngIf=\"carStage === 4\"></app-stage3>\n      <app-stage4 *ngIf=\"carStage === 5\"></app-stage4>\n      <app-stage5 *ngIf=\"carStage === 6\"></app-stage5>\n      <app-stage6 *ngIf=\"carStage === 7\"></app-stage6>\n      <app-stage7 *ngIf=\"carStage === 8\"></app-stage7>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/main-skeleton/main-skeleton.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/study/main-skeleton/main-skeleton.component.ts ***!
  \****************************************************************/
/*! exports provided: MainSkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSkeletonComponent", function() { return MainSkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _node_core_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node-core/node */ "./src/app/study/node-core/node.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainSkeletonComponent = /** @class */ (function () {
    function MainSkeletonComponent(dragulaService, studyNodeService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.studyNodeService = studyNodeService;
        this.items = [
            new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["NormalNode"](_node_core_node__WEBPACK_IMPORTED_MODULE_2__["Direction"].FRONT, this.studyNodeService.globalNodeId++),
            new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["NormalNode"](_node_core_node__WEBPACK_IMPORTED_MODULE_2__["Direction"].LEFT, this.studyNodeService.globalNodeId++),
            new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["NormalNode"](_node_core_node__WEBPACK_IMPORTED_MODULE_2__["Direction"].RIGHT, this.studyNodeService.globalNodeId++),
            new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["NormalNode"](_node_core_node__WEBPACK_IMPORTED_MODULE_2__["Direction"].BACK, this.studyNodeService.globalNodeId++),
            new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["ForNode"](this.studyNodeService.globalNodeId++)
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
                    return new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["NormalNode"](item.getEvery()[0], _this.studyNodeService.globalNodeId++);
                }
                else if (item.getType() === _this.studyNodeService.forType) {
                    return new _node_core_node__WEBPACK_IMPORTED_MODULE_2__["ForNode"](_this.studyNodeService.globalNodeId++);
                }
            },
            accepts: function (el, target, source, sibling) {
                // To avoid dragging from right to left container
                return target.id !== 'commandList';
            }
        });
    }
    MainSkeletonComponent.prototype.ngOnInit = function () {
    };
    MainSkeletonComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('VAMPIRES');
    };
    MainSkeletonComponent.prototype.carStageSelected = function (value) {
        console.log(value);
        this.carStage = value;
    };
    MainSkeletonComponent.prototype.onPlayButtonClick = function () {
        this.studyNodeService.actions.next(this.droppedItems.reduce(function (ac, value, index, array) { return (ac.concat(value.getEvery())); }, []));
    };
    MainSkeletonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-skeleton',
            template: __webpack_require__(/*! ./main-skeleton.component.html */ "./src/app/study/main-skeleton/main-skeleton.component.html"),
            styles: [__webpack_require__(/*! ./main-skeleton.component.css */ "./src/app/study/main-skeleton/main-skeleton.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"], _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_3__["StudyNodeService"]])
    ], MainSkeletonComponent);
    return MainSkeletonComponent;
}());



/***/ }),

/***/ "./src/app/study/node-core/node-name.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/study/node-core/node-name.pipe.ts ***!
  \***************************************************/
/*! exports provided: NodeNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeNamePipe", function() { return NodeNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/app/study/node-core/node.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NodeNamePipe = /** @class */ (function () {
    function NodeNamePipe() {
    }
    NodeNamePipe.prototype.transform = function (value, exponent) {
        return this.getName(value);
    };
    NodeNamePipe.prototype.getName = function (direction) {
        if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].FRONT) {
            return '위로';
        }
        else if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].BACK) {
            return '아래로';
        }
        else if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT) {
            return '왼쪽으로';
        }
        else {
            return '오른쪽으로';
        }
    };
    NodeNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'nodeName' })
    ], NodeNamePipe);
    return NodeNamePipe;
}());



/***/ }),

/***/ "./src/app/study/node-core/node.ts":
/*!*****************************************!*\
  !*** ./src/app/study/node-core/node.ts ***!
  \*****************************************/
/*! exports provided: Direction, NodeType, StudyNode, NoneNode, NormalNode, ForNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyNode", function() { return StudyNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoneNode", function() { return NoneNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalNode", function() { return NormalNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForNode", function() { return ForNode; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Direction;
(function (Direction) {
    Direction[Direction["NONE"] = -1] = "NONE";
    Direction[Direction["FRONT"] = 0] = "FRONT";
    Direction[Direction["BACK"] = 1] = "BACK";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var NodeType;
(function (NodeType) {
    NodeType[NodeType["NORMAL"] = 0] = "NORMAL";
    NodeType[NodeType["FOR"] = 1] = "FOR";
    NodeType[NodeType["NONE"] = -1] = "NONE";
})(NodeType || (NodeType = {}));
var StudyNode = /** @class */ (function () {
    function StudyNode() {
    }
    return StudyNode;
}());

var NoneNode = /** @class */ (function (_super) {
    __extends(NoneNode, _super);
    function NoneNode() {
        return _super.call(this) || this;
    }
    NoneNode.prototype.getType = function () {
        return NodeType.NONE;
    };
    NoneNode.prototype.getEvery = function () {
        return [Direction.NONE];
    };
    return NoneNode;
}(StudyNode));

var NormalNode = /** @class */ (function (_super) {
    __extends(NormalNode, _super);
    function NormalNode(inputDirection, id) {
        var _this = _super.call(this) || this;
        _this._direction = inputDirection;
        _this._id = id;
        return _this;
    }
    Object.defineProperty(NormalNode.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    NormalNode.prototype.getType = function () {
        return NodeType.NORMAL;
    };
    NormalNode.prototype.getEvery = function () {
        return [this._direction];
    };
    return NormalNode;
}(StudyNode));

var ForNode = /** @class */ (function (_super) {
    __extends(ForNode, _super);
    function ForNode(id) {
        var _this = _super.call(this) || this;
        _this._nodeList = [];
        _this._id = id;
        _this._loopCount = 1;
        return _this;
    }
    Object.defineProperty(ForNode.prototype, "id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForNode.prototype, "loopCount", {
        get: function () {
            return this._loopCount;
        },
        set: function (num) {
            this._loopCount = num;
        },
        enumerable: true,
        configurable: true
    });
    ForNode.prototype.getType = function () {
        return NodeType.FOR;
    };
    Object.defineProperty(ForNode.prototype, "nodeList", {
        get: function () {
            return this._nodeList;
        },
        set: function (nodes) {
            this._nodeList = nodes.slice();
        },
        enumerable: true,
        configurable: true
    });
    ForNode.prototype.getEvery = function () {
        var values = this._nodeList.map(function (e) { return e.getEvery(); }).reduce(function (ac, value, index, array) { return (ac.concat(value)); }, []);
        var returnValue = [];
        for (var i = 0; i < this.loopCount; i++) {
            returnValue = returnValue.concat(values);
        }
        return returnValue;
    };
    return ForNode;
}(StudyNode));



/***/ }),

/***/ "./src/app/study/node-core/study-node.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/study/node-core/study-node.service.ts ***!
  \*******************************************************/
/*! exports provided: StudyNodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyNodeService", function() { return StudyNodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/app/study/node-core/node.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudyNodeService = /** @class */ (function () {
    function StudyNodeService() {
        this.actions = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.normalType = _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].NORMAL;
        this.forType = _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].FOR;
        this.globalNodeId = 0;
        this.globalForNode = 0;
    }
    StudyNodeService.prototype.getXChange = function (direction, value) {
        if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT) {
            return -value;
        }
        else if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT) {
            return value;
        }
        return 0;
    };
    StudyNodeService.prototype.getYChange = function (direction, value) {
        if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].FRONT) {
            return -value;
        }
        else if (direction === _node__WEBPACK_IMPORTED_MODULE_1__["Direction"].BACK) {
            return value;
        }
        return 0;
    };
    StudyNodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StudyNodeService);
    return StudyNodeService;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carAdventureSelector {\r\n  padding: 10px;\r\n  background-color: #1864ab;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.carAdventureSelector div {\r\n  padding: 5px;\r\n  background-color: darkslateblue;\r\n  margin-left: 5px;\r\n  color: whitesmoke;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9jYXItYWR2ZW50dXJlLXNlbGVjdG9yL2Nhci1hZHZlbnR1cmUtc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5L3NjcmVlbi1jb21wb25lbnRzL2Nhci1hZHZlbnR1cmUvY2FyLWFkdmVudHVyZS1zZWxlY3Rvci9jYXItYWR2ZW50dXJlLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyQWR2ZW50dXJlU2VsZWN0b3Ige1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmNhckFkdmVudHVyZVNlbGVjdG9yIGRpdiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWJsdWU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carAdventureSelector\">\n  <div (click) = \"stageClick(1)\"> tutorial1 </div>\n  <div (click) = \"stageClick(2)\"> stage1 </div>\n  <div (click) = \"stageClick(3)\"> stage 2 </div>\n  <div (click) = \"stageClick(4)\"> stage 3 </div>\n  <div (click) = \"stageClick(5)\"> stage 4 </div>\n  <div (click) = \"stageClick(6)\"> stage 5 </div>\n  <div (click) = \"stageClick(7)\"> stage 6 </div>\n  <div (click) = \"stageClick(8)\"> stage 7 </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CarAdventureSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAdventureSelectorComponent", function() { return CarAdventureSelectorComponent; });
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

var CarAdventureSelectorComponent = /** @class */ (function () {
    function CarAdventureSelectorComponent() {
        this.stage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CarAdventureSelectorComponent.prototype.ngOnInit = function () {
    };
    CarAdventureSelectorComponent.prototype.stageClick = function (value) {
        this.stage.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CarAdventureSelectorComponent.prototype, "stage", void 0);
    CarAdventureSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-adventure-selector',
            template: __webpack_require__(/*! ./car-adventure-selector.component.html */ "./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.html"),
            styles: [__webpack_require__(/*! ./car-adventure-selector.component.css */ "./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarAdventureSelectorComponent);
    return CarAdventureSelectorComponent;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage1/stage1.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage1/stage1.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTEvc3RhZ2UxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTEvc3RhZ2UxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage1/stage1.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage1/stage1.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage1\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage1/stage1.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage1/stage1.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage1Component", function() { return Stage1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stage_infos_car_adventure_stage1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage1 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage1.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage1Component = /** @class */ (function () {
    function Stage1Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage1 = new _stage_infos_car_adventure_stage1__WEBPACK_IMPORTED_MODULE_1__["Stage1"]();
        this.map = this.stage1.map;
        this.componentManager = this.stage1.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage1.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage1Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 500 * index);
        });
    };
    Stage1Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage1Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stage1',
            template: __webpack_require__(/*! ./stage1.component.html */ "./src/app/study/screen-components/car-adventure/stage1/stage1.component.html"),
            styles: [__webpack_require__(/*! ./stage1.component.css */ "./src/app/study/screen-components/car-adventure/stage1/stage1.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_2__["StudyNodeService"]])
    ], Stage1Component);
    return Stage1Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage2/stage2.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage2/stage2.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTIvc3RhZ2UyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTIvc3RhZ2UyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage2/stage2.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage2/stage2.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage2\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage2/stage2.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage2/stage2.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage2Component", function() { return Stage2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _stage_infos_car_adventure_stage2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage2 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage2.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage2Component = /** @class */ (function () {
    function Stage2Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage2 = new _stage_infos_car_adventure_stage2__WEBPACK_IMPORTED_MODULE_2__["Stage2"]();
        this.map = this.stage2.map;
        this.componentManager = this.stage2.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage2.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage2Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Stage2Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage2Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stage2',
            template: __webpack_require__(/*! ./stage2.component.html */ "./src/app/study/screen-components/car-adventure/stage2/stage2.component.html"),
            styles: [__webpack_require__(/*! ./stage2.component.css */ "./src/app/study/screen-components/car-adventure/stage2/stage2.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Stage2Component);
    return Stage2Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage3/stage3.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage3/stage3.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTMvc3RhZ2UzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTMvc3RhZ2UzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage3/stage3.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage3/stage3.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage3\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage3/stage3.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage3/stage3.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage3Component", function() { return Stage3Component; });
/* harmony import */ var _stage_infos_car_adventure_stage3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage3 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage3.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage3Component = /** @class */ (function () {
    function Stage3Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage3 = new _stage_infos_car_adventure_stage3__WEBPACK_IMPORTED_MODULE_0__["Stage3"]();
        this.map = this.stage3.map;
        this.componentManager = this.stage3.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage3.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage3Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Stage3Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage3Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stage3',
            template: __webpack_require__(/*! ./stage3.component.html */ "./src/app/study/screen-components/car-adventure/stage3/stage3.component.html"),
            styles: [__webpack_require__(/*! ./stage3.component.css */ "./src/app/study/screen-components/car-adventure/stage3/stage3.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Stage3Component);
    return Stage3Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage4/stage4.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage4/stage4.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTQvc3RhZ2U0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTQvc3RhZ2U0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage4/stage4.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage4/stage4.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage4\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage4/stage4.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage4/stage4.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage4Component", function() { return Stage4Component; });
/* harmony import */ var _stage_infos_car_adventure_stage4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage4 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage4.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage4Component = /** @class */ (function () {
    function Stage4Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage4 = new _stage_infos_car_adventure_stage4__WEBPACK_IMPORTED_MODULE_0__["Stage4"]();
        this.map = this.stage4.map;
        this.componentManager = this.stage4.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage4.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage4Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Stage4Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal && this.componentManager.catchCount >= this.componentManager.catchGoal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage4Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stage4',
            template: __webpack_require__(/*! ./stage4.component.html */ "./src/app/study/screen-components/car-adventure/stage4/stage4.component.html"),
            styles: [__webpack_require__(/*! ./stage4.component.css */ "./src/app/study/screen-components/car-adventure/stage4/stage4.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Stage4Component);
    return Stage4Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage5/stage5.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage5/stage5.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTUvc3RhZ2U1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTUvc3RhZ2U1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage5/stage5.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage5/stage5.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage5\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage5/stage5.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage5/stage5.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage5Component", function() { return Stage5Component; });
/* harmony import */ var _stage_infos_car_adventure_stage5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage5 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage5.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage5Component = /** @class */ (function () {
    function Stage5Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage5 = new _stage_infos_car_adventure_stage5__WEBPACK_IMPORTED_MODULE_0__["Stage5"]();
        this.map = this.stage5.map;
        this.componentManager = this.stage5.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage5.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage5Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Stage5Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal && this.componentManager.catchCount >= this.componentManager.catchGoal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage5Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stage5',
            template: __webpack_require__(/*! ./stage5.component.html */ "./src/app/study/screen-components/car-adventure/stage5/stage5.component.html"),
            styles: [__webpack_require__(/*! ./stage5.component.css */ "./src/app/study/screen-components/car-adventure/stage5/stage5.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Stage5Component);
    return Stage5Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage6/stage6.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage6/stage6.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTYvc3RhZ2U2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTYvc3RhZ2U2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage6/stage6.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage6/stage6.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage6\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage6/stage6.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage6/stage6.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage6Component", function() { return Stage6Component; });
/* harmony import */ var _stage_infos_car_adventure_stage6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage6 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage6.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage6Component = /** @class */ (function () {
    function Stage6Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage6Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage6 = new _stage_infos_car_adventure_stage6__WEBPACK_IMPORTED_MODULE_0__["Stage6"]();
        this.map = this.stage6.map;
        this.componentManager = this.stage6.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage6.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage6Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Stage6Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal && this.componentManager.catchCount >= this.componentManager.catchGoal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage6Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stage6',
            template: __webpack_require__(/*! ./stage6.component.html */ "./src/app/study/screen-components/car-adventure/stage6/stage6.component.html"),
            styles: [__webpack_require__(/*! ./stage6.component.css */ "./src/app/study/screen-components/car-adventure/stage6/stage6.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Stage6Component);
    return Stage6Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage7/stage7.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage7/stage7.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTcvc3RhZ2U3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS9zdGFnZTcvc3RhZ2U3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage7/stage7.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage7/stage7.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"stage7\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/stage7/stage7.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/stage7/stage7.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Stage7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage7Component", function() { return Stage7Component; });
/* harmony import */ var _stage_infos_car_adventure_stage7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stage-infos/car-adventure/stage7 */ "./src/app/study/screen-components/stage-infos/car-adventure/stage7.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Stage7Component = /** @class */ (function () {
    function Stage7Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Stage7Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stage7 = new _stage_infos_car_adventure_stage7__WEBPACK_IMPORTED_MODULE_0__["Stage7"]();
        this.map = this.stage7.map;
        this.componentManager = this.stage7.componentsManager;
        this.character = this.componentManager.getCharacter(this.stage7.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Stage7Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Stage7Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal && this.componentManager.catchCount >= this.componentManager.catchGoal) {
            return true;
        }
        else {
            return false;
        }
    };
    Stage7Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Stage7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stage7',
            template: __webpack_require__(/*! ./stage7.component.html */ "./src/app/study/screen-components/car-adventure/stage7/stage7.component.html"),
            styles: [__webpack_require__(/*! ./stage7.component.css */ "./src/app/study/screen-components/car-adventure/stage7/stage7.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Stage7Component);
    return Stage7Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapParent{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n}\r\n.resultTextDiv {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.resultTextDiv span {\r\n  display: inline-block;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.sText {\r\n  color: white;\r\n}\r\n.fText {\r\n  color: crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS90dXRvcmlhbDEvdHV0b3JpYWwxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc2NyZWVuLWNvbXBvbmVudHMvY2FyLWFkdmVudHVyZS90dXRvcmlhbDEvdHV0b3JpYWwxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwUGFyZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuLnJlc3VsdFRleHREaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yZXN1bHRUZXh0RGl2IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uc1RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZlRleHQge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapParent\" *ngIf=\"tutorial1\">\n  <div class=\"resultTextDiv\" *ngIf=\"resultTextVisible\"><span *ngIf=\"result\" class=\"sText\">성공</span><span *ngIf=\"!result\" class=\"fText\">실패</span></div>\n  <div class=\"mapBody\" [ngStyle] = \"{width: map.width + 'px', height: map.height + 'px', position: 'relative', background: '#1c7ed6'}\">\n    <div *ngFor=\"let obstacles of componentManager.getAllObstacle()\" [ngStyle] = \"{position: 'absolute', left: obstacles.x + 'px', top: obstacles.y + 'px', width: obstacles.width + 'px', height: obstacles.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"obstacles.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n    <div class=\"character\" [ngStyle]=\"{left: character.x + 'px', top: character.y + 'px', position: 'absolute', width: character.width + 'px', height: character.height + 'px', zIndex: character.zIndex}\">\n      <img [src]=\"character.imgSrc\" [ngStyle]=\"{height: '100%', width: '100%'}\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.ts ***!
  \****************************************************************************************/
/*! exports provided: Tutorial1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tutorial1Component", function() { return Tutorial1Component; });
/* harmony import */ var _stage_infos_car_adventure_tutorial1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stage-infos/car-adventure/tutorial1 */ "./src/app/study/screen-components/stage-infos/car-adventure/tutorial1.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tutorial1Component = /** @class */ (function () {
    function Tutorial1Component(nodeService) {
        this.nodeService = nodeService;
        this.resultTextVisible = false;
        this.result = false;
    }
    Tutorial1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.tutorial1 = new _stage_infos_car_adventure_tutorial1__WEBPACK_IMPORTED_MODULE_0__["TutorialStage1"]();
        this.map = this.tutorial1.map;
        this.componentManager = this.tutorial1.componentsManager;
        this.character = this.componentManager.getCharacter(this.tutorial1.characterId + '');
        this.nodeService.actions.next([]);
        this.subscription = this.nodeService.actions.subscribe(function (value) { return _this.actionBehavior(value); });
    };
    Tutorial1Component.prototype.actionBehavior = function (value) {
        var _this = this;
        value.forEach(function (d, index, array) {
            setTimeout(function () {
                var changed = _this.map.changeComponentPosition(_this.character.id + '', _this.nodeService.getXChange(d, _this.character.width), _this.nodeService.getYChange(d, _this.character.height)); // move X by 'Character's Width' and move Y by 'Character's Height'
                if (changed) {
                    _this.map.setMapInfoAll(); // if changed. set All map Info
                }
                if (index === array.length - 1) { // if action is End
                    setTimeout(function () {
                        _this.resultTextVisible = true;
                        if (_this.isStageCleared()) {
                            _this.result = true;
                        }
                        else {
                            _this.result = false;
                            _this.map.loadFirstComponentPosition();
                            _this.map.setMapInfoAll();
                            setTimeout(function () { _this.resultTextVisible = false; }, 500);
                        }
                    }, 1000);
                }
            }, 300 * index);
        });
    };
    Tutorial1Component.prototype.isStageCleared = function () {
        if (this.componentManager.goal) {
            return true;
        }
        else {
            return false;
        }
    };
    Tutorial1Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Tutorial1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tutorial1',
            template: __webpack_require__(/*! ./tutorial1.component.html */ "./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.html"),
            styles: [__webpack_require__(/*! ./tutorial1.component.css */ "./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], Tutorial1Component);
    return Tutorial1Component;
}());



/***/ }),

/***/ "./src/app/study/screen-components/component.ts":
/*!******************************************************!*\
  !*** ./src/app/study/screen-components/component.ts ***!
  \******************************************************/
/*! exports provided: Components, Block, Character, Item, Goal, ComponentsType, ComponentsManager, Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goal", function() { return Goal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsType", function() { return ComponentsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsManager", function() { return ComponentsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Components = /** @class */ (function () {
    function Components(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._zIndex = 0;
    }
    Object.defineProperty(Components.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "moveAble", {
        get: function () {
            return this._moveAble;
        },
        set: function (value) {
            this._moveAble = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "catchAble", {
        get: function () {
            return this._catchAble;
        },
        set: function (value) {
            this._catchAble = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "stepAble", {
        get: function () {
            return this._stepAble;
        },
        set: function (value) {
            this._stepAble = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "zIndex", {
        get: function () {
            return this._zIndex;
        },
        set: function (value) {
            this._zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Components.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Components.prototype.getWidthPx = function () {
        return this._width + 'px';
    };
    Components.prototype.getHeightPx = function () {
        return this._height + 'px';
    };
    return Components;
}());

var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(x, y, width, height, imgSrc) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.stepAble = false;
        _this.moveAble = false;
        _this.catchAble = false;
        _this.type = ComponentsType.Block;
        _this.zIndex = 300;
        _this._imgSrc = imgSrc;
        return _this;
    }
    Object.defineProperty(Block.prototype, "imgSrc", {
        get: function () {
            return this._imgSrc;
        },
        set: function (value) {
            this._imgSrc = value;
        },
        enumerable: true,
        configurable: true
    });
    return Block;
}(Components));

var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character(x, y, width, height, img) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.stepAble = false;
        _this.moveAble = true;
        _this.catchAble = false;
        _this._imgSrc = img;
        _this.type = ComponentsType.Character;
        _this.zIndex = 999;
        return _this;
    }
    Object.defineProperty(Character.prototype, "imgSrc", {
        get: function () {
            return this._imgSrc;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}(Components));

var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(x, y, width, height, imgSrc) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.stepAble = true;
        _this.moveAble = false;
        _this.catchAble = true;
        _this.type = ComponentsType.Item;
        _this.zIndex = 300;
        _this._imgSrc = imgSrc;
        return _this;
    }
    Object.defineProperty(Item.prototype, "imgSrc", {
        get: function () {
            return this._imgSrc;
        },
        set: function (value) {
            this._imgSrc = value;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}(Components));

var Goal = /** @class */ (function (_super) {
    __extends(Goal, _super);
    function Goal(x, y, width, height, imgSrc) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.stepAble = true;
        _this.moveAble = false;
        _this.catchAble = true;
        _this.type = ComponentsType.Goal;
        _this.zIndex = 300;
        _this._imgSrc = imgSrc;
        return _this;
    }
    Object.defineProperty(Goal.prototype, "imgSrc", {
        get: function () {
            return this._imgSrc;
        },
        set: function (value) {
            this._imgSrc = value;
        },
        enumerable: true,
        configurable: true
    });
    return Goal;
}(Components));

var ComponentsType;
(function (ComponentsType) {
    ComponentsType["Character"] = "Character";
    ComponentsType["Obstacle"] = "Obstacle";
    ComponentsType["Block"] = "Block";
    ComponentsType["Item"] = "Item";
    ComponentsType["Goal"] = "Goal";
})(ComponentsType || (ComponentsType = {}));
var ComponentsManager = /** @class */ (function () {
    function ComponentsManager() {
        this._createdObject = {};
        this._obstacleComponent = {};
        this._characterComponent = {};
        this._firstComponentsPosition = {};
        this._goal = false;
        this._catchCount = 0;
        this._catchGoal = 0;
        this._idSequence = 0;
    }
    ComponentsManager.prototype.setAllInfoToMap = function (array) {
        var _this = this;
        var keys = Object.keys(this._obstacleComponent);
        keys.forEach(function (cId) {
            _this.setInfoToMap(cId, _this._obstacleComponent, array);
        });
        keys = Object.keys(this._characterComponent);
        keys.forEach(function (cId) {
            _this.setInfoToMap(cId, _this._characterComponent, array);
        });
    };
    ComponentsManager.prototype.setInfoToMap = function (cId, containedAt, mapInfo) {
        var c = containedAt[cId];
        for (var i = c.y; i < c.y + c.height; i++) {
            for (var j = c.x; j < c.x + c.width; j++) {
                mapInfo[i][j] = c.id;
            }
        }
    };
    ComponentsManager.prototype.setComponent = function (c, type) {
        if (Object.keys(this._createdObject).indexOf(c.id + '', 0) === -1) {
            c.id = this._idSequence++;
            this._createdObject[c.id] = c;
        }
        if (type === ComponentsType.Character && Object.keys(this._characterComponent).indexOf(c.id + '', 0) === -1) {
            this._characterComponent[c.id] = c;
        }
        else if (type === ComponentsType.Obstacle && Object.keys(this._obstacleComponent).indexOf(c.id + '', 0) === -1) {
            this._obstacleComponent[c.id] = c;
        }
        return c.id;
    };
    ComponentsManager.prototype.hideComponent = function (c) {
        if (Object.keys(this._characterComponent).indexOf(c.id + '', 0) !== -1) {
            delete this._characterComponent[c.id];
        }
        else if (Object.keys(this._obstacleComponent).indexOf(c.id + '', 0) !== -1) {
            delete this._obstacleComponent[c.id];
        }
    };
    ComponentsManager.prototype.removeComponent = function (c) {
        this.hideComponent(c);
        if (Object.keys(this._createdObject).indexOf(c.id + '', 0) !== -1) {
            delete this._createdObject[c.id];
        }
    };
    ComponentsManager.prototype.getCharacter = function (cId) {
        return this._characterComponent[cId];
    };
    ComponentsManager.prototype.getObstacle = function (cId) {
        return this._obstacleComponent[cId];
    };
    ComponentsManager.prototype.getAllObstacle = function () {
        var _this = this;
        var keys = Object.keys(this._obstacleComponent);
        return keys.map(function (c) { return _this._obstacleComponent[c]; });
    };
    ComponentsManager.prototype.getComponent = function (cId) {
        return this.getCharacter(cId) ? this.getCharacter(cId) : this.getObstacle(cId);
    };
    ComponentsManager.prototype.saveFirstComponentPosition = function () {
        var _this = this;
        var keys = Object.keys(this._createdObject);
        keys.forEach(function (k) {
            _this._firstComponentsPosition[k] = { x: _this._createdObject[k].x, y: _this._createdObject[k].y };
        });
    };
    ComponentsManager.prototype.loadFirstComponentPosition = function () {
        var _this = this;
        var keys = Object.keys(this._firstComponentsPosition);
        keys.forEach(function (k) {
            _this._createdObject[k].x = _this._firstComponentsPosition[k].x;
            _this._createdObject[k].y = _this._firstComponentsPosition[k].y;
            if (Object.keys(_this._obstacleComponent).indexOf(k) === -1 && Object.keys(_this._characterComponent).indexOf(k)) {
                _this._obstacleComponent[k] = _this._createdObject[k];
            }
        });
        this.catchCount = 0;
        this.goal = false;
    };
    Object.defineProperty(ComponentsManager.prototype, "goal", {
        get: function () {
            return this._goal;
        },
        set: function (value) {
            this._goal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentsManager.prototype, "catchCount", {
        get: function () {
            return this._catchCount;
        },
        set: function (value) {
            this._catchCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentsManager.prototype, "catchGoal", {
        get: function () {
            return this._catchGoal;
        },
        set: function (value) {
            this._catchGoal = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentsManager;
}());

var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(x, y, width, height, componentManager) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.catchEventOccur = new rxjs_index__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        _this.goalEventOccur = new rxjs_index__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        _this._zIndex = 0;
        _this._stepAbleP = new Array(_this.height + 1);
        _this._componentManager = componentManager;
        for (var i = 0; i < _this.height + 1; i++) {
            _this._stepAbleP[i] = new Array(_this.width + 1);
        }
        console.log(_this._stepAbleP);
        // all to value false
        for (var i = 0; i < _this.height; i++) {
            for (var j = 0; j < _this.width; j++) {
                _this._stepAbleP[i][j] = -1;
            }
        }
        return _this;
    }
    Object.defineProperty(Map.prototype, "backGroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.clearInfoAll = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                this._stepAbleP[i][j] = -1;
            }
        }
    };
    Map.prototype.setObstacles = function (component) {
        return this._componentManager.setComponent(component, ComponentsType.Obstacle);
    };
    Map.prototype.setCharacter = function (component) {
        return this._componentManager.setComponent(component, ComponentsType.Character);
    };
    Map.prototype.changeComponentPosition = function (cId, xChange, yChange) {
        var character = this._componentManager.getComponent(cId);
        var afterX = character.x + xChange;
        var afterY = character.y + yChange;
        if (this.isInCanvas(afterX, afterY) && this._stepAbleP[afterY][afterX] === -1) {
            character.x = character.x + xChange;
            character.y = character.y + yChange;
            return true;
        }
        else if (this.isInCanvas(afterX, afterY) && this._componentManager.getComponent(this._stepAbleP[afterY][afterX]).moveAble) {
            if (this.changeComponentPosition(this._stepAbleP[afterY][afterX], xChange, yChange)) {
                character.x = afterX;
                character.y = afterY;
            }
        }
        else if (this.isInCanvas(afterX, afterY) && this._componentManager.getComponent(this._stepAbleP[afterY][afterX]).type === ComponentsType.Item) {
            this._componentManager.hideComponent(this._componentManager.getComponent(this._stepAbleP[afterY][afterX]));
            character.x = character.x + xChange;
            character.y = character.y + yChange;
            this.catchEventOccur.next(true);
            return true;
        }
        else if (this.isInCanvas(afterX, afterY) && this._componentManager.getComponent(this._stepAbleP[afterY][afterX]).type === ComponentsType.Goal) {
            character.x = character.x + xChange;
            character.y = character.y + yChange;
            this.goalEventOccur.next(true);
            return true;
        }
        return false;
    };
    Map.prototype.setMapInfoAll = function () {
        this.clearInfoAll();
        this._componentManager.setAllInfoToMap(this._stepAbleP);
    };
    Map.prototype.isInCanvas = function (x, y) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            return true;
        }
        return false;
    };
    Map.prototype.saveFirstComponentPosition = function () {
        this._componentManager.saveFirstComponentPosition();
    };
    Map.prototype.loadFirstComponentPosition = function () {
        this._componentManager.loadFirstComponentPosition();
    };
    return Map;
}(Components));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage1.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage1.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage1", function() { return Stage1; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 500;
var mapHeight = 300;
var blockXYInfo = [{ x: 0, y: 0 }, { x: blockWidth, y: 0 }, { x: blockWidth * 2, y: 0 },
    { x: blockWidth * 3, y: 0 }, { x: blockWidth * 4, y: 0 }, { x: blockWidth * 5, y: 0 },
    { x: blockWidth * 6, y: 0 }, { x: blockWidth * 7, y: 0 }, { x: blockWidth * 8, y: 0 },
    { x: blockWidth * 9, y: 0 },
    { x: 0, y: blockHeight }, { x: blockWidth, y: blockHeight }, { x: blockWidth * 2, y: blockHeight },
    { x: blockWidth * 3, y: blockHeight }, { x: blockWidth * 4, y: blockHeight }, { x: blockWidth * 5, y: blockHeight },
    { x: blockWidth * 6, y: blockHeight }, { x: blockWidth * 7, y: blockHeight }, { x: blockWidth * 8, y: blockHeight },
    { x: blockWidth * 9, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth, y: blockHeight * 2 }, { x: blockWidth * 2, y: blockHeight * 2 },
    { x: blockWidth * 3, y: blockHeight * 2 }, { x: blockWidth * 4, y: blockHeight * 2 }, { x: blockWidth * 5, y: blockHeight * 2 },
    { x: blockWidth * 6, y: blockHeight * 2 }, { x: blockWidth * 7, y: blockHeight * 2 }, { x: blockWidth * 8, y: blockHeight * 2 },
    { x: blockWidth * 9, y: blockHeight * 2 },
    { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 }, { x: blockWidth * 2, y: blockHeight * 3 },
    { x: blockWidth * 3, y: blockHeight * 3 }, { x: blockWidth * 4, y: blockHeight * 3 }, { x: blockWidth * 5, y: blockHeight * 3 },
    { x: blockWidth * 6, y: blockHeight * 3 }, { x: blockWidth * 7, y: blockHeight * 3 }, { x: blockWidth * 8, y: blockHeight * 3 },
    { x: blockWidth * 9, y: blockHeight * 3 },
    { x: 0, y: blockHeight * 4 }, { x: blockWidth, y: blockHeight * 4 }, { x: blockWidth * 2, y: blockHeight * 4 },
    { x: blockWidth * 3, y: blockHeight * 4 }, { x: blockWidth * 4, y: blockHeight * 4 }, { x: blockWidth * 5, y: blockHeight * 4 },
    { x: blockWidth * 6, y: blockHeight * 4 }, { x: blockWidth * 7, y: blockHeight * 4 }, { x: blockWidth * 8, y: blockHeight * 4 },
    { x: blockWidth * 9, y: blockHeight * 4 },
    { x: 0, y: blockHeight * 6 }, { x: blockWidth, y: blockHeight * 6 }, { x: blockWidth * 2, y: blockHeight * 6 },
    { x: blockWidth * 3, y: blockHeight * 6 }, { x: blockWidth * 4, y: blockHeight * 6 }, { x: blockWidth * 5, y: blockHeight * 6 },
    { x: blockWidth * 6, y: blockHeight * 6 }, { x: blockWidth * 7, y: blockHeight * 6 }, { x: blockWidth * 8, y: blockHeight * 6 },
    { x: blockWidth * 9, y: blockHeight * 6 },
    { x: 0, y: blockHeight * 7 }, { x: blockWidth, y: blockHeight * 7 }, { x: blockWidth * 2, y: blockHeight * 7 },
    { x: blockWidth * 3, y: blockHeight * 7 }, { x: blockWidth * 4, y: blockHeight * 7 }, { x: blockWidth * 5, y: blockHeight * 7 },
    { x: blockWidth * 6, y: blockHeight * 7 }, { x: blockWidth * 7, y: blockHeight * 7 }, { x: blockWidth * 8, y: blockHeight * 7 },
    { x: blockWidth * 9, y: blockHeight * 7 },
    { x: 0, y: blockHeight * 8 }, { x: blockWidth, y: blockHeight * 8 }, { x: blockWidth * 2, y: blockHeight * 8 },
    { x: blockWidth * 3, y: blockHeight * 8 }, { x: blockWidth * 4, y: blockHeight * 8 }, { x: blockWidth * 5, y: blockHeight * 8 },
    { x: blockWidth * 6, y: blockHeight * 8 }, { x: blockWidth * 7, y: blockHeight * 8 }, { x: blockWidth * 8, y: blockHeight * 8 },
    { x: blockWidth * 9, y: blockHeight * 8 },
    { x: 0, y: blockHeight * 9 }, { x: blockWidth, y: blockHeight * 9 }, { x: blockWidth * 2, y: blockHeight * 9 },
    { x: blockWidth * 3, y: blockHeight * 9 }, { x: blockWidth * 4, y: blockHeight * 9 }, { x: blockWidth * 5, y: blockHeight * 9 },
    { x: blockWidth * 6, y: blockHeight * 9 }, { x: blockWidth * 7, y: blockHeight * 9 }, { x: blockWidth * 8, y: blockHeight * 9 },
    { x: blockWidth * 9, y: blockHeight * 9 },
];
var Stage1 = /** @class */ (function (_super) {
    __extends(Stage1, _super);
    function Stage1() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](blockWidth * 9, blockHeight * 5, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](0, blockHeight * 5, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        _this.map.goalEventOccur.subscribe(function (goalEvent) { goalEvent ? _this._componentManager.goal = true : _this._componentManager.goal = false; });
        _this.map.catchEventOccur.subscribe(function (catchEvent) { if (catchEvent) {
            _this._componentManager.catchCount++;
        } });
        return _this;
    }
    return Stage1;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage2.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage2.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage2", function() { return Stage2; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 500;
var mapHeight = 300;
var blockXYInfo = [{ x: 0, y: 0 }, { x: blockWidth, y: 0 }, { x: blockWidth * 2, y: 0 },
    { x: blockWidth * 3, y: 0 }, { x: blockWidth * 4, y: 0 }, { x: blockWidth * 5, y: 0 },
    { x: blockWidth * 6, y: 0 }, { x: blockWidth * 7, y: 0 }, { x: blockWidth * 8, y: 0 },
    { x: blockWidth * 9, y: 0 },
    { x: 0, y: blockHeight }, { x: blockWidth, y: blockHeight }, { x: blockWidth * 2, y: blockHeight },
    { x: blockWidth * 3, y: blockHeight }, { x: blockWidth * 4, y: blockHeight }, { x: blockWidth * 5, y: blockHeight },
    { x: blockWidth * 6, y: blockHeight }, { x: blockWidth * 7, y: blockHeight }, { x: blockWidth * 8, y: blockHeight },
    { x: blockWidth * 9, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth, y: blockHeight * 2 }, { x: blockWidth * 2, y: blockHeight * 2 },
    { x: blockWidth * 3, y: blockHeight * 2 }, { x: blockWidth * 4, y: blockHeight * 2 }, { x: blockWidth * 5, y: blockHeight * 2 },
    { x: blockWidth * 6, y: blockHeight * 2 }, { x: blockWidth * 7, y: blockHeight * 2 }, { x: blockWidth * 8, y: blockHeight * 2 },
    { x: blockWidth * 9, y: blockHeight * 2 },
    { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 }, { x: blockWidth * 2, y: blockHeight * 3 },
    { x: blockWidth * 3, y: blockHeight * 3 }, { x: blockWidth * 4, y: blockHeight * 3 }, { x: blockWidth * 5, y: blockHeight * 3 },
    { x: blockWidth * 6, y: blockHeight * 3 }, { x: blockWidth * 7, y: blockHeight * 3 }, { x: blockWidth * 8, y: blockHeight * 3 },
    { x: blockWidth * 9, y: blockHeight * 3 },
    { x: 0, y: blockHeight * 4 },
    { x: blockWidth * 4, y: blockHeight * 4 }, { x: blockWidth * 8, y: blockHeight * 4 }, { x: blockWidth * 9, y: blockHeight * 4 },
    { x: blockWidth * 2, y: blockHeight * 5 },
    { x: blockWidth * 6, y: blockHeight * 5 },
    { x: 0, y: blockHeight * 6 }, { x: blockWidth, y: blockHeight * 6 }, { x: blockWidth * 2, y: blockHeight * 6 },
    { x: blockWidth * 3, y: blockHeight * 6 }, { x: blockWidth * 4, y: blockHeight * 6 }, { x: blockWidth * 5, y: blockHeight * 6 },
    { x: blockWidth * 6, y: blockHeight * 6 }, { x: blockWidth * 7, y: blockHeight * 6 }, { x: blockWidth * 8, y: blockHeight * 6 },
    { x: blockWidth * 9, y: blockHeight * 6 },
    { x: 0, y: blockHeight * 7 }, { x: blockWidth, y: blockHeight * 7 }, { x: blockWidth * 2, y: blockHeight * 7 },
    { x: blockWidth * 3, y: blockHeight * 7 }, { x: blockWidth * 4, y: blockHeight * 7 }, { x: blockWidth * 5, y: blockHeight * 7 },
    { x: blockWidth * 6, y: blockHeight * 7 }, { x: blockWidth * 7, y: blockHeight * 7 }, { x: blockWidth * 8, y: blockHeight * 7 },
    { x: blockWidth * 9, y: blockHeight * 7 },
    { x: 0, y: blockHeight * 8 }, { x: blockWidth, y: blockHeight * 8 }, { x: blockWidth * 2, y: blockHeight * 8 },
    { x: blockWidth * 3, y: blockHeight * 8 }, { x: blockWidth * 4, y: blockHeight * 8 }, { x: blockWidth * 5, y: blockHeight * 8 },
    { x: blockWidth * 6, y: blockHeight * 8 }, { x: blockWidth * 7, y: blockHeight * 8 }, { x: blockWidth * 8, y: blockHeight * 8 },
    { x: blockWidth * 9, y: blockHeight * 8 },
    { x: 0, y: blockHeight * 9 }, { x: blockWidth, y: blockHeight * 9 }, { x: blockWidth * 2, y: blockHeight * 9 },
    { x: blockWidth * 3, y: blockHeight * 9 }, { x: blockWidth * 4, y: blockHeight * 9 }, { x: blockWidth * 5, y: blockHeight * 9 },
    { x: blockWidth * 6, y: blockHeight * 9 }, { x: blockWidth * 7, y: blockHeight * 9 }, { x: blockWidth * 8, y: blockHeight * 9 },
    { x: blockWidth * 9, y: blockHeight * 9 },
];
var Stage2 = /** @class */ (function (_super) {
    __extends(Stage2, _super);
    function Stage2() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](0, blockHeight * 5, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](blockWidth * 9, blockHeight * 5, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        _this.map.goalEventOccur.subscribe(function (goalEvent) { goalEvent ? _this._componentManager.goal = true : _this._componentManager.goal = false; });
        _this.map.catchEventOccur.subscribe(function (catchEvent) { if (catchEvent) {
            _this._componentManager.catchCount++;
        } });
        return _this;
    }
    return Stage2;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage3.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage3.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage3", function() { return Stage3; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 350;
var mapHeight = 270;
var blockXYInfo = [{ x: 0, y: 0 }, { x: blockWidth, y: 0 }, { x: blockWidth * 2, y: 0 }, { x: blockWidth * 3, y: 0 },
    { x: blockWidth * 4, y: 0 }, { x: blockWidth * 5, y: 0 }, { x: blockWidth * 6, y: 0 }, { x: blockWidth * 3, y: blockHeight }, { x: blockWidth * 4, y: blockHeight },
    { x: blockWidth * 5, y: blockHeight }, { x: blockWidth * 6, y: blockHeight }, { x: 0, y: blockHeight * 2 }, { x: blockWidth, y: blockHeight * 2 },
    { x: blockWidth * 5, y: blockHeight * 2 }, { x: blockWidth * 6, y: blockHeight * 2 }, { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 },
    { x: blockWidth * 2, y: blockHeight * 3 }, { x: blockWidth * 3, y: blockHeight * 3 }, { x: 0, y: blockHeight * 4 }, { x: blockWidth, y: blockHeight * 4 },
    { x: blockWidth * 2, y: blockHeight * 4 }, { x: blockWidth * 3, y: blockHeight * 4 }, { x: blockWidth * 4, y: blockHeight * 4 }, { x: blockWidth * 5, y: blockHeight * 4 },
    { x: 0, y: blockHeight * 5 }, { x: blockWidth, y: blockHeight * 5 }, { x: blockWidth * 2, y: blockHeight * 5 }, { x: blockWidth * 3, y: blockHeight * 5 },
    { x: 0, y: blockHeight * 6 }, { x: blockWidth, y: blockHeight * 6 }, { x: blockWidth, y: blockHeight * 5 }, { x: blockWidth * 6, y: blockHeight * 6 },
    { x: blockWidth * 3, y: blockHeight * 7 }, { x: blockWidth * 4, y: blockHeight * 7 }, { x: blockWidth * 5, y: blockHeight * 7 }, { x: blockWidth * 6, y: blockHeight * 7 },
    { x: 0, y: blockHeight * 8 }, { x: blockWidth, y: blockHeight * 8 }, { x: blockWidth * 2, y: blockHeight * 8 }, { x: blockWidth * 3, y: blockHeight * 8 },
    { x: blockWidth * 4, y: blockHeight * 8 }, { x: blockWidth * 5, y: blockHeight * 8 }, { x: blockWidth * 6, y: blockHeight * 8 }];
var Stage3 = /** @class */ (function (_super) {
    __extends(Stage3, _super);
    function Stage3() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](0, blockHeight * 1, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](0, blockHeight * 7, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        _this.map.goalEventOccur.subscribe(function (goalEvent) { goalEvent ? _this._componentManager.goal = true : _this._componentManager.goal = false; });
        _this.map.catchEventOccur.subscribe(function (catchEvent) { if (catchEvent) {
            _this._componentManager.catchCount++;
        } });
        return _this;
    }
    return Stage3;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage4.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage4.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage4", function() { return Stage4; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 300;
var mapHeight = 180;
var blockXYInfo = [
    { x: 0, y: blockHeight }, { x: blockWidth, y: blockHeight }, { x: blockWidth * 2, y: blockHeight }, { x: blockWidth * 3, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth, y: blockHeight * 2 }, { x: blockWidth * 2, y: blockHeight * 2 }, { x: blockWidth * 5, y: blockHeight * 2 },
    { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 }, { x: blockWidth * 4, y: blockHeight * 3 }, { x: blockWidth * 5, y: blockHeight * 3 },
    { x: 0, y: blockHeight * 4 }, { x: blockWidth * 3, y: blockHeight * 4 }, { x: blockWidth * 4, y: blockHeight * 4 }, { x: blockWidth * 5, y: blockHeight * 4 },
    { x: blockWidth * 2, y: blockHeight * 5 }, { x: blockWidth * 3, y: blockHeight * 5 }, { x: blockWidth * 4, y: blockHeight * 5 }, { x: blockWidth * 5, y: blockHeight * 5 }
];
var Stage4 = /** @class */ (function (_super) {
    __extends(Stage4, _super);
    function Stage4() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](0, blockHeight * 5, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Item"](blockWidth * 5, 0, blockWidth, blockHeight, 'assets/fish1.png'));
        _this.componentsManager.catchGoal = 1;
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](0, 0, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        _this.map.goalEventOccur.subscribe(function (goalEvent) { goalEvent ? _this._componentManager.goal = true : _this._componentManager.goal = false; });
        _this.map.catchEventOccur.subscribe(function (catchEvent) { if (catchEvent) {
            _this._componentManager.catchCount++;
        } });
        return _this;
    }
    return Stage4;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage5.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage5.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage5", function() { return Stage5; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 350;
var mapHeight = 240;
var blockXYInfo = [
    { x: blockWidth * 2, y: blockHeight }, { x: blockWidth * 3, y: blockHeight }, { x: blockWidth * 4, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth * 3, y: blockHeight * 2 }, { x: blockWidth * 6, y: blockHeight * 2 },
    { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 }, { x: blockWidth * 5, y: blockHeight * 3 }, { x: blockWidth * 6, y: blockHeight * 3 },
    { x: 0, y: blockHeight * 4 }, { x: blockWidth, y: blockHeight * 4 }, { x: blockWidth * 5, y: blockHeight * 4 }, { x: blockWidth * 6, y: blockHeight * 4 },
    { x: 0, y: blockHeight * 5 }, { x: blockWidth * 6, y: blockHeight * 5 },
    { x: blockWidth * 2, y: blockHeight * 6 }, { x: blockWidth * 3, y: blockHeight * 6 }, { x: blockWidth * 4, y: blockHeight * 6 }
];
var Stage5 = /** @class */ (function (_super) {
    __extends(Stage5, _super);
    function Stage5() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](0, blockHeight * 7, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](0, 0, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Item"](blockWidth * 3, blockHeight * 3, blockWidth, blockHeight, 'assets/fish1.png'));
        _this.componentsManager.catchGoal = 1;
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        _this.map.goalEventOccur.subscribe(function (goalEvent) { goalEvent ? _this._componentManager.goal = true : _this._componentManager.goal = false; });
        _this.map.catchEventOccur.subscribe(function (catchEvent) { if (catchEvent) {
            _this._componentManager.catchCount++;
        } });
        return _this;
    }
    return Stage5;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage6.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage6.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage6", function() { return Stage6; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Stage10(yyyy)


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 350;
var mapHeight = 180;
var blockXYInfo = [
    { x: blockWidth, y: 0 }, { x: blockWidth * 2, y: 0 }, { x: blockWidth * 3, y: 0 }, { x: blockWidth * 4, y: 0 }, { x: blockWidth * 5, y: 0 },
    { x: blockWidth * 2, y: blockHeight }, { x: blockWidth * 3, y: blockHeight }, { x: blockWidth * 4, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth * 3, y: blockHeight * 2 }, { x: blockWidth * 6, y: blockHeight * 2 },
    { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 }, { x: blockWidth * 5, y: blockHeight * 3 }, { x: blockWidth * 6, y: blockHeight * 3 },
    { x: 0, y: blockHeight * 4 }, { x: blockWidth, y: blockHeight * 4 }, { x: blockWidth * 2, y: blockHeight * 4 }, { x: blockWidth * 4, y: blockHeight * 4 },
    { x: blockWidth * 5, y: blockHeight * 4 }, { x: blockWidth * 6, y: blockHeight * 4 },
    { x: 0, y: blockHeight * 5 }, { x: blockWidth, y: blockHeight * 5 }, { x: blockWidth * 2, y: blockHeight * 5 }, { x: blockWidth * 4, y: blockHeight * 5 },
    { x: blockWidth * 5, y: blockHeight * 5 }, { x: blockWidth * 6, y: blockHeight * 5 },
];
var Stage6 = /** @class */ (function (_super) {
    __extends(Stage6, _super);
    function Stage6() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](0, 0, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](blockWidth * 6, 0, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Item"](blockWidth * 3, blockHeight * 5, blockWidth, blockHeight, 'assets/fish1.png'));
        _this.componentsManager.catchGoal = 1;
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        return _this;
    }
    return Stage6;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/stage7.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/stage7.ts ***!
  \*****************************************************************************/
/*! exports provided: Stage7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage7", function() { return Stage7; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 350;
var mapHeight = 300;
var blockXYInfo = [
    { x: 0, y: 0 }, { x: blockWidth, y: 0 }, { x: blockWidth * 2, y: 0 }, { x: blockWidth * 4, y: 0 }, { x: blockWidth * 5, y: 0 }, { x: blockWidth * 6, y: 0 },
    { x: 0, y: blockHeight }, { x: blockWidth, y: blockHeight }, { x: blockWidth * 5, y: blockHeight }, { x: blockWidth * 6, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth * 3, y: blockHeight * 2 }, { x: blockWidth * 6, y: blockHeight * 2 },
    { x: blockWidth * 2, y: blockHeight * 3 }, { x: blockWidth * 3, y: blockHeight * 3 }, { x: blockWidth * 4, y: blockHeight * 3 },
    { x: blockWidth, y: blockHeight * 5 }, { x: blockWidth * 2, y: blockHeight * 5 }, { x: blockWidth * 3, y: blockHeight * 5 },
    { x: blockWidth * 4, y: blockHeight * 5 }, { x: blockWidth * 5, y: blockHeight * 5 },
    { x: blockWidth * 2, y: blockHeight * 6 }, { x: blockWidth * 3, y: blockHeight * 6 }, { x: blockWidth * 4, y: blockHeight * 6 },
    { x: 0, y: blockHeight * 7 }, { x: blockWidth, y: blockHeight * 7 }, { x: blockWidth * 5, y: blockHeight * 7 }, { x: blockWidth * 6, y: blockHeight * 7 },
    { x: 0, y: blockHeight * 8 }, { x: blockWidth * 3, y: blockHeight * 8 }, { x: blockWidth * 6, y: blockHeight * 8 },
    { x: 0, y: blockHeight * 9 }, { x: blockWidth, y: blockHeight * 9 }, { x: blockWidth * 2, y: blockHeight * 9 },
    { x: blockWidth * 4, y: blockHeight * 9 }, { x: blockWidth * 5, y: blockHeight * 9 }, { x: blockWidth * 6, y: blockHeight * 9 },
];
var Stage7 = /** @class */ (function (_super) {
    __extends(Stage7, _super);
    function Stage7() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](blockWidth * 3, 0, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Item"](blockWidth, blockHeight * 6, blockWidth, blockHeight, 'assets/fish1.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Item"](blockWidth * 5, blockHeight * 6, blockWidth, blockHeight, 'assets/fish3.png'));
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](blockWidth * 3, blockHeight * 4, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.componentsManager.catchGoal = 2;
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        return _this;
    }
    return Stage7;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/car-adventure/tutorial1.ts":
/*!********************************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/car-adventure/tutorial1.ts ***!
  \********************************************************************************/
/*! exports provided: TutorialStage1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialStage1", function() { return TutorialStage1; });
/* harmony import */ var _stageCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stageCore */ "./src/app/study/screen-components/stage-infos/stageCore.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component */ "./src/app/study/screen-components/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var blockWidth = 50;
var blockHeight = 30;
var mapWidth = 350;
var mapHeight = 150;
var blockXYInfo = [{ x: 0, y: 0 }, { x: blockWidth, y: 0 }, { x: blockWidth * 2, y: 0 }, { x: blockWidth * 3, y: 0 },
    { x: blockWidth * 4, y: 0 }, { x: blockWidth * 5, y: 0 }, { x: blockWidth * 6, y: 0 },
    { x: 0, y: blockHeight }, { x: blockWidth * 4, y: blockHeight }, { x: blockWidth * 5, y: blockHeight }, { x: blockWidth * 6, y: blockHeight },
    { x: 0, y: blockHeight * 2 }, { x: blockWidth, y: blockHeight * 2 }, { x: blockWidth * 2, y: blockHeight * 2 },
    { x: blockWidth * 4, y: blockHeight * 2 }, { x: blockWidth * 5, y: blockHeight * 2 }, { x: blockWidth * 6, y: blockHeight * 2 },
    { x: 0, y: blockHeight * 3 }, { x: blockWidth, y: blockHeight * 3 }, { x: blockWidth * 2, y: blockHeight * 3 }, { x: blockWidth * 6, y: blockHeight * 3 },
    { x: 0, y: blockHeight * 4 }, { x: blockWidth, y: blockHeight * 4 }, { x: blockWidth * 2, y: blockHeight * 4 }, { x: blockWidth * 3, y: blockHeight * 4 },
    { x: blockWidth * 4, y: blockHeight * 4 }, { x: blockWidth * 5, y: blockHeight * 4 }, { x: blockWidth * 6, y: blockHeight * 4 }];
var TutorialStage1 = /** @class */ (function (_super) {
    __extends(TutorialStage1, _super);
    function TutorialStage1() {
        var _this = this;
        var componentManager = new _component__WEBPACK_IMPORTED_MODULE_1__["ComponentsManager"]();
        var map = new _component__WEBPACK_IMPORTED_MODULE_1__["Map"](0, 0, mapWidth, mapHeight, componentManager);
        _this = _super.call(this, map, componentManager) || this;
        blockXYInfo.forEach(function (value) {
            _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Block"](value.x, value.y, blockWidth, blockHeight, 'assets/depender.png'));
        });
        _this.map.setObstacles(new _component__WEBPACK_IMPORTED_MODULE_1__["Goal"](blockWidth * 5, blockHeight * 3, blockWidth, blockHeight, 'assets/light_house.png'));
        _this.characterId = _this.map.setCharacter(new _component__WEBPACK_IMPORTED_MODULE_1__["Character"](blockWidth, blockHeight * 1, blockWidth, blockHeight, 'assets/fish_ship.png'));
        _this.map.setMapInfoAll();
        _this.map.saveFirstComponentPosition(); // you should save First Component's Position to rollback everything.
        _this.map.goalEventOccur.subscribe(function (goalEvent) { goalEvent ? _this._componentManager.goal = true : _this._componentManager.goal = false; });
        _this.map.catchEventOccur.subscribe(function (catchEvent) { if (catchEvent) {
            _this._componentManager.catchCount++;
        } });
        return _this;
    }
    return TutorialStage1;
}(_stageCore__WEBPACK_IMPORTED_MODULE_0__["StageCore"]));



/***/ }),

/***/ "./src/app/study/screen-components/stage-infos/stageCore.ts":
/*!******************************************************************!*\
  !*** ./src/app/study/screen-components/stage-infos/stageCore.ts ***!
  \******************************************************************/
/*! exports provided: StageCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageCore", function() { return StageCore; });
var StageCore = /** @class */ (function () {
    function StageCore(map, componentManager) {
        this._characterId = -1;
        this._map = map;
        this._componentManager = componentManager;
    }
    Object.defineProperty(StageCore.prototype, "map", {
        get: function () {
            return this._map;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StageCore.prototype, "componentsManager", {
        get: function () {
            return this._componentManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StageCore.prototype, "characterId", {
        get: function () {
            return this._characterId;
        },
        set: function (value) {
            this._characterId = value;
        },
        enumerable: true,
        configurable: true
    });
    return StageCore;
}());



/***/ }),

/***/ "./src/app/study/simple-screen/simple-screen.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/study/simple-screen/simple-screen.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".simpleScreenParentDiv{\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n.animationDiv {\r\n  display: inline-block;\r\n  height: 500px;\r\n  width: 500px;\r\n  position: relative;\r\n}\r\n.carImage{\r\n  height: 100px;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc2ltcGxlLXNjcmVlbi9zaW1wbGUtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL3N0dWR5L3NpbXBsZS1zY3JlZW4vc2ltcGxlLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsZVNjcmVlblBhcmVudERpdntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hbmltYXRpb25EaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhckltYWdle1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/study/simple-screen/simple-screen.component.html":
/*!******************************************************************!*\
  !*** ./src/app/study/simple-screen/simple-screen.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"simpleScreenParentDiv\">\n  <div class=\"animationDiv\">\n    <img src=\"assets/car.png\" class=\"carImage\" #car/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/simple-screen/simple-screen.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/study/simple-screen/simple-screen.component.ts ***!
  \****************************************************************/
/*! exports provided: SimpleScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleScreenComponent", function() { return SimpleScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleScreenComponent = /** @class */ (function () {
    function SimpleScreenComponent(nodeService) {
        this.nodeService = nodeService;
        this.subscription = null;
    }
    SimpleScreenComponent.prototype.ngOnInit = function () {
        console.log(this.carImage);
        this.carImage.nativeElement.style.left = '200px';
        this.subscription = this.nodeService.actions.subscribe(function (values) {
            console.log(values);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('car'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SimpleScreenComponent.prototype, "carImage", void 0);
    SimpleScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-screen',
            template: __webpack_require__(/*! ./simple-screen.component.html */ "./src/app/study/simple-screen/simple-screen.component.html"),
            styles: [__webpack_require__(/*! ./simple-screen.component.css */ "./src/app/study/simple-screen/simple-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_1__["StudyNodeService"]])
    ], SimpleScreenComponent);
    return SimpleScreenComponent;
}());



/***/ }),

/***/ "./src/app/study/study-nodes/for-node/for-node.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/study/study-nodes/for-node/for-node.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forNode{\r\n  margin-top: 5px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  padding: 10px;\r\n  background-color: #1864ab;\r\n  border-radius: 10px;\r\n  border: 5px solid #74c0fc;\r\n  color: whitesmoke;\r\n}\r\n.forNodeTitle{\r\n  font-weight: 900;\r\n}\r\n.forNodeTitle input{\r\n  display: inline-block;\r\n  max-width: 30%;\r\n}\r\n.forNodeListDiv{\r\n  min-height: 100px;\r\n  background-color: #22b8cf;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc3R1ZHktbm9kZXMvZm9yLW5vZGUvZm9yLW5vZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc3R1ZHktbm9kZXMvZm9yLW5vZGUvZm9yLW5vZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JOb2Rle1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzc0YzBmYztcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZm9yTm9kZVRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLmZvck5vZGVUaXRsZSBpbnB1dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbn1cclxuLmZvck5vZGVMaXN0RGl2e1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMmI4Y2Y7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/study/study-nodes/for-node/for-node.component.html":
/*!********************************************************************!*\
  !*** ./src/app/study/study-nodes/for-node/for-node.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forNode\">\n  <div class=\"forNodeTitle\">반복 <span *ngIf=\"canContain\"><input  type=\"number\" min=\"1\" [(ngModel)] = \"forNode.loopCount\"/> 회</span></div>\n  <div *ngIf=\"canContain\"><!-- only this is shown when it is \"contatinable status\"-->\n    <div  dragula=\"VAMPIRES\" [(dragulaModel)] =\"forNode.nodeList\" class=\"forNodeListDiv\">\n      <div *ngFor=\"let item of forNode.nodeList\" class=\"forNodeListGroup\">\n        <div *ngIf=\"item.getType() === studyNodeService.normalType\">\n          <app-normal-node [node]=\"item\"></app-normal-node>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/study/study-nodes/for-node/for-node.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/study/study-nodes/for-node/for-node.component.ts ***!
  \******************************************************************/
/*! exports provided: ForNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForNodeComponent", function() { return ForNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_core_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node-core/node */ "./src/app/study/node-core/node.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForNodeComponent = /** @class */ (function () {
    function ForNodeComponent(dragulaService, studyNodeService) {
        this.dragulaService = dragulaService;
        this.studyNodeService = studyNodeService;
        this.groupId = 'FOR_NODE' + this.studyNodeService.globalForNode++;
    }
    ForNodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _node_core_node__WEBPACK_IMPORTED_MODULE_1__["ForNode"])
    ], ForNodeComponent.prototype, "forNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ForNodeComponent.prototype, "canContain", void 0);
    ForNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-for-node',
            template: __webpack_require__(/*! ./for-node.component.html */ "./src/app/study/study-nodes/for-node/for-node.component.html"),
            styles: [__webpack_require__(/*! ./for-node.component.css */ "./src/app/study/study-nodes/for-node/for-node.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaService"], _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_2__["StudyNodeService"]])
    ], ForNodeComponent);
    return ForNodeComponent;
}());



/***/ }),

/***/ "./src/app/study/study-nodes/normal-node/normal-node.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/study/study-nodes/normal-node/normal-node.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".normalSingleNode{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  padding: 10px;\r\n  background-color: #1864ab;\r\n  color: whitesmoke;\r\n  border-radius: 3px;\r\n  font-weight: 900;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc3R1ZHktbm9kZXMvbm9ybWFsLW5vZGUvbm9ybWFsLW5vZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc3R1ZHktbm9kZXMvbm9ybWFsLW5vZGUvbm9ybWFsLW5vZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3JtYWxTaW5nbGVOb2Rle1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/study/study-nodes/normal-node/normal-node.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/study/study-nodes/normal-node/normal-node.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"normalSingleNode\">\n  {{node.getEvery()[0] |nodeName}}\n</div>\n"

/***/ }),

/***/ "./src/app/study/study-nodes/normal-node/normal-node.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/study/study-nodes/normal-node/normal-node.component.ts ***!
  \************************************************************************/
/*! exports provided: NormalNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalNodeComponent", function() { return NormalNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_core_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node-core/node */ "./src/app/study/node-core/node.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NormalNodeComponent = /** @class */ (function () {
    function NormalNodeComponent() {
    }
    NormalNodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _node_core_node__WEBPACK_IMPORTED_MODULE_1__["NormalNode"])
    ], NormalNodeComponent.prototype, "node", void 0);
    NormalNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-normal-node',
            template: __webpack_require__(/*! ./normal-node.component.html */ "./src/app/study/study-nodes/normal-node/normal-node.component.html"),
            styles: [__webpack_require__(/*! ./normal-node.component.css */ "./src/app/study/study-nodes/normal-node/normal-node.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NormalNodeComponent);
    return NormalNodeComponent;
}());



/***/ }),

/***/ "./src/app/study/study-routing/study.routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/study/study-routing/study.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StudyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyRoutingModule", function() { return StudyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_skeleton_main_skeleton_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-skeleton/main-skeleton.component */ "./src/app/study/main-skeleton/main-skeleton.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _main_skeleton_main_skeleton_component__WEBPACK_IMPORTED_MODULE_1__["MainSkeletonComponent"]
    }
];
var StudyRoutingModule = /** @class */ (function () {
    function StudyRoutingModule() {
    }
    StudyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], StudyRoutingModule);
    return StudyRoutingModule;
}());



/***/ }),

/***/ "./src/app/study/study.module.ts":
/*!***************************************!*\
  !*** ./src/app/study/study.module.ts ***!
  \***************************************/
/*! exports provided: StudyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyModule", function() { return StudyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_skeleton_main_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-skeleton/main-skeleton.component */ "./src/app/study/main-skeleton/main-skeleton.component.ts");
/* harmony import */ var _study_routing_study_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./study-routing/study.routing.module */ "./src/app/study/study-routing/study.routing.module.ts");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _node_core_node_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node-core/node-name.pipe */ "./src/app/study/node-core/node-name.pipe.ts");
/* harmony import */ var _study_nodes_normal_node_normal_node_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./study-nodes/normal-node/normal-node.component */ "./src/app/study/study-nodes/normal-node/normal-node.component.ts");
/* harmony import */ var _study_nodes_for_node_for_node_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./study-nodes/for-node/for-node.component */ "./src/app/study/study-nodes/for-node/for-node.component.ts");
/* harmony import */ var _node_core_study_node_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node-core/study-node.service */ "./src/app/study/node-core/study-node.service.ts");
/* harmony import */ var _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material-injector/material-injector.module */ "./src/app/material-injector/material-injector.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _simple_screen_simple_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simple-screen/simple-screen.component */ "./src/app/study/simple-screen/simple-screen.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage1_stage1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screen-components/car-adventure/stage1/stage1.component */ "./src/app/study/screen-components/car-adventure/stage1/stage1.component.ts");
/* harmony import */ var _screen_components_car_adventure_car_adventure_selector_car_adventure_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component */ "./src/app/study/screen-components/car-adventure/car-adventure-selector/car-adventure-selector.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage2_stage2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./screen-components/car-adventure/stage2/stage2.component */ "./src/app/study/screen-components/car-adventure/stage2/stage2.component.ts");
/* harmony import */ var _screen_components_car_adventure_tutorial1_tutorial1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screen-components/car-adventure/tutorial1/tutorial1.component */ "./src/app/study/screen-components/car-adventure/tutorial1/tutorial1.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage3_stage3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screen-components/car-adventure/stage3/stage3.component */ "./src/app/study/screen-components/car-adventure/stage3/stage3.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage4_stage4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screen-components/car-adventure/stage4/stage4.component */ "./src/app/study/screen-components/car-adventure/stage4/stage4.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage5_stage5_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screen-components/car-adventure/stage5/stage5.component */ "./src/app/study/screen-components/car-adventure/stage5/stage5.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage6_stage6_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./screen-components/car-adventure/stage6/stage6.component */ "./src/app/study/screen-components/car-adventure/stage6/stage6.component.ts");
/* harmony import */ var _screen_components_car_adventure_stage7_stage7_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screen-components/car-adventure/stage7/stage7.component */ "./src/app/study/screen-components/car-adventure/stage7/stage7.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var StudyModule = /** @class */ (function () {
    function StudyModule() {
    }
    StudyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _study_routing_study_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudyRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaModule"].forRoot(),
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_4__["NgDragDropModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_10__["MaterialInjectorModule"]
            ],
            declarations: [_main_skeleton_main_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["MainSkeletonComponent"], _node_core_node_name_pipe__WEBPACK_IMPORTED_MODULE_6__["NodeNamePipe"], _study_nodes_normal_node_normal_node_component__WEBPACK_IMPORTED_MODULE_7__["NormalNodeComponent"], _study_nodes_for_node_for_node_component__WEBPACK_IMPORTED_MODULE_8__["ForNodeComponent"], _simple_screen_simple_screen_component__WEBPACK_IMPORTED_MODULE_12__["SimpleScreenComponent"], _screen_components_car_adventure_stage1_stage1_component__WEBPACK_IMPORTED_MODULE_13__["Stage1Component"],
                _screen_components_car_adventure_car_adventure_selector_car_adventure_selector_component__WEBPACK_IMPORTED_MODULE_14__["CarAdventureSelectorComponent"], _screen_components_car_adventure_stage2_stage2_component__WEBPACK_IMPORTED_MODULE_15__["Stage2Component"], _screen_components_car_adventure_tutorial1_tutorial1_component__WEBPACK_IMPORTED_MODULE_16__["Tutorial1Component"], _screen_components_car_adventure_stage3_stage3_component__WEBPACK_IMPORTED_MODULE_17__["Stage3Component"], _screen_components_car_adventure_stage4_stage4_component__WEBPACK_IMPORTED_MODULE_18__["Stage4Component"], _screen_components_car_adventure_stage5_stage5_component__WEBPACK_IMPORTED_MODULE_19__["Stage5Component"], _screen_components_car_adventure_stage6_stage6_component__WEBPACK_IMPORTED_MODULE_20__["Stage6Component"], _screen_components_car_adventure_stage7_stage7_component__WEBPACK_IMPORTED_MODULE_21__["Stage7Component"]],
            providers: [_node_core_study_node_service__WEBPACK_IMPORTED_MODULE_9__["StudyNodeService"]],
            exports: [_node_core_node_name_pipe__WEBPACK_IMPORTED_MODULE_6__["NodeNamePipe"], _study_nodes_normal_node_normal_node_component__WEBPACK_IMPORTED_MODULE_7__["NormalNodeComponent"], _study_nodes_for_node_for_node_component__WEBPACK_IMPORTED_MODULE_8__["ForNodeComponent"]]
        })
    ], StudyModule);
    return StudyModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~car-handle-car-handle-module~study-study-module.js.map