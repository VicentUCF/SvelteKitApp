<script lang="ts">
	export let name: string;
	export let image: string;
	export let url: string;
</script>

<div class="card">
	<header class="card__header">{name}</header>
	<div class="card__body">
		<div class="card__image">
			<img src={image} alt="rick" />
		</div>
		<div class="card__button">
			<button class="button button--link">
				<a href={url}>View</a>
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--primary-color);
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
		align-items: center;
		padding: 1rem;
		gap: 1rem;

		&__header {
			color: var(--secondary-color);
			font-size: 2rem;
			padding: 1rem;
		}

		&__body {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
		}

		&__image {
			img {
				width: 10rem;
				object-fit: cover;
			}
		}

		&__button {
			button {
				background-color: var(--secondary-color);
				color: var(--primary-color);
				border: none;
				border-radius: 0.5rem;
				padding: 0.5rem 1rem;
				font-size: 1.5rem;
				cursor: pointer;
			}

			a {
				text-decoration: none;
				color: var(--primary-color);
			}
		}
	}
</style>
