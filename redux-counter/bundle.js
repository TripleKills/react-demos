var _jsxFileName =
    "D:\\workspace\\react\\redux-toolkit-demo\\src\\features\\counter\\Counter.tsx",
  _s = __webpack_require__.$Refresh$.signature();

function Counter() {
  _s();

  const count = (0, _app_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
    (rootState) => rootState.counter.value
  );
  const dispatch = (0,
  _app_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
  const [incrementAmount, setIncrementAmount] = (0,
  react__WEBPACK_IMPORTED_MODULE_0__.useState)("2");
  const incrementValue = Number(incrementAmount) || 0;
  return /*#__PURE__*/ (0,
  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
    "div",
    {
      children: [
        /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
          "div",
          {
            className:
              _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].row,
            children: [
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "button",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .button,
                  "aria-label": "Decrement value",
                  onClick: () =>
                    dispatch(
                      (0,
                      _counterSlice__WEBPACK_IMPORTED_MODULE_2__.decrement)()
                    ),
                  children: "-",
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 9,
                },
                this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "span",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .value,
                  children: count,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 9,
                },
                this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "button",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .button,
                  "aria-label": "Increment value",
                  onClick: () =>
                    dispatch(
                      (0,
                      _counterSlice__WEBPACK_IMPORTED_MODULE_2__.increment)()
                    ),
                  children: "+",
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7,
          },
          this
        ),
        /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
          "div",
          {
            className:
              _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].row,
            children: [
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "input",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .textbox,
                  "aria-label": "Set increment amount",
                  value: incrementAmount,
                  onChange: (e) => setIncrementAmount(e.target.value),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 9,
                },
                this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "button",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .button,
                  onClick: () =>
                    dispatch(
                      (0,
                      _counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementByAmount)(
                        incrementValue
                      )
                    ),
                  children: "Add Amount",
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 9,
                },
                this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "button",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .asyncButton,
                  onClick: () =>
                    dispatch(
                      (0,
                      _counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementAsync)(
                        incrementValue
                      )
                    ),
                  children: "Add Async",
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 9,
                },
                this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "button",
                {
                  className:
                    _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]
                      .button,
                  onClick: () =>
                    dispatch(
                      (0,
                      _counterSlice__WEBPACK_IMPORTED_MODULE_2__.incrementIfOdd)(
                        incrementValue
                      )
                    ),
                  children: "Add If Odd",
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5,
    },
    this
  );
}

_s(Counter, "T4Fw5Zo8MCSnIkm4Fc+OTXSVxTY=", false, function () {
  return [
    _app_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
    _app_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
  ];
});

_c = Counter;
