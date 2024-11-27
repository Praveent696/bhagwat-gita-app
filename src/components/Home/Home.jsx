import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '10px' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Welcome to the Bhagavad Gita
        </Typography>
        <Typography variant="h5" component="div">
          The Bhagavad Gita is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a dialogue between Prince Arjuna and Lord Krishna, who serves as his charioteer, offering profound spiritual teachings.
        </Typography>
        <Typography variant="body2">
          <h2>About Bhagavad Gita</h2>
          <p>The Bhagavad Gita offers teachings on duty, righteousness, devotion, and the nature of the self. It serves as a spiritual guide for all, transcending the boundaries of culture and religion.</p>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Home