webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"03fb96fa-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/cashconfig/table/sngtexas.vue?vue&type=template&id=7148be3e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"03fb96fa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/cashconfig/table/sngtexas.vue?vue&type=template&id=7148be3e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { padding: "10px 15px" } },
    [
      _c(
        "div",
        [
          _c(
            "el-form",
            { staticClass: "tool-search-area", attrs: { inline: true } },
            [
              _c(
                "el-form-item",
                [
                  _vm.formVisible
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary", size: "mini" },
                          on: { click: _vm.back }
                        },
                        [_vm._v("返回列表")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isDisabled && !_vm.formVisible
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary", size: "mini" },
                          on: { click: _vm.add }
                        },
                        [_vm._v("新增")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isDisabled
                    ? _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "primary" },
                          on: { click: _vm.edit }
                        },
                        [_vm._v("进入编辑状态")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isDisabled
                    ? _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "primary" },
                          on: { click: _vm.cancelEdit }
                        },
                        [_vm._v("取消编辑状态")]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      !_vm.formVisible
        ? _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { data: _vm.tableData, size: "medium" }
            },
            [
              _c("el-table-column", {
                attrs: { type: "index", label: "序号", width: "80" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "tname", label: "牌局名称" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "tid", label: "牌局ID" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "price", label: "报名费用" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "blindtype", label: "赛制" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "mini_buying", label: "初始筹码" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "time", label: "时长(min)" }
              }),
              _vm._v(" "),
              _c("el-table-column", { attrs: { prop: "pj", label: "牌局" } }),
              _vm._v(" "),
              !_vm.isDisabled
                ? _c("el-table-column", {
                    attrs: { fixed: "right", label: "操作", width: "100" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c(
                                "el-button",
                                {
                                  attrs: { type: "text", size: "small" },
                                  on: {
                                    click: function($event) {
                                      return _vm.change(scope)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      scope.row.is_show == 1 ? "禁用" : "启用"
                                    )
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      2128172238
                    )
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.formVisible
        ? _c("el-pagination", {
            attrs: {
              background: "",
              layout: "sizes, prev, pager, next",
              "current-page": _vm.params.page,
              "page-sizes": [20, 30, 50, 100, 150, 200],
              "page-size": _vm.params.perpage,
              total: _vm.params.total
            },
            on: {
              "current-change": _vm.changePage,
              "size-change": _vm.changeSize
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 10 } },
        [
          _vm.formVisible
            ? _c(
                "el-col",
                {
                  attrs: {
                    xs: { span: 24, offset: 0 },
                    sm: { span: 20 },
                    md: { span: 18 },
                    lg: { span: 16 },
                    xl: { span: 14 }
                  }
                },
                [
                  _vm.formVisible
                    ? _c(
                        "el-form",
                        { ref: "form", attrs: { model: _vm.form } },
                        [
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "名称",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c("el-input", {
                                staticStyle: { width: "200px" },
                                attrs: {
                                  placeholder: "请输入牌局名称",
                                  "auto-complete": "off"
                                },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-row",
                            { attrs: { gutter: 20 } },
                            [
                              _c("el-col", { attrs: { span: 6, offset: 6 } }, [
                                _c("div", { staticStyle: { width: "220px" } }, [
                                  _vm._v("买入："),
                                  _c("span", [_vm._v(_vm._s(_vm.sng_mg_text))])
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "报名费",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c("el-slider", {
                                attrs: {
                                  step: 1,
                                  min: 0,
                                  max: 20,
                                  "format-tooltip": _vm.tip1,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange1 },
                                model: {
                                  value: _vm.form.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "price", $$v)
                                  },
                                  expression: "form.price"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "转化率",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c("el-slider", {
                                attrs: {
                                  step: 1,
                                  min: 0,
                                  max: 9,
                                  "format-tooltip": _vm.tip2,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange2 },
                                model: {
                                  value: _vm.form.fee,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fee", $$v)
                                  },
                                  expression: "form.fee"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "名次奖励",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            _vm._l(_vm.steps, function(item, index) {
                              return _c(
                                "span",
                                { key: index, attrs: { title: item } },
                                [_vm._v(" " + _vm._s(item) + " ")]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "牌局人数",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c("el-slider", {
                                attrs: {
                                  step: 1,
                                  min: 0,
                                  max: 2,
                                  "format-tooltip": _vm.tip3,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange3 },
                                model: {
                                  value: _vm.form.max_player,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "max_player", $$v)
                                  },
                                  expression: "form.max_player"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "初始筹码",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c("el-slider", {
                                attrs: {
                                  step: 1,
                                  min: 0,
                                  max: 11,
                                  "format-tooltip": _vm.tip4,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange4 },
                                model: {
                                  value: _vm.form.startBuying,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "startBuying", $$v)
                                  },
                                  expression: "form.startBuying"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "升盲时间",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c("el-slider", {
                                attrs: {
                                  step: 1,
                                  min: 0,
                                  max: 10,
                                  "format-tooltip": _vm.tip5,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange4 },
                                model: {
                                  value: _vm.form.raiseTime,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "raiseTime", $$v)
                                  },
                                  expression: "form.raiseTime"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                label: "盲注结构",
                                "label-width": _vm.formLabelWidth
                              }
                            },
                            [
                              _c(
                                "el-radio-group",
                                {
                                  model: {
                                    value: _vm.form.blindType,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "blindType", $$v)
                                    },
                                    expression: "form.blindType"
                                  }
                                },
                                _vm._l(_vm.blindTypeItems, function(
                                  post,
                                  index
                                ) {
                                  return _c(
                                    "el-radio",
                                    { key: index, attrs: { label: post.id } },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(post.text) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            { attrs: { "label-width": _vm.formLabelWidth } },
                            [
                              _c("el-switch", {
                                attrs: {
                                  "active-text": "",
                                  "active-color": "#13ce66",
                                  "inactive-color": "#ff4949",
                                  "inactive-text": "GPS限制"
                                },
                                model: {
                                  value: _vm.form.gpslimit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "gpslimit", $$v)
                                  },
                                  expression: "form.gpslimit"
                                }
                              }),
                              _vm._v(" "),
                              _c("el-switch", {
                                staticStyle: { "padding-left": "20px" },
                                attrs: {
                                  "active-text": "",
                                  "active-color": "#13ce66",
                                  "inactive-color": "#ff4949",
                                  "inactive-text": "IP限制"
                                },
                                model: {
                                  value: _vm.form.iplimit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "iplimit", $$v)
                                  },
                                  expression: "form.iplimit"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            { attrs: { "label-width": _vm.formLabelWidth } },
                            [
                              _c(
                                "el-button",
                                {
                                  attrs: { type: "primary" },
                                  on: { click: _vm.save }
                                },
                                [_vm._v("确定")]
                              ),
                              _vm._v(" "),
                              _c("el-button", { on: { click: _vm.back } }, [
                                _vm._v("取消")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=app.f91eb0846556f2dd718f.hot-update.js.map