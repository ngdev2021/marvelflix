import { MoviesModel } from "../movies.model";
import { MovieDAO, MoviesDto } from "./movies.dto.model";

export class MoviesDtoModelAdaptor {
    public static moviesDtoToMoviesModel(
        moviesDto: MovieDAO
    ): MoviesModel[] {
        return moviesDto.data.map((movies) => {
            return {
    id: movies.id,
    title: movies.title,
    release_date: movies.release_date,
    box_office: movies.box_office,
    duration: movies.duration,
    overview: movies.overview,
    cover_url: movies.cover_url,
    trailer_url: movies.trailer_url,
    directed_by: movies.directed_by,
    phase: movies.phase,
    saga: movies.saga,
    chronology: movies.chronology,
    post_credit_scenes: movies.post_credit_scenes,
    imdb_id: movies.imdb_id,


            } as MoviesModel;
            
        });  
            
        }
    }
