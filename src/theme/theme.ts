import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E39300",
    },
    secondary: {
      main: "#1C1C1C",
      contrastText: "#E7E5E5",
    },
  },
});

export { theme };
