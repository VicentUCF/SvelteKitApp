<script lang="ts">
	// let character =
	export let data;
</script>

<!-- <pre>
  {JSON.stringify($page, null, 2)}
</pre> -->

<div class="character__container">
	<div class="goBack">
		<a href="/characters" class="btn btn--primary">Go back</a>
	</div>

	<div class="character">
		<h1>{data.name} [{data.id}]</h1>
		<div class="character__image">
			<img src={data.image} alt="" />
		</div>
		<div>
			{#if data.status === 'Alive'}
				<span class="status alive">{data.status}</span>
			{:else if data.status === 'Dead'}
				<span class="status dead">{data.status}</span>
			{:else}
				<span class="status unknown">{data.status}</span>
			{/if}
		</div>

		<div class="specie">
			<span>Specie:</span>
			<span>{data.species}</span>
		</div>

		<div class="type">
			<span>Type:</span>
			<span>{data.type}</span>
		</div>

		<div class="gender--{data.gender}">
			<span>Gender:</span>
			<span>{data.gender}</span>
		</div>

		<div class="character__episodes">
			<span>Episodes:</span>
			{#each data.episode as episode}
				<a href={episode}>{episode}</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.goBack {
		display: flex;
		justify-content: flex-start;
	}

	.btn {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: none;
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.btn--primary {
		background-color: var(--primary-color);
		color: var(--secondary-color);
    a{
      color: var(--secondary-color);
    }
	}

	.btn--primary:hover {
		background-color: var(--secondary-color);
		color: var(--primary-color);
	}

	.character__container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		width: 100%;
	}

	.character {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		&__episodes {
			gap: 0.2rem;
			display: flex;
			flex-direction: column;
		}
	}

	.status {
		padding: 0.5rem;
		border-radius: 0.5rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	.status.alive {
		background-color: green;
		color: white;
	}

	.status.dead {
		background-color: red;
		color: white;
	}

	.status.unknown {
		background-color: gray;
		color: white;
	}
</style>
