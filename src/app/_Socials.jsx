"use client";

import NextLink from "next/link";
import NextImage from "next/image";
import { Button, Stack, styled } from "@mui/material";

// Icons
import Instagram from "@/assets/instagram.svg";
import TikTok from "@/assets/tiktok.svg";

const socials = {
  "instagram.com": {
    icon: Instagram,
    name: "Instagram",
  },
  "tiktok.com": {
    icon: TikTok,
    name: "TikTok",
  },
};

const Styled = styled(Button)`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  width: 500px;
  max-width: 100%;
`;

const StyledIcon = styled(NextImage)`
  filter: invert(1);
  height: 32px;
  margin-right: 0.5rem;
  width: 32px;
`;

const Social = ({ children, ...props }) => {
  const { href } = props;
  const url = new URL(href);
  const { icon, name } = socials[url.hostname];
  return (
    <Styled
      component={NextLink}
      variant="contained"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <StyledIcon src={icon} alt={`${name} Logo`} />
      {children}
    </Styled>
  );
};

export const Socials = () => (
  <Stack direction="column" alignItems="center" spacing={3}>
    <Social href="https://tiktok.com/@pinsnpars">pinsnpars</Social>
    <Social href="https://instagram.com/pinsnpars">pinsnpars</Social>
  </Stack>
);
