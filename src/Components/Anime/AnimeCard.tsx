import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { SearchAnime } from "./SearchAnime";
import { AnimeList, IAnime } from "../../Constant/AnimeList";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { AnimeDetail } from "./AnimeDetail";
import { AnimeTrailer } from "./AnimeTrailer";
import { useState, useEffect } from "react";
import { StadisticAnimeById } from "./StadisticAnimeById";

export const AnimeCard = () => {
  const [animeList, setAnimeList] = useState<IAnime>();

  const GetAnime = async (searchParams: {
    status: string;
    rating: string;
    type: string;
  }) => {
    const { status, rating, type } = searchParams;
    console.log("=====> ", status, rating, type);

    let apiUrl: string = "https://api.jikan.moe/v4/anime?sort=asc";
    if (status !== "") apiUrl += "&status=" + status;
    if (rating !== "") apiUrl += "&rating=" + rating;
    if (type !== "") apiUrl += "&type=" + type;

    const temp = await fetch(apiUrl).then((res) => res.json());

    console.log(temp);
    setAnimeList(temp);
  };

  useEffect(() => {
    GetAnime({ status: "", rating: "", type: "" });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <h1>JKANIME</h1>
      </div>
      <h1>JKANIME</h1>
      <SearchAnime onSearch={GetAnime} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {animeList && animeList.data
            ? animeList.data.map((element) => (
                <Grid xs={2} sm={4} md={4} key={element.mal_id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={element.images.jpg.image_url}
                      title={element.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {element.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Duration: {element.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rating: {element.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Score: {element.score}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Season: {element.season}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <AnimeDetail sypnosis={element.synopsis} />
                      <AnimeTrailer url={element.trailer.url} />
                      <StadisticAnimeById id={element.mal_id} />
                    </CardActions>
                  </Card>
                </Grid>
              ))
            : null}
        </Grid>
      </Box>
    </div>
  );
};
