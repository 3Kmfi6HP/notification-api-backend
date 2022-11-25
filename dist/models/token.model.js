"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var TokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Token', TokenSchema);
//# sourceMappingURL=token.model.js.map