
export class SchemaCompiler {
    public readonly endpoint: string
    
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    public compile(schema: string): string | null {
        return ""
    }
}

