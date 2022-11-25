"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fcm_route_1 = __importDefault(require("./fcm.route"));
var token_route_1 = __importDefault(require("./token.route"));
var router = (0, express_1.Router)();
router.use('/token', token_route_1.default);
router.use('/fcm', fcm_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map