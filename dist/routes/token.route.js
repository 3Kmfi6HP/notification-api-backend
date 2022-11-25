"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var token_controller_1 = require("../controllers/token.controller");
var router = (0, express_1.Router)();
// this route is GET /get-tokens
router.get('/', token_controller_1.getTokensFromDB);
// this route is POST /store-token
router.post('/', token_controller_1.storeTokenToDB);
exports.default = router;
//# sourceMappingURL=token.route.js.map