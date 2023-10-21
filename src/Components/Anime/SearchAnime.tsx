import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Button } from '@mui/material';

export const SearchAnime = ({ onSearch }: { onSearch: (searchParams: { status: string, rating: string, type: string }) => void }) => {
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('');

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleChangeRating = (event: SelectChangeEvent) => {
    setRating(event.target.value as string);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleSearch = () => {
    console.log(status, rating, type);
    onSearch({ status, rating, type });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado Emision</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Estado Emision"
            onChange={handleChangeStatus}
          >
            <MenuItem value={"airing"}>Airing</MenuItem>
            <MenuItem value={"complete"}>Complete</MenuItem>
            <MenuItem value={"upcoming"}>Upcoming</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rating}
            label="Rating"
            onChange={handleChangeRating}
          >
            <MenuItem value={"G"}>All Ages</MenuItem>
            <MenuItem value={"PG"}>Children</MenuItem>
            <MenuItem value={"PG-13"}>Teens 13 or older</MenuItem>
            <MenuItem value={"R"}>17+ (violence & profanity)</MenuItem>
            <MenuItem value={"R+"}>Teens 13 or older</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Tipo"
            onChange={handleChangeType}
          >
            <MenuItem value={"tv"}>TV</MenuItem>
            <MenuItem value={"movie"}>Movie</MenuItem>
            <MenuItem value={"ova"}>Ova</MenuItem>
            <MenuItem value={"special"}>Special</MenuItem>
            <MenuItem value={"ona"}>Ona</MenuItem>
            <MenuItem value={"music"}>Music</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={handleSearch}>Buscar</Button>
    </div>
  );
};
