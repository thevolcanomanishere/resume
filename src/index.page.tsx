import {
	RiUserLocationFill,
	RiGithubFill,
	RiLinkedinBoxFill,
	RiMailFill,
	RiBook3Line,
} from "react-icons/ri";
import { useState } from "react";
import ProfileImage from "./assets/alex512.webp";
import BottleneckImage from "./assets/bottleneck-logo-dark.webp";
import CartrawlerImage from "./assets/CarTrawler_Logo.webp";
import Version1Image from "./assets/Version1.webp";
import TheDeFiCoachImage from "./assets/TheDeFiCoach.webp";
import MelloImage from "./assets/Mello.webp";
import NCIRLImage from "./assets/NCIRL.webp";
import HypeLogo from "./assets/hype-logo.png";
import GitHubCalendar from "react-github-calendar";
import GithubLogo from "./SVG/GithubLogo";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<main
			id="resume"
			className="flex-row w-4/5 sm:8/9 max-w-[1000px] m-auto px-2 pt-4"
		>
			<header className="flex flex-col md:flex-row m-auto justify-between mb-5">
				<section className="flex flex-col md:flex-row mb-4">
					<div className="h-[150px] w-[150px] mr-5 mb-5 aspect-square">
						{isLoading ? (
							<div className="animate-pulse w-full h-full rounded-lg  bg-slate-400" />
						) : null}

						<img
							className={
								isLoading ? "hidden" : "rounded-lg border-none w-full h-full "
							}
							src={ProfileImage}
							alt="Profile pic"
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
								rel="noreferrer"
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
								rel="noreferrer"
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
								rel="noreferrer"
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
				<div className="my-4">
					<div className="flex space-x-4 mb-2">
						<GithubLogo />
						<h1 className="text-2xl font-serif">Github Stats</h1>
					</div>
					<section>
						<a
							href="https://github.com/thevolcanomanishere"
							rel="noreferrer"
							target="_blank"
						>
							<GitHubCalendar
								username={"thevolcanomanishere"}
								fontSize={16}
								colorScheme="light"
								weekStart={1}
							/>
						</a>
					</section>
				</div>

				<section>
					<div className="flex-row w-full">
						<div className="flex-row items-center">
							<h2 className="text-2xl mr-2 font-serif">Recent Technologies</h2>
							<hr className="border border-gray mt-1.5" />
						</div>
						<div className="flex-row space-y-2 my-4">
							<p>
								Typescript, Javascript, React, Redux, Apollo, GraphQL, Wagmi,
								Ethers, Viem, Next.js, Tailwind, Jest, Vitest, Playwright.
							</p>
							<p>
								Node.js, Express, Fastify, MongoDB, Google App Engine, Cloud
								Functions, Firebase, Web Sockets, Memcached, Redis, AWS Lambdas,
								Amazon S3, Google Cloud Storage, Google Cloud Run, Serverless
								Framework, Cloudflare Workers, Cloudflare R3, IPFS, Pinata,
								Fleek, Storybook, Vite, Vercel, Server Sent Events.
							</p>
							<p>Docker, Postman, Twilio, Git.</p>
						</div>
					</div>
				</section>

				<section>
					<div className="flex-row w-full">
						<div className="flex-row items-center">
							<h2 className="text-2xl mr-2 font-serif">Personal Projects</h2>
							<hr className="border border-gray mt-1.5" />
						</div>
						<div className="my-4 max-w-md">
							<h1 className="underline text-xl">ts-chainlink-datafeed 📈</h1>
							<p>
								Typescript library for interacting with{" "}
								<a className="text-blue-500" href="https://data.chain.link/">
									Chainlink datafeeds
								</a>{" "}
								that leverages{" "}
								<a className="text-blue-500" href="https://viem.sh/">
									Viem
								</a>{" "}
								under the hood.
							</p>
							<a
								className="text-blue-500"
								href="https://github.com/hyplabs/ts-chainlink-datafeed"
							>
								Github
							</a>
						</div>
						<div className="flex flex-row flex-wrap justify-between">
							<div className="my-4 max-w-md">
								<h1 className="underline text-xl">Phrase Encrypt 🔐</h1>
								<p>
									Create, encrypt, and decrypt a crypto secret phrase. Secure
									BIP39 secret phrase generation, Argon2 password key derivation
									function. AES256-GCM encryption.
								</p>
								<a
									className="text-blue-500"
									href="https://github.com/thevolcanomanishere/phrase-encrypt"
								>
									Github
								</a>
							</div>
							<div className="my-4 max-w-md">
								<h1 className="underline text-xl">Folder Beam 5000 📁</h1>
								<p>
									Beam all files inside of a folder from one computer to another
									across the internet even if those computers are on separate
									home networks 🏠.
								</p>
								<a
									className="text-blue-500"
									href="https://github.com/thevolcanomanishere/folder-beam-5000"
								>
									Github
								</a>
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
									className="w-16 h-14 mb-3"
									src={HypeLogo}
									alt="Hypotenuse Labs Logo"
								/>
								<div className="flex flex-col md:flex-row justify-between mt-3">
									<h2 className="font-bold text-lg ">Software Engineer</h2>
									<p>2022 Nov - Present</p>
								</div>
							</div>
							<h2>
								<a
									href="https://hypotenuse.ca/"
									target="_blank"
									rel="noreferrer"
									className="text-blue-500"
								>
									Hypotenuse Labs
								</a>
							</h2>
							<p>Web2, Web3, AI, ML, and blockchain development consultancy.</p>
							<h3 className="font-bold text-lg">Projects</h3>
							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<p className="text-blue-500">[redacted]</p>
									</h4>
									<p>2024 July - 2024 August</p>
								</div>
								<p>
									[redacted] is the premier RWA Layer 2 for Ethereum built for
									crypto natives.
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Collaborated with 14 ecosystem partners to ensure
										infrastructure readiness for the [redacted] testnet launch.
									</li>
									<li>
										Developed a comprehensive methodology for assessing and
										optimizing partner ecosystems:
									</li>
									<ul className="ml-4 py-1 list-disc">
										<li>
											Created and distributed targeted questionnaires to gather
											information on each partner's tech stack.
										</li>
										<li>
											Conducted thorough network request analyses to identify
											performance bottlenecks.
										</li>
										<li>
											Authored a detailed guide for implementing Cloudflare CDNs
											and in-memory caches backed by Redis.
										</li>
										<li>
											Provided hands-on assistance to partners in implementing
											these optimizations, significantly improving their scaling
											capabilities.
										</li>
									</ul>
									<li>
										Implemented a ponder.sh indexer in order to reduce pressure
										on overloaded testnet RPC nodes, thus improving the user
										experience.
									</li>
									<li>
										Designed and implemented an innovative system for linking
										separate wallet addresses using wallet message signing
										features, enhancing user account management and security.
									</li>
								</ul>
								<p>
									<strong>Tech Stack: </strong>
									<i>
										React, Next.js, Typescript, AWS, Redis, ponder.sh, ChakraUI,
										Tailwind, Viem.
									</i>
								</p>
							</div>
							<div className="divide-y divide-dashed" />
							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<p className="text-blue-500">Internal Recruitment Tool</p>
									</h4>
									<p>2024 May - 2024 July</p>
								</div>
								<p>
									The Internal Recruitment tool enables Hypotenuse to quickly
									and efficiently track down and hire the best talent.
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Transformed a manual process into an automated system that
										scrapes and organizes data from multiple sources to identify
										optimal candidates.
									</li>
									<li>
										Achieved a significant reduction in recruitment workload,
										saving approximately 30 hours per month for the recruiting
										team.
									</li>
									<li>
										Quadrupled the number of outbound contacts made,
										dramatically increasing the potential candidate pool and
										improving hiring efficiency.
									</li>
									<li>
										Implemented automated reach-out features, streamlining the
										initial contact process and improving response rates.
									</li>
								</ul>
								<p>
									<strong>Tech Stack: </strong>
									<i>
										Node.js, Typescript, Retool, Railway, Playwright, Github
										API.
									</i>
								</p>
							</div>
							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<p className="text-blue-500">[redacted]</p>
									</h4>
									<p>2023 Aug - 2024 May</p>
								</div>
								<p>
									Conceptualized and developed from scratch a Telegram MiniApp
									that integrated multiple blockchains, third-party game
									providers, and custom features to create a seamless and secure
									platform for users.
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Integrated multiple blockchains (Ethereum, Base, Binance
										Smart Chain) for deposits and withdrawals, expanding the
										platform's accessibility and user base.
									</li>
									<li>
										Implemented DFNS for robust private key and wallet
										management across multiple blockchains, ensuring top-tier
										security for user funds.
									</li>
									<li>
										Designed and built a queue-based withdrawal system to manage
										outgoing transactions from a central wallet, effectively
										handling high volumes of requests while ensuring reliability
										and error recovery.
									</li>
									<li>
										Developed a sophisticated internal accounting system using
										PostgreSQL transactions, maintaining accurate balances
										across multiple games and blockchains.
									</li>
									<li>
										Created a custom, automated lottery system featuring timed
										drawings and automatic payouts, enhancing user engagement
										and platform attractiveness.
									</li>
									<li>
										Engineered a multi-tiered caching system using Redis and
										Bentocache, significantly improving system responsiveness
										and scalability while minimizing hosting costs.
									</li>
									<li>
										Implemented an admin approval system for large withdrawals,
										adding an extra layer of security and fraud prevention.
									</li>
									<li>
										Successfully integrated multiple third-party casino game
										providers, each with unique implementation requirements,
										demonstrating strong problem-solving skills and
										adaptability.
									</li>
									<li>
										Leveraged Telegram's MiniApp system for user authentication,
										providing a seamless and secure user onboarding process.
									</li>
								</ul>
								<p>
									<strong>Tech Stack: </strong>
									<i>
										React, Typescript, Node.js, PostgreSQL, Redis, Bentocache,
										Prisma, grammy Telegram Bot Framework, Telegram MiniApp.
									</i>
								</p>
							</div>
							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<a
											href="https://bracketx.fi/"
											target="_blank"
											rel="noreferrer"
											className="text-blue-500"
										>
											BracketX
										</a>
									</h4>
									<p>2023 Jul - 2023 Aug</p>
								</div>
								<p>
									Developed a sophisticated, real-time charting system for
									BracketX, a platform delivering range-bound products for
									Decentralized Finance. This project involved complex data
									indexing, real-time data streaming, and custom UI development.
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Designed and implemented a multi-chain data indexing service
										for Chainlink price oracles, processing and storing every
										price update from on-chain logs.
									</li>
									<li>
										Created a high-performance system to serve historical and
										real-time price data to the frontend, utilizing Server-Sent
										Events (SSE) for efficient data streaming.
									</li>
									<li>
										Modified and extended a TradingView component to render
										custom upper and lower bound lines on cryptocurrency price
										charts, integrating it with the real-time data feed.
									</li>
									<li>
										Implemented dynamic chart drawings to simulate on-chain
										price movements, providing users with a visual
										representation of range-bound products.
									</li>
									<li>
										Architected a multi-server system separating data indexing
										and serving concerns, ensuring scalability and
										responsiveness.
									</li>
								</ul>
								<p>
									<strong>Tech Stack: </strong>
									<i>
										React, Typescript, Node.js, PostgreSQL, Redis, Prisma, AWS
										Fargate, TradingView.
									</i>
								</p>
							</div>

							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<a
											href="https://www.shrapnel.com/"
											target="_blank"
											rel="noreferrer"
											className="text-blue-500"
										>
											Shrapnel
										</a>
									</h4>
									<p>2023 Jun - 2023 Jul</p>
								</div>
								<p>
									Introduced and implemented web3 functionality for Shrapnel,
									the first blockchain-enabled AAA customizable First Person
									Shooter (FPS) video game to be owned by players. As the team
									lacked web3 experience, I took on a crucial role in bridging
									this knowledge gap.
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Developed a comprehensive example project demonstrating
										token movement across different blockchains using the
										LayerZero protocol, serving as a practical learning tool for
										the Shrapnel development team.
									</li>
									<li>
										Created and implemented a full-featured LayerZero
										cross-chain token bridge, showcasing the potential of
										blockchain integration in the game ecosystem.
									</li>
									<li>
										Collaborated closely with Shrapnel developers to
										successfully integrate the LayerZero cross-chain token
										bridge into the Shrapnel frontend website, ensuring seamless
										user experience.
									</li>
									<li>
										Established a set of best practices and guidelines for the
										Shrapnel development team, facilitating their ongoing
										integration of LayerZero technology into the game.
									</li>
									<li>
										Served as a web3 knowledge resource for the team, helping to
										upskill developers in blockchain technologies and their
										application in gaming.
									</li>
								</ul>
								<p>
									<strong>Tech Stack: </strong>
									<i>
										React, Typescript, Node.js, PostgreSQL, Redis, Prisma, AWS
										Fargate, TradingView.
									</i>
								</p>
							</div>

							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<a
											href="https://www.ensemble.art/"
											target="_blank"
											rel="noreferrer"
											className="text-blue-500"
										>
											Ensemble
										</a>
									</h4>
									<p>2023 Jan - 2023 Jun</p>
								</div>
								<p>
									Ensemble is a platform where artists sell the artifacts from
									their creative process and tell the story behind it.
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Refactored Next.js frontend code to optimize build times,
										improve developer experience, and optimized all assets.
									</li>
									<li>
										Redesigned the auction system to enabled live updates as
										auctions are progressing and refactored all related code for
										performance and maintainability.
									</li>
									<li>
										Created an auction event monitoring system for reducing
										blockchain RPC costs and improving the user experience.
									</li>
									<li>
										Implemented a fully offline local blockchain node that
										enabled future developers to test out new smart contracts
										and features without having to deploy to a testnet.
									</li>
								</ul>
							</div>

							<div className="flex flex-col">
								<div className="flex flex-row space-x-6">
									<h4 className="flex flex-row space-x-6">
										<a
											href="https://www.findoctave.com/"
											target="_blank"
											rel="noreferrer"
											className="text-blue-500"
										>
											Octave
										</a>
									</h4>
									<p>2022 Nov - 2023 Jan</p>
								</div>
								<p>
									A modern therapy practice creating a new standard for mental
									health care that's both high-quality and accessible
								</p>
								<ul className="ml-4 list-disc py-4">
									<li>
										Refactored all missing and incorrect Typescript types across
										the entire frontend codebase, improving the developer
										experience and reducing the number of bugs.
									</li>
									<li>
										Redesigned the e2e Playwright test suite to be more
										performant, maintainable, and reliable.
									</li>
									<li>
										Implemented a new feature that enabled users to change their
										personal details without having to message support, reducing
										the number of support tickets and improving the user
										experience.
									</li>
								</ul>
							</div>
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
									<a
										href="https://bingo-loco.com/tickets"
										rel="noreferrer"
										target="_blank"
									>
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
									rel="noreferrer"
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
									rel="noreferrer"
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
										rel="noreferrer"
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
										rel="noreferrer"
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
									rel="noreferrer"
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
										rel="noreferrer"
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
									rel="noreferrer"
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
									rel="noreferrer"
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
									rel="noreferrer"
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
