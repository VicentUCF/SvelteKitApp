import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data;
};