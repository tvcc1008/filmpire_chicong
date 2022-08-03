import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..'

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery()
  console.log(data)

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    )
  }

  if(!data.results.length){
    return(
      <Box display='flex' justifyContent='center' alignItems='center' mt='20px'>
        <Typography variant='h4'>
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    )
  }

  if(error) return 'An error has occured.'

  return (
    <MovieList movies={data}>

    </MovieList>
  )
}

export default Movies