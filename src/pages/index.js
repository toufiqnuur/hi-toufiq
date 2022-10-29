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

      <div className="bg-amber-100 bg-pattern-b">
        <Container className="relative lg:h-screen py-32 lg:py-0 lg:pb-[40px] text-center flex justify-center items-center">
          <div className="lg:flex lg:space-x-12 lg:items-center">
            <div className="w-48 h-48 rounded-full bg-white/50 mx-auto overflow-hidden">
              <Image
                src="/profile.jpg"
                width={300}
                height={300}
                alt="Photo profile"
              />
            </div>
            <div className="lg:text-left">
              <h1 className="font-cursive text-5xl lg:text-7xl mt-12 lg:mt-0">
                Hi there!
              </h1>
              <p className="text-2xl mt-4 font-bold lg:text-4xl">
                I&#39;m Toufiq Nuur Rahman
              </p>
              <p className="lg:text-2xl">Software Developer</p>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container className="py-16">
          <h2 className="text-center font-cursive text-5xl lg:text-7xl">
            Activities
          </h2>
          <div className="md:flex justify-center md:space-x-24 mt-16">
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
                  <div className="w-6 h-6 rounded-full bg-amber-400 shadow-lg shadow-amber-500/50 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">2022</h2>
                  <p className="text-lg">
                    Partcipacing in JuaraAndroid Season 2
                  </p>
                </li>
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">2022</h2>
                  <p className="text-lg">Partcipacing in JuaraGCP Season 7</p>
                </li>
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">2021</h2>
                  <p className="text-lg">Partcipacing in Hacktoberfest</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gradient-to-br from-transparent via-transparent to-amber-200">
        <Container className="py-16">
          <h2 className="text-center font-cursive text-5xl lg:text-7xl">
            Skills
          </h2>
          <div className="md:flex justify-center md:space-x-24 mt-16">
            <div className="md:max-w-md">
              <ul className="space-y-8 pl-10">
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 shadow-lg shadow-amber-500/50 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">Javascript / Typescript</h2>
                  <p className="text-lg">
                    <Link href="/">
                      Graduate from Dicoding in Basic Javascript Programming
                    </Link>
                  </p>
                </li>
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">React / Next Js</h2>
                  <p className="text-lg">
                    Passed linkedin quiz, graduate from Dicoding in React
                    Fundamental
                  </p>
                </li>
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">Css</h2>
                  <p className="text-lg">Passed linkedin skill quiz</p>
                </li>
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">Node Js</h2>
                  <p className="text-lg">Passed linkedin skill quiz</p>
                </li>
                <li className="relative">
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute top-1 -left-10"></div>
                  <h2 className="text-xl font-bold">Git</h2>
                  <p className="text-lg">
                    Graduate from Dicoding in Basic Git with Github
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block md:w-1/4 px-8">
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
        <Container className="py-16">
          <h2 className="text-center font-cursive text-5xl lg:text-7xl">
            Feel free to hit me up!
          </h2>
          <p className="text-center mt-4">
            If you want to reach me out, feel free to contact me on:
          </p>
          <div className="flex gap-4 mx-auto justify-center mt-8">
            <button className="bg-amber-200 px-6 py-2 rounded-md">Email</button>
            <button className="bg-amber-200 px-6 py-2 rounded-md">
              Twitter
            </button>
            <button className="bg-amber-200 px-6 py-2 rounded-md">
              Discord
            </button>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
}
