webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/cashconfig/table/sngtexas.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/cashconfig/table/sngtexas.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");

var _cashconfig = __webpack_require__(/*! @/api/cashconfig */ "./src/api/cashconfig.js");

var _common = _interopRequireDefault(__webpack_require__(/*! @/tool/common */ "./src/tool/common.js"));

var _methods;

var _default = {
  data: function data() {
    return {
      activeName: 'first',
      params: {
        page: 1,
        perpage: 50,
        total: 0
      },
      isDisabled: true,
      formVisible: false,
      tableData: [],
      form: {},
      formtemp: {},
      status: [{
        "id": 1,
        "name": "启用"
      }, {
        "id": 0,
        "name": "禁用"
      }],
      formLabelWidth: '120px',
      steps: ["冠军1800"],
      blindTypeItems: [{
        "id": 1,
        'text': "标准"
      }, {
        "id": 2,
        'text': "高速"
      }, {
        "id": 3,
        'text': "超高速"
      }]
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  filters: {
    formatterDate: function formatterDate(val) {
      var date = new Date(val * 1000);
      return _common.default.formatDate(date, 'yyyy-MM-dd hh:mm');
    },
    formatStatus: function formatStatus(val, list) {
      var item = list.find(function (item) {
        return item.id == val;
      });

      if (item) {
        return item.name;
      }
    },
    formatPlay: function formatPlay(val) {
      var html = '无';

      if (val.straddle == 1 && val.insurance == 1) {
        html = 'straddle 保险';
      } else if (val.straddle == 1) {
        html = 'straddle';
      } else if (val.insurance == 1) {
        html = '保险';
      }

      return html;
    },
    formatLimit: function formatLimit(val) {
      var html = '无';

      if (val.gpslimit == 1 && val.iplimit == 1) {
        html = 'IP限制 GPS限制';
      } else if (val.gpslimit == 1) {
        html = 'GPS限制';
      } else if (val.iplimit == 1) {
        html = 'IP限制';
      }

      return html;
    }
  },
  methods: (_methods = {
    sliderChange: function sliderChange() {
      this.getPrize();
      this.getFree();
    },
    tip5: function tip5(value) {
      if (htmzfee[this.form1.fee]) {
        return htmzfee[this.form1.fee]['text'];
      }
    }
  }, (0, _defineProperty2.default)(_methods, "sliderChange", function sliderChange() {
    this.getPrize();
    this.getFree();
  }), (0, _defineProperty2.default)(_methods, "getFree", function getFree() {
    var num1 = htmz[this.form1.price]['price'] * (100 - htmzfee[this.form1.fee]['fee']) / 100;
    var num2 = htmz[this.form1.price]['price'] * htmzfee[this.form1.fee]['fee'] / 100;
    this.sng_mg_text = htmz[this.form1.price]['price'] + "(" + num2 + "+" + num1 + ")";
  }), (0, _defineProperty2.default)(_methods, "tip2", function tip2(value) {
    return htmzplayer[this.form1.max_player]['max_player'];
  }), (0, _defineProperty2.default)(_methods, "sliderChange2", function sliderChange2() {
    this.getPrize();
  }), (0, _defineProperty2.default)(_methods, "getPrize", function getPrize() {
    var players = htmzplayer[this.form.max_player]['max_player'];
    var num = parseInt(htmz[this.form.price]['price']) * parseInt(players) * htmzfee[this.form.fee]['fee'] / 100;

    if (players == 2) {
      this.steps = ["冠军" + num];
    }

    if (players == 6) {
      var num1 = Math.ceil(num * 0.65);
      var num2 = Math.ceil(num * 0.35);
      this.steps = ["冠军" + num1, "亚军" + num2];
    }

    if (players == 9) {
      var _num = Math.ceil(num * 0.5);

      var _num2 = Math.ceil(num * 0.3);

      var num3 = Math.ceil(num * 0.2);
      this.steps = ["冠军" + _num, "亚军" + _num2, "季军" + num3];
    }
  }), (0, _defineProperty2.default)(_methods, "formatterDate", function formatterDate(val) {
    var date = new Date(val * 1000);
    return _common.default.formatDate(date, 'yyyy-MM-dd hh:mm');
  }), (0, _defineProperty2.default)(_methods, "getTimes", function getTimes(datestr) {
    var date = new Date(datestr);
    return date.getTime();
  }), (0, _defineProperty2.default)(_methods, "sliderChange", function sliderChange() {
    this.mz = this.ht[this.form.sblind - 1]['mz'];
    this.jfp = this.ht[this.form.sblind - 1]['jfp'];
    this.exbetradio = this.ht[this.form.sblind - 1]['qz'];
    this.form.ex_bet = 0;
  }), (0, _defineProperty2.default)(_methods, "tip", function tip(val) {
    if (!val) {
      return '';
    }

    return this.ht[parseInt(val) - 1]['mz'];
  }), (0, _defineProperty2.default)(_methods, "changePage", function changePage(page) {
    var _self = this;

    _self.params.page = page;

    _self.getData();
  }), (0, _defineProperty2.default)(_methods, "changeSize", function changeSize(perpage) {
    var _self = this;

    _self.params.perpage = perpage;

    _self.getData();
  }), (0, _defineProperty2.default)(_methods, "edit", function edit() {
    this.isDisabled = false;
  }), (0, _defineProperty2.default)(_methods, "cancelEdit", function cancelEdit() {
    this.isDisabled = true;
    this.formVisible = false;
  }), (0, _defineProperty2.default)(_methods, "back", function back() {
    this.formVisible = false;
  }), (0, _defineProperty2.default)(_methods, "add", function add() {
    this.form = {
      ex_bet: 0,
      sblind: this.sblind,
      bblind: this.sblind * 2,
      max_player: 2,
      minstart: 2,
      insurance: 0,
      straddle: 0,
      gpslimit: 0,
      iplimit: 0
    };
    this.formVisible = true;
  }), (0, _defineProperty2.default)(_methods, "change", function change(scope) {
    var _self = this;

    var tips = scope.row.is_show == 1 ? '禁用' : '启用';

    _self.$confirm('此操作将' + tips + '此条记录, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(function () {
      if (scope.row.id) {
        var params = {};
        params['id'] = scope.row.id;
        params['is_show'] = scope.row.is_show;
        (0, _cashconfig.tableSngTexasChange)(params).then(function (rs) {
          if (rs.ret == 200) {
            _self.$message({
              message: tips + "成功",
              type: 'success'
            });

            _self.tableData[scope.$index].is_show = 1 - scope.row.is_show;
          }
        });
      } else {// this.tableData.splice(scope.$index, 1)
      }
    }).catch(function () {});
  }), (0, _defineProperty2.default)(_methods, "save", function save() {
    var _self = this;

    _self.formtemp = JSON.parse(JSON.stringify(this.form));
    var params = {};
    _self.formtemp.sblind = this.ht[_self.formtemp.sblind - 1]['sblind'];
    _self.formtemp.bblind = _self.formtemp.sblind * 2;
    _self.formtemp.edittime = new Date().getTime() / 1000;
    _self.formtemp.iswhite = 0;
    _self.formtemp.mini_buying = _self.orgdata[_self.formtemp.sblind].mini_buying;
    _self.formtemp.max_buying = _self.orgdata[_self.formtemp.sblind].max_buying;
    params['data'] = JSON.stringify(_self.formtemp);
    (0, _cashconfig.tableSngTexasSave)(params).then(function (rs) {
      if (rs.data.code == 0) {
        _self.$message({
          message: "保存成功",
          type: 'success'
        });

        _self.formVisible = false;

        _self.getData();
      } else {
        _self.$message({
          message: rs.data.msg,
          type: 'error'
        });
      }
    });
  }), (0, _defineProperty2.default)(_methods, "getData", function getData() {
    var _self = this;

    var params = {};
    params['page'] = _self.params.page;
    params['perpage'] = _self.params.perpage;
    _self.tableData = [];
    _self.loading = true;
    (0, _cashconfig.tableSngTexas)(params).then(function (rs) {
      _self.params.total = rs.data.total;
      _self.tableData = rs.data.rows;
      _self.loading = false;
    });
  }), _methods)
};
exports.default = _default;

/***/ }),

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
                                  "format-tooltip": _vm.tip5,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange5 },
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
                                  "format-tooltip": _vm.tip2,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChangePeople },
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
                                  "format-tooltip": _vm.tip3,
                                  "show-stops": "",
                                  "show-tooltip": ""
                                },
                                on: { change: _vm.sliderChange3 },
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
                                  "format-tooltip": _vm.tip4,
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
//# sourceMappingURL=app.45d2935f227962a9e03d.hot-update.js.map