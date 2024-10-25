import * as React from 'react';
import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

import FavoriteIcon from '@mui/icons-material/Favorite';

import {MyFavorite, MyFavoriteBorder, CarlosACM, MyButton} from 'milibreria'
import { Container } from '@mui/material';

const Testimonios = ({ titulo, imgurl, nombre, pais, profesion, empresa, descripcion, alt, linkGoogle, linkFacebook, linkGithub, linkYoutube}) => {
  const [liked, setLiked] = useState(false);
  const [width, setwidth] = useState(500);
  const [height, setheight] = useState(250);

  const handleLike = () => {
    setLiked (!liked);
  }
  const handleSize = () => {
    {width == 750? setwidth(500) & setheight(250) : setwidth(750) & setheight(600)}
  }
  return (

    <Card sx={{ width: {width} }}>
      <CardMedia
        sx={{ height: {height} }}
        image={imgurl}
        title={titulo}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre} en {pais}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {profesion} en {empresa}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripcion} {/*para poder hacer la descripción personalizada si queremos */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
      <CardActions>
        
        <IconButton onClick={handleLike}>
        {liked ? <MyFavorite color='red'></MyFavorite> : <MyFavoriteBorder></MyFavoriteBorder>}
        </IconButton>
        {width == 750? 
        <MyButton text='REDUCIR' onClick={handleSize}></MyButton> : 
        <MyButton text='AMPLIAR' onClick={handleSize}></MyButton>}
        <CarlosACM linkfacebook={linkFacebook} linkgithub={linkGithub} linkyoutube={linkYoutube} linkgoogle={linkGoogle}></CarlosACM>
      </CardActions>
    </Card>

  )
}

export default Testimonios
