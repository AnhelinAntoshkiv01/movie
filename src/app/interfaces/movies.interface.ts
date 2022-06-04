export interface IMovie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: string,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: string,
  vote_count: number
}


export interface IMovies {
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
