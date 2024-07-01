import { Container } from "@mui/material";
import { Logo } from "./_Logo";
import { Socials } from "./_Socials";
import { Footer } from "@/components/Footer";

const Page = () => (
  <Container
    sx={{
      alignItems: "center",
      display: "flex",
      flexFlow: "column nowrap",
      height: "100%",
    }}
  >
    <Logo />
    <Socials />
    <Footer />
  </Container>
);

export default Page;
