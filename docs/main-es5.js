(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkplatform1_web"] = self["webpackChunkplatform1_web"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    31799:
    /*!********************************************!*\
      !*** ./src/app/access/access.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccessComponent": function AccessComponent() {
          return (
            /* binding */
            _AccessComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _AccessComponent = /*#__PURE__*/function () {
        function _AccessComponent() {
          _classCallCheck(this, _AccessComponent);
        }

        _createClass(_AccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "access",
          value: function access($event) {
            this.messageUser = $event.target.value;
            console.log($event.target.value);
          }
        }, {
          key: "exitaccess",
          value: function exitaccess(ev) {
            console.log(ev);
            this.ngOnInit();
            console.log(ev, 'this');
          }
        }]);

        return _AccessComponent;
      }();

      _AccessComponent.ɵfac = function AccessComponent_Factory(t) {
        return new (t || _AccessComponent)();
      };

      _AccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AccessComponent,
        selectors: [["app-access"]],
        decls: 20,
        vars: 0,
        consts: [["id", "exampleModal3", "tabindex", "-1", "data-bs-backdrop", "static", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "fas", "fa-times", "close"], [1, "modal-body"], [1, "mb-3"], ["for", "message-text", 1, "col-form-label"], ["type", "text", "value", "", "placeholder", "Ingresa Mensaje.....", "id", "message-text", 1, "form-control", 3, "input"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", "data-bs-target", "#assertive", 1, "btn", "btn-primary", 3, "click"], [1, "localitacion-message"], [1, "bx", "bx-task"]],
        template: function AccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Solicitar acceso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Escribe el acceso a solicitar:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AccessComponent_Template_textarea_input_12_listener($event) {
              return ctx.access($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessComponent_Template_button_click_16_listener() {
              return ctx.exitaccess(ctx.access);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
        styles: [".modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  padding-right: 3% !important;\r\n  width: 100% !important;\r\n  margin-top: 58px !important;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  float: right !important;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\n\r\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  padding-right: 100px !important;\r\n  width: 100% !important;\r\n  margin-right: 254px;\r\n}\r\n\r\n.localitacion-message[_ngcontent-%COMP%] {\r\n  width: 51px;\r\n  border-radius: 4px;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 13px;\r\n  right: 403px;\r\n  color: rgb(145, 198, 96);\r\n  font-size: 30px;\r\n  padding-top: 10px;\r\n  padding-bottom: 13px;\r\n}\r\n\r\n.localitacion-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n@media (max-width: 1518px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 390px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 384px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1198px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 450px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1191px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 443px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1167px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 435px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1155px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 428px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1140px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 420px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1127px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 414px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1114px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 408px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 1104px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 445px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1080px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 435px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1041px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 371px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1021px) {\r\n        .localitacion-message[_ngcontent-%COMP%] {\r\n          right: 362px;\r\n        }\r\n\r\n        .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n          margin-right: 59px;\r\n        }\r\n      }\r\n\r\n@media (max-width: 1000px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 351px;\r\n  }\r\n}\r\n\r\n@media (max-width: 993px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 461px;\r\n  }\r\n}\r\n\r\n@media (max-width: 954px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 448px;\r\n  }\r\n}\r\n\r\n@media (max-width: 942px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 440px;\r\n  }\r\n}\r\n\r\n@media (max-width: 932px) {\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 0% !important;\r\n    padding-left: 4% !important;\r\n  }\r\n\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 0% !important;\r\n    padding-left: 0% !important;\r\n    margin-right: 0px;\r\n  }\r\n  .close[_ngcontent-%COMP%] {\r\n    zoom: 1.3;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUU7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7QUFFRjtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0FBRUY7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ007UUFDRTtVQUNFLFlBQVk7UUFDZDs7UUFFQTtVQUNFLGtCQUFrQjtRQUNwQjtNQUNGOztBQUVOO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJhY2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLm1vZGFsLmZhZGUgLm1vZGFsLWRpYWxvZyB7XHJcbiAgcGFkZGluZy1yaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMjU0cHg7XHJcbn1cclxuXHJcbi5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTNweDtcclxuICByaWdodDogNDAzcHg7XHJcbiAgY29sb3I6IHJnYigxNDUsIDE5OCwgOTYpO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2UgaSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTUxOHB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiAzOTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDM4NHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOThweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5MXB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiA0NDNweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTY3cHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDQzNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExNTVweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiA0MjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTI3cHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDQxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMTRweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDA4cHg7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwNHB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiA0NDVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDM1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQxcHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDM3MXB4O1xyXG4gIH1cclxufVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyMXB4KSB7XHJcbiAgICAgICAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgICAgICAgIHJpZ2h0OiAzNjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1OXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogMzUxcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkzcHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDQ2MXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NHB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiA0NDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDJweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTMycHgpIHtcclxuICAubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgcGFkZGluZy1yaWdodDogMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAuY2xvc2Uge1xyXG4gICAgem9vbTogMS4zO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _sites_values_add_values_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sites/values-add/values-add.component */
      73881);
      /* harmony import */


      var _sites_values_add_app_rout_valuesadd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sites/values-add/app-rout-valuesadd */
      99100);
      /* harmony import */


      var _sites_m365_m365_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sites/m365/m365.component */
      79551);
      /* harmony import */


      var _sites_m365_app_rout_m365__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sites/m365/app-rout-m365 */
      87081);
      /* harmony import */


      var _page_working_page_working_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page-working/page-working.component */
      42171);
      /* harmony import */


      var _sites_cost_cost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sites/cost/cost.component */
      69401);
      /* harmony import */


      var _guards_masl_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./guards/masl.guard */
      69244);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        canActivate: [_guards_masl_guard__WEBPACK_IMPORTED_MODULE_7__.MaslGuard]
      }, {
        path: 'page-working',
        component: _page_working_page_working_component__WEBPACK_IMPORTED_MODULE_5__.PageWorkingComponent,
        canActivate: [_guards_masl_guard__WEBPACK_IMPORTED_MODULE_7__.MaslGuard]
      }, {
        path: 'cost',
        component: _sites_cost_cost_component__WEBPACK_IMPORTED_MODULE_6__.CostComponent,
        canActivate: [_guards_masl_guard__WEBPACK_IMPORTED_MODULE_7__.MaslGuard]
      }, {
        path: 'm365',
        component: _sites_m365_m365_component__WEBPACK_IMPORTED_MODULE_3__.M365Component,
        children: _sites_m365_app_rout_m365__WEBPACK_IMPORTED_MODULE_4__.Rout_M365,
        canActivate: [_guards_masl_guard__WEBPACK_IMPORTED_MODULE_7__.MaslGuard]
      }, {
        path: 'values-add',
        component: _sites_values_add_values_add_component__WEBPACK_IMPORTED_MODULE_1__.ValuesAddComponent,
        children: _sites_values_add_app_rout_valuesadd__WEBPACK_IMPORTED_MODULE_2__.Rout_ValuesAdd,
        canActivate: [_guards_masl_guard__WEBPACK_IMPORTED_MODULE_7__.MaslGuard]
      }, {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/menu/menu.component */
      85819);
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-menu/nav-menu.component */
      36499);
      /* harmony import */


      var _message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./message/message.component */
      72478);
      /* harmony import */


      var _access_access_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./access/access.component */
      31799);
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user/user.component */
      79099);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer/footer.component */
      10970);

      function AppComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-nav-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-message");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-access");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      } //import { authConfig } from './soo.config';


      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(authService, httpClient) {
          _classCallCheck(this, _AppComponent);

          this.authService = authService;
          this.httpClient = httpClient;
          this.title = 'app';
          this.login();
          this.callProfile();
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.instance.handleRedirectPromise().then(function (res) {
              if (res != null && res.account != null) {
                _this.authService.instance.setActiveAccount(res.account);
              }
            });
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.authService.instance.getActiveAccount() != null;
          }
        }, {
          key: "login",
          value: function login() {
            this.authService.loginRedirect(); //this.authService.loginPopup()
            //  .subscribe((response: AuthenticationResult) => {
            //    this.authService.instance.setActiveAccount(response.account);
            //  });
          }
        }, {
          key: "callProfile",
          value: function callProfile() {
            var _this2 = this;

            this.httpClient.get("https://graph.microsoft.com/v1.0/me").subscribe(function (resp) {
              _this2.apiResponse = JSON.stringify(resp);
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 3,
        consts: [["class", "headerSite", 4, "ngIf"], ["class", "containerSite", 4, "ngIf"], [1, "headerSite"], [1, "containerSite"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AppComponent_div_0_Template, 6, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent, _message_message_component__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _access_access_component__WEBPACK_IMPORTED_MODULE_3__.AccessComponent, _user_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n}\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 84px;\r\n  background-color: #fff !important;\r\n  border-right: 1px solid #dee2e6 !important;\r\n  padding: 6px 14px;\r\n  z-index: 99;\r\n  transition: all 0.5s ease;\r\n}\n.sidebar.active[_ngcontent-%COMP%] {\r\n    width: 356px;\r\n    padding: 0px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\r\n      height: 60px;\r\n      display: flex;\r\n      align-items: center;\r\n      position: relative;\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\r\n    margin: 6px 14px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n      opacity: 0;\r\n      transition: all 0.5s ease;\r\n    }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\r\n      color: rgb(145, 198, 96);\r\n      font-size: 20px;\r\n      font-weight: 600;\r\n      opacity: 0;\r\n      transition: all 0.5s ease;\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    font-size: 22px;\r\n    transition: all 0.4s ease;\r\n    font-size: 23px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.5s ease;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 163px;\r\n    position: absolute;\r\n    top: 65%;\r\n    right: 93px;\r\n    transform: translateY(-50%);\r\n    font-size: 22px;\r\n    transition: all 0.4s ease;\r\n    font-size: 23px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.5s ease;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\n.sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: rgb(145, 198, 96);\r\n    height: 60px;\r\n    min-width: 50px;\r\n    font-size: 28px;\r\n    text-align: center;\r\n    line-height: 60px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    height: 100%;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 8px 0;\r\n    list-style: none;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      top: -20px;\r\n      left: calc(100% + 15px);\r\n      z-index: 3;\r\n      background: rgb(145, 198, 96);\r\n      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\r\n      padding: 6px 12px;\r\n      border-radius: 4px;\r\n      font-size: 15px;\r\n      font-weight: 400;\r\n      opacity: 0;\r\n      white-space: nowrap;\r\n      pointer-events: none;\r\n      transition: 0s;\r\n    }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\r\n      opacity: 1;\r\n      pointer-events: auto;\r\n      transition: all 0.4s ease;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n    display: none;\r\n    border-radius: 4px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: rgb(145, 198, 96);\r\n    font-weight: 400;\r\n    outline: none;\r\n    height: 50px;\r\n    width: 100%;\r\n    width: 50px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    transition: all 0.5s ease;\r\n    background: #fff;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0 50px;\r\n    width: 100%;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    transition: all 0.4s ease;\r\n    background: #fff;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n      background: #fff !important;\r\n      border-radius: 50% !important;\r\n      border: solid 2.6px rgb(145, 198, 96) !important;\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    border-radius: 0px !important;\r\n    border-color: #dee2e6 !important;\r\n    background: #dee2e6 !important;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\r\n    color: #383838;\r\n    font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 14pt;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: 0.4s;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    padding: 0px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .links_name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    transition: all 0.5s ease;\r\n    color: #383838;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border-radius: 12px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 60px;\r\n    width: 78px;\r\n    left: 0;\r\n    bottom: -8px;\r\n    padding: 10px 14px;\r\n    background: #383838;\r\n    transition: all 0.5s ease;\r\n    overflow: hidden;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 45px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 6px;\r\n    margin-right: 10px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    color: #fff;\r\n    white-space: nowrap;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    background: #383838;\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    border-radius: 0px;\r\n    transition: all 0.5s ease;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    background: none;\r\n  }\n.container[_ngcontent-%COMP%] {\r\n  transition: all 0.5s ease;\r\n  z-index: 2;\r\n}\n.home-title[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 46%;\r\n  right: -123px;\r\n  transform: translateY(-50%);\r\n  font-size: 22px;\r\n  transition: all 0.4s ease;\r\n  font-size: 23px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease;\r\n}\n.home-title[_ngcontent-%COMP%]:hover {\r\n    color: rgb(145, 198, 96);\r\n  }\n.home-section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  top: 0;\r\n  left: 78px;\r\n  width: calc(100% - 78px);\r\n  transition: all 0.5s ease;\r\n  z-index: 2;\r\n}\n.sidebar.active[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%]    ~ .container[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%] {\r\n  left: 353px !important;\r\n}\n.sidebar.active[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%]    ~ .home-section[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%] {\r\n  left: 353px !important;\r\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\r\n  left: 250px;\r\n  width: calc(100% - 250px);\r\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .container[_ngcontent-%COMP%] {\r\n  left: 250px !important;\r\n  width: calc(100% - 250px) !important;\r\n}\n.home-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #383838;\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  margin: 18px;\r\n  text-align: center\r\n}\n@media (max-width: 420px) {\r\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n@media (max-width: 500px) {\r\n  .sidebar[_ngcontent-%COMP%]{\r\n      width: 68px;\r\n  }\r\n  .sidebar.active[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      zoom: 0.8 !important;\r\n  }\r\n  .headerSite[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n  }\r\n\r\n\r\n}\n@media (max-width: 800px) {\r\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    height: 4%;\r\n    width: 113% !important;\r\n  }\r\n}\n\n.containerSite[_ngcontent-%COMP%] {\r\n  margin-left: 90px;\r\n}\n.sidebar.active[_ngcontent-%COMP%]   .containerSite[_ngcontent-%COMP%] {\r\n  margin-left: 317px;\r\n  transition: all 0.5s ease;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJhcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUdBQXlHO0FBRHpHLHFCQUFxQjtBQUdyQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDRJQUE0STtBQUM5STtBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBRUU7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBR0U7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7QUFFRjtJQUNFLGdCQUFnQjtFQUNsQjtBQUVFO01BQ0UsVUFBVTtNQUNWLHlCQUF5QjtJQUMzQjtBQUVBO01BQ0Usd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLHlCQUF5QjtJQUMzQjtBQUVGOztJQUVFLFVBQVU7RUFDWjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCO0FBR0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtBQUVFO01BQ0Usa0JBQWtCO01BQ2xCLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsVUFBVTtNQUNWLDZCQUE2QjtNQUM3Qix5Q0FBeUM7TUFDekMsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLGNBQWM7SUFDaEI7QUFFQTtNQUNFLFVBQVU7TUFDVixvQkFBb0I7TUFDcEIseUJBQXlCO01BQ3pCLFFBQVE7TUFDUiwyQkFBMkI7SUFDN0I7QUFFRjtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7QUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFFRTtNQUNFLDJCQUEyQjtNQUMzQiw2QkFBNkI7TUFDN0IsZ0RBQWdEO0lBQ2xEO0FBQ0Y7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtFQUNoQztBQUNBO0lBQ0UsY0FBYztJQUNkLDRJQUE0STtJQUM1SSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7QUFFQTs7SUFFRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUVBOztJQUVFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sVUFBVTtFQUNWLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjtBQUNGO0FBSUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtNQUNJLFdBQVc7RUFDZjtFQUNBO0tBQ0csV0FBVztFQUNkO0VBQ0E7TUFDSSxvQkFBb0I7RUFDeEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7O0FBR0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtFQUN4QjtBQUNGO0FDOVZBOztJQUVJO0FBQ0o7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHb29nbGUgRm9udCBMaW5rICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgXCJTZWdvZSBVSSBXZWIgKFdlc3QgRXVyb3BlYW4pXCIsIFwiU2Vnb2UgVUlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICB6LWluZGV4OiA5OTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4gIC5zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMzU2cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgICAuc2lkZWJhciAubG9nby1kZXRhaWxzIHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gIC5zaWRlYmFyLmFjdGl2ZSAubG9nby1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogNnB4IDE0cHg7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlYmFyIC5sb2dvLWRldGFpbHMgLmltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIgLmxvZ28tZGV0YWlscyAubG9nb19uYW1lIHtcclxuICAgICAgY29sb3I6IHJnYigxNDUsIDE5OCwgOTYpO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gIC5zaWRlYmFyLmFjdGl2ZSAubG9nby1kZXRhaWxzIGltZyxcclxuICAuc2lkZWJhci5hY3RpdmUgLmxvZ28tZGV0YWlscyAubG9nb19uYW1lIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciAubG9nby1kZXRhaWxzICNidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhciAubG9nby1kZXRhaWxzIGltZyB7XHJcbiAgICB3aWR0aDogMTYzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY1JTtcclxuICAgIHJpZ2h0OiA5M3B4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIC5sb2dvLWRldGFpbHMgI2J0biB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGkge1xyXG4gICAgY29sb3I6IHJnYigxNDUsIDE5OCwgOTYpO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciAubmF2LWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgICAuc2lkZWJhciBsaSAudG9vbHRpcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgbGVmdDogY2FsYygxMDAlICsgMTVweCk7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxNDUsIDE5OCwgOTYpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogMHM7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIgbGk6aG92ZXIgLnRvb2x0aXAge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIGxpIC50b29sdGlwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDE0NSwgMTk4LCA5Nik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci5hY3RpdmUgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgICAuc2lkZWJhciBsaSBhOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAyLjZweCByZ2IoMTQ1LCAxOTgsIDk2KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIC5zaWRlYmFyLmFjdGl2ZSBsaSBhOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVlMmU2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIGxpIGEgLmxpbmtzX25hbWUge1xyXG4gICAgY29sb3I6ICMzODM4Mzg7XHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBcIlNlZ29lIFVJIFdlYiAoV2VzdCBFdXJvcGVhbilcIiwgXCJTZWdvZSBVSVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIGxpIGEgLmxpbmtzX25hbWUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkgYTpob3ZlciAubGlua3NfbmFtZSxcclxuICAuc2lkZWJhciBsaSBhOmhvdmVyIGkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkgaSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciBsaS5wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA3OHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLThweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICMzODM4Mzg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLmFjdGl2ZSBsaS5wcm9maWxlIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGxpIC5wcm9maWxlLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGxpIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkucHJvZmlsZSAubmFtZSxcclxuICAuc2lkZWJhciBsaS5wcm9maWxlIC5qb2Ige1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGxpLnByb2ZpbGUgLmpvYiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciAucHJvZmlsZSAjbG9nX291dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzM4MzgzODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIC5wcm9maWxlICNsb2dfb3V0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbi5jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhvbWUtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ2JTtcclxuICByaWdodDogLTEyM3B4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbiAgLmhvbWUtdGl0bGU6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxNDUsIDE5OCwgOTYpO1xyXG4gIH1cclxuXHJcbi5ob21lLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNzhweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNzhweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZVtfbmdjb250ZW50LW5nLWNsaS11bml2ZXJzYWwtYzQ3XSB+IC5jb250YWluZXJbX25nY29udGVudC1uZy1jbGktdW5pdmVyc2FsLWM0N10ge1xyXG4gIGxlZnQ6IDM1M3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLmFjdGl2ZVtfbmdjb250ZW50LW5nLWNsaS11bml2ZXJzYWwtYzQ3XSB+IC5ob21lLXNlY3Rpb25bX25nY29udGVudC1uZy1jbGktdW5pdmVyc2FsLWM0N10ge1xyXG4gIGxlZnQ6IDM1M3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24ge1xyXG4gIGxlZnQ6IDI1MHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbn1cclxuLnNpZGViYXIuYWN0aXZlIH4gLmNvbnRhaW5lciB7XHJcbiAgbGVmdDogMjUwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob21lLXNlY3Rpb24gLnRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzM4MzgzODtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgLnNpZGViYXIgbGkgLnRvb2x0aXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5zaWRlYmFye1xyXG4gICAgICB3aWR0aDogNjhweDtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNpZGViYXIgaSB7XHJcbiAgICAgIHpvb206IDAuOCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGVhZGVyU2l0ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuc2lkZWJhciBsaSBhIHtcclxuICAgIGhlaWdodDogNCU7XHJcbiAgICB3aWR0aDogMTEzJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJ2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MnO1xyXG5cclxuLyouaGVhZGVyU2l0ZXtcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICB9Ki9cclxuLmNvbnRhaW5lclNpdGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZSAuY29udGFpbmVyU2l0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMxN3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MSALInstanceFactory": function MSALInstanceFactory() {
          return (
            /* binding */
            _MSALInstanceFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! angular-oauth2-oidc */
      71806);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav-menu/nav-menu.component */
      36499);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/menu/menu.component */
      85819);
      /* harmony import */


      var _message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./message/message.component */
      72478);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _sites_values_add_values_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sites/values-add/values-add.component */
      73881);
      /* harmony import */


      var _sites_values_add_values_add_home_values_add_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sites/values-add/values-add-home/values-add-home.component */
      25277);
      /* harmony import */


      var _sites_m365_m365_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sites/m365/m365.component */
      79551);
      /* harmony import */


      var _sites_m365_m365_suscripciones_m365_suscripciones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sites/m365/m365-suscripciones/m365-suscripciones.component */
      75907);
      /* harmony import */


      var _page_working_page_working_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./page-working/page-working.component */
      42171);
      /* harmony import */


      var _sites_cost_cost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sites/cost/cost.component */
      69401);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user/user.component */
      79099);
      /* harmony import */


      var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @azure/msal-browser */
      26562);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./footer/footer.component */
      10970);
      /* harmony import */


      var _access_access_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./access/access.component */
      31799);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var UrlLocal = 'http://localhost:4200';
      var UrlPublic = 'https://muestra-test.azurewebsites.net';
      var clientidPublic = '367ff126-71a5-4722-9cfa-e7cde618bcc9';
      var clientLocal = 'fcb58c9d-0704-4611-9017-e844593d91e4';

      function _MSALInstanceFactory() {
        return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_15__.PublicClientApplication({
          auth: {
            clientId: clientLocal,
            redirectUri: UrlLocal
          }
        });
      } //export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
      //  const protectedResourceMap = new Map<string, Array<string>>();
      //  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read', 'mail.read']);
      // /* protectedResourceMap.set('http://localhost:4200', ['api://8cd74692-0942-43b8-915e-51b1a5e1806c']);*/
      //  return {
      //    interactionType: InteractionType.Redirect,
      //    protectedResourceMap
      //  };
      //}


      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
          useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_18__.MsalInterceptor,
          multi: true
        }, {
          provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_18__.MSAL_INSTANCE,
          useFactory: _MSALInstanceFactory
        }, //{
        //  provide: MSAL_INTERCEPTOR_CONFIG,
        //  useFactory: MSALInterceptorConfigFactory
        //},
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_18__.MsalService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule.withServerTransition({
          appId: 'ng-cli-universal'
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__.OAuthModule.forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _page_working_page_working_component__WEBPACK_IMPORTED_MODULE_10__.PageWorkingComponent, _message_message_component__WEBPACK_IMPORTED_MODULE_4__.MessageComponent, _sites_values_add_values_add_component__WEBPACK_IMPORTED_MODULE_6__.ValuesAddComponent, _sites_values_add_values_add_home_values_add_home_component__WEBPACK_IMPORTED_MODULE_7__.ValuesAddHomeComponent, _user_user_component__WEBPACK_IMPORTED_MODULE_12__.UserComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__.FooterComponent, _sites_m365_m365_component__WEBPACK_IMPORTED_MODULE_8__.M365Component, _sites_m365_m365_suscripciones_m365_suscripciones_component__WEBPACK_IMPORTED_MODULE_9__.M365SuscripcionesComponent, _sites_cost_cost_component__WEBPACK_IMPORTED_MODULE_11__.CostComponent, _access_access_component__WEBPACK_IMPORTED_MODULE_14__.AccessComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__.OAuthModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule]
        });
      })();
      /***/

    },

    /***/
    85819:
    /*!***************************************************!*\
      !*** ./src/app/components/menu/menu.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuComponent": function MenuComponent() {
          return (
            /* binding */
            _MenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _MenuComponent = /*#__PURE__*/function () {
        function _MenuComponent() {
          _classCallCheck(this, _MenuComponent);
        }

        _createClass(_MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "CloseBtn",
          value: function CloseBtn() {
            console.log('hola');
            var side = document.querySelector('.sidebar');
            var btnSide = document.querySelector('#btn');
            side.classList.toggle("active");
            menuBtnChange();

            function menuBtnChange() {
              if (side.classList.contains("open")) {
                btnSide.classList.toggle("active");
              } else {
                btnSide.classList.replace("bx-menu-alt-right", "bx-menu");
              }
            }
          }
        }]);

        return _MenuComponent;
      }();

      _MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || _MenuComponent)();
      };

      _MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MenuComponent,
        selectors: [["app-menu"]],
        decls: 65,
        vars: 0,
        consts: [["name", "sidebar", "id", "sidebar", 1, "sidebar"], ["dropdown", ""], [1, "logo-details"], ["src", "assets/icons/MicrosoftTeams.png", "alt", "Alternate Text"], [1, "logo_name"], ["id", "btn", 1, "bx", "bx-menu", 3, "click"], ["routerLink", "/home", 1, "home-title"], [1, "nav-list"], ["routerLink", "page-working"], [1, "bx", "bx-bulb"], [1, "links_name"], [1, "tooltip"], ["href", "https://icarobit.azurewebsites.net/", "target", "_blank"], [1, "bx", "bx-group"], [1, "bx", "bx-radar"], [1, "bx", "bx-search"], [1, "bx", "bx-chat"], [1, "bx", "bx-cog"], ["routerLink", "/m365"], [1, "bx", "bx-pie-chart-alt"], ["routerLink", "/values-add", "routerLinkActive", "active"], [1, "bx", "bx-chart"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_i_click_5_listener() {
              return ctx.CloseBtn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bit-Cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gesti\xF3n de Contratos y Renovaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Gesti\xF3n de Contratos y Renovaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Licensing HelpDesk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Licensing HelpDesk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Marketplace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Marketplace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Licensing Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Licensing Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cost Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cost Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Microsoft 365");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Microsoft 365");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Valores Agregados");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Valores Agregados");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n}\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 84px;\r\n  background-color: #fff !important;\r\n  border-right: 1px solid #dee2e6 !important;\r\n  padding: 6px 14px;\r\n  z-index: 99;\r\n  transition: all 0.5s ease;\r\n}\n.sidebar.active[_ngcontent-%COMP%] {\r\n    width: 356px;\r\n    padding: 0px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\r\n      height: 60px;\r\n      display: flex;\r\n      align-items: center;\r\n      position: relative;\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\r\n    margin: 6px 14px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n      opacity: 0;\r\n      transition: all 0.5s ease;\r\n    }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\r\n      color: rgb(145, 198, 96);\r\n      font-size: 20px;\r\n      font-weight: 600;\r\n      opacity: 0;\r\n      transition: all 0.5s ease;\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    font-size: 22px;\r\n    transition: all 0.4s ease;\r\n    font-size: 23px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.5s ease;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 163px;\r\n    position: absolute;\r\n    top: 65%;\r\n    right: 93px;\r\n    transform: translateY(-50%);\r\n    font-size: 22px;\r\n    transition: all 0.4s ease;\r\n    font-size: 23px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.5s ease;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\n.sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: rgb(145, 198, 96);\r\n    height: 60px;\r\n    min-width: 50px;\r\n    font-size: 28px;\r\n    text-align: center;\r\n    line-height: 60px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    height: 100%;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 8px 0;\r\n    list-style: none;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      top: -20px;\r\n      left: calc(100% + 15px);\r\n      z-index: 3;\r\n      background: rgb(145, 198, 96);\r\n      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\r\n      padding: 6px 12px;\r\n      border-radius: 4px;\r\n      font-size: 15px;\r\n      font-weight: 400;\r\n      opacity: 0;\r\n      white-space: nowrap;\r\n      pointer-events: none;\r\n      transition: 0s;\r\n    }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\r\n      opacity: 1;\r\n      pointer-events: auto;\r\n      transition: all 0.4s ease;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n    display: none;\r\n    border-radius: 4px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: rgb(145, 198, 96);\r\n    font-weight: 400;\r\n    outline: none;\r\n    height: 50px;\r\n    width: 100%;\r\n    width: 50px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    transition: all 0.5s ease;\r\n    background: #fff;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0 50px;\r\n    width: 100%;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    transition: all 0.4s ease;\r\n    background: #fff;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n      background: #fff !important;\r\n      border-radius: 50% !important;\r\n      border: solid 2.6px rgb(145, 198, 96) !important;\r\n    }\n.sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    border-radius: 0px !important;\r\n    border-color: #dee2e6 !important;\r\n    background: #dee2e6 !important;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\r\n    color: #383838;\r\n    font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 14pt;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: 0.4s;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    padding: 0px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .links_name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    transition: all 0.5s ease;\r\n    color: #383838;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border-radius: 12px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 60px;\r\n    width: 78px;\r\n    left: 0;\r\n    bottom: -8px;\r\n    padding: 10px 14px;\r\n    background: #383838;\r\n    transition: all 0.5s ease;\r\n    overflow: hidden;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 45px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 6px;\r\n    margin-right: 10px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    color: #fff;\r\n    white-space: nowrap;\r\n  }\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    background: #383838;\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    border-radius: 0px;\r\n    transition: all 0.5s ease;\r\n  }\n.sidebar.active[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    background: none;\r\n  }\n.container[_ngcontent-%COMP%] {\r\n  transition: all 0.5s ease;\r\n  z-index: 2;\r\n}\n.home-title[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 46%;\r\n  right: -123px;\r\n  transform: translateY(-50%);\r\n  font-size: 22px;\r\n  transition: all 0.4s ease;\r\n  font-size: 23px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease;\r\n}\n.home-title[_ngcontent-%COMP%]:hover {\r\n    color: rgb(145, 198, 96);\r\n  }\n.home-section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  top: 0;\r\n  left: 78px;\r\n  width: calc(100% - 78px);\r\n  transition: all 0.5s ease;\r\n  z-index: 2;\r\n}\n.sidebar.active[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%]    ~ .container[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%] {\r\n  left: 353px !important;\r\n}\n.sidebar.active[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%]    ~ .home-section[_ngcontent-ng-cli-universal-c47][_ngcontent-%COMP%] {\r\n  left: 353px !important;\r\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\r\n  left: 250px;\r\n  width: calc(100% - 250px);\r\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .container[_ngcontent-%COMP%] {\r\n  left: 250px !important;\r\n  width: calc(100% - 250px) !important;\r\n}\n.home-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #383838;\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  margin: 18px;\r\n  text-align: center\r\n}\n@media (max-width: 420px) {\r\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n@media (max-width: 500px) {\r\n  .sidebar[_ngcontent-%COMP%]{\r\n      width: 68px;\r\n  }\r\n  .sidebar.active[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      zoom: 0.8 !important;\r\n  }\r\n  .headerSite[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n  }\r\n\r\n\r\n}\n@media (max-width: 800px) {\r\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    height: 4%;\r\n    width: 113% !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUdBQXlHO0FBRHpHLHFCQUFxQjtBQUdyQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDRJQUE0STtBQUM5STtBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBRUU7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBR0U7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7QUFFRjtJQUNFLGdCQUFnQjtFQUNsQjtBQUVFO01BQ0UsVUFBVTtNQUNWLHlCQUF5QjtJQUMzQjtBQUVBO01BQ0Usd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLHlCQUF5QjtJQUMzQjtBQUVGOztJQUVFLFVBQVU7RUFDWjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCO0FBR0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtBQUVFO01BQ0Usa0JBQWtCO01BQ2xCLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsVUFBVTtNQUNWLDZCQUE2QjtNQUM3Qix5Q0FBeUM7TUFDekMsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLGNBQWM7SUFDaEI7QUFFQTtNQUNFLFVBQVU7TUFDVixvQkFBb0I7TUFDcEIseUJBQXlCO01BQ3pCLFFBQVE7TUFDUiwyQkFBMkI7SUFDN0I7QUFFRjtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7QUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFFRTtNQUNFLDJCQUEyQjtNQUMzQiw2QkFBNkI7TUFDN0IsZ0RBQWdEO0lBQ2xEO0FBQ0Y7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtFQUNoQztBQUNBO0lBQ0UsY0FBYztJQUNkLDRJQUE0STtJQUM1SSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7QUFFQTs7SUFFRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUVBOztJQUVFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sVUFBVTtFQUNWLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjtBQUNGO0FBSUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtNQUNJLFdBQVc7RUFDZjtFQUNBO0tBQ0csV0FBVztFQUNkO0VBQ0E7TUFDSSxvQkFBb0I7RUFDeEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7O0FBR0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdvb2dsZSBGb250IExpbmsgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBcIlNlZ29lIFVJIFdlYiAoV2VzdCBFdXJvcGVhbilcIiwgXCJTZWdvZSBVSVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogODRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgIHdpZHRoOiAzNTZweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG5cclxuICAgIC5zaWRlYmFyIC5sb2dvLWRldGFpbHMge1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIC5sb2dvLWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiA2cHggMTRweDtcclxuICB9XHJcblxyXG4gICAgLnNpZGViYXIgLmxvZ28tZGV0YWlscyAuaW1nIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhciAubG9nby1kZXRhaWxzIC5sb2dvX25hbWUge1xyXG4gICAgICBjb2xvcjogcmdiKDE0NSwgMTk4LCA5Nik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIC5sb2dvLWRldGFpbHMgaW1nLFxyXG4gIC5zaWRlYmFyLmFjdGl2ZSAubG9nby1kZXRhaWxzIC5sb2dvX25hbWUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIC5sb2dvLWRldGFpbHMgI2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5sb2dvLWRldGFpbHMgaW1nIHtcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgcmlnaHQ6IDkzcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcblxyXG5cclxuICAuc2lkZWJhci5hY3RpdmUgLmxvZ28tZGV0YWlscyAjYnRuIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgaSB7XHJcbiAgICBjb2xvcjogcmdiKDE0NSwgMTk4LCA5Nik7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIC5uYXYtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlYmFyIGxpIC50b29sdGlwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICBsZWZ0OiBjYWxjKDEwMCUgKyAxNXB4KTtcclxuICAgICAgei1pbmRleDogMztcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDE0NSwgMTk4LCA5Nik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwcztcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhciBsaTpob3ZlciAudG9vbHRpcCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAuc2lkZWJhci5hY3RpdmUgbGkgLnRvb2x0aXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZ2IoMTQ1LCAxOTgsIDk2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLmFjdGl2ZSBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlYmFyIGxpIGE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDIuNnB4IHJnYigxNDUsIDE5OCwgOTYpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIGxpIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNkZWUyZTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZGViYXIgbGkgYSAubGlua3NfbmFtZSB7XHJcbiAgICBjb2xvcjogIzM4MzgzODtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFwiU2Vnb2UgVUkgV2ViIChXZXN0IEV1cm9wZWFuKVwiLCBcIlNlZ29lIFVJXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci5hY3RpdmUgbGkgYSAubGlua3NfbmFtZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciBsaSBhOmhvdmVyIC5saW5rc19uYW1lLFxyXG4gIC5zaWRlYmFyIGxpIGE6aG92ZXIgaSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgY29sb3I6ICMzODM4Mzg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciBsaSBpIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGxpLnByb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDc4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM4MzgzODtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIuYWN0aXZlIGxpLnByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkgLnByb2ZpbGUtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkgaW1nIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciBsaS5wcm9maWxlIC5uYW1lLFxyXG4gIC5zaWRlYmFyIGxpLnByb2ZpbGUgLmpvYiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgbGkucHJvZmlsZSAuam9iIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIC5wcm9maWxlICNsb2dfb3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzgzODM4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci5hY3RpdmUgLnByb2ZpbGUgI2xvZ19vdXQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuLmNvbnRhaW5lciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaG9tZS10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDYlO1xyXG4gIHJpZ2h0OiAtMTIzcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuICAuaG9tZS10aXRsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDE0NSwgMTk4LCA5Nik7XHJcbiAgfVxyXG5cclxuLmhvbWUtc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA3OHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3OHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnNpZGViYXIuYWN0aXZlW19uZ2NvbnRlbnQtbmctY2xpLXVuaXZlcnNhbC1jNDddIH4gLmNvbnRhaW5lcltfbmdjb250ZW50LW5nLWNsaS11bml2ZXJzYWwtYzQ3XSB7XHJcbiAgbGVmdDogMzUzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXIuYWN0aXZlW19uZ2NvbnRlbnQtbmctY2xpLXVuaXZlcnNhbC1jNDddIH4gLmhvbWUtc2VjdGlvbltfbmdjb250ZW50LW5nLWNsaS11bml2ZXJzYWwtYzQ3XSB7XHJcbiAgbGVmdDogMzUzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiB7XHJcbiAgbGVmdDogMjUwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxufVxyXG4uc2lkZWJhci5hY3RpdmUgfiAuY29udGFpbmVyIHtcclxuICBsZWZ0OiAyNTBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbiAudGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjMzgzODM4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAuc2lkZWJhciBsaSAudG9vbHRpcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnNpZGViYXJ7XHJcbiAgICAgIHdpZHRoOiA2OHB4O1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2lkZWJhciBpIHtcclxuICAgICAgem9vbTogMC44ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5oZWFkZXJTaXRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5zaWRlYmFyIGxpIGEge1xyXG4gICAgaGVpZ2h0OiA0JTtcclxuICAgIHdpZHRoOiAxMTMlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    10970:
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        consts: [[1, "footer"], ["src", "assets/icons/MicrosoftTeams.png", "alt", "Alternate Text"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #fff !important;\r\n  border-top: solid 1px rgba(0, 0, 0, .05);\r\n}\r\np[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  float: right;\r\n  zoom:0.6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLGlDQUFpQztFQUNqQyx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7QUFDViIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1nIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgem9vbTowLjY7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    69244:
    /*!**************************************!*\
      !*** ./src/app/guards/masl.guard.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaslGuard": function MaslGuard() {
          return (
            /* binding */
            _MaslGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MaslGuard = /*#__PURE__*/function () {
        function _MaslGuard() {
          _classCallCheck(this, _MaslGuard);
        }

        _createClass(_MaslGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return true;
          }
        }]);

        return _MaslGuard;
      }();

      _MaslGuard.ɵfac = function MaslGuard_Factory(t) {
        return new (t || _MaslGuard)();
      };

      _MaslGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MaslGuard,
        factory: _MaslGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    45067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomeComponent = function _HomeComponent() {
        _classCallCheck(this, _HomeComponent);
      };

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 2,
        vars: 0,
        consts: [[1, "text"], ["src", "assets/icons/flujo.png", "alt", "Alternate Text", "width", "100%"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    72478:
    /*!**********************************************!*\
      !*** ./src/app/message/message.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageComponent": function MessageComponent() {
          return (
            /* binding */
            _MessageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _MessageComponent = /*#__PURE__*/function () {
        function _MessageComponent(msalService) {
          _classCallCheck(this, _MessageComponent);

          this.msalService = msalService;
        }

        _createClass(_MessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getName",
          value: function getName() {
            return this.msalService.instance.getActiveAccount().name;
          }
        }, {
          key: "message",
          value: function message($event) {
            this.messageUser = $event.target.value;
            console.log($event.target.value);
          }
        }, {
          key: "exitMessage",
          value: function exitMessage(ev) {
            console.log(ev);
            this.ngOnInit();
            console.log(ev, 'this');
          }
        }]);

        return _MessageComponent;
      }();

      _MessageComponent.ɵfac = function MessageComponent_Factory(t) {
        return new (t || _MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__.MsalService));
      };

      _MessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MessageComponent,
        selectors: [["app-message"]],
        decls: 25,
        vars: 1,
        consts: [["id", "exampleModal", "tabindex", "-1", "data-bs-backdrop", "static", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "fas", "fa-times", "close"], [1, "modal-body"], [1, "mb-3"], ["for", "message-text", 1, "col-form-label"], ["type", "text", "value", "", "placeholder", "Ingresa Mensaje.....", "id", "message-text", 1, "form-control", 3, "input"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", "data-bs-target", "#assertive", 1, "btn", "btn-primary", 3, "click"], [1, "localitacion-message"], [1, "bx", "bx-message-square-dots"], ["id", "assertive", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-white", "bg-primary", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"]],
        template: function MessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mensage:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MessageComponent_Template_textarea_input_12_listener($event) {
              return ctx.message($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_Template_button_click_16_listener() {
              return ctx.exitMessage(ctx.messageUser);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Hello, world! This is a toast message. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getName());
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: [".modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  padding-right: 3% !important;\r\n  width: 100% !important;\r\n  margin-top: 58px !important;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  float: right !important;\r\n  \r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%]{\r\n    font-size:17px;\r\n}\r\n\r\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  padding-right: 100px !important;\r\n  width: 100% !important;\r\n  margin-right: 254px;\r\n}\r\n\r\n.localitacion-message[_ngcontent-%COMP%] {\r\n  width: 51px;\r\n  border-radius:4px;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 13px;\r\n  right: 450px;\r\n  color: rgb(145, 198, 96);\r\n  font-size: 30px;\r\n  padding-top: 10px;\r\n  padding-bottom: 13px;\r\n}\r\n\r\n.localitacion-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n@media (max-width: 1445px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 433px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 492px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1158px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 473px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1136px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 458px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1096px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 445px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1068px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 428px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1033px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    right: 409px;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n   .localitacion-message[_ngcontent-%COMP%] {\r\n      right: 510px;\r\n   }\r\n}\r\n\r\n@media (max-width: 960px) {\r\n   .localitacion-message[_ngcontent-%COMP%] {\r\n     right: 491px;\r\n   }\r\n\r\n   .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n     margin-right: 59px;\r\n   }\r\n}\r\n\r\n@media (max-width: 919px) {\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n     right: 471px;\r\n  }\r\n}\r\n\r\n@media (max-width: 881px) {\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n     padding-right: 0% !important;\r\n     padding-left: 4% !important;\r\n  }\r\n\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n     display: none;\r\n  }\r\n\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 0% !important;\r\n    padding-left: 0% !important;\r\n    margin-right: 0px;\r\n  }\r\n  .close[_ngcontent-%COMP%]{\r\n    zoom: 1.3;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCOztBQUV6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFRTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztBQUVGO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtHQUNHO01BQ0csWUFBWTtHQUNmO0FBQ0g7O0FBQ0E7R0FDRztLQUNFLFlBQVk7R0FDZDs7R0FFQTtLQUNFLGtCQUFrQjtHQUNwQjtBQUNIOztBQUVBO0VBQ0U7S0FDRyxZQUFZO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0tBQ0csNEJBQTRCO0tBQzVCLDJCQUEyQjtFQUM5Qjs7RUFFQTtLQUNHLGFBQWE7RUFDaEI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XHJcbiAgcGFkZGluZy1yaWdodDogMyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDU4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG59XHJcblxyXG4ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNTRweDtcclxufVxyXG5cclxuLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICB3aWR0aDogNTFweDtcclxuICBib3JkZXItcmFkaXVzOjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEzcHg7XHJcbiAgcmlnaHQ6IDQ1MHB4O1xyXG4gIGNvbG9yOiByZ2IoMTQ1LCAxOTgsIDk2KTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbn1cclxuXHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIGkge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDVweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDMzcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDQ5MnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE1OHB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiA0NzNweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMzZweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDU4cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDk2cHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgcmlnaHQ6IDQ0NXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA2OHB4KSB7XHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIHJpZ2h0OiA0MjhweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzNweCkge1xyXG4gIC5sb2NhbGl0YWNpb24tbWVzc2FnZSB7XHJcbiAgICByaWdodDogNDA5cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgICByaWdodDogNTEwcHg7XHJcbiAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgICByaWdodDogNDkxcHg7XHJcbiAgIH1cclxuXHJcbiAgIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgIG1hcmdpbi1yaWdodDogNTlweDtcclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTE5cHgpIHtcclxuICAubG9jYWxpdGFjaW9uLW1lc3NhZ2Uge1xyXG4gICAgIHJpZ2h0OiA0NzFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODFweCkge1xyXG4gIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiA0JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLmZhZGUgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5jbG9zZXtcclxuICAgIHpvb206IDEuMztcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    36499:
    /*!************************************************!*\
      !*** ./src/app/nav-menu/nav-menu.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavMenuComponent": function NavMenuComponent() {
          return (
            /* binding */
            _NavMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-oauth2-oidc */
      71806);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /*import { authConfig } from '../soo.config';*/


      var _NavMenuComponent = /*#__PURE__*/function () {
        function _NavMenuComponent(modal, oauthService, msalService) {
          _classCallCheck(this, _NavMenuComponent);

          this.modal = modal;
          this.oauthService = oauthService;
          this.msalService = msalService;
          this.isExpanded = false;
        }

        _createClass(_NavMenuComponent, [{
          key: "collapse",
          value: function collapse() {
            this.isExpanded = false;
          } //public get token() {
          //  let claims = this.oauthService.getIdentityClaims();
          //  return claims ? claims : null;
          //}

        }, {
          key: "toggle",
          value: function toggle() {
            this.isExpanded = !this.isExpanded;
          }
        }, {
          key: "getMail",
          value: function getMail() {
            return this.msalService.instance.getActiveAccount().username;
          }
        }, {
          key: "logout",
          value: function logout() {
            console.log('adios');
            this.msalService.logout();
          }
        }]);

        return _NavMenuComponent;
      }();

      _NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
        return new (t || _NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__.MsalService));
      };

      _NavMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NavMenuComponent,
        selectors: [["app-nav-menu"]],
        decls: 24,
        vars: 1,
        consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, ""], [1, "navbar-nav", "flex-grow"], [1, "nav-item"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", "id", "user-disable-btn", "data-bs-whatever", "", 1, "nav-link", "text-dark"], [1, "bx", "bx-message-square-dots"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal3", 1, "nav-link", "text-dark"], [1, "bx", "bx-task"], [1, "nav-item", "movile"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModa2", 1, "nav-link", "text-dark"], [1, "bx", "bx-user"], [1, "nav-item", "desktop"], [1, "nav-link", "text-dark"], [1, "text-user"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Salir", 1, "nav-item", 2, "padding-left", "5px"], [1, "bx", "bx-log-in-circle", 3, "click"]],
        template: function NavMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_i_click_23_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMail());
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: [".title-nav[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 24pt;\r\n}\r\n.movile[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.desktop[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.text-user[_ngcontent-%COMP%] {\r\n  margin-top: 9px !important;\r\n}\r\na.navbar-brand[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n  color: #a3c951;\r\n}\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: rgb(145, 198, 96);\r\n  font-size: 28px;\r\n}\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #383838;\r\n  }\r\n.user-disable-btn[_ngcontent-%COMP%]{\r\n    pointer-events:none;\r\n}\r\n.nav-item[_ngcontent-%COMP%]:active {\r\n  color: #383838;\r\n}\r\nhtml[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n@media (min-width: 768px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n.box-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n  border-bottom: solid 1px; \r\n}\r\n@media( min-width: 1200px){\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 94%;\r\n  }\r\n}\r\n.navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n  flex-direction: row !important;\r\n}\r\n\r\n@media(max-width: 800px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    margin-right: 0px !important;\r\n    zoom:0.9;\r\n  }\r\n  .text-user[_ngcontent-%COMP%] {\r\n    display:none;\r\n  }\r\n  .movile[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  .desktop[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 27px !important;\r\n    margin-right: 12px !important;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsNElBQTRJO0VBQzVJLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUVFO0lBQ0UsY0FBYztFQUNoQjtBQUVGO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUU7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsd0JBQXdCO0FBQzFCO0FBR0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUU7QUFDRjtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFFBQVE7RUFDVjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsNkJBQTZCO0VBQy9COztBQUVGIiwiZmlsZSI6Im5hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxlLW5hdiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgXCJTZWdvZSBVSSBXZWIgKFdlc3QgRXVyb3BlYW4pXCIsIFwiU2Vnb2UgVUlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI0cHQ7XHJcbn1cclxuLm1vdmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRlc2t0b3Age1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50ZXh0LXVzZXIge1xyXG4gIG1hcmdpbi10b3A6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcbmEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgY29sb3I6ICNhM2M5NTE7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhIGkge1xyXG4gIGNvbG9yOiByZ2IoMTQ1LCAxOTgsIDk2KTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbiAgLm5hdi1pdGVtIGEgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzM4MzgzODtcclxuICB9XHJcblxyXG4udXNlci1kaXNhYmxlLWJ0bntcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbTphY3RpdmUge1xyXG4gIGNvbG9yOiAjMzgzODM4O1xyXG59XHJcblxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7IFxyXG59XHJcblxyXG5cclxuQG1lZGlhKCBtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk0JTtcclxuICB9XHJcbn1cclxuLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG4vKi5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59Ki9cclxuQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6b29tOjAuOTtcclxuICB9XHJcbiAgLnRleHQtdXNlciB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gIC5tb3ZpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZGVza3RvcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubmF2LWl0ZW0gYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    42171:
    /*!********************************************************!*\
      !*** ./src/app/page-working/page-working.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageWorkingComponent": function PageWorkingComponent() {
          return (
            /* binding */
            _PageWorkingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PageWorkingComponent = /*#__PURE__*/function () {
        function _PageWorkingComponent() {
          _classCallCheck(this, _PageWorkingComponent);
        }

        _createClass(_PageWorkingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageWorkingComponent;
      }();

      _PageWorkingComponent.ɵfac = function PageWorkingComponent_Factory(t) {
        return new (t || _PageWorkingComponent)();
      };

      _PageWorkingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PageWorkingComponent,
        selectors: [["app-page-working"]],
        decls: 2,
        vars: 0,
        consts: [[1, "text"], ["src", "assets/icons/flujo.png", "alt", "Alternate Text", "width", "100%"]],
        template: function PageWorkingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    69401:
    /*!**********************************************!*\
      !*** ./src/app/sites/cost/cost.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CostComponent": function CostComponent() {
          return (
            /* binding */
            _CostComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CostComponent = /*#__PURE__*/function () {
        function _CostComponent() {
          _classCallCheck(this, _CostComponent);
        }

        _createClass(_CostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CostComponent;
      }();

      _CostComponent.ɵfac = function CostComponent_Factory(t) {
        return new (t || _CostComponent)();
      };

      _CostComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CostComponent,
        selectors: [["app-cost"]],
        decls: 1,
        vars: 0,
        consts: [["frameborder", "0", "width", "100%", "allowFullScreen", "true", "scrolling", "auto", "src", "https://icarobit.azurewebsites.net/Servicios/Index"]],
        template: function CostComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3N0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    87081:
    /*!*********************************************!*\
      !*** ./src/app/sites/m365/app-rout-m365.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Rout_M365": function Rout_M365() {
          return (
            /* binding */
            _Rout_M
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _m365_suscripciones_m365_suscripciones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./m365-suscripciones/m365-suscripciones.component */
      75907);

      var _Rout_M = [{
        path: 'm365',
        component: _m365_suscripciones_m365_suscripciones_component__WEBPACK_IMPORTED_MODULE_0__.M365SuscripcionesComponent
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'm365'
      }];
      /***/
    },

    /***/
    75907:
    /*!*******************************************************************************!*\
      !*** ./src/app/sites/m365/m365-suscripciones/m365-suscripciones.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "M365SuscripcionesComponent": function M365SuscripcionesComponent() {
          return (
            /* binding */
            _M365SuscripcionesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _M365SuscripcionesComponent = /*#__PURE__*/function () {
        function _M365SuscripcionesComponent() {
          _classCallCheck(this, _M365SuscripcionesComponent);
        }

        _createClass(_M365SuscripcionesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _M365SuscripcionesComponent;
      }();

      _M365SuscripcionesComponent.ɵfac = function M365SuscripcionesComponent_Factory(t) {
        return new (t || _M365SuscripcionesComponent)();
      };

      _M365SuscripcionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _M365SuscripcionesComponent,
        selectors: [["app-m365-suscripciones"]],
        decls: 1,
        vars: 0,
        consts: [["frameborder", "0", "height", "600", "allowFullScreen", "true", "src", "https://app.powerbi.com/reportEmbed?reportId=52287193-910c-49e6-aa9d-4b1659970b8c&autoAuth=true&ctid=24884996-6863-4925-a1ba-f1a160b581e2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D", 2, "width", "100% !important"]],
        template: function M365SuscripcionesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtMzY1LXN1c2NyaXBjaW9uZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    79551:
    /*!**********************************************!*\
      !*** ./src/app/sites/m365/m365.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "M365Component": function M365Component() {
          return (
            /* binding */
            _M365Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _M365Component = /*#__PURE__*/function () {
        function _M365Component() {
          _classCallCheck(this, _M365Component);
        }

        _createClass(_M365Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _M365Component;
      }();

      _M365Component.ɵfac = function M365Component_Factory(t) {
        return new (t || _M365Component)();
      };

      _M365Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _M365Component,
        selectors: [["app-m365"]],
        decls: 12,
        vars: 1,
        consts: [[1, "animate__animated", "animate__bounceIn"], ["routerLink", "values-add-home", 1, "navbar-brand"], [1, "title-nav-sub"], ["routerLink", "paginaHija1", "routerLinkActive", "active", 3, "skipLocationChange"]],
        template: function M365Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Microsoft 365");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Suscripciones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["*[_ngcontent-%COMP%]{margin:0px 2px;padding:2px 0px;box-sizing:border-box;font-size:0;}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 18pt;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: auto;\r\n  padding: 5px 30px !important;\r\n  margin: 10px 10px !important;\r\n  background-color: #383838;\r\n  text-align: center;\r\n  color: Rgb(145, 198, 96);\r\n  height: 36px;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background-color: Rgb(145, 198, 96);\r\n    color: #383838;\r\n  }\r\n\r\n.title-nav-sub[_ngcontent-%COMP%]{\r\n    color: #383838!important;\r\n    font-size: 24pt!important;\r\n    padding-left: 10px 50px 10px 60px;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: auto;\r\n  }\r\n\r\n  .logoContainer[_ngcontent-%COMP%] {\r\n    height: 45% !important;\r\n  }\r\n\r\n  .powerBILogoText[_ngcontent-%COMP%] {\r\n    font-size: 10px !important;\r\n  }\r\n  .title-nav-sub[_ngcontent-%COMP%] {\r\n    font-size: 24px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm0zNjUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDOztBQUVuRTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsNElBQTRJO0VBQzVJLGVBQWU7QUFDakI7O0FBQ0E7Ozs7Ozs7Ozs7T0FVTzs7QUFDUDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0UsbUNBQW1DO0lBQ25DLGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJtMzY1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4qe21hcmdpbjowcHggMnB4O3BhZGRpbmc6MnB4IDBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1zaXplOjA7fVxyXG5cclxubmF2IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBcIlNlZ29lIFVJIFdlYiAoV2VzdCBFdXJvcGVhbilcIiwgXCJTZWdvZSBVSVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxufSBcclxuLyogbmF2IGxpe1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOjE2JTtcclxuICAgIHBhZGRpbmc6NXB4IDMwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOjEwcHggMTB4cCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzODM4MzggO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMzgzODM4IDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6I2EzYzk1MTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIH0gKi9cclxubmF2IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDMwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBSZ2IoMTQ1LCAxOTgsIDk2KTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4gIG5hdiBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSZ2IoMTQ1LCAxOTgsIDk2KTtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gIH1cclxuXHJcbi50aXRsZS1uYXYtc3Vie1xyXG4gICAgY29sb3I6ICMzODM4MzghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNHB0IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCA1MHB4IDEwcHggNjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgbmF2IGxpIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxvZ29Db250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wb3dlckJJTG9nb1RleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50aXRsZS1uYXYtc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    99100:
    /*!********************************************************!*\
      !*** ./src/app/sites/values-add/app-rout-valuesadd.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Rout_ValuesAdd": function Rout_ValuesAdd() {
          return (
            /* binding */
            _Rout_ValuesAdd
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _values_add_home_values_add_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./values-add-home/values-add-home.component */
      25277);

      var _Rout_ValuesAdd = [{
        path: 'values-add',
        component: _values_add_home_values_add_home_component__WEBPACK_IMPORTED_MODULE_0__.ValuesAddHomeComponent
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'values-add'
      }];
      /***/
    },

    /***/
    25277:
    /*!*******************************************************************************!*\
      !*** ./src/app/sites/values-add/values-add-home/values-add-home.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValuesAddHomeComponent": function ValuesAddHomeComponent() {
          return (
            /* binding */
            _ValuesAddHomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ValuesAddHomeComponent = /*#__PURE__*/function () {
        function _ValuesAddHomeComponent() {
          _classCallCheck(this, _ValuesAddHomeComponent);
        }

        _createClass(_ValuesAddHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ValuesAddHomeComponent;
      }();

      _ValuesAddHomeComponent.ɵfac = function ValuesAddHomeComponent_Factory(t) {
        return new (t || _ValuesAddHomeComponent)();
      };

      _ValuesAddHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ValuesAddHomeComponent,
        selectors: [["app-values-add-home"]],
        decls: 1,
        vars: 0,
        consts: [["height", "600", "frameborder", "0", "allowFullScreen", "true", "src", "https://app.powerbi.com/reportEmbed?reportId=db87182d-d456-4a07-8a3f-ad7fd89bedc2&autoAuth=true&ctid=24884996-6863-4925-a1ba-f1a160b581e2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D", 2, "width", "100% !important"]],
        template: function ValuesAddHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWx1ZXMtYWRkLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    73881:
    /*!**********************************************************!*\
      !*** ./src/app/sites/values-add/values-add.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValuesAddComponent": function ValuesAddComponent() {
          return (
            /* binding */
            _ValuesAddComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _ValuesAddComponent = /*#__PURE__*/function () {
        function _ValuesAddComponent() {
          _classCallCheck(this, _ValuesAddComponent);
        }

        _createClass(_ValuesAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ValuesAddComponent;
      }();

      _ValuesAddComponent.ɵfac = function ValuesAddComponent_Factory(t) {
        return new (t || _ValuesAddComponent)();
      };

      _ValuesAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ValuesAddComponent,
        selectors: [["app-values-add"]],
        decls: 12,
        vars: 1,
        consts: [[1, "animate__animated", "animate__bounceIn"], ["routerLink", "values-add", 1, "navbar-brand"], [1, "title-nav-sub"], ["routerLink", "values-add-home", "routerLinkActive", "active", 3, "skipLocationChange"]],
        template: function ValuesAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Valores Agregados");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["*[_ngcontent-%COMP%]{margin:0px 2px;padding:2px 0px;box-sizing:border-box;font-size:0;}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 18pt;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: auto;\r\n  padding: 5px 30px !important;\r\n  margin: 10px 10px !important;\r\n  background-color: #383838;\r\n  text-align: center;\r\n  color: Rgb(145, 198, 96);\r\n  height: 36px;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background-color: Rgb(145, 198, 96);\r\n    color: #383838;\r\n  }\r\n\r\n.title-nav-sub[_ngcontent-%COMP%] {\r\n  color: #383838 !important;\r\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 24pt !important;\r\n  padding-left: 10px 50px 10px 60px;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: auto;\r\n   }\r\n\r\n   .logoContainer[_ngcontent-%COMP%]{\r\n       height: 45% !important;\r\n   }\r\n   .powerBILogoText[_ngcontent-%COMP%]{\r\n       font-size: 10px !important;\r\n   }\r\n  .title-nav-sub[_ngcontent-%COMP%] {\r\n    font-size: 24px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlcy1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDOztBQUVuRTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsNElBQTRJO0VBQzVJLGVBQWU7QUFDakI7O0FBQ0E7Ozs7Ozs7Ozs7T0FVTzs7QUFDUDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLGNBQWM7RUFDaEI7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsNElBQTRJO0VBQzVJLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7O0FBRUE7R0FDRztJQUNDLFdBQVc7R0FDWjs7R0FFQTtPQUNJLHNCQUFzQjtHQUMxQjtHQUNBO09BQ0ksMEJBQTBCO0dBQzlCO0VBQ0Q7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJ2YWx1ZXMtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4qe21hcmdpbjowcHggMnB4O3BhZGRpbmc6MnB4IDBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1zaXplOjA7fVxyXG5cclxubmF2IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBcIlNlZ29lIFVJIFdlYiAoV2VzdCBFdXJvcGVhbilcIiwgXCJTZWdvZSBVSVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxufSBcclxuLyogbmF2IGxpe1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOjE2JTtcclxuICAgIHBhZGRpbmc6NXB4IDMwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOjEwcHggMTB4cCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzODM4MzggO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMzgzODM4IDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6I2EzYzk1MTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIH0gKi9cclxubmF2IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDMwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBSZ2IoMTQ1LCAxOTgsIDk2KTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiAgbmF2IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFJnYigxNDUsIDE5OCwgOTYpO1xyXG4gICAgY29sb3I6ICMzODM4Mzg7XHJcbiAgfVxyXG5cclxuLnRpdGxlLW5hdi1zdWIge1xyXG4gIGNvbG9yOiAjMzgzODM4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgXCJTZWdvZSBVSSBXZWIgKFdlc3QgRXVyb3BlYW4pXCIsIFwiU2Vnb2UgVUlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI0cHQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggNTBweCAxMHB4IDYwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICBuYXYgbGkge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgIH1cclxuXHJcbiAgIC5sb2dvQ29udGFpbmVye1xyXG4gICAgICAgaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAucG93ZXJCSUxvZ29UZXh0e1xyXG4gICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAudGl0bGUtbmF2LXN1YiB7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    79099:
    /*!****************************************!*\
      !*** ./src/app/user/user.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserComponent": function UserComponent() {
          return (
            /* binding */
            _UserComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);

      var _UserComponent = /*#__PURE__*/function () {
        function _UserComponent(msalService) {
          _classCallCheck(this, _UserComponent);

          this.msalService = msalService;
        }

        _createClass(_UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getMail",
          value: function getMail() {
            return this.msalService.instance.getActiveAccount().username;
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.msalService.instance.getActiveAccount().name;
          }
        }]);

        return _UserComponent;
      }();

      _UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || _UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__.MsalService));
      };

      _UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _UserComponent,
        selectors: [["app-user"]],
        decls: 9,
        vars: 1,
        consts: [["id", "exampleModa2", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "mb-3"], ["for", "message-text", 1, "col-form-label"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "fas", "fa-times", "close"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMail());
          }
        },
        styles: [".modal[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.hidden[_ngcontent-%COMP%]{\r\n  display:none;\r\n}\r\n.modal-dialog-users[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  float: right !important;\r\n  position: absolute;\r\n  top: 18px;\r\n  right: 41px;\r\n}\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  float: right !important;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: 41px;\r\n}\r\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  padding-right: 40px !important;\r\n  width: 100% !important;\r\n}\r\n@media (max-width: 800px) {\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 0% !important;\r\n    padding-left: 4% !important;\r\n  }\r\n    .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  padding-right: 3% !important;\r\n  width: 100% !important;\r\n  margin-top: 58px !important;\r\n}\r\n  .hidden[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .close[_ngcontent-%COMP%] {\r\n    zoom: 1.3;\r\n  }\r\n\r\n}\r\n@media (max-width: 575px) {\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 0% !important;\r\n    padding-left: 4% !important;\r\n  }\r\n\r\n  .localitacion-message[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 0% !important;\r\n    padding-left: 0% !important;\r\n    margin-right: -33px;\r\n  }\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    padding-right: 3% !important;\r\n    width: 66% !important;\r\n    margin-top: 58px !important;\r\n  }\r\n  .close[_ngcontent-%COMP%] {\r\n    zoom: 1.3;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLDJCQUEyQjtFQUM3QjtJQUNFO0VBQ0YsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFNBQVM7RUFDWDs7QUFFRjtBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhpZGRlbntcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLm1vZGFsLWRpYWxvZy11c2VycyB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOHB4O1xyXG4gIHJpZ2h0OiA0MXB4O1xyXG59XHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiA0MXB4O1xyXG59XHJcblxyXG4ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAgLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XHJcbiAgcGFkZGluZy1yaWdodDogMyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDU4cHggIWltcG9ydGFudDtcclxufVxyXG4gIC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jbG9zZSB7XHJcbiAgICB6b29tOiAxLjM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm1vZGFsLmZhZGUgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxvY2FsaXRhY2lvbi1tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zM3B4O1xyXG4gIH1cclxuICAubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNjYlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jbG9zZSB7XHJcbiAgICB6b29tOiAxLjM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getBaseUrl": function getBaseUrl() {
          return (
            /* binding */
            _getBaseUrl
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/localize/init */
      34266);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /***************************************************************************************************
       * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
       */


      function _getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
      }

      var providers = [{
        provide: 'BASE_URL',
        useFactory: _getBaseUrl,
        deps: []
      }];

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map