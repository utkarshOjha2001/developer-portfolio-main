// @flow strict
import Link from "next/link";
import Image from "next/image";
import profolio from "../../public/profolioLogo.png";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-2 px-4">
        {/* Logo Section */}
        <div className="flex items-center  h-20">
          <Link href="/" className="flex items-center">
            <Image
              alt="profolio"
              src={profolio}
              width={300} // adjust size here
              height={300}
              priority
              className="ml-[-30px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 hover:text-pink-600 text-white" href="/#about">ABOUT</Link>
          </li>
          <li>
            <Link className="block px-4 py-2 hover:text-pink-600 text-white" href="/#experience">EXPERIENCE</Link>
          </li>
          <li>
            <Link className="block px-4 py-2 hover:text-pink-600 text-white" href="/#skills">SKILLS</Link>
          </li>
          <li>
            <Link className="block px-4 py-2 hover:text-pink-600 text-white" href="/#education">EDUCATION</Link>
          </li>
          <li>
            <Link className="block px-4 py-2 hover:text-pink-600 text-white" href="/#projects">PROJECTS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
