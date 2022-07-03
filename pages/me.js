import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

const me = () => {
  return (
    <div className="md:h-screen h-full md:flex md:flex-col justify-center py-6 md:px-16 px-6 bg-vscode-background bg-repeat text-white font-Roboto tracking-wide">
      <nav>
        <ul className="flex space-x-4 items-center justify-center uppercase font-semibold">
          <Link href="/">
            <li className=" bg-white cursor-pointer text-black rounded-md px-4 py-1 hover:outline hover:bg-vscode-background hover:text-white">
              Home
            </li>
          </Link>
          <Link href="/me">
            <li className=" bg-white cursor-pointer text-black rounded-md px-4 py-1 hover:outline hover:bg-vscode-background hover:text-white">
              Me
            </li>
          </Link>
        </ul>
        <div className="flex flex-col items-center justify-center h-full md:h-[450px] w-full bg-[#f5f5f5] mt-12 rounded-md text-gray-900 text-base px-12 text-center">
          <p className=" font-semibold text-xl text-[#00b202]">Mikiyas Girma</p>
          <p className="py-8">
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
      </nav>
    </div>
  );
};
export default me;
