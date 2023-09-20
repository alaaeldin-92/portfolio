import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import Experiences from "../data/experience.json";
import Skills from "../data/skills.json";
import Navbar from "../components/Navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // observer intersection
  const [visibleSection, setVisibleSection] = useState("projects");
  const sectionsRef = useRef([]);
  useEffect(() => {
    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          setVisibleSection(entry.target.getAttribute("id"));

          // entry.target.id !== "home"
          //   ? headerRef.current.classList.add("bg-white")
          //   : headerRef.current.classList.remove("bg-white");

          // To stop observing an element once it comes into view
          // observer.unobserve(entry.target);
        }
      });
    }, options);
    document.querySelectorAll(".observableSection").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mb-[100px]">
      <Navbar visibleSection={visibleSection} />
      {/* <Navbar /> */}
      <header
        className="App-header md:min-h-[46.3vh] observableSection"
        id="Projects"
      >
        <div className="hidden text-center font-Baskerville text-[34px] leading-[46px] mx-[15vw] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[76px]">
          I build beautiful things as designer, developer, creator,
          entrepreneur.
        </div>
      </header>
      <section className="hidden px-[2.5%] md:flex flex-col gap-12 items-center md:gap-24">
        {Projects.list.map((project) => (
          <a
            href={project.link}
            className="max-w-[400px] md:max-w-[1200px] md:mt-[50px]"
            data-aos="fade-up"
            key={uuidv4()}
          >
            <div className="project-cover">
              <img src={project.cover} className="project-cover-image"></img>
              <div className="project-cover-overlay">
                <div className="project-cover-overlay-text flex flex-row items-center gap-2">
                  Visit Website
                  <HiArrowSmallRight />
                </div>
              </div>
            </div>

            <div className="grid auto-rows-auto gap-4 mt-[10px] md:grid-rows-none md:grid-cols-2 md:gap-0">
              <div>
                <div className="font-medium text-5xl ">{project.title}</div>
                <div className="pt-2 text-[18px]">{project.subtitle}</div>
              </div>
              <div className="text-[12px] md:text-[16px] md:mt-[5px] md:text-right">
                {project.description}
              </div>
            </div>

            <div className="hidden mt-[10px] gap-4 2xl:flex">
              <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded ">
                Frontend
              </div>
              {project.backend && (
                <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded">
                  Backend
                </div>
              )}
            </div>
          </a>
        ))}
      </section>

      <section className="md:hidden text-left">
        <Splide
          options={{
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 1.5,
          }}
        >
          {Projects.list.map((project) => (
            <SplideSlide>
              <a
                href={project.link}
                className="max-w-[400px] md:max-w-[1200px] md:mt-[50px]"
                key={uuidv4()}
              >
                <div className="project-cover">
                  <img
                    src={project.cover}
                    className="project-cover-image rounded-2xl"
                    style={{ height: "300px" }}
                  ></img>
                  <div className="project-cover-overlay">
                    <div className="project-cover-overlay-text flex flex-row items-center gap-2">
                      Visit Website
                      <HiArrowSmallRight />
                    </div>
                  </div>
                </div>

                <div className="grid auto-rows-auto gap-4 mt-[10px] md:grid-rows-none md:grid-cols-2 md:gap-0">
                  <div>
                    <div className="font-medium text-5xl ">{project.title}</div>
                    <div className="pt-2 text-[18px]">{project.subtitle}</div>
                  </div>
                  <div className="text-[12px] md:text-[16px] md:mt-[5px] md:text-right">
                    {project.description}
                  </div>
                </div>

                <div className="hidden mt-[10px] gap-4 2xl:flex">
                  <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded ">
                    Frontend
                  </div>
                  {project.backend && (
                    <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded">
                      Backend
                    </div>
                  )}
                </div>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <div className="my-[150px]"></div>
      <header
        className="App-header md:min-h-[46.3vh] observableSection"
        id="Experience"
      >
        <div className="hidden text-center font-Baskerville text-[34px] leading-[46px] mx-[15vw] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[70px] 2xl:text-[72px] 2xl:leading-[76px]">
          I've worked and earned some experience in software development.
        </div>
      </header>
      <section className="max-w-[900px] mx-auto my-[50px] px-[10%] md:px-[7.5%]  md:text-lg scroll-my-[150px]">
        <div className="border-l-[2px] grid gap-16 border-gray-300 dark:border-[#10141c]">
          {Experiences.list.map((experience) => (
            <div data-aos="fade-left" className="ml-[5vw]">
              <div className="relative right-[calc(5vw+8px)] top-[15px] w-[15px] h-[15px] z-10 rounded-full bg-gray-300 dark:bg-[#080b0f]"></div>

              <div className="relative top-0 grid gap-6 drop-shadow-xl rounded-lg p-[30px] bg-gray-200 dark:bg-[#10141c]">
                <div className="grid gap-4">
                  <div className="font-Baskerville font-medium md:text-2xl">
                    {experience.title}
                  </div>
                  <div className="text-sm">{experience.duration}</div>
                </div>

                <div className="hidden md:block text-base font-light leading-7">
                  {experience.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <header
        className="App-header md:min-h-[46.3vh] observableSection"
        id="Skills"
      >
        <div className="hidden text-center font-Baskerville text-[34px] leading-[46px] mx-[15vw] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[76px]">
          There are many skills I've learned during my humble journey.
        </div>
      </header>

      <div className="max-w-[900px] mx-auto md:text-4xl md:font-bold">
        <Splide
          options={{
            type: "loop",
            gap: "10px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {Skills.list.map((skill) => (
            <SplideSlide
              style={{
                backgroundImage: `${skill.name}`,
                backgroundSize: "contain",
                backgroundImage: `url('${skill.svg}')`,
              }}
              className="bg-top bg-no-repeat grid items-end w-[180px] shadow-2xl rounded-xl"
            >
              <div className="grid gap-4 pt-[200px] pb-[40px] px-8">
                <div>{skill.name}</div>

                <ProgressBar
                  completed={skill.percent}
                  isLabelVisible={false}
                  transitionDuration="1s"
                  // animateOnRender={true}
                  borderRadius="100px"
                  height="7px"
                  bgColor={skill.color}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Home;
