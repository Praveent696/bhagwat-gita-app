import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Divider, Paper } from '@mui/material';
import { useNavigate } from 'react-router';

const trimText = (text, length) => {
  if (text.length === length || text.length < length) 
  {
    return text;
  }
  return text.substring(0, length) + '...';
}
function Chapters() {
  const chaptersState = useSelector(state => state.chapters);
  console.log("🚀 ~ Chapters ~ chaptersState:", chaptersState);
  const navigate = useNavigate();

  const handleChapterClick = (ch) => {
    navigate(`/chapters/${ch}`)
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'10px'  }}>
        {chaptersState.chapters.toSorted((x,y) => x.chapter_number - y.chapter_number).map(chapter => {
        return (
          <Paper elevation={3} sx={{ minWidth: 275, maxWidth: 400, maxHeight: 400, height: 400, marginBottom: '10px' }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Chapter #{chapter.chapter_number}
              </Typography>
              <Typography variant="h5" component="div">
                {chapter.name} ({chapter.transliteration})
              </Typography>
              <Typography variant="body2" title={chapter.summary.hi}>
                {trimText(chapter.summary.hi, 180)}
              </Typography>
              <br />
              <Divider />
              <br />
              <Typography variant="body2" title={chapter.summary.en}>
                {trimText(chapter.summary.en, 180)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" focusRipple={true} onClick={() => handleChapterClick(chapter.chapter_number)}>Explore {chapter.verses_count} sloks</Button>
            </CardActions>
          </Paper>
        );
      })}
    </div>
  );
};

export default Chapters