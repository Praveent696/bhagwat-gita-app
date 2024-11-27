import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchVerses } from  '../../features/verse/verseSlice';

function Chapter() {
  const [chapter, setChapter] = useState({});
  const [expendedAccordion, setExpendedAccordion] = useState('');
  const versesState = useSelector(state => state.verses);
  const chaptersState = useSelector(state => state.chapters);
  const params = useParams();
  const { ch } = params;
  const dispatch = useDispatch();
  
  useEffect(() => {
    let chapterObj = chaptersState?.chapters?.find(x => x.chapter_number === Number(ch));
    setChapter(chapterObj);
    ch && dispatch(fetchVerses(ch));
  }, [ch, dispatch]);

  const handleAccordionClick = (key) => {
    if (expendedAccordion !== key || expendedAccordion === '' ) {
      setExpendedAccordion(key);
    } else {
      setExpendedAccordion('');
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }} position="sticky">
        <Typography variant="h4" gutterBottom>
            Chapter {chapter?.chapter_number}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {chapter?.name} ({chapter?.transliteration})
        </Typography>
        <Typography variant="subtitle1">
          {chapter?.summary?.en}
        </Typography>
      </Box>
      {versesState?.verses?.map((verse) => (
        <Accordion key={`Verse_${verse.verse}`} sx={{ mb: 2 }} expanded={expendedAccordion === `Verse_${verse.verse}`} onClick={() => handleAccordionClick(`Verse_${verse.verse}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Chapter {verse.chapter} Verse {verse.verse}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{verse.slok}</Typography>
            <br />
            <Divider />
            <br />
            <Typography>{verse.transliteration}</Typography>
            <br />
            <Divider />
            <br />
            <Typography>{verse?.chinmay?.hc} Author: {verse?.chinmay?.author}</Typography>
            <br />
            <Typography>{verse?.san?.et} Author: {verse?.san?.author}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  )
}

export default Chapter