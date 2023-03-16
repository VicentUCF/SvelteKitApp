<header class="header">
	<h1 class="header__title">Rick And Morty</h1>
	<div class="header__routes">
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/characters">Characters</a>
			</li>
			<li>
				<a href="/locations">Locations</a>
			</li>
			<li>
				<a href="/episodes">Episodes</a>
			</li>
		</ul>
	</div>
</header>

<div class="container">
	<slot />
</div>

<style lang="scss">

  .container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--primary-color);

		&__title {
			color: var(--secondary-color);
			font-size: 2rem;
			padding: 1rem;
		}

		&__routes {
			ul {
				display: flex;
				list-style: none;
				margin: 0;
				padding: 0;

				li {
					margin: 0 1rem;
					a {
						color: var(--secondary-color);
						text-decoration: none;
						font-size: 1.5rem;
					}
				}
			}
		}
	}
</style>
