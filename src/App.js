import './App.css';
import { Routes, Route } from 'react-router'
import { reset as resetChapters, addOrRemoveFavorite as addOrRemoveFavoriteChapter, fetchChapters } from '../src/features/chapter/chapterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ResponsiveAppBar from './common/ResponsiveAppBar';
import Home from './components/Home/Home';
import Chapters from './components/Chapters/Chapters';
import Verse from './components/Verse/Verse';
import Chapter from './components/Chapters/Chapter';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const chapters = useSelector(state => state.chapters);
  const verse = useSelector(state => state.verse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChapters());
  }, []);

  console.log(`chapters`, chapters);
  console.log(`verse`, verse);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <ResponsiveAppBar />
        <Container maxWidth="xl" style={{ padding: '10px' }}>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="chapters" element={<Chapters />} />
            <Route exact path="chapters/:ch" element={<Chapter />} />
            <Route exact path="chapters/:ch/verse/:sl" element={<Verse />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
