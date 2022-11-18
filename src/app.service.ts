import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(private readonly httpService : HttpService){}

  async getDataFromAPI(url : string){
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe()
    )
    console.log(data);
    return data;
  }
}
