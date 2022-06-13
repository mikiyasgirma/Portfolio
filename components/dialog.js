import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useWindowWidth } from "./../contexts/WindowWidthContextProvider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const MyModal = ({ isOpen, closeModal, projectsData }) => {
  const windowWidth = useWindowWidth();
  const mediumBreakpoint = 640;
  const isLaptop = windowWidth >= mediumBreakpoint;

  // console.log("projectsData", projectsData);
  // console.log("isLaptop", isLaptop, "windowWidth", windowWidth);

  return (
    <>
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
                <Dialog.Panel className="w-full h-full fixed md:static bottom-0 top-12 md:w-2/3 transform overflow-hidden rounded-2xl bg-white px-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col space-y-2">
                    <div className="w-full h-60 ">
                      <Swiper
                        slidesPerView={isLaptop ? 4 : 2}
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
                        {projectsData?.images.map((image, index) => (
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

                    <div className="fixed md:bottom-4 left-6">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                    <div className="w-ful h-[0.1px] bg-[#0F3876] bg-opacity-20"></div>
                    <div className="flex justify-between pt-2 space-x-12">
                      <div>
                        <div className="text-lg font-semibold leading-6 text-gray-900 pb-4">
                          Features
                        </div>
                        <ul className="text-sm leading-5 font-medium text-gray-700">
                          {projectsData?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="h-52 w-[1px] bg-[#0F3876] bg-opacity-20"></div>
                      <div className="flex flex-col space-y-4">
                        <div>
                          <p className="text-lg  leading-6 text-gray-900 pb-2 font-semibold">
                            Role
                          </p>
                          <p className="text-sm leading-5 font-medium text-gray-700">
                            {projectsData?.role}
                          </p>
                        </div>
                        <div>
                          <p className="text-lg  leading-6 text-gray-900 pb-2 font-semibold">
                            Technologies
                          </p>
                          <p className="text-sm leading-5 font-medium text-gray-700">
                            {projectsData?.techstack}
                          </p>
                        </div>
                        <div>
                          <p className="text-lg  leading-6 text-gray-900 pb-2 font-semibold">
                            Links
                          </p>
                          <div className="flex space-x-4">
                            {projectsData?.links.map((link, index) => (
                              <img src={link.src} alt={link.alt} key={index} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
