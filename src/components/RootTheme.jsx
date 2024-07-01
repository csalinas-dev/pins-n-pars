"use client";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme();

theme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      ...theme.palette.augmentColor({
        color: { main: "#A90000" },
        name: "primary",
      }),
    },
  },
});

theme = responsiveFontSizes(theme);

export const RootTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <main>{children}</main>
  </ThemeProvider>
);
