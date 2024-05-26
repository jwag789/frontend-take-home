import React, {useState} from 'react';
import { Box, Paper, InputBase, IconButton, Icon, LinearProgress } from '@mui/material';
function SearchForm({onSearch}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set loading state to show loading bar
    setLoading(true);
    try {
        const response = await fetch(`https://api.npms.io/v2/search/suggestions?q=${searchQuery}`);
        const data = await response.json();
        // Display search results
        onSearch(data);
        setLoading(false);
    } catch (error) {
        console.error('Error searching:', error);
        setLoading(false);
    }
  }
  return (
    <Box>
      <Paper
      component="form"
      variant="outlined"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1 }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search NPM packages"
        inputProps={{ 'aria-label': 'search npm packages' }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <Icon>search</Icon>
      </IconButton>
    </Paper>
    {loading &&
      <LinearProgress />
    }
    </Box>
  );
}

export default SearchForm;
