import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <div className='card1'>
    <div className='ca1'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Taj Falaknuma Palace
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Glamorous Mumbai is home to The Taj Mahal Palace, one of the best luxury hotels in India, whose opulence challenges that of Mumtaz's original. Having hosted ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div className='ca2'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.pinimg.com/474x/ef/c6/62/efc662ad7d783e588fcf5f8a2f28693f.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Taj Mahal Palace
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Glamorous Mumbai is home to The Taj Mahal Palace, one of the best luxury hotels in India, whose opulence challenges that of Mumtaz's original. Having hosted ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div className='ca3'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.pinimg.com/564x/b8/ed/ed/b8eded1d8c223b3a60ffbcc4e2c234a0.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Oberoi Hotels
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Oberoi Mumbai is a striking example of modern architecture that lifts you over Marine Drive to enjoy magnificent views of the Arabian Sea and the sparkling ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    
  );
}
