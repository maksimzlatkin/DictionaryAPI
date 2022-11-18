"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryService = void 0;
const axios_1 = require("@nestjs/axios");
const app_service_1 = require("../app.service");
const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
class DictionaryService {
    constructor(word, type) {
        this.word = word;
        this.type = type;
        this.word = word;
        this.type = type;
    }
    async getDefinitions(pos) {
        let appService = new app_service_1.AppService(new axios_1.HttpService());
        let data = await appService.getDataFromAPI(API_URL + this.word);
        let meanings = { "definitions": [] };
        data = JSON.stringify(data);
        const obj = JSON.parse(data);
        for (let i = 0; i < obj.length; i++) {
            let definitions = JSON.parse(JSON.stringify(obj[i]['meanings']));
            if (!(definitions[0]['partOfSpeech'] == pos)) {
                continue;
            }
            for (let j = 0; j < definitions.length; j++) {
                let newDefinitions = definitions[j]['definitions'];
                for (let k = 0; k < newDefinitions.length; k++) {
                    if (newDefinitions[k]['definition'].length === 0) {
                        continue;
                    }
                    meanings["definitions"].push(newDefinitions[k]['definition']);
                }
            }
        }
        meanings["definitions"].filter(String);
        console.log(meanings);
        return meanings;
    }
}
exports.DictionaryService = DictionaryService;
//# sourceMappingURL=dictionary.service.js.map