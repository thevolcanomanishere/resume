import {
  RiUserLocationFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiBook3Line,
} from "react-icons/ri";
import { useState } from "react";
import ProfileImage from "./assets/alex512.jpeg";
import BottleneckImage from "./assets/bottleneck-logo-dark.webp";
import CartrawlerImage from "./assets/CarTrawler_Logo.webp";
import Version1Image from "./assets/Version1.webp";
import TheDeFiCoachImage from "./assets/TheDeFiCoach.webp";
import MelloImage from "./assets/Mello.webp";
import NCIRLImage from "./assets/NCIRL.webp";
import HypeLogo from "./assets/hype-logo.png"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main
      id="resume"
      className="flex-row w-4/5 sm:8/9 max-w-[1000px] m-auto px-2 pt-4"
    >
      <header className="flex flex-col md:flex-row m-auto justify-between mb-5">
        <section className="flex flex-col md:flex-row mb-4">
          <div className="h-[150px] w-[150px] mr-5 mb-5">
            {isLoading ? (
              <div className="animate-pulse w-full h-full rounded-lg  bg-slate-400" />
            ) : null}

            <img
              className={isLoading ? "hidden" : "rounded-lg border-none"}
              src={ProfileImage}
              alt="Profile image"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="flex-row">
            <h1 className="font-bold text-4xl">Alex McGonagle</h1>
            <h2 className="font-light text-xl">Software Engineer</h2>
            <p>
              This website uses React + Tailwind + Vite.
              <br />
              Deployed on Vercel 💾.
            </p>
          </div>
        </section>

        <section className="flex">
          <div className="border mr-3 hidden md:display"></div>
          <div>
            <h2 className="text-2xl font-serif">About</h2>
            <hr className="border border-gray mt-1.5" />
            <div className="flex items-center mt-2">
              <RiUserLocationFill className="mr-2" />
              <p>Remote, Europe</p>
            </div>
            <div className="flex items-center">
              <RiGithubFill className="mr-2" />
              <a
                className="text-blue-500"
                href="https://github.com/thevolcanomanishere"
                target="_blank"
              >
                github.com/thevolcanomanishere
              </a>
            </div>
            <div className="flex items-center">
              <RiLinkedinBoxFill className="mr-2" />
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/in/bitsofcode/"
                target="_blank"
              >
                linkedin.com/in/bitsofcode/
              </a>
            </div>
            <div className="flex items-center">
              <RiBook3Line className="mr-2" />
              <a
                className="text-blue-500 truncate"
                href="https://www.frontendmentor.io/profile/thevolcanomanishere"
                target="_blank"
              >
                frontendmentor.io/thevolcanomanishere
              </a>
            </div>
            <div className="flex items-center">
              <RiMailFill className="mr-2" />
              <a href="mailto: alex.mcgonagle.dev@gmail.com">
                alex.mcgonagle.dev@gmail.com
              </a>
            </div>
          </div>
        </section>
      </header>

      <div className="flex-row">
        {/* <div className="flex space-x-4">
          <GithubLogo />
          <h1 className="text-2xl font-serif">Github Contribution Stats</h1>
        </div>
        <section className="w-full">
          <ReactGitHubCalendar
            responsive
            summary_text="This is the summary"
            userName="thevolcanomanishere"
            tooltips={false}
            global_stats={false}
          />
        </section> */}

        <section>
          <div className="flex-row w-full">
            <div className="flex-row items-center">
              <h2 className="text-2xl mr-2 font-serif">Recent Technologies</h2>
              <hr className="border border-gray mt-1.5" />
            </div>
            <div className="flex-row space-y-2 my-4">
              <p>
                Typescript, React, Redux, urql, Apollo, GraphQL, Ethers,
                Next.js, Tailwind, Jest
              </p>
              <p>
                Node.js, Express, Fastify, MongoDB, Google App Engine, Cloud
                Functions, Firebase, Web Sockets, Memcached, Redis, AWS Lambdas,
                Amazon S3, Google Cloud Storage, Google Cloud Run, Serverless
                Framework, Cloudflare Workers, Cloudflare R3, IPFS, Pinata,
                Fleek, Storybook, Vite, Vercel
              </p>
              <p>Docker, Postman, Twilio, Git</p>
            </div>
          </div>
        </section>


        <section>
          <div className="flex-row w-full">
            <div className="flex-row items-center">
              <h2 className="text-2xl mr-2 font-serif">Personal Projects</h2>
              <hr className="border border-gray mt-1.5" />
            </div>
            <div className="flex flex-row flex-wrap gap-2">

              <div className="my-4 w-2/5">
                <h1 className="underline text-xl">Phrase Encrypt 🔐</h1>
                <p>Create, encrypt, and decrypt a crypto secret phrase. Secure BIP39 secret phrase generation, Argon2 password key derivation function. AES256-GCM encryption.</p>
                <a className="text-blue-500" href="https://github.com/thevolcanomanishere/phrase-encrypt">Github</a>
              </div>

              <div className="my-4 w-2/5">
                <h1 className="underline text-xl">Folder Beam 5000 📁</h1>
                <p>Beam all files inside of a folder from one computer to another across the internet even if those computers are on separate home networks 🏠.</p>
                <a className="text-blue-500" href="https://github.com/thevolcanomanishere/folder-beam-5000">Github</a>
              </div>
            </div>  
          </div>
        </section>



        <section>
          <div className="flex-row w-full">
            <div className="flex-row items-center mt-2">
              <h2 className="text-2xl mr-2 font-serif">
                Professional Experience
              </h2>
              <hr className="border border-gray mt-1.5" />
            </div>

            <div className="flex-row space-y-2 mb-2 mt-8">
              <div className="flex flex-col">
                <img
                  className="w-16 mb-3"
                  src={HypeLogo}
                  alt="Mello logo"
                />
                <div className="flex flex-col md:flex-row justify-between mt-3">
                  <h2 className="font-bold text-lg ">
                    Software Engineer
                  </h2>
                  <p>2022 Nov - Present</p>
                </div>
              </div>
              <h2>
                <a
                  href="https://hypotenuse.ca/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Hypotenuse Labs
                </a>
              </h2>
              <p>
                Web 2.0, Web 3.0, AI, ML, and blockchain development consultancy
              </p>
              <ul className="ml-4 list-disc">
                <li>Achievements still loading...</li>
              </ul>
            </div>


            <div className="flex-row space-y-2 mb-2 mt-4">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between mt-3">
                  <h2 className="font-bold text-lg ">
                    Freelance Software Engineer
                  </h2>
                  <p>2019 Mar - Present</p>
                </div>
              </div>

              <p>
                Working on multiple different frontend, backend, and mobile
                projects for various clients. Some interesting projects include:
              </p>
              <ul className="ml-4 list-disc">
                <li>
                  Ticket aggregation component for{" "}
                  <a href="https://bingo-loco.com/tickets" target="_blank">
                    Bingo-loco.com/tickets
                  </a>{" "}
                  that has processed $5 million+ in ticket sales and served 15
                  million requests with 0 ongoing costs to the company.{" "}
                  <i>
                    <strong>
                      React, Webpack, Express, Google Cloud Functions,
                      Cloudflare Serverless Workers, Typescript, MongoDb
                    </strong>
                  </i>
                </li>
                <li>
                  Customisable PDF distribution system for Bingo-Loco.com that
                  enabled their staff to create shareable links that randomised
                  the download of a Bingo Card for their corporate clients.{" "}
                  <i>
                    <strong>
                      React, Node.js, Express, Cloudflare R2 (AWS S3 clone),
                      Cloudflare Serverless Workers.
                    </strong>
                  </i>
                </li>
                <li>
                  Digital Bingo presentation system for their show presenters to
                  replace their manual electronic random bingo number generator
                  system.{" "}
                  <i>
                    <strong>
                      React, React Native, Electron, Tailwind, Typescript,
                      Javascript, WebSockets, Bonjour/ZeroConf, Express.
                    </strong>
                  </i>
                </li>
              </ul>
            </div>

            <div className="flex-row space-y-2 mb-2 mt-8">
              <div className="flex flex-col">
                <img
                  className="w-[200px] h-[60px] mb-3"
                  src={MelloImage}
                  alt="Mello logo"
                />
                <div className="flex flex-col md:flex-row justify-between mt-3">
                  <h2 className="font-bold text-lg ">
                    Software Engineer & Co-Founder
                  </h2>
                  <p>2022 Jan - 2022 Nov</p>
                </div>
              </div>
              <h2>
                <a
                  href="https://github.com/mello-defi"
                  target="_blank"
                  className="text-blue-500"
                >
                  Mello DeFi - Open Source
                </a>
              </h2>
              <p>
                Mello DeFi aims to educate new users in DeFi by guiding them
                through the most common DeFi actions and streamlining the
                onboarding experience. Mello has not fully launched due to
                market conditions.
              </p>
              <ul className="ml-4 list-disc">
                <li>Successfully awarded a grant from Polygon and Aave</li>
                <li>
                  Worked directly with UI/UX contractors on frontend overhaul
                </li>
                <li>Made contributions to the codebase</li>
              </ul>
            </div>

            <div className="flex-row space-y-2 mb-2 mt-8">
              <div className="flex flex-col">
                <img
                  className="w-[200px] h-[65px] mb-3"
                  src={TheDeFiCoachImage}
                  alt="The DeFi Coach logo"
                />
                <div className="flex flex-col md:flex-row justify-between">
                  <h2 className="font-bold text-lg">Consultant & Co-Founder</h2>
                  <p>2021 May - 2022 Nov</p>
                </div>
              </div>
              <h2>
                <a
                  href="https://thedeficoach.com"
                  target="_blank"
                  className="text-blue-500"
                >
                  The DeFi Coach
                </a>
              </h2>
              <p>
                The DeFi Coach is an online education course for people wanting
                to learn about and use decentralised finance safely.
              </p>
              <ul className="ml-4 list-disc">
                <li>
                  Created 8+ hours of educational video content across a wide
                  range of DeFi subjects
                </li>
                <li>
                  Researched the latest DeFi applications and their place in the
                  ecosystem
                </li>
                <li>
                  Helped students with questions they have on the content in the
                  course
                </li>
                <li>
                  Consulted with businesses and private individuals on
                  decentralised finance
                </li>
              </ul>
              <h2 className="font-bold text-lg">Media 🗞</h2>
              <p>
                <i>
                  Irish Tech News -{" "}
                  <a
                    href="https://irishtechnews.ie/defi-coach-online-course/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    New Irish Crypto Statup "The DeFi Coach" aims to educate and
                    empower with online course.
                  </a>
                </i>
              </p>
            </div>

            <div className="flex-row space-y-2 mb-2 mt-8">
              <div className="flex flex-col">
                <img
                  className="w-[200px] h-full mb-3"
                  src={BottleneckImage}
                  alt="Bottleneck logo"
                />
                <div className="flex  flex-col md:flex-row  justify-between">
                  <h2 className="font-bold text-lg">
                    Software Engineer & Co-Founder
                  </h2>
                  <p>2019 Mar - 2021 Dec</p>
                </div>
              </div>
              <h2>Bottleneck</h2>
              <p>
                Bottleneck creates machine learning powered chatbots to give
                instant answers to the top questions that your business or
                organisation receives.
              </p>
              <ul className="ml-4 list-disc">
                <li>
                  Extended the functionality of the Manychat.com bot platform
                  via Google Cloud Functions / App Engine
                </li>
                <li>
                  Built API connections between the Manychat platform to Twilio,
                  Slack, MongoDB, Google Sheets, and Dialogflow
                </li>
                <li>
                  Deployed Node.js/Express, Node.js/Fastify servers using Google
                  App Engine, Cloud Run, AWS Lambda
                </li>
                <li>
                  Designed and implemented low-latency, high-availability, and
                  performant applications
                </li>
                <li>
                  Created charts for customer dashboards using MongoDB Charts
                  system
                </li>
              </ul>
              <h2 className="font-bold text-lg">Media 🗞</h2>
              <p>
                <i>
                  Silicon Republic -{" "}
                  <a
                    href="https://www.siliconrepublic.com/start-ups/dublin-beta-startup-week-bottleneck"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Bottleneck wins pitching contest at 2019 revival of Dublin
                    Beta.
                  </a>
                </i>
              </p>
            </div>

            <div className="flex-row space-y-2 mb-2 mt-7">
              <div className="flex flex-col">
                <img
                  className="w-[200px] h-full mb-2"
                  src={CartrawlerImage}
                  alt="Cartralwer logo"
                />
                <div className="flex flex-col md:flex-row  justify-between">
                  <h2 className="font-bold text-lg">Lead Frontend Engineer</h2>
                  <p>2017 Jun - 2019 Mar</p>
                </div>
              </div>
              <h2>
                <a
                  href="https://cartrawler.com"
                  target="_blank"
                  className="text-blue-500"
                >
                  Cartrawler
                </a>
              </h2>
              <p>
                CarTrawler designs, builds and powers customised end-to-end car
                rental and mobility solutions.
              </p>
              <ul className="ml-4 list-disc">
                <li>
                  Designed, built, and maintained production React-Native apps
                </li>
                <li>
                  Created performant and maintainable code using Javascript +
                  Flow, Java, and Objective-C
                </li>
                <li>Created native bridge modules for iOS and Android</li>
                <li>
                  Created bash scripts to automate deployments to CodePush and
                  create source maps for Sentry
                </li>
                <li>
                  Directly managed a team of 18 graduate software engineers
                </li>
                <li>Managed and track tasks using Jira</li>
                <li>Code review pulls requests using Stash/Jira integration</li>
                <li>
                  Developed, updated, and advocated for the technical direction
                  of the mobile product
                </li>
                <li>
                  Acted as an interface between the engineers, business
                  analysts, and partner managers
                </li>
              </ul>
              <h2 className="font-bold text-lg">Media 🗞</h2>
              <p>
                <i>
                  Cartrawler -{" "}
                  <a
                    href="https://www.youtube.com/watch?v=EzIdKeLamQo"
                    target="_blank"
                    className="text-blue-500"
                  >
                    A video that takes a look inside the day to day life of the
                    Incubator and the people within it.
                  </a>
                </i>
              </p>
            </div>

            <div className="flex-row space-y-2 mb-2 mt-7">
              <div className="flex flex-col">
                <img
                  className="w-[200px] h-full mb-2"
                  src={Version1Image}
                  alt="Version 1 logo"
                />
                <div className="flex flex-col md:flex-row  justify-between">
                  <h2 className="font-bold text-lg">
                    Graduate Software Engineer
                  </h2>
                  <p>2016 Sep - 2017 Jun</p>
                </div>
              </div>
              <h2>
                <a
                  href="https://www.version1.com/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Version 1
                </a>
              </h2>
              <p>
                Version 1 is an international management consulting, managed
                services, software development, and outsourcing company.
              </p>
              <ul className="ml-4 list-disc">
                <li>
                  Developed fast and responsive cross-platform mobile
                  applications using Ionic Hybrid Apps + ASP.NET MVC
                </li>
                <li>
                  Developed responsive web applications and ensure compatibility
                  with older browsers (IE 9+)
                </li>
                <li>Attended daily stand-up meetings to report on progress</li>
                <li>Responded to bugs in TFS</li>
                <li>
                  Presented interesting technologies and insights twice monthly
                  during internal developer catch up meetings
                </li>
                <li>
                  Worked directly with the UI team members to ensure responsive
                  best practices
                </li>
              </ul>
            </div>
            <div className="flex-row items-center">
              <h2 className="text-xl mr-2 font-serif">Education</h2>
              <hr className="border border-gray mt-1.5" />
            </div>
            <div className="flex-row space-y-2 mb-2">
              <img
                className="w-[150px] h-full mt-5"
                src={NCIRLImage}
                alt="NCIRL logo"
              />
              <div className="flex flex-col md:flex-row  justify-between">
                <h2 className="font-bold text-lg mt-3">
                  Postgraduate Diploma in Science in Computing -{" "}
                  <a
                    className="text-blue-500"
                    href="https://www.qqi.ie/what-we-do/the-qualifications-system/national-framework-of-qualifications"
                  >
                    QQI Level 9
                  </a>
                </h2>
                <p>2015 - 2016</p>
              </div>
              <h2>
                <a
                  href="https://www.ncirl.ie/"
                  target="_blank"
                  className="text-blue-500"
                >
                  National College of Ireland
                </a>
                <p>Grade: 1.1 - Highest grade acheiveable</p>
              </h2>
            </div>

            <div className="flex-row space-y-2 mb-20">
              <div className="flex flex-col md:flex-row  justify-between">
                <h2 className="font-bold text-lg">
                  Higher Diploma in Science in Computing -{" "}
                  <a
                    className="text-blue-500"
                    href="https://www.qqi.ie/what-we-do/the-qualifications-system/national-framework-of-qualifications"
                  >
                    QQI Level 8
                  </a>
                </h2>
                <p>2014 - 2015</p>
              </div>
              <h2>
                <a
                  href="https://www.ncirl.ie/"
                  target="_blank"
                  className="text-blue-500"
                >
                  National College of Ireland
                </a>
                <p>Grade: 1.1 - Highest grade acheiveable</p>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
