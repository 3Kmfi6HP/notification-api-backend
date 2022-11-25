"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unSubscribeToTopic = exports.subscribeToTopic = exports.sendNotificationToTopic = exports.sendNotificationToToken = exports.sendAllNotification = void 0;
var fcm_service_1 = require("../services/fcm.service");
var sendAllNotification = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var notification, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                notification = req.body.notification;
                if (!notification)
                    return [2 /*return*/, res.status(400).json({ message: 'Notification is required' })];
                return [4 /*yield*/, (0, fcm_service_1.sendAllNotificationService)(notification)];
            case 1:
                response = _a.sent();
                res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: 'Notification sent successfully',
                    data: response,
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({
                    statusCode: 500,
                    success: false,
                    message: (error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || 'Internal Server Error',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendAllNotification = sendAllNotification;
var sendNotificationToToken = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, notification, response, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, token = _a.token, notification = _a.notification;
                if (!token)
                    return [2 /*return*/, res.status(400).json({ message: 'Token is required' })];
                if (!notification)
                    return [2 /*return*/, res.status(400).json({ message: 'Notification is required' })];
                return [4 /*yield*/, (0, fcm_service_1.sendNotificationToTokenService)(token, notification)];
            case 1:
                response = _b.sent();
                res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: 'Notification sent successfully',
                    response: response,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                res.status(500).json({
                    statusCode: 500,
                    success: false,
                    message: (error_2 === null || error_2 === void 0 ? void 0 : error_2.message) || 'Internal Server Error',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendNotificationToToken = sendNotificationToToken;
var sendNotificationToTopic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, topic, notification, response, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, topic = _a.topic, notification = _a.notification;
                if (!topic)
                    return [2 /*return*/, res.status(400).json({ message: 'Topic is required' })];
                if (!notification)
                    return [2 /*return*/, res.status(400).json({ message: 'Notification is required' })];
                return [4 /*yield*/, (0, fcm_service_1.sendNotificationToTopicService)(topic, notification)];
            case 1:
                response = _b.sent();
                res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: 'Notification sent successfully',
                    data: response,
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(500).json({
                    statusCode: 500,
                    success: false,
                    message: (error_3 === null || error_3 === void 0 ? void 0 : error_3.message) || 'Internal Server Error',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendNotificationToTopic = sendNotificationToTopic;
// export const sendNotificationToCondition = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const { condition, notification } = req.body;
//     if (!condition)
//       return res.status(400).json({ message: 'Condition is required' });
//     if (!notification)
//       return res.status(400).json({ message: 'Notification is required' });
//     const message = {
//       notification: {
//         title: notification.title || 'Notification Title',
//         body: notification.body || 'Notification Body',
//       },
//       condition,
//     };
//     const response = await firebaseMessaging.send(message);
//     res.status(200).json({
//       statusCode: 200,
//       success: true,
//       message: 'Notification sent successfully',
//       response,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       statusCode: 500,
//       success: false,
//       message: error?.message || 'Internal Server Error',
//     });
//   }
// };
var subscribeToTopic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, topic, response, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, token = _a.token, topic = _a.topic;
                if (!token)
                    return [2 /*return*/, res.status(400).json({ message: 'Token is required' })];
                if (!topic)
                    return [2 /*return*/, res.status(400).json({ message: 'Topic is required' })];
                return [4 /*yield*/, (0, fcm_service_1.subscribeToTopicService)(token, topic)];
            case 1:
                response = _b.sent();
                res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: 'Subscribed to topic successfully',
                    data: response,
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.status(500).json({
                    statusCode: 500,
                    success: false,
                    message: (error_4 === null || error_4 === void 0 ? void 0 : error_4.message) || 'Internal Server Error',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.subscribeToTopic = subscribeToTopic;
var unSubscribeToTopic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, topic, response, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, token = _a.token, topic = _a.topic;
                if (!token)
                    return [2 /*return*/, res.status(400).json({ message: 'Token is required' })];
                if (!topic)
                    return [2 /*return*/, res.status(400).json({ message: 'Topic is required' })];
                return [4 /*yield*/, (0, fcm_service_1.unSubscribeToTopicService)(token, topic)];
            case 1:
                response = _b.sent();
                res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: 'UnSubscribed to topic successfully',
                    data: response,
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                res.status(500).json({
                    statusCode: 500,
                    success: false,
                    message: (error_5 === null || error_5 === void 0 ? void 0 : error_5.message) || 'Internal Server Error',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.unSubscribeToTopic = unSubscribeToTopic;
//# sourceMappingURL=fcm.controller.js.map