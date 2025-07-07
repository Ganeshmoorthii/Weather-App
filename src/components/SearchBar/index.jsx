import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.15)", // Light black background
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Slightly darker on hover
  },
  margin: "auto",
  width: "100%",
  maxWidth: 400,
  transition: "background-color 0.3s ease",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff", // White text
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query.trim().toLowerCase());
    }
  };

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#fff" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          inputProps={{ "aria-label": "search", type: "text" }}
        />
      </Search>
    </Box>
  );
}
