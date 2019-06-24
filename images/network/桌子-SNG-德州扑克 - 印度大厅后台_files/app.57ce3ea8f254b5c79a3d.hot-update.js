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
      sng_mg_text: "1000(1000+0)",
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
    sliderChange1: function sliderChange1() {
      this.getPrize();
      this.getFree();
    },
    sliderChange2: function sliderChange2() {
      this.getPrize();
      this.getFree();
    },
    sliderChange3: function sliderChange3() {
      this.getPrize();
    },
    sliderChange4: function sliderChange4() {
      this.mz = this.ht[this.form.sblind - 1]['mz'];
      this.jfp = this.ht[this.form.sblind - 1]['jfp'];
      this.exbetradio = this.ht[this.form.sblind - 1]['qz'];
      this.form.ex_bet = 0;
    }
  }, (0, _defineProperty2.default)(_methods, "sliderChange4", function sliderChange4() {
    this.mz = this.ht[this.form.sblind - 1]['mz'];
    this.jfp = this.ht[this.form.sblind - 1]['jfp'];
    this.exbetradio = this.ht[this.form.sblind - 1]['qz'];
    this.form.ex_bet = 0;
  }), (0, _defineProperty2.default)(_methods, "tip1", function tip1(value) {
    return htmzplayer[this.form.max_player]['max_player'];
  }), (0, _defineProperty2.default)(_methods, "tip2", function tip2(value) {
    return htmzplayer[this.form.max_player]['max_player'];
  }), (0, _defineProperty2.default)(_methods, "tip3", function tip3(value) {
    return htmzplayer[this.form.max_player]['max_player'];
  }), (0, _defineProperty2.default)(_methods, "tip4", function tip4(value) {
    return htmzplayer[this.form.max_player]['max_player'];
  }), (0, _defineProperty2.default)(_methods, "tip5", function tip5(value) {
    return htmzplayer[this.form.max_player]['max_player'];
  }), (0, _defineProperty2.default)(_methods, "getFree", function getFree() {
    var num1 = htmz[this.form.price]['price'] * (100 - htmzfee[this.form.fee]['fee']) / 100;
    var num2 = htmz[this.form.price]['price'] * htmzfee[this.form.fee]['fee'] / 100;
    this.sng_mg_text = htmz[this.form.price]['price'] + "(" + num2 + "+" + num1 + ")";
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

/***/ })

})
//# sourceMappingURL=app.57ce3ea8f254b5c79a3d.hot-update.js.map