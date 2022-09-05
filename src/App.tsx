import React, { useEffect } from 'react';
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from './store/reducers/movies/actions';
import { RootState } from "./store";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './App.css';
import { URLs } from './store/urls';

function App() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getMoviesRequest(1));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={2} style={{marginTop:20}}>
          {movies.map((el : any) =>
            <Grid item xs={6} md={3}>
              <>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    title={el.title}
                    subheader={el.release_date}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={URLs.IMAGE_URL + el.backdrop_path}
                    alt="Movie"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {el.overview}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            </Grid>
          )}
        </Grid>
      </header>
    </div>
  );
}

export default App;
