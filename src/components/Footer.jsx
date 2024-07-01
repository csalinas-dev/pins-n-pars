"use client";

import {
  Container,
  Stack as MuiStack,
  Typography as Type,
  styled,
} from "@mui/material";

const SFooter = styled(MuiStack)`
  padding: 1rem;
`;

export const Footer = () => (
  <SFooter sx={{ textAlign: "center" }}>
    <Type variant="caption">&copy; 2024 Pins n Pars, All Rights Reserved.</Type>
  </SFooter>
);
