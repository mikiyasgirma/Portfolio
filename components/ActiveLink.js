import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style =
    router.asPath === href
      ? "cursor-pointer rounded-md px-4 py-1 outline bg-vscode-background text-white"
      : "bg-white cursor-pointer text-gray-900 font-semibold rounded-md px-4 py-1  hover:bg-white hover:text-black";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
