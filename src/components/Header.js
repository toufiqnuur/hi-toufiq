import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";

const navLinks = [
  {
    name: "Blog",
    path: "/posts",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Chats",
    path: "/chats",
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="border-b border-black bg-amber-200">
      <Container className="flex flex-col md:flex-row items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="font-cursive text-4xl mt-2 md:mt-0 pb-1">toufiq.</a>
        </Link>

        <nav className="mt-2 md:mt-0">
          <ul className="flex space-x-4">
            {navLinks.map((nav, id) => (
              <li key={id}>
                <Link href={nav.path} legacyBehavior>
                  <a className="flex flex-col pb-[5px] group">
                    <span className="pt-3 pb-[5px]">{nav.name}</span>
                    <span
                      className={` mx-auto h-[1.5px] rounded-full
                    ${
                      router.pathname === nav.path
                        ? "bg-black w-6"
                        : "group-hover:bg-black/50 group-hover:w-3"
                    }
                    `}
                    ></span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
