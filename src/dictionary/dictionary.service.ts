import { Controller } from "@nestjs/common"
import { HttpService } from "@nestjs/axios";
import { map, catchError } from 'rxjs/operators';
import fetch from "node-fetch";
import { AppService } from "src/app.service";

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export class DictionaryService {
  constructor(private word : string, private type : string){
    this.word = word;
    this.type = type;
  }
  
  public async getDefinitions(pos) {
    let appService = new AppService(new HttpService());
    
    let data : any = await appService.getDataFromAPI(API_URL + this.word)
    //let data : any = [];
    
    let meanings = {"definitions" : []};
    
    data = JSON.stringify(data);
    const obj = JSON.parse(data);
    //console.log(obj);
    for (let i = 0; i < obj.length; i++){
      
      let definitions = JSON.parse(JSON.stringify(obj[i]['meanings']));

      if (!(definitions[0]['partOfSpeech'] == pos)){
        continue;
      }
      
      //This will only iterate once most of the time
      for (let j = 0; j < definitions.length; j++){
        
        let newDefinitions = definitions[j]['definitions'];
        
        for (let k = 0; k < newDefinitions.length; k++){
          if (newDefinitions[k]['definition'].length === 0){
            continue;
          }
          //meanings["definitions"][k + meanings["definitions"].length] = newDefinitions[k]['definition'];
          meanings["definitions"].push(newDefinitions[k]['definition'])
        }
        
      }
    }
    meanings["definitions"].filter(String)
    console.log(meanings);
    
    return meanings;
  }
}