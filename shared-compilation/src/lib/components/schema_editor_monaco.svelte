<script lang="ts">
	import Monaco, { themeNames } from 'svelte-monaco';

	export let value: string;
	export let language: string;
	export let readOnly: boolean = false;
	export let theme: string = 'vs-dark';	
	
	function selectTheme(themeSelection: string) {
		return () => {
			theme = themeSelection;
			window.scrollTo(0, 0);
		};
	}
</script>


<div id="editor" class="editor">
	<Monaco
		options={{
			language,
			automaticLayout: true,
			readOnly
		}}
		{theme}
		bind:value
		on:ready={(editor) => {
			editor.detail.addAction({
				// An unique identifier of the contributed action.
				id: 'my-unique-id',
				// A label of the action that will be presented to the user.
				label: 'Custom Action',
				contextMenuGroupId: 'navigation',
				contextMenuOrder: 1.5,
				// Method that will be executed when the action is triggered.
				// @param editor The editor instance is passed in as a convenience
				run: function (ed) {
					alert("i'm running => " + ed.getPosition());
				}
			});
		}}
	/>
</div>


<style>
	.editor {
		display: flex;
		flex-direction: row;

		height: 100%;
		height: 60vh;

		width: 50%;
		width: 100%;

		margin-right: 2rem;
		justify-content: space-between;

		border: 1px solid black;
		text-align: left;
	}
</style>
