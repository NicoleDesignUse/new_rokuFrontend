export default {
    name: "TheMovieCard",

    props: {
        movie: Object
    },

    template: `
    <li>
    <div class="movie-card">

    <router-link :to="{ name: 'movieDetail', params: { movie: JSON.stringify(movie) } }">

        <figure class="card-banner">
          <img :src="movie.image" alt="Sonic the Hedgehog 2 movie poster">
        </figure>
    </router-link>

      <div class="title-wrapper">
        <a href="./movie-details.html">
          <h3 class="card-title">{{movie.title}}</h3>
        </a>

        <time datetime="2022">{{movie.description}}</time>
      </div>

      <div class="card-meta">
        <div class="badge badge-outline">2K</div>

        <div class="duration">
          <ion-icon name="time-outline"></ion-icon>

          <time datetime="PT122M">{{movie.runtimeStr}}</time>
        </div>

        <div class="rating">
          <ion-icon name="star"></ion-icon>

          <data>{{movie.imDbRating}}</data>
        </div>
      </div>

    </div>
  </li>

    `
}