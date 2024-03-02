// Temporary Local Imports
//import {Module} from "$lib/compilers/wasm/lua/dist/luajs.js";

// External Imports
import {LuaJS} from "@doridian/luajs"


export function compile(input: string): string | undefined {
    LuaJS.newState().then(async (L: { run: (arg0: string) => any; }) => {
        const output = await L.run(input) 
        
        console.log(output);

        return output
    });

    return
}

