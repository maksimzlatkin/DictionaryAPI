import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    getHello(): string;
    constructor(httpService: HttpService);
    getDataFromAPI(url: string): Promise<any>;
}
