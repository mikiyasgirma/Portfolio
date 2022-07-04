// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MyModal from "../components/MyModal";
import projectsData from "../data/projects";
import Nav from "../components/Nav";

const Home = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [clickedIndex, setClickedIndex] = useState(null);
  let [clickedProject, setClickedProject] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(index) {
    setClickedIndex(index);
    setClickedProject(projectsData[index]);
    setIsOpen(true);
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="min-h-screen w-full bg-vscode-background bg-repeat font-Roboto text-white tracking-wide md:p-20 p-8">
        <Nav />
        <div className="flex flex-col h-full md:flex-row justify-between items-center space-y-12">
          <div
            className="bg-white flex flex-col justify-center px-6 py-4 text-gray-400 w-full md:w-80 h-52 md:h-64 shadow-2xl bg-clip-padding bg-opacity-30 rounded-md "
            style={{ backdropFilter: "blur(5px)" }}
          >
            <p className="uppercase md:text-2xl text-xl relative">
              This is my world, let's enjoy it together. Relentless Effort.
            </p>
            <div className="absolute bottom-4 left-6">
              mikiyasgirma43@gmail.com
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="w-40 h-40 relative">
              <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light" />
            </div>
            <p className="text-xl">Mikiyas Girma</p>
            <p className="max-w-xs ">Software Engineer | Fullstack</p>
            <div className="flex space-x-6">
              <img src="/assets/javascript.svg" className="w-10 h-10" />
              <img src="/assets/typescript.svg" className="w-10 h-10" />
              <img src="/assets/reactjs.svg" className="w-10 h-10" />
              <img src="/assets/nextjs.svg" className="w-10 h-10" />
              <img src="/assets/node.svg" className="w-10 h-10" />
            </div>
          </div>
          <div className="flex flex-col text-sm md:text-base space-y-4 ">
            <div className="text-black font-semibold bg-white w-32 rounded-md px-4 py-1">
              Projects
            </div>
            <div className="flex flex-col space-y-4">
              {projectsData.map((project, index) => (
                <button
                  id={index}
                  onClick={() => openModal(index)}
                  className="flex space-x-6 pt-4"
                  key={index}
                >
                  <img src={project.icon.src} />
                  <div className="bg-white cursor-pointer text-black rounded-md px-4 py-1 hover:outline hover:bg-vscode-background hover:text-white">
                    <p className=" font-semibold">{project.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        {
          <MyModal
            isOpen={isOpen}
            closeModal={closeModal}
            projectsData={clickedProject}
          />
        }
      </div>
    </>
  );
};

export default Home;
