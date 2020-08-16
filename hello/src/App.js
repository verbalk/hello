import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Pane, Button, Heading, Text, Select } from 'evergreen-ui';
import { MovieItem } from './MovieItem';
import Axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    Axios
      .get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
     
  });

  const [genres] = useState(['장르별', '스릴러', '공포', '드라마', '코미디']);
  const [selectedGenres, setSelectedGenres] = useState('장르별');
  





  return (
    <Pane clearfix>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>영화 추천 리스트</Heading>
        </Pane>
        <Pane>
     
          <Select
            value={selectedGenres}
            onChange={(event) => setSelectedGenres(event.target.value)}
          >
            {genres.map((genreItem) => (
              <option key={genreItem} value={genreItem}>
                {genreItem}
              </option>
            ))}
          </Select>
        
        </Pane>
      </Pane>
      {movies.map((movieItem) => {
        return <MovieItem title="ds" contents="awef" src="awjefio" />;
      })}

      <MovieItem title="다만악에서구하소서" contents="공포" src="hello.png" />
      <MovieItem title="다만악에서구하소서" contents="공포" src="hello.png" />
      <MovieItem title="다만악에서구하소서" contents="공포" src="hello.png" />
    </Pane>
  );
}

export default App;