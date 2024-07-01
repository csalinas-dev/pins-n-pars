"use client";

import { styled } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Main = styled("main")`
  display: block;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100vw;
`;

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
    <Main>{children}</Main>
  </ThemeProvider>
);
