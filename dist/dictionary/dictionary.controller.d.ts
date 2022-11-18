export declare class DictionaryController {
    getWordDefinitions(word: string, type: string): Promise<{
        definitions: any[];
    }>;
}
