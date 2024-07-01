"use client";

import NextImage from "next/image";
import { Stack, styled } from "@mui/material";
import logo from "@/assets/logo.png";

const Image = styled(NextImage)`
  aspect-ratio: 1 / 1;
  max-width: 100%;
  width: 500px;
`;

export const Logo = () => (
  <Stack direction="row" justifyContent="center">
    <Image src={logo} placeholder="empty" width={500} height={500} />
  </Stack>
);
