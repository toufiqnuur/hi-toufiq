import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-amber-50">
      <Container className="container mx-auto px-4 py-8 text-center">
        <p>Made with Next.js deployed at vercel.</p>
      </Container>
    </footer>
  );
}
