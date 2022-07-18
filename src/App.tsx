import {
  RiUserLocationFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import ProfileImage from "./assets/alex512.jpeg";

// import html2pdf from "html2pdf.js";

function App() {
  // const generatePDF = () => {
  //   const generateButton = document.getElementById("generate-button");
  //   var element = document.getElementById("resume");
  //   const opt = {
  //     margin: 0,
  //     filename: "AlexMcGonagle-Resume.pdf",
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 2, ignoreElements: [generateButton] },
  //     jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
  //   };

  //   html2pdf().set(opt).from(element).save();
  // };

  return (
    <body id="resume" className="flex-row w-4/5 max-w-[1000px] m-auto p-2">
      <header className="flex m-auto justify-between mb-5">
        <section className="flex">
          <div className="h-[150px] w-[150px] mr-5 rounded-md">
            <img src={ProfileImage} />
          </div>
          <div className="flex-row">
            <h1 className="font-bold text-4xl">Alex McGonagle</h1>
            <h2 className="font-light text-xl">Software Engineer</h2>
            {/* <button
              id="generate-pdf"
              type="button"
              onClick={() => generatePDF()}
              className="border-2 p-1 rounded-md"
            >
              Generate PDF
            </button> */}
          </div>
        </section>

        <section className="flex">
          <div className="border mr-3"></div>
          <div>
            <h2 className="text-xl">About</h2>
            <hr className="border border-gray mt-1.5" />
            <div className="flex items-center">
              <RiUserLocationFill className="mr-2" />
              <p>Dublin, Ireland</p>
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
              <RiMailFill className="mr-2" />
              <a href="mailto: alex.mcgonagle.dev@gmail.com">
                alex.mcgonagle.dev@gmail.com
              </a>
            </div>
          </div>
        </section>
      </header>

      <div className="flex-row">
        <section>
          <div className="flex-row w-full">
            <div className="flex-row items-center">
              <h2 className="text-2xl mr-2 font-serif">Skills</h2>
              <hr className="border border-gray mt-1.5" />
            </div>
            <div className="flex-row space-y-2 mb-2">
              <p>Typescript, React, GraphQL, Ethers, Next.js, Tailwind, Jest</p>
              <p>
                Node.js, Express, Fastify, MongoDB, Google App Engine, Cloud
                Functions, Firebase, Web Sockets, Memcached, Redis, AWS Lambdas,
                Amazon S3, Google Cloud Storage, Google Cloud Run, Serverless
                Framework, Cloudflare Workers, Cloudflare R3, IPFS, Pinata,
                Fleek, Storybook
              </p>
              <p>Docker, Postman, Twilio, Git</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex-row w-full">
            <div className="flex-row items-center">
              <h2 className="text-xl mr-2 font-serif">
                Professional Experience
              </h2>
              <hr className="border border-gray mt-1.5" />
            </div>

            <div className="flex-row space-y-2 mb-2">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg mt-3">
                  Software Engineer & Co-Founder
                </h2>
                <p>2022 Jan - Present</p>
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
                Mello DeFi aims to educate new users to DeFi by guiding them
                through the most common DeFi actions and streamlining the
                onboarding experience. Mello has not fully launched due to
                market conditions.
              </p>
              <ul className="ml-4 list-disc">
                <li>Successfully awarded a grant from Polygon and Aave</li>
                <li>
                  Worked directly with UI/UX contractors on frontend overhaul
                </li>
                <li>Made small contributions to the codebase</li>
              </ul>
            </div>

            <div className="flex-row space-y-2 mb-2">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">Consultant & Co-Founder</h2>
                <p>2021 May - Present</p>
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
            </div>

            <div className="flex-row space-y-2 mb-2">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">
                  Software Engineer & Co-Founder
                </h2>
                <p>2019 Mar - 2021 Dec</p>
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
            </div>

            <div className="flex-row space-y-2 mb-2">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">Lead Frontend Engineer</h2>
                <p>2017 Jun - 2019 Mar</p>
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
                  Directly managed a team of software engineers daily using an
                  agile methodology
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
            </div>

            <div className="flex-row space-y-2 mb-2">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">
                  Graduate Software Engineer
                </h2>
                <p>2016 Sep - 2017 Jun</p>
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
              <div className="flex justify-between">
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
                <p>Grade: 1.1 - Highest grade achieveable</p>
              </h2>
            </div>

            <div className="flex-row space-y-2 mb-20">
              <div className="flex justify-between">
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
                <p>Grade: 1.1 - Highest grade achieveable</p>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
