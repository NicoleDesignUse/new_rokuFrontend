import MovieCard from "./AdultsMovieCard.js"
import SmallCard from "./SmallCard.js"
export default {
    name: 'TheHomePageComponent',

    data() {
      return {
        authenticated: false,
        adultsMovies: [],
        newMovies: [],
        tvSeries: [],
        kidsMovies: {},
        moviesFiltered: [],
        selectedYear: "all years",
        selectedGenre: "all genres",
      }
    },

    components: {
      moviecard: MovieCard,
      smallcard: SmallCard
    },
  
    watch: {
      selectedYear(newYear) {
        this.fetchFilteredMovies(newYear, this.selectedGenre);
      },
      selectedGenre(newGenre) {
        this.fetchFilteredMovies(this.selectedYear, newGenre);
      },
    },
  
    methods: {
      fetchFilteredMovies(yearRange, genre) {
        let url = 'https://imdb-api.com/API/AdvancedSearch/k_3wtcxe73?certificates=us:PG,us:PG-13';
        if (yearRange !== "all years") {
          const [startYear, endYear] = yearRange.split('-');
          const startDate = `${startYear}-01-01`;
          const endDate = `${endYear}-12-31`;
          url += `&release_date=${startDate},${endDate}`;
        }
  
        if (genre !== "all genres") {
          url += `&genres=${genre}`;
        }
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.moviesFiltered = data.results.slice(0, 21);
            console.log(this.moviesFiltered);
          })
          .catch(error => {
            console.log(error); // handle any errors
          });
      },
    },
  

    template: `
    <main>
    <article>

    <!-- 
    - #HERO
  -->

  <section class="hero">
    <div class="container">

      <div class="hero-content">

        <p class="hero-subtitle">Roku</p>

        <h1 class="h1 hero-title">
          Unlimited <strong>Movie</strong>, TVs Shows, & More.
        </h1>

        <div class="meta-wrapper">

          <div class="badge-wrapper">
            <div class="badge badge-fill">PG 18</div>

            <div class="badge badge-outline">HD</div>
          </div>

          <div class="ganre-wrapper">
            <a href="#">Romance,</a>

            <a href="#">Drama</a>
          </div>

          <div class="date-time">

            <div>
              <ion-icon name="calendar-outline"></ion-icon>

              <time datetime="2022">2022</time>
            </div>

            <div>
              <ion-icon name="time-outline"></ion-icon>

              <time datetime="PT128M">128 min</time>
            </div>

          </div>

        </div>


      </div>

    </div>
  </section>


  <section class="upcoming">
    <div class="container">

      <div class="flex-wrapper">

        <div class="title-wrapper">
          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Newly Released</h2>
        </div>

      </div>

      <ul class="movies-list  has-scrollbar">

      <moviecard v-for="movie in newMovies" :movie="movie"></moviecard>
      </ul>
    </div>
  </section>




  <!-- 
    - #TOP RATED
  -->

  <section class="top-rated">
    <div class="container">

      <p class="section-subtitle">Online Streaming</p>

      <h2 class="h2 section-title">Top Rated Movies</h2>


      <ul class="movies-list">

      <moviecard v-for="movie in adultsMovies" :movie="movie"></moviecard>
      </ul>

    </div>
  </section>



  <section class="tv-series">
    <div class="container">

      <p class="section-subtitle">Best TV Series</p>

      <h2 class="h2 section-title">World Best TV Series</h2>

      <ul class="movies-list">
      <moviecard v-for="movie in tvSeries" :movie="movie"></moviecard>
      </ul>

    </div>
  </section>

  
      <!--
        - #MOVIES SECTION
      -->
      <section class="movies container">

        <div class="filter-bar">

          <div class="filter-dropdowns">

            <select name="genre" class="genre" v-model="selectedGenre">
              <option value="all genres">All genres</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="biography">Biography</option>
            </select>

            <select name="year" class="year" v-model="selectedYear">
              <option value="all years">All the years</option>
              <option value="2022">2022-2023</option>
              <option value="2020-2021">2020-2021</option>
              <option value="2010-2019">2010-2019</option>
              <option value="2000-2009">2000-2009</option>
              <option value="1980-1999">1980-1999</option>
            </select>

          </div>

          <!--<div class="filter-radios">

            <input type="radio" name="grade" id="featured" checked>
            <label for="featured">Featured</label>

            <input type="radio" name="grade" id="popular">
            <label for="popular">Popular</label>

            <input type="radio" name="grade" id="newest">
            <label for="newest">Newest</label>

            <div class="checked-radio-bg"></div>

          </div>-->

        </div>


        <div class="movies-grid">
        <smallcard v-for="movie in moviesFiltered" :movie="movie"></smallcard>


        </div>


      </section>


    </article>
  </main>
    `,

    created() {
      Promise.all([
          fetch('https://imdb-api.com/API/AdvancedSearch/k_3wtcxe73?release_date=2023-01-01,2023-04-15&certificates=us:PG,us:PG-13'),
          fetch('https://imdb-api.com/API/AdvancedSearch/k_3wtcxe73?release_date=2001-01-01,2023-01-01&certificates=us:PG,us:PG-13'),
          fetch('https://imdb-api.com/API/AdvancedSearch/k_3wtcxe73?title_type=tv_series&release_date=2022-01-01,2023-01-01'),
        ])
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(data => {
            this.adultsMovies = data[1].results.slice(0, 20);
            console.log(this.adultsMovies);
            this.newMovies = data[0].results.slice(0, 4);
            this.tvSeries = data[2].results.slice(0, 4);
          })
          .catch(error => {
            console.log(error); // handle any errors
          });
  }


    
  

}