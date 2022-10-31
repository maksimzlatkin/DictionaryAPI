import { Controller } from "@nestjs/common"

export class MathService {
  public getSquare(num : number) {
    return num * num;
  }

  public getSquareRoot(num : number) {
    return Math.sqrt(num)
  }
}