<script>
	import Card from '$lib/components/card.svelte';
</script>

<div class="home__body">
	<Card
		name="Characters"
		image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
		url="/characters"
	/>

	<Card
		name="Locations"
		image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
		url="/locations"
	/>

	<Card
		name="Episodes"
		image="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
		url="/episodes"
	/>
</div>

<style lang="scss">
	.home__body {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		width: 100%;
	}
</style>
