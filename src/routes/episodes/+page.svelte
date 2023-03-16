<script lang="ts">
	export let data;
</script>

<!-- <pre>
  {JSON.stringify(data, null, 2)}
</pre> -->

<div>
	EPISODES

	<table>
		<thead>
			<tr>
				<th>Episode</th>
				<th>Name</th>
				<th>Air Date</th>
			</tr>
		</thead>
		<tbody>
			{#each data.results as episode}
				<tr>
					<td>{episode.episode}</td>
					<td>{episode.name}</td>
					<td>{episode.air_date}</td>
          <td><a href={episode.url}>Details</a></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
