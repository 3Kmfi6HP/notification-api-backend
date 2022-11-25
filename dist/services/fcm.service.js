"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unSubscribeToTopicService = exports.subscribeToTopicService = exports.sendNotificationToTopicService = exports.sendNotificationToTokenService = exports.sendAllNotificationService = void 0;
var firebase_config_1 = __importDefault(require("../config/firebase.config"));
var token_model_1 = __importDefault(require("../models/token.model"));
var sendAllNotificationService = function (notification) { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, registrationTokens, message, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, token_model_1.default.find()];
            case 1:
                tokens = _a.sent();
                registrationTokens = tokens.map(function (token) { return token.token; });
                if (registrationTokens.length === 0) {
                    throw new Error('No tokens found');
                }
                message = {
                    notification: {
                        title: notification.title || 'Notification Title',
                        body: notification.body || 'Notification Body',
                    },
                    tokens: registrationTokens,
                };
                return [4 /*yield*/, firebase_config_1.default.sendMulticast(message)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response];
            case 3:
                error_1 = _a.sent();
                throw new Error((error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || "Internal server error !");
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.sendAllNotificationService = sendAllNotificationService;
var sendNotificationToTokenService = function (token, notification) { return __awaiter(void 0, void 0, void 0, function () {
    var message, response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                message = {
                    notification: {
                        title: notification.title || 'Notification Title',
                        body: notification.body || 'Notification Body',
                    },
                    token: token,
                };
                return [4 /*yield*/, firebase_config_1.default.send(__assign(__assign({}, message), { webpush: {
                            notification: {
                                icon: 'https://www.google.com/favicon.ico',
                                title: 'Notification Title',
                                body: 'Notification Body',
                            },
                        } }))];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
            case 2:
                error_2 = _a.sent();
                throw new Error((error_2 === null || error_2 === void 0 ? void 0 : error_2.message) || "Internal server error !");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendNotificationToTokenService = sendNotificationToTokenService;
var sendNotificationToTopicService = function (topic, notification) { return __awaiter(void 0, void 0, void 0, function () {
    var message, response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                message = {
                    notification: {
                        title: notification.title || 'Notification Title',
                        body: notification.body || 'Notification Body',
                    },
                    topic: topic,
                };
                return [4 /*yield*/, firebase_config_1.default.send(message)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
            case 2:
                error_3 = _a.sent();
                throw new Error((error_3 === null || error_3 === void 0 ? void 0 : error_3.message) || "Internal server error !");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendNotificationToTopicService = sendNotificationToTopicService;
var subscribeToTopicService = function (token, topic) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebase_config_1.default.subscribeToTopic(token, topic)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
            case 2:
                error_4 = _a.sent();
                throw new Error((error_4 === null || error_4 === void 0 ? void 0 : error_4.message) || "Internal server error !");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.subscribeToTopicService = subscribeToTopicService;
var unSubscribeToTopicService = function (token, topic) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, firebase_config_1.default.unsubscribeFromTopic(token, topic)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
            case 2:
                error_5 = _a.sent();
                throw new Error((error_5 === null || error_5 === void 0 ? void 0 : error_5.message) || "Internal server error !");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.unSubscribeToTopicService = unSubscribeToTopicService;
//# sourceMappingURL=fcm.service.js.map