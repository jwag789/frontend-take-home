import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
function SearchResults({searchResults, searched}) {
    return (
        <Box>
            {searchResults.length > 0 && searchResults.map((searchResult) => (
                <Card sx={{ width: 1, mt: 2 }}>
                    <CardActionArea href={searchResult.package.links.npm} target="_blank">
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {searchResult.package.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {searchResult.package.description}
                        </Typography>
                        <Typography variant="body2">
                            by {searchResult.package.author && searchResult.package.author.name} : {searchResult.package.version}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            {(searchResults.length === 0 && searched) &&
                <Typography variant="h4" component="h4" sx={{mt: 4, textAlign: 'center'}}>
                    No packages found.
                </Typography>
            }
        </Box>
    )
}

export default SearchResults;