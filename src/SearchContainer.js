import React, {useState} from 'react';
import SearchForm from './SearchForm';
import { Paper, Typography, Button, Box } from '@mui/material';
import SearchResults from './SearchResults';
import { blueGrey, deepOrange } from '@mui/material/colors';

function SearchContainer() {
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [secondaryTheme, setSecondaryTheme] = useState(false);

  const handleOnSearch = (results) => {
    setSearchResults(results);
    // Determine if a search took place to show error message
    setSearched(true);
  }

  return (
    <Paper sx={{p: 4, m: 4, backgroundColor: secondaryTheme ? deepOrange[100] : blueGrey[100], minHeight: 500, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <Box>
        <Typography variant="h2" component="h1" sx={{textAlign: 'center', mb: 2}} xs={{fontSize: 20}}>NPM Package Search</Typography>
        <SearchForm onSearch={handleOnSearch} />
        <SearchResults searchResults={searchResults} searched={searched} />
      </Box>
      <Button variant="outlined" sx={{mt: 2}} onClick={() => setSecondaryTheme(!secondaryTheme)}>Change theme</Button>
    </Paper>
  );
}

export default SearchContainer;
