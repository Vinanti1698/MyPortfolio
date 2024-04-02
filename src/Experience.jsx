import React from "react";
import DevLogo from "./assets/SynoptekLogo.jpeg";
import FirstLogo from "./assets/DivergentLogo.png";
import CaaxLogo from "./assets/CAAX.jpeg";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExperienceAnimationData from "./assets/ExperienceAnimation.json";
export default function Experience() {
  return (
    <>
      <div id="experience" className="bg-customGradient-900 py-24 w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <Fade bottom duration={1200}>
                <h2 className="text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl">
                  Experience
                </h2>
                <p className="mt-2 text-lg leading-8 text-customGradient-200">
                  Crafting success through years of professional mastery, each
                  experience a brushstroke in the masterpiece of my portfolio.
                </p>
              </Fade>
            </div>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div
                  style={{ width: "300px", height: "250px" }}
                  className="center"
                >
                  <Lottie animationData={ExperienceAnimationData}></Lottie>
                </div>
              </Fade>
            </div>
          </div>

          <Fade bottom duration={1500}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-customGradient-200">
                  Divergent3D - Software Engineering Intern 
                </h3>
                <h4 className="text-customGradient-200 italic">
                  May 2023 - August 2023 | Torrance, California
                </h4>
                <p className="mt-6 text-base leading-7 text-customGradient-200">
                Automated parsing through thousands of unstructured files from diverse sources, optimizing organization development and analysis workflows significantly - <br />
                  • 50% reduction in data extraction and consolidation time  <br />
                  • 78% acceleration in data processing speed. 
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-customGradient-400">
                    Technology Stack
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6"
                >
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Python 
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Splunk
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      GraphQL
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Prisma Schema
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Git 
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Kubernetes 
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
                  <img src={FirstLogo} alt="" className="w-full h-auto"></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1700}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-customGradient-200">
                  Synoptek - Associate Software Engineer
                </h3>
                <h4 className="text-customGradient-200 italic">
                  August 2020 - July 2022 | Ahmedabad, Gujarat, India
                </h4>
                <p className="mt-6 text-base leading-7 text-customGradient-200">
                Implemented data ETL pipelines and streamlined the MS SQL operations to enhance the system performance, data integrity, and application reliability - <br />
                  • 30% reduction in data retrieval time <br />
                  • Delivered 5+ major client projects on time by collaborating with cross-functional agile teams
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-customGradient-400">
                    Technology Stack
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  class="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6"
                >
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Python 
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      C#
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      SQL Server Management Studio
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Azure Data Factory
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Microsoft PowerBI
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Dev Ops
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
                    <img src={DevLogo} alt="" className="w-full h-auto"></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1900}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-customGradient-200">
                  First Walkin Technologies Pvt Ltd - Summer Intern{" "}
                </h3>
                <h4 className="text-customGradient-200 italic">
                  May 2019 — July 2019 - Bangalore, Karnataka, India
                </h4>
                <p className="mt-6 text-base leading-7 text-customGradient-200">
               
                Developed a full-stack E-commerce platform, handling front-end, back-end, and SEO optimization for optimal performance - <br />
                  • Supported in managing SEO to expedite site traffic by 30%


                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-customGradient-400">
                    Technology Stack
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6"
                >
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      HTML
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      React
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      CSS
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      JavaScript
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      C#
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      ASP.NET Framework
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
                     <img src={CaaxLogo} alt="" className="w-full h-auto"></img> 
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Link
            to="education"
            className="font-semibold leading-6 text-customGradient-200 hover:text-opacity-50"
            smooth={true}
            duration={800}
          >
            <div className="absolute  left-1/2 transform -translate-x-1/2 mb-8 pt-10">
              <Lottie animationData={DownAnimationData}></Lottie>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
