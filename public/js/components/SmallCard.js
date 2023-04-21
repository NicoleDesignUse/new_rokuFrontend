export default {
    name: "TheMovieCard",

    props: {
        movie: Object
    },

    template: `
    <div class="movie-card">

    <router-link :to="{ name: 'adultsMovieDetail', params: { movie: JSON.stringify(movie) } }">
      <figure class="card-banner">
        <img :src="movie.image" alt="Money Heist movie poster">
      </figure>
    </router-link>

    <div class="title-wrapper">
    <router-link :to="{ name: 'adultsMovieDetail', params: { movie: JSON.stringify(movie) } }">
        <h3 class="card-title">{{movie.title}}</h3>
        </router-link>

      <time datetime="2017">{{movie.description}}</time>
    </div>

    <div class="card-meta">
      <div class="badge badge-outline">4K</div>

      <div class="duration">
        <ion-icon name="time-outline"></ion-icon>

        <time datetime="PT70M">{{movie.runtimeStr}}</time>
      </div>

      <div class="rating">
        <ion-icon name="star"></ion-icon>

        <data>{{movie.imDbRating}}</data>
      </div>
    </div>

  </div>

    `
}