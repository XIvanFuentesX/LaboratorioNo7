"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var db = new _sequelize.Sequelize('database_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
var _default = db;
exports["default"] = _default;
//# sourceMappingURL=db.dev.js.map
