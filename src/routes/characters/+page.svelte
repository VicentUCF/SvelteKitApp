<script lang="ts">
	import Card from '$lib/components/card.svelte';

	export let data;
	export let search = '';
	let filteredData = data.results;

	function filterData(event: Event) {
		const value = event?.target?.value.toLowerCase();
		filteredData = data.results.filter((character) => character.name.toLowerCase().includes(value));
	} 
</script>

<div class="charactes__container">
	<header>Characters</header>

	<div class="search">
		<input type="text" on:input={filterData} placeholder="Search" bind:value={search} />
	</div>

	<div class="character">
		{#if !filteredData.length}
			<div class="no-results">
				<h2>No results found</h2>
			</div>
		{/if}

		{#each data.results as character}
			{#if filteredData.includes(character)}
				<Card name={character.name} image={character.image} url={`/characters/${character.id}`} />
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	header {
		font-size: 2rem;
		padding: 1rem;
	}

	.search {
		display: flex;
		justify-content: flex-end;
		padding: 1rem;
		input {
			padding: 0.5rem;
			border-radius: 0.5rem;
			outline: none;
			border: 1px solid var(--primary-color);
		}
	}

	.character {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
</style>
