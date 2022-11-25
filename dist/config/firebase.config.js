"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert({
        projectId: _1.default.FIREBASE_PROJECT_ID,
        clientEmail: _1.default.FIREBASE_CLIENT_EMAIL,
        privateKey: _1.default.FIREBASE_PRIVATE_KEY,
    }),
});
var firebaseMessaging = firebase_admin_1.default.messaging(firebase_admin_1.default.app());
exports.default = firebaseMessaging;
//# sourceMappingURL=firebase.config.js.map