import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper React components
// Import Swiper styles
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const portfolioImage = [
  {
    src: "/assets/dashboard-1.jpg",
    alt: "Dashboard",
  },
  {
    src: "/assets/dashboard-2.jpg",
    alt: "Dashboard",
  },
  {
    src: "/assets/dashboard-3.jpg",
    alt: "Dashboard",
  },
  {
    src: "/assets/dashboard-1.jpg",
    alt: "Dashboard",
  },
  {
    src: "/assets/dashboard-2.jpg",
    alt: "Dashboard",
  },
  {
    src: "/assets/dashboard-3.jpg",
    alt: "Dashboard",
  },
];

const MyModal = ({ isOpen, closeModal }) => {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center md:p-16 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full fixed md:static bottom-0 top-16 md:w-2/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Project Detail
                  </Dialog.Title>
                  <div className="w-full h-60 ">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={15}
                      slidesPerGroup={3}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      style={{
                        "--swiper-navigation-color": "#0F3876",
                        "--swiper-navigation-color": "#0F3876",
                      }}
                    >
                      {portfolioImage.map((image, index) => (
                        <SwiperSlide key={index}>
                          {" "}
                          <Image
                            className="rounded-md"
                            src={image.src}
                            alt={image.alt}
                            width="180px"
                            height="180px"
                          />{" "}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="fixed bottom-4 left-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default MyModal;
