import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";

export const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Me",
    href: "/me",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className="md:flex space-x-8 font-semibold text-sm tracking-wide uppercase text-primary flex justify-center ">
        {navItems.map((item, index) => (
          <li key={index}>
            <ActiveLink href={item.href}>{item.title}</ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
