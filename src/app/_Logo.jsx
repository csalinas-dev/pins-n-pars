"use client";

import Image from "next/image";
import { Box as MuiBox, Stack, styled } from "@mui/material";
import logo from "@/assets/logo.png";

const Box = styled(MuiBox)`
  aspect-ratio: 1 / 1;
  max-width: 100%;
  width: 500px;
  position: relative;
`;

export const Logo = () => (
  <Stack direction="row" justifyContent="center">
    <Box>
      <Image src={logo} placeholder="empty" fill />
    </Box>
  </Stack>
);
