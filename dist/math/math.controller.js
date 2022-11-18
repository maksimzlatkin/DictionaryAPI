"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareRootController = exports.SquareController = void 0;
const common_1 = require("@nestjs/common");
const math_service_1 = require("./math.service");
let SquareController = class SquareController {
    constructor() {
        this.math = new math_service_1.MathService();
    }
    getSquare(num) {
        if (!num) {
            num = 2;
        }
        return { 'num': num, 'square': this.math.getSquare(num) };
    }
};
__decorate([
    (0, common_1.Get)(':num'),
    __param(0, (0, common_1.Param)('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SquareController.prototype, "getSquare", null);
SquareController = __decorate([
    (0, common_1.Controller)('square')
], SquareController);
exports.SquareController = SquareController;
let SquareRootController = class SquareRootController {
    constructor() {
        this.math = new math_service_1.MathService();
    }
    getSquare(num) {
        return { 'num': num, 'squareRoot': this.math.getSquareRoot(num) };
    }
};
__decorate([
    (0, common_1.Get)(':num'),
    __param(0, (0, common_1.Param)('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SquareRootController.prototype, "getSquare", null);
SquareRootController = __decorate([
    (0, common_1.Controller)('squareRoot')
], SquareRootController);
exports.SquareRootController = SquareRootController;
//# sourceMappingURL=math.controller.js.map