webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/cashconfig/operation/tip.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/cashconfig/operation/tip.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");

var _cashconfig = __webpack_require__(/*! @/api/cashconfig */ "./src/api/cashconfig.js");

var _common = _interopRequireDefault(__webpack_require__(/*! @/tool/common */ "./src/tool/common.js"));

__webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");

__webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");

__webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");

var _vueQuillEditor = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");

var _data$mounted$mounted;

var _default = (_data$mounted$mounted = {
  data: function data() {
    return {
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
      fileListUrl: [],
      fileListPic: [],
      status: [{
        "id": 1,
        "name": "禁用"
      }, {
        "id": 2,
        "name": "启用"
      }],
      sendTypes: [{
        "id": 1,
        "name": "全部用户"
      }, {
        "id": 2,
        "name": "个人"
      }],
      clientTypes: [{
        "id": "1",
        "name": "IOS"
      }, {
        "id": "2",
        "name": "安卓"
      }, {
        "id": "3",
        "name": "H5"
      }],
      isHalls: [{
        "id": 1,
        "name": "是"
      }, {
        "id": 0,
        "name": "否"
      }],
      showTypes: [{
        "id": 1,
        "name": "大厅"
      }, {
        "id": 3,
        "name": "俱乐部"
      }],
      idsText: '用户UID',
      editorOption: {
        modules: {
          toolbar: {
            container: [['link']],
            handlers: {
              'image': function image() {
                QuillWatch.emit(this.quill.id);
              }
            }
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.getData();
  }
}, (0, _defineProperty2.default)(_data$mounted$mounted, "mounted", {
  quillEditor: _vueQuillEditor.quillEditor
}), (0, _defineProperty2.default)(_data$mounted$mounted, "filters", {
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
  formatIshall: function formatIshall(val) {
    if (val == 1) {
      return '是';
    }

    return '否';
  },
  formatSendtype: function formatSendtype(val, list) {
    var item = list.find(function (item) {
      return item.id == val;
    });

    if (item) {
      return item.name;
    }
  }
}), (0, _defineProperty2.default)(_data$mounted$mounted, "computed", {
  fileUrl: {
    get: function get() {
      return "/api" + "/index.php?s=Common.uploadUpyun";
    }
  }
}), (0, _defineProperty2.default)(_data$mounted$mounted, "methods", {
  formatClienttype: function formatClienttype(val) {
    if (val) {
      var html = '';

      for (var i in val) {
        if (val[i] == 1) {
          html += "IOS ";
        }

        if (val[i] == 2) {
          html += "安卓 ";
        }

        if (val[i] == 3) {
          html += "H5 ";
        }
      }

      return html;
    }
  },
  formatterDate: function formatterDate(val) {
    var date = new Date(val * 1000);
    return _common.default.formatDate(date, 'yyyy-MM-dd hh:mm');
  },
  getTimes: function getTimes(datestr) {
    var date = new Date(datestr);
    return date.getTime() / 1000;
  },
  changeSendtype: function changeSendtype(sendtype) {
    if (sendtype == 2) {
      this.idsText = '用户UID';
    } else {
      this.idsText = '俱乐部ID';
    }
  },
  changeIsattach: function changeIsattach(sendtype) {
    if (sendtype == 2) {
      this.idsText = '用户UID';
    } else {
      this.idsText = '俱乐部ID';
    }
  },
  changePage: function changePage(page) {
    var _self = this;

    _self.params.page = page;

    _self.getData();
  },
  changeSize: function changeSize(perpage) {
    var _self = this;

    _self.params.perpage = perpage;

    _self.getData();
  },
  edit: function edit() {
    this.isDisabled = false;
  },
  cancelEdit: function cancelEdit() {
    this.isDisabled = true;
    this.formVisible = false;
  },
  back: function back() {
    this.formVisible = false;
  },
  add: function add() {
    this.form = {
      url: '',
      picaddress: '',
      minversion: '1.0.0',
      maxversion: '5.0.0',
      showmethod: "1",
      islocation: "1",
      isinner: "1",
      clienttype: []
    };
    this.formVisible = true;
  },
  update: function update(scope) {
    this.formVisible = true;
    this.form = JSON.parse(JSON.stringify(scope.row));
    this.form.starttime = this.formatterDate(this.form.starttime);
    this.form.endtime = this.formatterDate(this.form.endtime);
    this.form.status = this.form.status.toString();
    this.form.showmethod = this.form.showmethod.toString();
    this.form.islocation = this.form.islocation.toString();
    this.form.isinner = this.form.isinner.toString();
  },
  del: function del(scope) {
    var _this = this;

    var _self = this;

    _self.$confirm('此操作将删除此条记录, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(function () {
      if (scope.row.id) {
        var params = {};
        params['s'] = 'Tip.del';
        params['id'] = scope.row.id;
        (0, _cashconfig.operationTipDel)(params).then(function (rs) {
          if (rs.ret == 200) {
            _self.$message({
              message: "删除成功",
              type: 'success'
            });

            _self.tableData.splice(scope.$index, 1);
          }
        });
      } else {
        _this.tableData.splice(scope.$index, 1);
      }
    }).catch(function () {});
  },
  change: function change(scope) {
    var _self = this;

    var tips = scope.row.status == 2 ? '禁用' : '启用';

    _self.$confirm('此操作将' + tips + '此条记录, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(function () {
      if (scope.row.id) {
        var params = {};
        params['id'] = scope.row.id;
        params['status'] = scope.row.status;
        (0, _cashconfig.operationTipChange)(params).then(function (rs) {
          if (rs.ret == 200) {
            _self.$message({
              message: tips + "成功",
              type: 'success'
            });

            _self.tableData[scope.$index].status = scope.row.status == 1 ? 2 : 1;
          }
        });
      } else {// this.tableData.splice(scope.$index, 1)
      }
    }).catch(function () {});
  },
  save: function save() {
    var _this2 = this;

    var _self = this;

    this.$refs['form'].validate(function (valid) {
      if (valid) {
        _self.formtemp = JSON.parse(JSON.stringify(_this2.form));
        var params = {};

        if (_self.formtemp.sendtype == 1) {
          _self.formtemp.ids = '';
        }

        if (_self.formtemp.isattach == 1) {
          _self.formtemp.attach = [];
        }

        _self.formtemp.starttime = _self.getTimes(_self.formtemp.starttime);
        _self.formtemp.endtime = _self.getTimes(_self.formtemp.endtime);
        _self.formtemp.addtime = new Date().getTime() / 1000;
        delete _self.formtemp.starttimetemp;
        delete _self.formtemp.endtimetemp;
        params['data'] = JSON.stringify(_self.formtemp);
        (0, _cashconfig.operationTipSave)(params).then(function (rs) {
          if (rs.ret == 200) {
            _self.$message({
              message: "保存成功",
              type: 'success'
            });

            _self.formVisible = false;

            _self.getData();
          }
        });
      }
    });
  },
  getData: function getData() {// var _self = this
    // var params = { };
    // params['page'] = _self.params.page
    // params['perpage'] = _self.params.perpage
    // _self.tableData = []
    // operationTip(params).then(rs => {
    //   _self.params.total = rs.data.total;
    //   _self.tableData = rs.data.rows
    //   for(let i in _self.tableData)
    //   {
    //     _self.tableData[i].starttimetemp = _self.tableData[i].starttime
    //     _self.tableData[i].endtimetemp = _self.tableData[i].endtime
    //     if(_self.tableData[i].clienttype)
    //     {
    //       _self.tableData[i].clienttype = JSON.parse(_self.tableData[i].clienttype)
    //     }
    //   }
    // })
  },
  //提交上传
  submitUpload: function submitUpload() {
    this.$refs.upload.submit();
  },
  //处理文件成功
  handleSuccessUrl: function handleSuccessUrl(response, file, fileList) {
    this.form.url = response.data.url;
    this.$message({
      message: "上传成功",
      type: 'success'
    });
    this.$refs.upload.clearFiles();
  },
  //处理文件成功
  handleSuccessPic: function handleSuccessPic(response, file, fileList) {
    this.form.picaddress = response.data.url;
    this.$message({
      message: "上传成功",
      type: 'success'
    });
    this.$refs.upload.clearFiles();
  },
  //处理超出处理
  handleExceed: function handleExceed(files, fileList) {
    this.$message.warning("\u5F53\u524D\u9650\u5236\u9009\u62E9 1\u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 ".concat(files.length, " \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 ").concat(files.length + fileList.length, " \u4E2A\u6587\u4EF6"));
  }
}), _data$mounted$mounted);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=app.7a560e1db34c5128942f.hot-update.js.map