import { Controller, Get, Param } from "@nestjs/common"

import { MathService } from "./math.service"

@Controller('square')
export class SquareController {
    private math = new MathService();

  @Get(':num')
  getSquare(@Param('num') num : number){
    if (!num) {
        num = 2;
    } //No need for this
    return {'num' : num, 'square' : this.math.getSquare(num)};
  }
}