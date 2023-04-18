// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGeeksforgeeks } from "react-icons/si";
import Image from "next/legacy/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Prachur Gupta Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-gray-300">
            <h1 className="text-2xl font-burtons">
              developedbyPG
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1ShQcCYvm5hA-p6plya4-Yc6EYz-oTuv5/view?usp=share_link"
                  target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Prachur Gupta
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              Lorem Ipsum is simply dummy text of
              the printing and typesetting
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever
              since the 1500s, when an unknown
              printer took a galley of type and
              scrambled it to make a type specimen
              book. It has survived not only five
              centuries, but also the leap into
              electronic typesetting, remaining
              essentially unchanged. It was
              popularised in the 1960s with the
              release of Letraset sheets
              containing Lorem Ipsum passages, and
              more recently with desktop
              publishing software like Aldus
              PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/PrachurGupta"
              target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prachur-gupta-917b321ba/"
              target="_blank">
              <AiFillLinkedin />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/prachur12/"
              target="_blank">
              <SiGeeksforgeeks />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={deved}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of
              the printing and typesetting
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever
              since the 1500s, when an unknown
              printer took a galley of type and
              scrambled it to make a type specimen
              book. It has survived not only five
              centuries, but also the leap into
              <span className="text-teal-500">
                electronic typesetting
              </span>
              , remaining essentially unchanged.
              It was popularised in the 1960s with
              the release of Letraset sheets
              containing Lorem Ipsum passages, and
              more recently with desktop
              publishing software like Aldus
              PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of
              the printing and typesetting
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever
              since the 1500s, when an unknown
              printer took a galley of type and
              scrambled it to make a type specimen
              book. It has survived not only five
              centuries, but also the leap into.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center p-10 my-10 shadow-lg rounded-xl dark:bg-gray-300">
              <Image
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem Ipsum is simply dummy text
                of the printing and typesetting
                industry. Lorem Ipsum is simply
                dummy text of the printing and
                typesetting industry.
              </p>
              <h4 className="py-4 text-teal-600">
                Design Tools I use
              </h4>
              <p
                className="text-gra80
               py-1">
                Photoshop
              </p>
              <p
                className="text-gra80
               py-1">
                Illustrator
              </p>
              <p
                className="text-gra80
               py-1">
                Figma
              </p>
            </div>
            <div className="text-center p-10 my-10 shadow-lg rounded-xl dark:bg-gray-300">
              <Image
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem Ipsum is simply dummy text
                of the printing and typesetting
                industry. Lorem Ipsum is simply
                dummy text of the printing and
                typesetting industry.
              </p>
              <h4 className="py-4 text-teal-600">
                Design Tools I use
              </h4>
              <p
                className="text-gra80
               py-1">
                Photoshop
              </p>
              <p
                className="text-gra80
               py-1">
                Illustrator
              </p>
              <p
                className="text-gra80
               py-1">
                Figma
              </p>
            </div>
            <div className="text-center p-10 my-10 shadow-lg rounded-xl dark:bg-gray-300">
              <Image
                src={code}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem Ipsum is simply dummy text
                of the printing and typesetting
                industry. Lorem Ipsum is simply
                dummy text of the printing and
                typesetting industry.
              </p>
              <h4 className="py-4 text-teal-600">
                Design Tools I use
              </h4>
              <p
                className="text-gra80
               py-1">
                Photoshop
              </p>
              <p
                className="text-gra80
               py-1">
                Illustrator
              </p>
              <p
                className="text-gra80
               py-1">
                Figma
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl font-medium py-1 dark:text-gray-300">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of
              the printing and typesetting
              industry. Lorem Ipsum has been the
              industry's standard dummy text ever
              since the 1500s, when an unknown
              printer took a galley of type and
              scrambled it to make a type specimen
              book. It has survived not only five
              centuries, but also the leap into
              <span className="text-teal-500">
                {" "}
                electronic typesetting
              </span>
              , remaining essentially unchanged.
              It was popularised in the 1960s with
              the release of Letraset sheets
              containing Lorem Ipsum passages, and
              more recently with desktop
              publishing software like Aldus
              PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
