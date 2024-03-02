import * as ts from "typescript";


export function compile(input: string): string | undefined {
    let transpiled = ts.transpile(input);
    let evaled: any = eval(transpiled);

    
    return
}


