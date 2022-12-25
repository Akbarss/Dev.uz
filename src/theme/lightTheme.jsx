import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#3b49df",
    },
    secondary: {
      main: "#3b49df",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default lightTheme;
