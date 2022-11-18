export declare class DictionaryService {
    private word;
    private type;
    constructor(word: string, type: string);
    getDefinitions(pos: any): Promise<{
        definitions: any[];
    }>;
}
