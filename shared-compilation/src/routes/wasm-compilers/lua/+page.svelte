<script lang="ts">
    // Local Imports
    import {compile} from "$lib/compilers/wasm/lua/compilation.js"
    import SchemaEditorMonaco from "$lib/components/schema_editor_monaco.svelte";


    let code = '';
</script>


<SchemaEditorMonaco value={code} language='lua'/>
