import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-amber-50">
      <Container className="container px-4 mx-auto py-8 text-center">
        <p>Made with Next.js deployed at vercel.</p>
      </Container>
    </footer>
  );
}
