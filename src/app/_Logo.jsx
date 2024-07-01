"use client";

import Image from "next/image";
import { Box as MuiBox, styled } from "@mui/material";
import logo from "@/assets/logo.png";

const Box = styled(MuiBox)`
  aspect-ratio: 1 / 1;
  max-width: 100%;
  position: relative;
  width: 500px;
`;

export const Logo = () => (
  <Box>
    <Image src={logo} alt="Pins n Pars Logo" fill />
  </Box>
);
