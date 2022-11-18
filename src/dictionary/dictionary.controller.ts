import { Controller, Get, Param } from "@nestjs/common"

import { DictionaryService } from "./dictionary.service"

@Controller('dictionary')
export class DictionaryController {

  @Get('/:word/:type')
  getWordDefinitions(@Param('word') word : string, @Param('type') type : string){
    let dictionary = new DictionaryService(word, type);
    return dictionary.getDefinitions(type);
  }
}