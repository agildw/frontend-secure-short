import React from "react";
import GithubLogo from "@/components/assets/GithubLogo";
import Logo from "../assets/Logo";

const LandingHeaders = () => {
  return (
    <div className="navbar bg-transparent flex sm:space-x-96 lg:space-x-[40rem] xl:space-x-[53rem] lg:justify-center">
      <div className=" flex-1 sm:flex-none">
        <a className="btn btn-ghost text-headline-black normal-case text-xl">
          <Logo width={32} height={32} />
          secure-short
        </a>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal text-headline-black">
          <li className="active">
            <a
              href="https://github.com/agildw/api-secure-short"
              target="_blank"
              rel="noreferrer"
              className="focus:text-white"
            >
              <GithubLogo fill="black" width={32} height={32} />
            </a>
          </li>
          <li>
            <a className="">Dashboard</a>
          </li>
        </ul>
      </div> */}
      <div className="flex flex-row space-x-2">
        <a
          className="btn btn-ghost text-headline-black normal-case text-lg"
          href="https://github.com/agildw/api-secure-short"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo fill="black" width={32} height={32} />
        </a>
        <a className="btn btn-ghost bg-sunny-yellow text-headline-black normal-case hover:bg-yellow-400  text-sm">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default LandingHeaders;
