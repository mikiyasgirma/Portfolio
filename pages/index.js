// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MyModal from "../components/dialog";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log("isopen", isOpen);

  return (
    <div>
      <div className="md:h-screen h-full md:flex md:flex-col justify-center py-6 md:px-16 px-6 bg-vscode-background bg-repeat text-white font-Roboto tracking-wide">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12">
          <div
            className="bg-white flex flex-col justify-center px-6 py-4 text-gray-400 w-full md:w-80 h-52 md:h-64 shadow-2xl bg-clip-padding bg-opacity-30 rounded-md "
            style={{ backdropFilter: "blur(5px)" }}
          >
            <p className="uppercase md:text-2xl text-xl">
              This is my world, let's enjoy it together. Rentless Effort.
            </p>
            <div className="fixed bottom-4 left-6">
              mikiyasgirma43@gmail.com
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="w-36 h-36 relative">
              <Image
                alt="mikiyasgirma"
                className="rounded-full"
                src="/assets/me.JPG"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <p className="text-xl">Mikiyas Girma</p>
            <p className="max-w-xs ">
              Software Engineer | Web Developer | Full Stack | Intermediate
            </p>
            <div className="flex space-x-6">
              <img src="/assets/github.svg" />
              <img src="/assets/linkdin.svg" />
              <img src="/assets/twitter.svg" />
              <img src="/assets/gmail.svg" />
            </div>
          </div>
          <div className="flex flex-col text-sm md:text-base space-y-4 ">
            <div className="text-black font-semibold bg-white w-32 rounded-md px-4 py-1">
              Projects
            </div>

            <div className="flex space-x-6 pt-4">
              <img src="/assets/cart.svg" />
              <button
                // ref={inputRef}
                onClick={openModal}
                className="bg-white cursor-pointer text-black rounded-md px-4 py-1 hover:outline hover:bg-vscode-background hover:text-white"
              >
                <p className=" font-semibold">Ecommerce | Turmii</p>
              </button>
            </div>
            <div className="flex space-x-6 pt-4">
              <img src="/assets/ERP.svg" />
              <div className="bg-white rounded-md px-4 py-1">
                <p className="text-black font-semibold">ERP | Tekron</p>
              </div>
            </div>
            <div className="flex space-x-6 pt-4">
              <img src="/assets/inventory.svg" />
              <div className="bg-white rounded-md px-4 py-1">
                <p className="text-black font-semibold">Inventory | Suk</p>
              </div>
            </div>
            <div className="flex space-x-6 pt-4">
              <img src="/assets/business.svg" />
              <div className="bg-white rounded-md px-4 py-1">
                <p className="text-black font-semibold">
                  Business | Akiya Coffee
                </p>
              </div>
            </div>
          </div>
        </div>
        {<MyModal isOpen={isOpen} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Home;
