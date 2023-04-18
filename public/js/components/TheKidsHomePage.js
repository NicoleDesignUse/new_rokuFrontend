import MovieCard from './TheMovieCard.js';

export default {
    name: 'TheKidsHomePageComponent',

    data() {
      return {
          authenticated: false,
          adultsMovies: [],
          kidsMovies: {}
      }
  },

    template: `
    <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="heroKid">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">Roku</p>

            <h1 class="h1 hero-title">
              Let's Watch <strong>Dora The Explorer</strong>
            </h1>
            <button class="btn btn-primary"><a href="#">Watch Now</a></button>
         

          </div>

        </div>
      </section>



      <!-- 
        - #TOP RATED
      -->

      <section class="top-rated">
        <div class="container">

          <h2 class="h2 section-title">Top Rated Kids Movies - Watch With Family!</h2>


          <ul class="movies-list">

          <moviecard v-for="movie in adultsMovies" :movie="movie"></moviecard>

            
          </ul>

        </div>
      </section>



    </article>
  </main>



    `,

    created() {
      Promise.all([
          fetch('https://imdb-api.com/API/AdvancedSearch/k_3wtcxe73?release_date=2001-01-01,2023-01-01&certificates=us:G'),
          fetch('https://imdb-api.com/API/AdvancedSearch/k_3wtcxe73?title_type=feature&release_date=2001-01-01,2023-01-01&certificates=us:PG,us:PG-13')
        ])
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(data => {
            this.adultsMovies = data[0].results;
            console.log(this.adultsMovies);
          })
          .catch(error => {
            console.log(error); // handle any errors
          });
  },

    components: {
      moviecard: MovieCard
  }
}