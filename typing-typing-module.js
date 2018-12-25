(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["typing-typing-module"],{

/***/ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js ***!
  \*******************************************************************************/
/*! exports provided: SwalPartialTargets, SwalComponent, SwalDirective, SwalPartialDirective, SweetAlert2Module, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPartialTargets", function() { return SwalPartialTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalComponent", function() { return SwalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalDirective", function() { return SwalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPartialDirective", function() { return SwalPartialDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function() { return SweetAlert2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SwalDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return swalDefaultsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SwalPartialComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SwalPartialTargets = /** @class */ (function () {
    function SwalPartialTargets() {
        this.title = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getTitle(); };
        this.content = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getContent(); };
        this.buttonsWrapper = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getButtonsWrapper(); };
        this.actions = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getActions(); };
        this.confirmButton = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getConfirmButton(); };
        this.cancelButton = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getCancelButton(); };
        this.footer = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getFooter(); };
    }
    return SwalPartialTargets;
}());
var SwalDefaults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SwalDefaults');
function swalDefaultsProvider(options) {
    if (options === void 0) { options = {}; }
    return {
        provide: SwalDefaults,
        useValue: options
    };
}
var SwalComponent = /** @class */ (function () {
    function SwalComponent(defaultSwalOptions) {
        this.defaultSwalOptions = defaultSwalOptions;
        this.beforeOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nativeSwal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a;
        this.isCurrentlyShown = false;
        this.touchedProps = new Set();
        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        this.show = this.show.bind(this);
    }
    Object.defineProperty(SwalComponent.prototype, "options", {
        get: function () {
            var _this = this;
            var options = {};
            this.touchedProps.forEach(function (prop) {
                options[prop] = ((_this))[prop];
            });
            return options;
        },
        set: function (options) {
            Object.assign(this, options);
            Object.keys(options).forEach(this.markTouched);
        },
        enumerable: true,
        configurable: true
    });
    SwalComponent.prototype.ngOnChanges = function (changes) {
        Object.keys(changes)
            .filter(function (prop) { return prop !== 'options'; })
            .forEach(this.markTouched);
    };
    SwalComponent.prototype.ngOnDestroy = function () {
        if (this.isCurrentlyShown) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
        }
    };
    SwalComponent.prototype.show = function () {
        var _this = this;
        var options = Object.assign({}, this.defaultSwalOptions, this.options, { onBeforeOpen: function (modalElement) {
                _this.beforeOpen.emit({ modalElement: modalElement });
            }, onOpen: function (modalElement) {
                _this.isCurrentlyShown = true;
                _this.open.emit({ modalElement: modalElement });
            }, onClose: function (modalElement) {
                _this.isCurrentlyShown = false;
                _this.close.emit({ modalElement: modalElement });
            } });
        var promise = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()(options);
        var useRejections = ((options)).useRejections;
        promise.then(function (result) {
            if (useRejections) {
                _this.confirm.emit(result);
            }
            else if ('value' in result) {
                _this.confirm.emit(result.value);
            }
            else {
                _this.cancel.emit(result.dismiss);
            }
        }, function (err) {
            if (useRejections) {
                _this.cancel.emit(err);
            }
        });
        return promise;
    };
    return SwalComponent;
}());
SwalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'swal',
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
SwalComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SwalDefaults,] },] },
]; };
SwalComponent.propDecorators = {
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "titleText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "text": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "html": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "footer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "toast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "target": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "input": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "padding": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "background": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "grow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "timer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowOutsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowEscapeKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowEnterKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showConfirmButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showCancelButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "buttonsStyling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "reverseButtons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusConfirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusCancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showCloseButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "closeButtonAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showLoaderOnConfirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "preConfirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageAlt": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputAutoTrim": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputAttributes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputValidator": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "progressSteps": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "currentProgressStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "progressStepsDistance": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "beforeOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "confirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SwalDirective = /** @class */ (function () {
    function SwalDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SwalDirective.prototype, "swal", {
        set: function (options) {
            if (options instanceof SwalComponent) {
                this.swalInstance = options;
            }
            else if (Array.isArray(options)) {
                this.swalOptions = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.argsToParams(options);
            }
            else {
                this.swalOptions = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    SwalDirective.prototype.ngOnInit = function () {
        if (!this.swalInstance) {
            var factory = this.resolver.resolveComponentFactory(SwalComponent);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
        }
    };
    SwalDirective.prototype.ngOnDestroy = function () {
        if (this.swalRef) {
            this.swalRef.destroy();
        }
    };
    SwalDirective.prototype.onHostClicked = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (this.swalOptions) {
            this.swalInstance.options = this.swalOptions;
        }
        var confirmSub = this.swalInstance.confirm.asObservable().subscribe(function (v) { return _this.confirm.emit(v); });
        var cancelSub = this.swalInstance.cancel.asObservable().subscribe(function (v) { return _this.cancel.emit(v); });
        this.swalInstance.show().then(unsubscribe);
        function unsubscribe() {
            confirmSub.unsubscribe();
            cancelSub.unsubscribe();
        }
    };
    return SwalDirective;
}());
SwalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[swal]'
            },] },
];
SwalDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
]; };
SwalDirective.propDecorators = {
    "swal": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onHostClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] },],
};
var SwalPartialComponent = /** @class */ (function () {
    function SwalPartialComponent() {
    }
    return SwalPartialComponent;
}());
SwalPartialComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
SwalPartialComponent.ctorParameters = function () { return []; };
SwalPartialComponent.propDecorators = {
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SwalPartialDirective = /** @class */ (function () {
    function SwalPartialDirective(resolver, injector, app, templateRef, swalTargets, swalComponent) {
        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
    }
    SwalPartialDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.beforeOpenSubscription = this.swalComponent.beforeOpen.asObservable().subscribe(function () {
            var targetEl = _this.swalPartial ? _this.swalPartial() : _this.swalTargets.content();
            var factory = _this.resolver.resolveComponentFactory(SwalPartialComponent);
            _this.partialRef = factory.create(_this.injector, [], targetEl);
            _this.partialRef.instance.template = _this.templateRef;
            _this.app.attachView(_this.partialRef.hostView);
        });
        this.closeSubscription = this.swalComponent.close.asObservable().subscribe(function () {
            _this.app.detachView(_this.partialRef.hostView);
            _this.partialRef.destroy();
        });
    };
    SwalPartialDirective.prototype.ngOnDestroy = function () {
        this.beforeOpenSubscription.unsubscribe();
        this.closeSubscription.unsubscribe();
    };
    return SwalPartialDirective;
}());
SwalPartialDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[swalPartial]'
            },] },
];
SwalPartialDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
    { type: SwalPartialTargets, },
    { type: SwalComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] },] },
]; };
SwalPartialDirective.propDecorators = {
    "swalPartial": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SweetAlert2Module = /** @class */ (function () {
    function SweetAlert2Module() {
    }
    SweetAlert2Module.forRoot = function (defaultSwalOptions) {
        return {
            ngModule: SweetAlert2Module,
            providers: [swalDefaultsProvider(defaultSwalOptions)]
        };
    };
    return SweetAlert2Module;
}());
SweetAlert2Module.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    SwalComponent, SwalPartialDirective, SwalPartialComponent,
                    SwalDirective
                ],
                providers: [
                    SwalPartialTargets
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [
                    SwalComponent, SwalPartialDirective,
                    SwalDirective
                ],
                entryComponents: [
                    SwalComponent, SwalPartialComponent
                ]
            },] },
];
SweetAlert2Module.ctorParameters = function () { return []; };


//# sourceMappingURL=toverux-ngx-sweetalert2.js.map


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v7.33.1
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationMessage) {
      return validationMessage;
    });
  };
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};
/* @deprecated */

/* istanbul ignore next */

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
  return elementByClass(swalClasses.actions);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }
  /* istanbul ignore if */


  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  } // RTL


  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  } // DOM element


  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }

      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/*
 * Global function to close sweetAlert
 */

var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement().then(function () {
        return triggerOnAfterClose(onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    } else {
      triggerOnAfterClose(onAfterClose);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(function () {
      onAfterClose();
    });
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return _construct(NoNewKeywordSwal, args);
    }

    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };

  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
    constructor: NoNewKeywordSwal
  });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4

    /* istanbul ignore next */
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }

  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};
var deprecatedParams = ['useRejections', 'expectRejections', 'extraParams'];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};

var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
var defaults = {};
function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults =
  /*#__PURE__*/
  function (_ParentSwal) {
    _inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      _classCallCheck(this, SwalWithGlobalDefaults);

      return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
    }

    _createClass(SwalWithGlobalDefaults, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
      }
    }], [{
      key: "setDefaults",
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);

        if (!params || _typeof(params) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }

        showWarningsForParams(params); // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults[param] = params[param];
          }
        });
      }
    }, {
      key: "resetDefaults",
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults = {};
      }
    }]);

    return SwalWithGlobalDefaults;
  }(ParentSwal); // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */

function mixin(mixinParams) {
  return withNoNewKeyword(
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this));
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* istanbul ignore next */
var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;

  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }

  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, {
      value: _Symbol('WeakMap')
    });
  }

  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], {
        configurable: true,
        value: v
      });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationMessage(error$$1) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error$$1;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
} // @deprecated

/* istanbul ignore next */

function resetValidationError() {
  warnOnce("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");
  resetValidationMessage.bind(this)();
} // @deprecated

/* istanbul ignore next */

function showValidationError(error$$1) {
  warnOnce("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");
  showValidationMessage.bind(this)(error$$1);
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id,
      started,
      remaining = delay;
  this.running = false;

  this.start = function () {
    if (!this.running) {
      this.running = true;
      started = new Date();
      id = setTimeout(callback, remaining);
    }

    return remaining;
  };

  this.stop = function () {
    if (this.running) {
      this.running = false;
      clearTimeout(id);
      remaining -= new Date() - started;
    }

    return remaining;
  };

  this.increase = function (n) {
    var running = this.running;

    if (running) {
      this.stop();
    }

    remaining += n;

    if (running) {
      this.start();
    }

    return remaining;
  };

  this.getTimerLeft = function () {
    if (this.running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.isRunning = function () {
    return this.running;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address');
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  } // params.extraParams is @deprecated


  if (params.validationMessage) {
    if (_typeof(params.extraParams) !== 'object') {
      params.extraParams = {};
    }

    params.extraParams.validationMessage = params.validationMessage;
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  if (params.customContainerClass) {
    addClass(container, params.customContainerClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({
          value: value
        });
      }
    };

    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({
          dismiss: dismiss
        });
      }
    };

    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    }; // Close on timer


    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });

        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationMessage) {
            _this.hideLoading();

            if (validationMessage) {
              _this.showValidationMessage(validationMessage);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });

                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();

                    _this.enableInput();

                    confirm(inputValue);
                  }, function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    }
                  });
                } else {
                  validationPromise.then(function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    var setInputPlaceholder = function setInputPlaceholder(input) {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder;
      }
    };

    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[_i3] === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);

          if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
            input.value = innerParams.inputValue;
          } else if (!isPromise(innerParams.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(innerParams.inputValue), "\""));
          }

          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          setInputPlaceholder(textarea);
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isPromise(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage,
	resetValidationError: resetValidationError,
	showValidationError: showValidationError,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};

SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
/* istanbul ignore next */

SweetAlert.noop = function () {};

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.Sweetalert2.version = '7.33.1';  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");

/***/ }),

/***/ "./src/app/typing/content-component/base-typing/base-typing.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/typing/content-component/base-typing/base-typing.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentDiv {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #21252D;\r\n  border-radius: 10px;\r\n  display: block;\r\n  padding: 10px;\r\n}\r\n.contentShowDiv {\r\n  height: 80%;\r\n  width: 80%;\r\n  position: absolute;\r\n  left: 10%;\r\n  top: 7%;\r\n  border-radius: 10px;\r\n  background-color: #dee2e6;\r\n}\r\n.contentInputDiv{\r\n  position: absolute;\r\n  bottom: 30px;\r\n  left: 33%;\r\n}\r\n.contentInput{\r\n  height: 30px;\r\n  border-radius: 10px;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  width: 20em;\r\n}\r\n.contentShowDiv {\r\n  overflow: auto;\r\n}\r\n.contentExampleDiv {\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.writedDiaryDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.writedDiary {\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  margin-right: 10px;\r\n}\r\n.writedDiary:last-child {\r\n  color: red;\r\n}\r\n.realContent {\r\n  text-align: center;\r\n}\r\n.contentMenuDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.keyboardShape {\r\n  margin-bottom: 0;\r\n  background-color: black;\r\n  width: 70px;\r\n  border-radius: 20px;\r\n  border: 7px solid black;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  font-weight: 900;\r\n  display: inline-block;\r\n}\r\n.inputDesc {\r\n  color: black;\r\n  font-weight: 900;\r\n  font-size: 25px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L2Jhc2UtdHlwaW5nL2Jhc2UtdHlwaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L2Jhc2UtdHlwaW5nL2Jhc2UtdHlwaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudERpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MkQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jb250ZW50U2hvd0RpdiB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHRvcDogNyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG59XHJcbi5jb250ZW50SW5wdXREaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBsZWZ0OiAzMyU7XHJcbn1cclxuLmNvbnRlbnRJbnB1dHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB3aWR0aDogMjBlbTtcclxufVxyXG4uY29udGVudFNob3dEaXYge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5jb250ZW50RXhhbXBsZURpdiB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi53cml0ZWREaWFyeURpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi53cml0ZWREaWFyeSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ud3JpdGVkRGlhcnk6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ucmVhbENvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGVudE1lbnVEaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmtleWJvYXJkU2hhcGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDdweCBzb2xpZCBibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uaW5wdXREZXNjIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/typing/content-component/base-typing/base-typing.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/typing/content-component/base-typing/base-typing.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentDiv\">\n  <div class=\"contentMenuDiv\" *ngIf=\"!contentService.isTest\">\n    <button (click)=\"oneStepClicked()\">1 단계</button>\n    <button (click)=\"twoStepClicked()\" *ngIf=\"twoStepAvailable\">2 단계</button>\n    <button (click)=\"threeStepClicked()\" *ngIf=\"threeStepAvailable\">3 단계</button>\n  </div>\n  <div class=\"contentShowDiv\">\n    <div class=\"contentExampleDiv\">\n      <div *ngIf=\"!contentService.isTest\">\n        <button (click) = \"speedChange('up')\">속도 올리기</button>\n        <button (click) = \"speedChange('down')\">속도 내리기</button>\n        <button (click) = \"pausePractice()\">일시 중지</button>\n        <button (click) = \"reStart()\">다시 시작</button>\n        <span>제한시간: {{contentService.timeLimit}} 초</span>\n      </div>\n      <audio controls>\n        <source src=\"assets/music/Grandpapa_Eleven_Month.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio tag.\n      </audio>\n      <div class=\"writedDiaryDiv\">\n        <span *ngFor = \"let content of contentExample\" class=\"writedDiary\">{{content}}</span>\n      </div>\n      <div class=\"realContent\">\n        <p class=\"keyboardShape\" [ngStyle] =\"contentService.keyboardStyle\">{{contentService.currentInputContent}}</p>\n        <p class=\"inputDesc\">{{contentService.currentInputContentDesc}}</p>\n      </div>\n      <div class=\"contentInformation\">\n        <p>정답률: {{contentService.successPercentage}}%</p>\n        <p>맞은 갯수: {{contentService.successCount}}</p>\n        <p>틀린 갯수: {{contentService.falseCount}}</p>\n        <p>평균 속도: {{contentService.averageSecond.toFixed(3)}} 초</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"contentInputDiv\">\n    <input type=\"text\" class=\"contentInput\" placeholder=\"입력하세요!\" (keyup)=\"readEnter($event)\"/>\n  </div>\n  <app-speed-wagon [inputDialog]=\"information\"></app-speed-wagon>\n  <app-start-test [testMessage]=\"contentService.testMessage\" [isTest] = \"contentService.isTest\" (testStartClicked)=\"contentService.testStart()\"></app-start-test>\n</div>\n"

/***/ }),

/***/ "./src/app/typing/content-component/base-typing/base-typing.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/typing/content-component/base-typing/base-typing.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BaseTypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTypingComponent", function() { return BaseTypingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_baseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/baseData */ "./src/app/typing/content/baseData.ts");
/* harmony import */ var _content_service_content_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-service/content-setting.service */ "./src/app/typing/content-service/content-setting.service.ts");
/* harmony import */ var _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/service/userInformationService */ "./src/app/common/service/userInformationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseTypingComponent = /** @class */ (function () {
    function BaseTypingComponent(contentService, userInformationService) {
        var _this = this;
        this.contentService = contentService;
        this.userInformationService = userInformationService;
        this.contentExample = [];
        this.information = [];
        this.twoStepAvailable = false;
        this.threeStepAvailable = false;
        this.baseTypingOptions = { timeLimit: 4, isTest: false,
            testOptions: { totalProblemCount: 10, failCount: 5 }, step: 1,
            testTimeLimit: { 1: 3, 2: 3, 3: 5 }, subject: 'BASE' };
        this.contentService.destroyInterval();
        this.contentService.buildNewContentSetting(this.baseTypingOptions);
        this.oneStepClicked();
        this.subscription = this.userInformationService.userInformation.subscribe(function (d) {
            _this.userInformation = d;
            if (_this.contentService.beforeStepCleared(1, _this.userInformation)) {
                _this.twoStepAvailable = true;
            }
            if (_this.contentService.beforeStepCleared(2, _this.userInformation)) {
                _this.threeStepAvailable = true;
            }
        });
    }
    BaseTypingComponent.prototype.ngOnInit = function () {
    };
    BaseTypingComponent.prototype.readEnter = function (event) {
        if (event.target.value === '') {
            return true;
        }
        this.contentExample.push(event.target.value);
        this.checkEnter(event.target.value);
        this.contentExample = this.contentExample.filter(function (value, index, array) {
            if (array.length - 5 > index) {
                return false;
            }
            return true;
        });
        event.target.value = '';
        if (this.contentService.isTest) {
            this.contentService.checkTestEnd();
        }
    };
    BaseTypingComponent.prototype.checkEnter = function (enterInput) {
        if (enterInput === this.contentService.currentInputContent) {
            this.contentService.playSuccessSound();
            this.contentService.successHandler();
            this.contentService.contentSetting();
            this.contentService.startInputSystem();
        }
        else {
            this.contentService.playFailSound();
            this.contentService.falseCountUp();
        }
    };
    BaseTypingComponent.prototype.speedChange = function (type) {
        if (type === 'up') {
            this.contentService.speedUp();
        }
        else {
            this.contentService.speedDown();
        }
    };
    BaseTypingComponent.prototype.oneStepClicked = function (test) {
        this.information = ['기본적인 타자를 연습할거야', '천천히 연습해보도록 해', '영타를 입력하고 싶으면 [한/영] 키를 눌러 봐'];
        this.contentService.startStep(1, _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabet"]);
    };
    BaseTypingComponent.prototype.twoStepClicked = function (test) {
        this.information = ['이번엔 shift 와 함께 입력해보자', '천천히 연습해보도록 해'];
        this.contentService.startStep(2, _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabetUpper"]);
    };
    BaseTypingComponent.prototype.threeStepClicked = function (test) {
        this.information = ['이제 소문자와 대문자가 모두 나올거야', '어쩔 땐 shift를 눌러야 하고, 어쩔 땐 누르면 안돼!'];
        this.contentService.startStep(3, _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabetLowerUpper"]);
    };
    BaseTypingComponent.prototype.pausePractice = function () {
        this.contentService.destroyInterval();
    };
    BaseTypingComponent.prototype.reStart = function () {
        if (this.contentService.step === 1) {
            this.oneStepClicked();
        }
        else if (this.contentService.step === 2) {
            this.twoStepClicked();
        }
        else if (this.contentService.step === 3) {
            this.threeStepClicked();
        }
    };
    BaseTypingComponent.prototype.ngOnDestroy = function () {
        this.contentService.destroyInterval();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    BaseTypingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-typing',
            template: __webpack_require__(/*! ./base-typing.component.html */ "./src/app/typing/content-component/base-typing/base-typing.component.html"),
            styles: [__webpack_require__(/*! ./base-typing.component.css */ "./src/app/typing/content-component/base-typing/base-typing.component.css")]
        }),
        __metadata("design:paramtypes", [_content_service_content_setting_service__WEBPACK_IMPORTED_MODULE_2__["ContentSettingService"], _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_3__["UserInformationService"]])
    ], BaseTypingComponent);
    return BaseTypingComponent;
}());



/***/ }),

/***/ "./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGluZy9jb250ZW50LWNvbXBvbmVudC9wYXJhZ3JhcGgtdHlwaW5nL3BhcmFncmFwaC10eXBpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  paragraph-typing works!\n</p>\n"

/***/ }),

/***/ "./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ParagraphTypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphTypingComponent", function() { return ParagraphTypingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_baseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/baseData */ "./src/app/typing/content/baseData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParagraphTypingComponent = /** @class */ (function () {
    function ParagraphTypingComponent() {
        this.contentExample = [];
        this.step = 1;
        this.information = [];
        this.inputContent = _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabet"];
        this.currentInputContent = '';
        this.currentInputContentDesc = '';
        this.currentInputStartTime = new Date();
        this.currentInputPassedSecond = 0;
        this.beforeSuccessTime = 0;
        this.timeLimit = 4;
        this.successCount = 0;
        this.falseCount = 0;
        this.problemCount = 0;
        this.keyboardStyle = { backgroundColor: 'rgb(255,255,255' };
        this.successPercentage = 100;
        this.averageSecond = 0;
        this.isTest = false;
        this.testMessage = '';
        // ----
        this.testTimeLimit = { oneStep: 3, twoStep: 3, threeStep: 5 };
        this.falseSound = new Audio('assets/music/false_sound.wav');
        this.successSound = new Audio('assets/music/tick.mp3');
        this.oneStepClicked();
    }
    ParagraphTypingComponent.prototype.ngOnInit = function () {
    };
    ParagraphTypingComponent.prototype.readEnter = function (event) {
        this.contentExample.push(event.target.value);
        this.checkEnter(event.target.value);
        this.contentExample = this.contentExample.filter(function (value, index, array) {
            if (array.length - 5 > index) {
                return false;
            }
            return true;
        });
        event.target.value = '';
        if (this.isTest) {
            this.checkTestEnd();
        }
    };
    ParagraphTypingComponent.prototype.startInputSystem = function () {
        var _this = this;
        if (this.currentInputInterval) {
            clearInterval(this.currentInputInterval);
        }
        this.currentInputStartTime = new Date();
        this.currentInputInterval = setInterval(function () {
            _this.currentInputPassedSecond = (new Date().getTime() - _this.currentInputStartTime.getTime()) / 1000;
            _this.otherAttributeSetting();
            if (_this.currentInputPassedSecond > _this.timeLimit) {
                _this.playFailSound();
                if (_this.isTest) {
                    _this.checkTestEnd();
                }
                _this.falseCount = _this.falseCount + 1;
                _this.currentInputStartTime = new Date();
                _this.contentSetting();
            }
        }, 100);
    };
    ParagraphTypingComponent.prototype.contentSetting = function () {
        var index = this.getRandomContentIndex();
        this.currentInputContent = this.inputContent[index].word;
        this.currentInputContentDesc = this.inputContent[index].desc;
        this.problemCount += 1;
    };
    ParagraphTypingComponent.prototype.otherAttributeSetting = function () {
        this.percentageSetting();
        this.keyboardStyleSetting();
    };
    ParagraphTypingComponent.prototype.percentageSetting = function () {
        if (this.successCount !== 0 || this.falseCount !== 0) {
            this.successPercentage = Math.floor((this.successCount / (this.successCount + this.falseCount)) * 100);
        }
    };
    ParagraphTypingComponent.prototype.keyboardStyleSetting = function () {
        var color = 255 - 70 * this.currentInputPassedSecond;
        this.keyboardStyle = { backgroundColor: "rgb(" + color + "," + color + "," + color };
    };
    ParagraphTypingComponent.prototype.getRandomContentIndex = function () {
        var length = this.inputContent.length;
        var index = Math.floor((Math.random() * (length + 2) + Math.random() * 3) % length);
        return index;
    };
    ParagraphTypingComponent.prototype.successHandler = function () {
        this.beforeSuccessTime = this.currentInputPassedSecond;
        this.successCount = this.successCount + 1;
        this.averageSecond = ((this.averageSecond * (this.successCount - 1)) + this.beforeSuccessTime) / this.successCount;
    };
    ParagraphTypingComponent.prototype.checkEnter = function (enterInput) {
        if (enterInput === this.currentInputContent) {
            this.playSuccessSound();
            this.successHandler();
            this.contentSetting();
            this.startInputSystem();
        }
        else {
            this.playFailSound();
            this.falseCount = this.falseCount + 1;
        }
    };
    ParagraphTypingComponent.prototype.speedChange = function (type) {
        if (type === 'up') {
            if (this.timeLimit - 1 >= 1) {
                this.timeLimit = this.timeLimit - 1;
            }
        }
        else {
            if (this.timeLimit + 1 <= 5) {
                this.timeLimit = this.timeLimit + 1;
            }
        }
    };
    ParagraphTypingComponent.prototype.oneStepClicked = function (test) {
        this.step = 1;
        this.inputContent = _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabet"];
        this.problemCount = 0;
        this.information = ['기본적인 타자를 연습할거야', '천천히 연습해보도록 해', '영타를 입력하고 싶으면 [한/영] 키를 눌러 봐'];
        this.contentSetting();
        this.startInputSystem();
        this.changeTestMessage();
    };
    ParagraphTypingComponent.prototype.twoStepClicked = function (test) {
        this.step = 2;
        this.inputContent = _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabetUpper"];
        this.problemCount = 0;
        this.information = ['이번엔 shift 와 함께 입력해보자', '천천히 연습해보도록 해'];
        this.contentSetting();
        this.startInputSystem();
        this.changeTestMessage();
    };
    ParagraphTypingComponent.prototype.threeStepClicked = function (test) {
        this.step = 3;
        this.inputContent = _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabetLowerUpper"];
        this.problemCount = 0;
        this.information = ['이제 소문자와 대문자가 모두 나올거야', '어쩔 땐 shift를 눌러야 하고, 어쩔 땐 누르면 안돼!'];
        this.contentSetting();
        this.startInputSystem();
        this.changeTestMessage();
    };
    ParagraphTypingComponent.prototype.testStart = function () {
        this.resetStartInformation();
        this.isTest = true;
        if (this.step === 1) {
            this.timeLimit = this.testTimeLimit.oneStep;
            this.oneStepClicked(true);
        }
        else if (this.step === 2) {
            this.timeLimit = this.testTimeLimit.twoStep;
            this.twoStepClicked(true);
        }
        else if (this.step === 3) {
            this.timeLimit = this.testTimeLimit.threeStep;
            this.threeStepClicked(true);
        }
    };
    ParagraphTypingComponent.prototype.checkTestEnd = function () {
        if (this.successCount + this.falseCount >= 30) {
            this.testEnd();
        }
        if (this.falseCount >= 5) {
            this.testEnd();
        }
    };
    ParagraphTypingComponent.prototype.testEnd = function () {
        clearInterval(this.currentInputInterval);
        this.isTest = false;
        if (this.falseCount >= 5) {
            alert('실패');
        }
        else {
            alert('성공');
        }
        this.resetStartInformation();
    };
    ParagraphTypingComponent.prototype.resetStartInformation = function () {
        this.problemCount = 0;
        this.successCount = 0;
        this.falseCount = 0;
        this.beforeSuccessTime = 0;
        this.percentageSetting();
    };
    ParagraphTypingComponent.prototype.changeTestMessage = function () {
        var limit = this.getTimeLimit();
        this.testMessage = "\uB2E8\uACC4\uB294 " + this.step + " \uB2E8\uACC4! \uAC01 \uB2E8\uC5B4\uC758 \uC81C\uD55C\uC2DC\uAC04\uC740 " + limit + "\uCD08\uC785\uB2C8\uB2E4! \r\n 30\uAC1C \uC911 25\uAC1C \uC774\uC0C1\uC744 \uB9DE\uCDB0\uC57C \uD574\uC694!";
    };
    ParagraphTypingComponent.prototype.getTimeLimit = function () {
        if (this.step === 1) {
            return this.testTimeLimit.oneStep;
        }
        else if (this.step === 2) {
            return this.testTimeLimit.twoStep;
        }
        else if (this.step === 3) {
            return this.testTimeLimit.threeStep;
        }
    };
    ParagraphTypingComponent.prototype.playFailSound = function () {
        this.falseSound.pause();
        this.falseSound.play();
    };
    ParagraphTypingComponent.prototype.playSuccessSound = function () {
        this.successSound.pause();
        this.successSound.play();
    };
    ParagraphTypingComponent.prototype.pausePractice = function () {
        clearInterval(this.currentInputInterval);
    };
    ParagraphTypingComponent.prototype.reStart = function () {
        if (this.step === 1) {
            this.oneStepClicked();
        }
        else if (this.step === 2) {
            this.twoStepClicked();
        }
        else if (this.step === 3) {
            this.threeStepClicked();
        }
    };
    ParagraphTypingComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.currentInputInterval);
    };
    ParagraphTypingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paragraph-typing',
            template: __webpack_require__(/*! ./paragraph-typing.component.html */ "./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.html"),
            styles: [__webpack_require__(/*! ./paragraph-typing.component.css */ "./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParagraphTypingComponent);
    return ParagraphTypingComponent;
}());



/***/ }),

/***/ "./src/app/typing/content-component/speed-wagon/speed-wagon.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/typing/content-component/speed-wagon/speed-wagon.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speedWagonDiv {\r\n  z-index: 99999;\r\n  position: absolute;\r\n}\r\n.dialogDiv {\r\n  position: absolute;\r\n  background: white;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  font-weight: 700;\r\n}\r\n.speedWagon {\r\n  width: 150px;\r\n  height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L3NwZWVkLXdhZ29uL3NwZWVkLXdhZ29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L3NwZWVkLXdhZ29uL3NwZWVkLXdhZ29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlZWRXYWdvbkRpdiB7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5kaWFsb2dEaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uc3BlZWRXYWdvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/typing/content-component/speed-wagon/speed-wagon.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/typing/content-component/speed-wagon/speed-wagon.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"speedWagonDiv\" [ngStyle] = \"{right: right, bottom: bottom}\">\n  <div class=\"dialogDiv\" [ngStyle] = \"{left: dialogLeft + 'px', top: '10px'}\">{{dialog}}</div>\n  <img class=\"speedWagon\" src=\"assets/fisherMan.png\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/typing/content-component/speed-wagon/speed-wagon.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/typing/content-component/speed-wagon/speed-wagon.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SpeedWagonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedWagonComponent", function() { return SpeedWagonComponent; });
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

var SpeedWagonComponent = /** @class */ (function () {
    function SpeedWagonComponent() {
        this.right = 0;
        this.bottom = 0;
        this.inputDialog = ['안녕 나는 speedWagon이야', '보시다시피 고양이입니다만.', '연습이 다 됐으면 시험을 보는건 어때?'];
        this.dialogIndex = 0;
        this.dialog = '';
        this.dialogLeft = 0;
        this.dialog = this.inputDialog[0];
        this.dialogLeft = -10 * this.inputDialog[0].length;
        this.changeDialog();
    }
    SpeedWagonComponent.prototype.ngOnInit = function () {
    };
    SpeedWagonComponent.prototype.ngOnChanges = function (changes) {
        if (changes['inputDialog']) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
            }
            this.changeDialog();
        }
    };
    SpeedWagonComponent.prototype.ngOnDestroy = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
        }
    };
    SpeedWagonComponent.prototype.changeDialog = function () {
        var _this = this;
        this.currentInterval = setInterval(function () {
            _this.dialogIndex = (_this.dialogIndex + 1) % _this.inputDialog.length;
            _this.dialog = _this.inputDialog[_this.dialogIndex];
        }, 3000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeedWagonComponent.prototype, "right", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeedWagonComponent.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeedWagonComponent.prototype, "inputDialog", void 0);
    SpeedWagonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speed-wagon',
            template: __webpack_require__(/*! ./speed-wagon.component.html */ "./src/app/typing/content-component/speed-wagon/speed-wagon.component.html"),
            styles: [__webpack_require__(/*! ./speed-wagon.component.css */ "./src/app/typing/content-component/speed-wagon/speed-wagon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeedWagonComponent);
    return SpeedWagonComponent;
}());



/***/ }),

/***/ "./src/app/typing/content-component/start-test/start-test.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/typing/content-component/start-test/start-test.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".startTestDiv {\r\n  z-index: 99999;\r\n  position: absolute;\r\n}\r\n.startTestButton {\r\n  padding: 15px;\r\n  font-size: 1.5em;\r\n  font-weight: 900;\r\n  border-radius: 18px;\r\n  /* background: #5f3dc4; */\r\n  /* color: white; */\r\n  border: 1px solid;\r\n}\r\n.nowTesting {\r\n  font-size: 20px;\r\n  color: red;\r\n  font-weight: 900;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L3N0YXJ0LXRlc3Qvc3RhcnQtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3R5cGluZy9jb250ZW50LWNvbXBvbmVudC9zdGFydC10ZXN0L3N0YXJ0LXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydFRlc3REaXYge1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uc3RhcnRUZXN0QnV0dG9uIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIC8qIGJhY2tncm91bmQ6ICM1ZjNkYzQ7ICovXHJcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5ub3dUZXN0aW5nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/typing/content-component/start-test/start-test.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/typing/content-component/start-test/start-test.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"startTestDiv\" [ngStyle] = \"{right: right, top: top}\">\n  <swal\n    #startTest\n    title=\"시험을 시작할까요?\"\n    text=\"{{testMessage}}\"\n    type=\"question\"\n    [showCancelButton]=\"true\"\n    [focusCancel]=\"true\"\n    (confirm)=\"testStart(true)\">\n</swal>\n  <button class=\"startTestButton\" [swal] = \"startTest\" *ngIf=\"!isTest\">시험 보기</button>\n  <p *ngIf=\"isTest\" class=\"nowTesting\">시험중!</p>\n</div>\n"

/***/ }),

/***/ "./src/app/typing/content-component/start-test/start-test.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/typing/content-component/start-test/start-test.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartTestComponent", function() { return StartTestComponent; });
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

var StartTestComponent = /** @class */ (function () {
    function StartTestComponent() {
        this.right = 0;
        this.top = 0;
        this.testMessage = '시험을 시작합니다.';
        this.isTest = false;
        this.testStartClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StartTestComponent.prototype.ngOnInit = function () {
    };
    StartTestComponent.prototype.testStart = function () {
        this.testStartClicked.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StartTestComponent.prototype, "right", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StartTestComponent.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StartTestComponent.prototype, "testMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StartTestComponent.prototype, "isTest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StartTestComponent.prototype, "testStartClicked", void 0);
    StartTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-test',
            template: __webpack_require__(/*! ./start-test.component.html */ "./src/app/typing/content-component/start-test/start-test.component.html"),
            styles: [__webpack_require__(/*! ./start-test.component.css */ "./src/app/typing/content-component/start-test/start-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartTestComponent);
    return StartTestComponent;
}());



/***/ }),

/***/ "./src/app/typing/content-component/word-typing/word-typing.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/typing/content-component/word-typing/word-typing.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentDiv {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #21252D;\r\n  border-radius: 10px;\r\n  display: block;\r\n  padding: 10px;\r\n}\r\n.contentShowDiv {\r\n  height: 80%;\r\n  width: 80%;\r\n  position: absolute;\r\n  left: 10%;\r\n  top: 7%;\r\n  border-radius: 10px;\r\n  background-color: #dee2e6;\r\n}\r\n.contentInputDiv{\r\n  position: absolute;\r\n  bottom: 30px;\r\n  left: 33%;\r\n}\r\n.contentInput{\r\n  height: 30px;\r\n  border-radius: 10px;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  width: 20em;\r\n}\r\n.contentShowDiv {\r\n  overflow: auto;\r\n}\r\n.contentExampleDiv {\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.writedDiaryDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.writedDiary {\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  margin-right: 10px;\r\n}\r\n.writedDiary:last-child {\r\n  color: red;\r\n}\r\n.realContent {\r\n  text-align: center;\r\n}\r\n.contentMenuDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.keyboardShape {\r\n  margin-bottom: 0;\r\n  background-color: black;\r\n  width: 200px;\r\n  border-radius: 20px;\r\n  border: 7px solid black;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  font-weight: 900;\r\n  display: inline-block;\r\n}\r\n.inputDesc {\r\n  color: black;\r\n  font-weight: 900;\r\n  font-size: 25px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L3dvcmQtdHlwaW5nL3dvcmQtdHlwaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdHlwaW5nL2NvbnRlbnQtY29tcG9uZW50L3dvcmQtdHlwaW5nL3dvcmQtdHlwaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudERpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MkQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jb250ZW50U2hvd0RpdiB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHRvcDogNyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG59XHJcbi5jb250ZW50SW5wdXREaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBsZWZ0OiAzMyU7XHJcbn1cclxuLmNvbnRlbnRJbnB1dHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB3aWR0aDogMjBlbTtcclxufVxyXG4uY29udGVudFNob3dEaXYge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5jb250ZW50RXhhbXBsZURpdiB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi53cml0ZWREaWFyeURpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi53cml0ZWREaWFyeSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ud3JpdGVkRGlhcnk6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ucmVhbENvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGVudE1lbnVEaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmtleWJvYXJkU2hhcGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmlucHV0RGVzYyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/typing/content-component/word-typing/word-typing.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/typing/content-component/word-typing/word-typing.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentDiv\">\n  <div class=\"contentMenuDiv\" *ngIf=\"!contentService.isTest\">\n    <button (click)=\"oneStepClicked()\">1 단계</button>\n    <button (click)=\"twoStepClicked()\" *ngIf=\"twoStepAvailable\">2 단계</button>\n    <button (click)=\"threeStepClicked()\" *ngIf=\"threeStepAvailable\">3 단계</button>\n  </div>\n  <div class=\"contentShowDiv\">\n    <div class=\"contentExampleDiv\">\n      <div *ngIf=\"!contentService.isTest\">\n        <button (click) = \"speedChange('up')\">속도 올리기</button>\n        <button (click) = \"speedChange('down')\">속도 내리기</button>\n        <button (click) = \"pausePractice()\">일시 중지</button>\n        <button (click) = \"reStart()\">다시 시작</button>\n        <span>제한시간: {{contentService.timeLimit}} 초</span>\n      </div>\n      <audio controls>\n        <source src=\"assets/music/Grandpapa_Eleven_Month.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio tag.\n      </audio>\n      <div class=\"writedDiaryDiv\">\n        <span *ngFor = \"let content of contentExample\" class=\"writedDiary\">{{content}}</span>\n      </div>\n      <div class=\"realContent\">\n        <p class=\"keyboardShape\" [ngStyle] =\"contentService.keyboardStyle\">{{contentService.currentInputContent}}</p>\n        <p class=\"inputDesc\">{{contentService.currentInputContentDesc}}</p>\n      </div>\n      <div class=\"contentInformation\">\n        <p>정답률: {{contentService.successPercentage}}%</p>\n        <p>맞은 갯수: {{contentService.successCount}}</p>\n        <p>틀린 갯수: {{contentService.falseCount}}</p>\n        <p>평균 속도: {{contentService.averageSecond.toFixed(3)}} 초</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"contentInputDiv\">\n    <input type=\"text\" class=\"contentInput\" placeholder=\"입력하세요!\" (keyup.enter)=\"readEnter($event)\"/>\n  </div>\n  <app-speed-wagon [inputDialog]=\"information\"></app-speed-wagon>\n  <app-start-test [testMessage]=\"contentService.testMessage\" [isTest] = \"contentService.isTest\" (testStartClicked)=\"contentService.testStart()\"></app-start-test>\n</div>\n"

/***/ }),

/***/ "./src/app/typing/content-component/word-typing/word-typing.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/typing/content-component/word-typing/word-typing.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WordTypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTypingComponent", function() { return WordTypingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_baseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/baseData */ "./src/app/typing/content/baseData.ts");
/* harmony import */ var _content_service_content_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-service/content-setting.service */ "./src/app/typing/content-service/content-setting.service.ts");
/* harmony import */ var _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/service/userInformationService */ "./src/app/common/service/userInformationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordTypingComponent = /** @class */ (function () {
    function WordTypingComponent(contentService, userInformationService) {
        var _this = this;
        this.contentService = contentService;
        this.userInformationService = userInformationService;
        this.contentExample = [];
        this.information = [];
        this.wordTypingOption = { timeLimit: 5, isTest: false,
            testOptions: { totalProblemCount: 10, failCount: 5 }, step: 1,
            testTimeLimit: { 1: 5, 2: 5, 3: 7 }, subject: 'WORD' };
        this.twoStepAvailable = false;
        this.threeStepAvailable = false;
        this.contentService.destroyInterval();
        this.contentService.buildNewContentSetting(this.wordTypingOption);
        this.oneStepClicked();
        this.subscription = this.userInformationService.userInformation.subscribe(function (d) {
            _this.userInformation = d;
            if (_this.contentService.beforeStepCleared(1, _this.userInformation)) {
                _this.twoStepAvailable = true;
            }
            if (_this.contentService.beforeStepCleared(2, _this.userInformation)) {
                _this.threeStepAvailable = true;
            }
        });
    }
    WordTypingComponent.prototype.ngOnInit = function () {
    };
    WordTypingComponent.prototype.readEnter = function (event) {
        this.contentExample.push(event.target.value);
        this.checkEnter(event.target.value);
        this.contentExample = this.contentExample.filter(function (value, index, array) {
            if (array.length - 5 > index) {
                return false;
            }
            return true;
        });
        event.target.value = '';
        if (this.contentService.isTest) {
            this.contentService.checkTestEnd();
        }
    };
    WordTypingComponent.prototype.checkEnter = function (enterInput) {
        if (enterInput === this.contentService.currentInputContent) {
            this.contentService.playSuccessSound();
            this.contentService.successHandler();
            this.contentService.contentSetting();
            this.contentService.startInputSystem();
        }
        else {
            this.contentService.playFailSound();
            this.contentService.falseCountUp();
        }
    };
    WordTypingComponent.prototype.speedChange = function (type) {
        if (type === 'up') {
            this.contentService.speedUp();
        }
        else {
            this.contentService.speedDown();
        }
    };
    WordTypingComponent.prototype.oneStepClicked = function (test) {
        this.information = ['이제 단어를 연습해보자', '단어를 따라 쓰고 Enter를 눌러봐', '1단계 시험을 통과하면 2 단계가 열릴거야.'];
        this.contentService.startStep(1, _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseWord"]);
    };
    WordTypingComponent.prototype.twoStepClicked = function (test) {
        this.information = ['이번엔 조금 더 어려운 단어를 연습해보자', '조금 어려우면 시간을 늦춰도 좋아.'];
        this.contentService.startStep(2, _content_baseData__WEBPACK_IMPORTED_MODULE_1__["secondWord"]);
    };
    WordTypingComponent.prototype.threeStepClicked = function (test) {
        this.information = ['이제 소문자와 대문자가 모두 나올거야', '어쩔 땐 shift를 눌러야 하고, 어쩔 땐 누르면 안돼!'];
        this.contentService.startStep(3, _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabetLowerUpper"]);
    };
    WordTypingComponent.prototype.pausePractice = function () {
        this.contentService.destroyInterval();
    };
    WordTypingComponent.prototype.reStart = function () {
        if (this.contentService.step === 1) {
            this.oneStepClicked();
        }
        else if (this.contentService.step === 2) {
            this.twoStepClicked();
        }
        else if (this.contentService.step === 3) {
            this.threeStepClicked();
        }
    };
    WordTypingComponent.prototype.ngOnDestroy = function () {
        this.contentService.destroyInterval();
    };
    WordTypingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-word-typing',
            template: __webpack_require__(/*! ./word-typing.component.html */ "./src/app/typing/content-component/word-typing/word-typing.component.html"),
            styles: [__webpack_require__(/*! ./word-typing.component.css */ "./src/app/typing/content-component/word-typing/word-typing.component.css")]
        }),
        __metadata("design:paramtypes", [_content_service_content_setting_service__WEBPACK_IMPORTED_MODULE_2__["ContentSettingService"], _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_3__["UserInformationService"]])
    ], WordTypingComponent);
    return WordTypingComponent;
}());



/***/ }),

/***/ "./src/app/typing/content-service/content-setting.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/typing/content-service/content-setting.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContentSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSettingService", function() { return ContentSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_baseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/baseData */ "./src/app/typing/content/baseData.ts");
/* harmony import */ var _common_service_tyCoStudyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/service/tyCoStudyService */ "./src/app/common/service/tyCoStudyService.ts");
/* harmony import */ var _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/service/userInformationService */ "./src/app/common/service/userInformationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentSettingService = /** @class */ (function () {
    function ContentSettingService(tycoStudyService, userInformationService) {
        this.tycoStudyService = tycoStudyService;
        this.userInformationService = userInformationService;
        this.testTimeLimit = { 1: 3, 2: 3, 3: 5 };
        this.testOptions = { totalProblemCount: 2, failCount: 2 };
        this.currentInputContent = '';
        this.currentInputContentDesc = '';
        this.inputContent = _content_baseData__WEBPACK_IMPORTED_MODULE_1__["baseAlphabet"];
        this.successCount = 0;
        this.falseCount = 0;
        this.beforeSuccessTime = 0;
        this.problemCount = 0;
        this.isTest = false;
        this.timeLimit = 4;
        this.step = 1;
        this.currentInputPassedSecond = 0;
        this.averageSecond = 0;
        this.currentInputStartTime = new Date();
        this.keyboardStyle = { backgroundColor: 'rgb(255,255,255' };
        this.testMessage = '';
        this.falseSound = new Audio('assets/music/false_sound.wav');
        this.successSound = new Audio('assets/music/tick.mp3');
        this.subject = 'BASE';
    }
    ContentSettingService.prototype.buildNewContentSetting = function (setting) {
        this.testTimeLimit = setting.testTimeLimit;
        this.testOptions = setting.testOptions;
        this.timeLimit = setting.timeLimit;
        this.step = 1;
        this.subject = setting.subject;
    };
    ContentSettingService.prototype.startInputSystem = function () {
        var _this = this;
        this.destroyInterval();
        this.currentInputStartTime = new Date();
        this.currentInputInterval = setInterval(function () {
            _this.currentInputPassedSecond = (new Date().getTime() - _this.currentInputStartTime.getTime()) / 1000;
            _this.otherAttributeSetting();
            if (_this.currentInputPassedSecond > _this.timeLimit) {
                _this.playFailSound();
                if (_this.isTest) {
                    _this.checkTestEnd();
                }
                _this.falseCount = _this.falseCount + 1;
                _this.currentInputStartTime = new Date();
                _this.contentSetting();
            }
        }, 100);
    };
    ContentSettingService.prototype.contentSetting = function () {
        var index = this.getRandomContentIndex();
        this.currentInputContent = this.inputContent[index].word;
        this.currentInputContentDesc = this.inputContent[index].desc;
        this.problemCount += 1;
    };
    ContentSettingService.prototype.getRandomContentIndex = function () {
        var length = this.inputContent.length;
        var index = Math.floor((new Date().getTime()) % length);
        return index;
    };
    ContentSettingService.prototype.percentageSetting = function () {
        if (this.successCount !== 0 || this.falseCount !== 0) {
            this.successPercentage = Math.floor((this.successCount / (this.successCount + this.falseCount)) * 100);
        }
    };
    ContentSettingService.prototype.testStart = function () {
        this.resetStartInformation();
        this.isTest = true;
        this.timeLimit = this.testTimeLimit[this.step];
    };
    ContentSettingService.prototype.checkTestEnd = function () {
        if (this.successCount + this.falseCount >= this.testOptions.totalProblemCount) {
            this.testEnd();
        }
        if (this.falseCount >= this.testOptions.failCount) {
            this.testEnd();
        }
    };
    ContentSettingService.prototype.testEnd = function () {
        var _this = this;
        this.destroyInterval();
        this.isTest = false;
        if (this.falseCount >= this.testOptions.failCount) {
            alert('실패');
        }
        else {
            this.tycoStudyService.clearTypingStage(this.subject, this.step)
                .subscribe(function (data) { _this.userInformationService.refreshUserInformationFromServer(); }, function (error) { console.log(error); });
            alert('성공');
        }
        this.resetStartInformation();
    };
    ContentSettingService.prototype.resetStartInformation = function () {
        this.problemCount = 0;
        this.successCount = 0;
        this.falseCount = 0;
        this.beforeSuccessTime = 0;
        this.averageSecond = 0;
        this.percentageSetting();
        this.currentInputStartTime = new Date();
    };
    ContentSettingService.prototype.successHandler = function () {
        this.beforeSuccessTime = this.currentInputPassedSecond;
        this.successCount = this.successCount + 1;
        this.averageSecond = ((this.averageSecond * (this.successCount - 1)) + this.beforeSuccessTime) / this.successCount;
    };
    ContentSettingService.prototype.otherAttributeSetting = function () {
        this.percentageSetting();
        this.keyboardStyleSetting();
    };
    ContentSettingService.prototype.keyboardStyleSetting = function () {
        var colorChangeAmount = 255 / this.timeLimit;
        var color = 255 - colorChangeAmount * this.currentInputPassedSecond;
        this.keyboardStyle = { backgroundColor: "rgb(" + color + "," + color + "," + color };
    };
    ContentSettingService.prototype.changeTestMessage = function () {
        var limit = this.testTimeLimit[this.step];
        this.testMessage = "\uB2E8\uACC4\uB294 " + this.step + " \uB2E8\uACC4! \uAC01 \uB2E8\uC5B4\uC758 \uC81C\uD55C\uC2DC\uAC04\uC740 " + limit + "\uCD08\uC785\uB2C8\uB2E4!\n     " + this.testOptions.totalProblemCount + "\uAC1C \uC911 " + this.testOptions.failCount + "\uAC1C \uC774\uC0C1\uC744 \uB9DE\uCDB0\uC57C \uD574\uC694!";
    };
    ContentSettingService.prototype.playFailSound = function () {
        if (this.falseSound.paused) {
            this.falseSound.play();
        }
        else {
            this.falseSound.pause();
        }
    };
    ContentSettingService.prototype.playSuccessSound = function () {
        if (this.successSound.paused) {
            this.successSound.play();
        }
        else {
            this.successSound.pause();
        }
    };
    ContentSettingService.prototype.falseCountUp = function () {
        this.falseCount = this.falseCount + 1;
    };
    ContentSettingService.prototype.successCountUp = function () {
        this.successCount = this.successCount + 1;
    };
    ContentSettingService.prototype.speedUp = function () {
        if (this.timeLimit - 1 >= 1) {
            this.timeLimit = this.timeLimit - 1;
        }
    };
    ContentSettingService.prototype.speedDown = function () {
        if (this.timeLimit + 1 <= 10) {
            this.timeLimit = this.timeLimit + 1;
        }
    };
    ContentSettingService.prototype.startStep = function (step, inputContent) {
        this.inputContent = inputContent;
        this.step = step;
        this.resetStartInformation();
        this.contentSetting();
        this.startInputSystem();
        this.changeTestMessage();
    };
    ContentSettingService.prototype.destroyInterval = function () {
        if (this.currentInputInterval) {
            clearInterval(this.currentInputInterval);
        }
    };
    ContentSettingService.prototype.beforeStepCleared = function (beforeStep, userInformation) {
        var _this = this;
        if (!userInformation) {
            return false;
        }
        console.log(userInformation.typingStepUserStudy);
        if (userInformation.typingStepUserStudy && userInformation.typingStepUserStudy.length !== 0) {
            console.log('check');
            var beforeData = userInformation.typingStepUserStudy.filter(function (data) {
                if (data.typingStep) {
                    if (data.typingStep.step === beforeStep && data.typingStep.subject === _this.subject) {
                        return true;
                    }
                }
                return false;
            });
            if (beforeData && beforeData.length >= 1) {
                return true;
            }
        }
        return false;
    };
    ContentSettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_service_tyCoStudyService__WEBPACK_IMPORTED_MODULE_2__["TyCoStudyService"], _common_service_userInformationService__WEBPACK_IMPORTED_MODULE_3__["UserInformationService"]])
    ], ContentSettingService);
    return ContentSettingService;
}());



/***/ }),

/***/ "./src/app/typing/content/baseData.ts":
/*!********************************************!*\
  !*** ./src/app/typing/content/baseData.ts ***!
  \********************************************/
/*! exports provided: baseAlphabet, baseAlphabetUpper, baseAlphabetLowerUpper, baseWord, secondWord, baseParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseAlphabet", function() { return baseAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseAlphabetUpper", function() { return baseAlphabetUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseAlphabetLowerUpper", function() { return baseAlphabetLowerUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseWord", function() { return baseWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondWord", function() { return secondWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseParagraph", function() { return baseParagraph; });
var baseAlphabet = [{ word: 'a', desc: '에이' }, { word: 'b', desc: '비' }, { word: 'c', desc: '시' },
    { word: 'd', desc: '디' }, { word: 'e', desc: '이' }, { word: 'f', desc: '에프' },
    { word: 'g', desc: '지' }, { word: 'h', desc: '에이치' }, { word: 'i', desc: '아이' },
    { word: 'j', desc: '제이' }, { word: 'k', desc: '케이' }, { word: 'l', desc: '엘' },
    { word: 'm', desc: '엠' }, { word: 'n', desc: '엔' }, { word: 'o', desc: '오' },
    { word: 'p', desc: '피' }, { word: 'q', desc: '큐' }, { word: 'r', desc: '알' },
    { word: 's', desc: '에스' }, { word: 't', desc: '티' }, { word: 'u', desc: '유' },
    { word: 'v', desc: '브이' }, { word: 'w', desc: '더블유' }, { word: 'x', desc: '엑스' },
    { word: 'y', desc: '와이' }, { word: 'z', desc: '지' }];
var baseAlphabetUpper = [{ word: 'A', desc: '에이' }, { word: 'B', desc: '비' }, { word: 'C', desc: '시' },
    { word: 'D', desc: '디' }, { word: 'E', desc: '이' }, { word: 'F', desc: '에프' },
    { word: 'G', desc: '지' }, { word: 'H', desc: '에이치' }, { word: 'I', desc: '아이' },
    { word: 'J', desc: '제이' }, { word: 'K', desc: '케이' }, { word: 'L', desc: '엘' },
    { word: 'M', desc: '엠' }, { word: 'N', desc: '엔' }, { word: 'O', desc: '오' },
    { word: 'P', desc: '피' }, { word: 'Q', desc: '큐' }, { word: 'R', desc: '알' },
    { word: 'S', desc: '에스' }, { word: 'T', desc: '티' }, { word: 'U', desc: '유' },
    { word: 'V', desc: '브이' }, { word: 'W', desc: '더블유' }, { word: 'X', desc: '엑스' },
    { word: 'Y', desc: '와이' }, { word: 'Z', desc: '지' }];
var baseAlphabetLowerUpper = [{ word: 'a', desc: '에이' }, { word: 'b', desc: '비' }, { word: 'c', desc: '시' },
    { word: 'd', desc: '디' }, { word: 'e', desc: '이' }, { word: 'f', desc: '에프' },
    { word: 'g', desc: '지' }, { word: 'h', desc: '에이치' }, { word: 'i', desc: '아이' },
    { word: 'j', desc: '제이' }, { word: 'k', desc: '케이' }, { word: 'l', desc: '엘' },
    { word: 'm', desc: '엠' }, { word: 'n', desc: '엔' }, { word: 'o', desc: '오' },
    { word: 'p', desc: '피' }, { word: 'q', desc: '큐' }, { word: 'r', desc: '알' },
    { word: 's', desc: '에스' }, { word: 't', desc: '티' }, { word: 'u', desc: '유' },
    { word: 'v', desc: '브이' }, { word: 'w', desc: '더블유' }, { word: 'x', desc: '엑스' },
    { word: 'y', desc: '와이' }, { word: 'z', desc: '지' },
    { word: 'A', desc: '에이' }, { word: 'B', desc: '비' }, { word: 'C', desc: '시' },
    { word: 'D', desc: '디' }, { word: 'E', desc: '이' }, { word: 'F', desc: '에프' },
    { word: 'G', desc: '지' }, { word: 'H', desc: '에이치' }, { word: 'I', desc: '아이' },
    { word: 'J', desc: '제이' }, { word: 'K', desc: '케이' }, { word: 'L', desc: '엘' },
    { word: 'M', desc: '엠' }, { word: 'N', desc: '엔' }, { word: 'O', desc: '오' },
    { word: 'P', desc: '피' }, { word: 'Q', desc: '큐' }, { word: 'R', desc: '알' },
    { word: 'S', desc: '에스' }, { word: 'T', desc: '티' }, { word: 'U', desc: '유' },
    { word: 'V', desc: '브이' }, { word: 'W', desc: '더블유' }, { word: 'X', desc: '엑스' },
    { word: 'Y', desc: '와이' }, { word: 'Z', desc: '지' }
];
var baseWord = [{ word: 'apple', desc: '사과', desc2: '애플' }, { word: 'banana', desc: '바나나', desc2: '바나나' }, { word: 'grape', desc: '포도', desc2: '그레이프' },
    { word: 'love', desc: '사랑', desc2: '러브' }, { word: 'flower', desc: '꽃', desc2: '플라워' }, { word: 'cookie', desc: '쿠키', desc2: '쿠키' },
    { word: 'tiger', desc: '호랑이', desc2: '타이거' }, { word: 'doctor', desc: '의사', desc2: '닥터' }, { word: 'sea', desc: '바다', desc2: '시' },
    { word: 'summer', desc: '여름', desc2: '섬머' }, { word: 'fall', desc: '가을', desc2: '퍼얼' },
    { word: 'winter', desc: '겨울', desc2: '윈터' }, { word: 'spring', desc: '봄', desc2: '스프링' },
    { word: 'name', desc: '이름', desc2: '네임' }, { word: 'listen', desc: '듣다', desc2: '리슨' },
    { word: 'speak', desc: '말하다', desc2: '스피크' }, { word: 'you', desc: '너, 당신', desc2: '유' }, { word: 'internet', desc: '인터넷', desc2: '인터넷' },
    { word: 'coding', desc: '코딩', desc2: '코딩' }, { word: 'study', desc: '공부', desc2: '스터디' },
    { word: 'city', desc: '도시', desc2: '시티' }, { word: 'number', desc: '수', desc2: '넘버' }, { word: 'print', desc: '쓰다', desc2: '프린트' },
    { word: 'family', desc: '가족', desc2: '패밀리' }, { word: 'sound', desc: '소리', desc2: '사운드' },
    { word: 'mother', desc: '엄마', desc2: '마덜' }, { word: 'father', desc: '아빠', desc2: '파덜' }, { word: 'ant', desc: '개미', desc2: '앤트' },
    { word: 'bear', desc: '곰', desc2: '베어' }, { word: 'cat', desc: '고양이', desc2: '캣' }, { word: 'dog', desc: '강아 지', desc2: '도그' }, { word: 'cow', desc: '소', desc2: '카우' },
    { word: 'fox', desc: '여우', desc2: '폭스' }, { word: 'frog', desc: '개구리', desc2: '프로그' }, { word: 'horse', desc: '소', desc2: '홀스' }, { word: 'mouse', desc: '쥐', desc2: '마우스' },
    { word: 'pig', desc: '돼지', desc2: '피그' }, { word: 'rabbit', desc: '토끼', desc2: '래빗' }, { word: 'zebra', desc: '얼룩말', desc2: '지브라' }, { word: 'zoo', desc: '동물원', desc2: '주' },
    { word: 'elephant', desc: '코끼리', desc2: '엘리펀트' }, { word: 'goat', desc: '염소', desc2: '고트' }, { word: 'duck', desc: '오리', desc2: '덕' },
    { word: 'egg', desc: '달걀', desc2: '에그' }, { word: 'pool', desc: '웅덩이', desc2: '풀' }, { word: 'stone', desc: '돌', desc2: '스톤' },
    { word: 'lion', desc: '사자', desc2: '라이언' }, { word: 'television', desc: '텔레비젼', desc2: '텔리비젼' }, { word: 'fishing', desc: '낚시', desc2: '피싱' },
    { word: 'puppy', desc: '강아지', desc2: '퍼피' }, { word: 'sunset', desc: '노을', desc2: '선셋' }, { word: 'violin', desc: '바이올린', desc2: '바이올린' },
    { word: 'classroom', desc: '교실', desc2: '클래스룸' }, { word: 'book', desc: '책', desc2: '북' }, { word: 'clock', desc: '시계', desc2: '클락' },
    { word: 'desk', desc: '책상', desc2: '데스크' }, { word: 'door', desc: '문', desc2: '도어' }, { word: 'floor', desc: '복도', desc2: '플로어' },
    { word: 'lesson', desc: '수업', desc2: '레슨' }, { word: 'chalk', desc: '분필', desc2: '초크' }, { word: 'student', desc: '학생', desc2: '스튜던트' },
    { word: 'chair', desc: '의자', desc2: '체어' }, { word: 'body', desc: '몸', desc2: '바디' }, { word: 'hand', desc: '손', desc2: '핸드' },
    { word: 'arm', desc: '팔', desc2: '암' }, { word: 'leg', desc: '다리', desc2: '레그' }, { word: 'foot', desc: '발', desc2: '풋' },
    { word: 'face', desc: '얼굴', desc2: '페이스' }, { word: 'nose', desc: '코', desc2: '노즈' }, { word: 'rice', desc: '쌀', desc2: '라이즈' },
    { word: 'sugar', desc: '설탕', desc2: '슈가' }, { word: 'water', desc: '물', desc2: '워터' }, { word: 'milk', desc: '우유', desc2: '밀크' },
    { word: 'weather', desc: '날씨', desc2: '웨더' }, { word: 'cold', desc: '추운', desc2: '콜드' }, { word: 'warm', desc: '따뜻한', desc2: '웜' },
    { word: 'hot', desc: '더운', desc2: '핫' }, { word: 'cool', desc: '추운', desc2: '쿨' }, { word: 'jacket', desc: '자켓', desc2: '재킷' },
    { word: 'pants', desc: '바지', desc2: '팬츠' }, { word: 'shoes', desc: '신발', desc2: '슈즈' }, { word: 'skirt', desc: '치마', desc2: '스커트' },
    { word: 'car', desc: '자동차', desc2: '카' }, { word: 'bus', desc: '버스', desc2: '버스' }, { word: 'green', desc: '초록색', desc2: '그린' },
    { word: 'yellow', desc: '노란색', desc2: '옐로우' }, { word: 'blue', desc: '파란색', desc2: '블루' }, { word: 'black', desc: '검은색', desc2: '블랙' },
    { word: 'white', desc: '흰색', desc2: '와이트' }, { word: 'nurse', desc: '간호사', desc2: '널스' }, { word: 'teacher', desc: '선생님', desc2: '티쳐' },
    { word: 'police', desc: '경찰', desc2: '폴리스' }, { word: 'parents', desc: '부모님', desc2: '패런츠' }, { word: 'pencil', desc: '연필', desc2: '펜슬' },
    { word: 'snake', desc: '뱀', desc2: '스네이크' }];
var secondWord = [{ word: 'animal', desc: '동물', desc2: '애니멀' }, { word: 'apartment', desc: '아파트', desc2: '아파트먼트' },
    { word: 'airplane', desc: '비행기', desc2: '에어플레인' }, { word: 'balloon', desc: '풍선', desc2: '벌룬' }, { word: 'beautiful', desc: '아름다운', desc2: '뷰티플' },
    { word: 'bicycle', desc: '자전거', desc2: '바이서클' }, { word: 'brother', desc: '형제', desc2: '브라더' },
    { word: 'cheese', desc: '치즈', desc2: '치즈' }, { word: 'chopstick', desc: '젓가락', desc2: '찹스틱' }, { word: 'coffee', desc: '커피', desc2: '커피' },
    { word: 'dictionary', desc: '사전', desc2: '딕셔너리' },
    { word: 'dream', desc: '꿈', desc2: '드림' }, { word: 'evening', desc: '저녁, 밤', desc2: '이브닝' },
    { word: 'famous', desc: '유명한', desc2: '패이머스' }, { word: 'floor', desc: '마루, 바닥', desc2: '플로어' },
    { word: 'dolphin', desc: '돌고래', desc2: '돌핀' }, { word: 'hide', desc: '숨다', desc2: '하이드' },
    { word: 'horse', desc: '말', desc2: '호올스' }, { word: 'hospital', desc: '병워', desc2: '하스피털' }, { word: 'hundred', desc: '백, 백의', desc2: '헌드레드' },
    { word: 'friend', desc: '친구', desc2: '프렌드' }, { word: 'fun', desc: '재미', desc2: '펀' },
    { word: 'grandmother', desc: '할머니', desc2: '그랜드마더' }, { word: 'grandfather', desc: '할아버지', desc2: '그랜드파더' },
    { word: 'guitar', desc: '기타', desc2: '기타' }, { word: 'handsome', desc: '잘생긴', desc2: '핸섬' },
    { word: 'finger', desc: '손가락', desc2: '핑거' }, { word: 'grandmother', desc: '할머니', desc2: '그랜마더' }, { word: 'compass', desc: '나침반', desc2: '컴파스' },
    { word: 'cucumber', desc: '오이', desc2: '큐컴버' }, { word: 'dragonfly', desc: '잠자리', desc2: '드래곤플라이' }, { word: 'arrow', desc: '화살표', desc2: '애로우' },
    { word: 'wave', desc: '파도', desc2: '웨이브' }, { word: 'chicken', desc: '닭', desc2: '치킨' }, { word: 'calculator', desc: '계산기', desc2: '칼큘레이터' },
    { word: 'cellphone', desc: '휴대전화', desc2: '셀폰' }, { word: 'eraser', desc: '지우개', desc2: '이레이져' },
    { word: 'galaxy', desc: '은하', desc2: '갤럭시' }, { word: 'volcano', desc: '화산', desc2: '볼케이노' }, { word: 'glacier', desc: '빙하', desc2: '글래시어' },
    { word: 'magnet', desc: '자석', desc2: '마그넷' }, { word: 'blackboard', desc: '칠판', desc2: '블랙보드' },
    { word: 'kitchen', desc: '주방', desc2: '키친' }, { word: 'vollyball', desc: '배구', desc2: '발리볼' }, { word: 'tennis', desc: '테니스', desc2: '테니스' },
    { word: 'soccer', desc: '축구', desc2: '사커' }, { word: 'basketball', desc: '농구', desc2: '배스킷볼' }, { word: 'baseball', desc: '야구', desc2: '베이스볼' },
    { word: 'hamburger', desc: '햄버거', desc2: '햄버거' }];
var baseParagraph = [{ word: 'apple', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' },
    { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' },
    { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' },
    { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' },
    { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }, { word: '', desc: '' }];


/***/ }),

/***/ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".from {\r\n  background-color: orange;\r\n  padding: 10px;\r\n}\r\n.to {\r\n  background-color: orangered;\r\n  padding: 10px;\r\n}\r\n.containerOut{\r\n  height:100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  position: relative;\r\n  background-color: #f8f9fa;\r\n}\r\n.leftParent{\r\n  flex-grow: 0.5;\r\n  flex-basis: 80px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n.leftButton {\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  /* color: #ffffff; */\r\n  color: white;\r\n  background-color: rgba(0,0,0,.87);\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n.baseButton{\r\n  margin-top: 20px;\r\n}\r\n.commandList {\r\n  min-height: 200px;\r\n  padding-top: 5px;\r\n  background-color: #dee2e6;\r\n  flex-grow: 1;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n.rightParent{\r\n  flex-grow: 3;\r\n}\r\n.rightContentDiv {\r\n  position: absolute;\r\n  left: 22%;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  width: 75%;\r\n  height: 80%;\r\n}\r\n.containerHeader{\r\n  background-color: #21252D;\r\n  color: #dee2e6;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n.playDiv button{\r\n  border: 3px solid black;\r\n  border-radius: 10px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL3R5cGluZy1tYWluLXNrZWxldG9uL3R5cGluZy1tYWluLXNrZWxldG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztDQUNmO0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3R5cGluZy90eXBpbmctbWFpbi1za2VsZXRvbi90eXBpbmctbWFpbi1za2VsZXRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyb20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi50byB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lck91dHtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG4ubGVmdFBhcmVudHtcclxuICBmbGV4LWdyb3c6IDAuNTtcclxuICBmbGV4LWJhc2lzOiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxlZnRCdXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLyogY29sb3I6ICNmZmZmZmY7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJhc2VCdXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY29tbWFuZExpc3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yaWdodFBhcmVudHtcclxuICBmbGV4LWdyb3c6IDM7XHJcbn1cclxuLnJpZ2h0Q29udGVudERpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIyJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcbi5jb250YWluZXJIZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyRDtcclxuICBjb2xvcjogI2RlZTJlNjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnBsYXlEaXYgYnV0dG9ue1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerOut\">\n  <div class=\"container\">\n    <div class=\"leftParent\">\n      <button class=\"baseButton leftButton\" (click)=\"goToBase()\">기초 다지기</button>\n      <button class=\"sentenceButton leftButton\" (click)=\"goToWord()\">단어 연습</button>\n      <button class=\"moreHardButton leftButton\">문장 연습</button>\n    </div>\n    <div class=\"rightParent\">\n      <div class=\"rightContentDiv\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TypingMainSkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingMainSkeletonComponent", function() { return TypingMainSkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypingMainSkeletonComponent = /** @class */ (function () {
    function TypingMainSkeletonComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    TypingMainSkeletonComponent.prototype.ngOnInit = function () {
    };
    TypingMainSkeletonComponent.prototype.goToBase = function () {
        this.router.navigate(['./base'], { relativeTo: this.activatedRoute });
    };
    TypingMainSkeletonComponent.prototype.goToWord = function () {
        this.router.navigate(['./word'], { relativeTo: this.activatedRoute });
    };
    TypingMainSkeletonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typing-main-skeleton',
            template: __webpack_require__(/*! ./typing-main-skeleton.component.html */ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.html"),
            styles: [__webpack_require__(/*! ./typing-main-skeleton.component.css */ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TypingMainSkeletonComponent);
    return TypingMainSkeletonComponent;
}());



/***/ }),

/***/ "./src/app/typing/typing-routing/typing.routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/typing/typing-routing/typing.routing.module.ts ***!
  \****************************************************************/
/*! exports provided: TypingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingRoutingModule", function() { return TypingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _typing_main_skeleton_typing_main_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typing-main-skeleton/typing-main-skeleton.component */ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.ts");
/* harmony import */ var _content_component_base_typing_base_typing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content-component/base-typing/base-typing.component */ "./src/app/typing/content-component/base-typing/base-typing.component.ts");
/* harmony import */ var _content_component_word_typing_word_typing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content-component/word-typing/word-typing.component */ "./src/app/typing/content-component/word-typing/word-typing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _typing_main_skeleton_typing_main_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["TypingMainSkeletonComponent"],
        children: [{ path: '', redirectTo: 'base' },
            { path: 'base', component: _content_component_base_typing_base_typing_component__WEBPACK_IMPORTED_MODULE_3__["BaseTypingComponent"] },
            { path: 'word', component: _content_component_word_typing_word_typing_component__WEBPACK_IMPORTED_MODULE_4__["WordTypingComponent"] }]
    }
];
var TypingRoutingModule = /** @class */ (function () {
    function TypingRoutingModule() {
    }
    TypingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], TypingRoutingModule);
    return TypingRoutingModule;
}());



/***/ }),

/***/ "./src/app/typing/typing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/typing/typing.module.ts ***!
  \*****************************************/
/*! exports provided: TypingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingModule", function() { return TypingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-injector/material-injector.module */ "./src/app/material-injector/material-injector.module.ts");
/* harmony import */ var _typing_main_skeleton_typing_main_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typing-main-skeleton/typing-main-skeleton.component */ "./src/app/typing/typing-main-skeleton/typing-main-skeleton.component.ts");
/* harmony import */ var _typing_routing_typing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typing-routing/typing.routing.module */ "./src/app/typing/typing-routing/typing.routing.module.ts");
/* harmony import */ var _content_component_base_typing_base_typing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-component/base-typing/base-typing.component */ "./src/app/typing/content-component/base-typing/base-typing.component.ts");
/* harmony import */ var _content_component_speed_wagon_speed_wagon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-component/speed-wagon/speed-wagon.component */ "./src/app/typing/content-component/speed-wagon/speed-wagon.component.ts");
/* harmony import */ var _content_component_start_test_start_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-component/start-test/start-test.component */ "./src/app/typing/content-component/start-test/start-test.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _content_component_paragraph_typing_paragraph_typing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-component/paragraph-typing/paragraph-typing.component */ "./src/app/typing/content-component/paragraph-typing/paragraph-typing.component.ts");
/* harmony import */ var _content_component_word_typing_word_typing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content-component/word-typing/word-typing.component */ "./src/app/typing/content-component/word-typing/word-typing.component.ts");
/* harmony import */ var _content_service_content_setting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-service/content-setting.service */ "./src/app/typing/content-service/content-setting.service.ts");
/* harmony import */ var _common_service_tyCoStudyService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/service/tyCoStudyService */ "./src/app/common/service/tyCoStudyService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TypingModule = /** @class */ (function () {
    function TypingModule() {
    }
    TypingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _typing_routing_typing_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _material_injector_material_injector_module__WEBPACK_IMPORTED_MODULE_3__["MaterialInjectorModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ],
            declarations: [_typing_main_skeleton_typing_main_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["TypingMainSkeletonComponent"], _content_component_base_typing_base_typing_component__WEBPACK_IMPORTED_MODULE_6__["BaseTypingComponent"], _content_component_speed_wagon_speed_wagon_component__WEBPACK_IMPORTED_MODULE_7__["SpeedWagonComponent"], _content_component_start_test_start_test_component__WEBPACK_IMPORTED_MODULE_8__["StartTestComponent"], _content_component_paragraph_typing_paragraph_typing_component__WEBPACK_IMPORTED_MODULE_10__["ParagraphTypingComponent"], _content_component_word_typing_word_typing_component__WEBPACK_IMPORTED_MODULE_11__["WordTypingComponent"]],
            providers: [_content_service_content_setting_service__WEBPACK_IMPORTED_MODULE_12__["ContentSettingService"], _common_service_tyCoStudyService__WEBPACK_IMPORTED_MODULE_13__["TyCoStudyService"]],
            exports: []
        })
    ], TypingModule);
    return TypingModule;
}());



/***/ })

}]);
//# sourceMappingURL=typing-typing-module.js.map