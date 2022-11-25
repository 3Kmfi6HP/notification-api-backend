"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fcm_controller_1 = require("../controllers/fcm.controller");
var router = (0, express_1.Router)();
// this route is POST /all
router.post('/all', fcm_controller_1.sendAllNotification);
// this route is POST /token
router.post('/token', fcm_controller_1.sendNotificationToToken);
// this route is POST /topic
router.post('/topic', fcm_controller_1.sendNotificationToTopic);
// this route is POST /subscribe
router.post('/subscribe', fcm_controller_1.subscribeToTopic);
// this route is POST /unsubscribe
router.post('/unsubscribe', fcm_controller_1.unSubscribeToTopic);
exports.default = router;
//# sourceMappingURL=fcm.route.js.map