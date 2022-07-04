import Link from "next/link";
import SocialLinks from "../components/SocialLinks";
import Nav from "../components/Nav";
import Head from "next/head";

const me = () => {
  return (
    <>
      <Head>
        <title>Me</title>
      </Head>
      <div className="min-h-screen w-full bg-vscode-background bg-repeat font-Roboto text-white tracking-wide md:p-16 p-8">
        <Nav />
        <div className="flex flex-col items-center justify-center py-12 h-full w-full bg-[#f5f5f5] mt-12 rounded-md text-gray-900 text-base px-12 text-center">
          <p className=" font-semibold text-xl text-[#00b202]">Mikiyas Girma</p>
          <p className="py-12">
            I am a professional Software Engineer, who has served the industry
            for more than two and half years. I am a Fullstack
            engineer(FE-heavy) with great experience in web technologies.
            Advanced ReactJs with mid-level Nextjs is my expertise. Magnificent
            experience with server-side javascript(Nodejs), API(Rest, GraphQl),
            relational database(MySQL, PostgreSQL), and non-relational
            database(MongoDB) in addition to being an Addis Ababa Science and
            technology university graduate with BSc in software engineering. I
            love working on tech projects and get challenged with complex ideas
            to bring to the world. It’s been a while since I started this
            journey. My energy and passion-driven approach might be a huge asset
            to your project or company. Let’s connect, let’s work together. By
            the way, Arsenal is best😉.
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  );
};
export default me;
