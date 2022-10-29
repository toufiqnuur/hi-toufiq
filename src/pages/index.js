import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/DefaultLayout";
import Container from "../components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Toufiq's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative overflow-hidden">
        <Container className="flex items-center justify-center py-32 text-center lg:h-screen lg:py-0 lg:pb-[40px]">
          <Image
            className="absolute -left-72 top-0 -z-10 md:-left-48"
            src="/blob.png"
            width={400}
            height={400}
            alt=""
          />
          <Image
            className="absolute -right-64 -bottom-48 -z-10 md:-bottom-24 md:-right-48"
            src="/blob-2.png"
            width={400}
            height={400}
            alt=""
          />

          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="">
              <h1 className="mt-12 font-cursive text-5xl text-amber-500 lg:mt-0 lg:text-8xl">
                Hi there!
              </h1>
              <p className="mt-4 text-2xl font-bold lg:mt-8 lg:text-4xl">
                Iam Toufiq Nuur Rahman
              </p>
              <p className="mt-1 lg:text-2xl">Software Developer</p>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container className="py-24">
          <h2 className="text-center font-cursive text-5xl lg:text-7xl">
            Activities
          </h2>
          <div className="mt-16 justify-center md:flex md:space-x-24">
            <div className="hidden md:block md:w-1/4">
              <Image
                src="/activity.svg"
                width={500}
                height={500}
                alt="Activity ilustrations"
              />
            </div>
            <div>
              <ul className="space-y-8 pl-10">
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400 shadow-lg shadow-amber-500/50"></div>
                  <h2 className="text-xl font-bold">2022</h2>
                  <p className="text-lg">
                    Partcipacing in JuaraAndroid Season 2
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400"></div>
                  <h2 className="text-xl font-bold">2022</h2>
                  <p className="text-lg">Partcipacing in JuaraGCP Season 7</p>
                </li>
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400"></div>
                  <h2 className="text-xl font-bold">2021</h2>
                  <p className="text-lg">Partcipacing in Hacktoberfest</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gradient-to-br from-transparent via-transparent to-amber-200">
        <Container className="py-24">
          <h2 className="text-center font-cursive text-5xl lg:text-7xl">
            Skills
          </h2>
          <div className="mt-16 justify-center md:flex md:space-x-24">
            <div className="md:max-w-md">
              <ul className="space-y-8 pl-10">
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400 shadow-lg shadow-amber-500/50"></div>
                  <h2 className="text-xl font-bold">Javascript / Typescript</h2>
                  <p className="text-lg">
                    <Link href="/">
                      Graduate from Dicoding in Basic Javascript Programming
                    </Link>
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400"></div>
                  <h2 className="text-xl font-bold">React / Next Js</h2>
                  <p className="text-lg">
                    Passed linkedin quiz, graduate from Dicoding in React
                    Fundamental
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400"></div>
                  <h2 className="text-xl font-bold">Css</h2>
                  <p className="text-lg">Passed linkedin skill quiz</p>
                </li>
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400"></div>
                  <h2 className="text-xl font-bold">Node Js</h2>
                  <p className="text-lg">Passed linkedin skill quiz</p>
                </li>
                <li className="relative">
                  <div className="absolute top-1 -left-10 h-6 w-6 rounded-full bg-amber-400"></div>
                  <h2 className="text-xl font-bold">Git</h2>
                  <p className="text-lg">
                    Graduate from Dicoding in Basic Git with Github
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden px-8 md:block md:w-1/4">
              <Image
                src="/skill.svg"
                width={500}
                height={500}
                alt="Activity ilustrations"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gradient-to-tr from-transparent via-transparent to-amber-200">
        <Container className="py-24">
          <h2 className="text-center font-cursive text-5xl lg:text-7xl">
            Feel free to hit me up!
          </h2>
          <p className="mt-4 text-center">
            If you want to reach me out, feel free to contact me on:
          </p>
          <div className="mx-auto mt-8 flex justify-center gap-4">
            <button className="rounded-md bg-amber-200 px-6 py-2">Email</button>
            <button className="rounded-md bg-amber-200 px-6 py-2">
              Twitter
            </button>
            <button className="rounded-md bg-amber-200 px-6 py-2">
              Discord
            </button>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
}
