import type { PageLoad } from "../../$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const data: Character = await response.json();
  return data;
}

interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Origin;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

interface Origin {
	name: string;
	url: string;
}