import { navLinks } from "@/contants/Constants";
import Image from "next/image";
import Link from "next/link";
import { BiX } from "react-icons/bi";

type Props = {
  nav: boolean;
  closeNav: () => void;
};

function MobileNav({ nav, closeNav }: Props) {
  const responsiveNav = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`transform ${responsiveNav} transition-all duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0
    bg-[#f1fc7b]`}
    >
      {/* Logo */}
      <div>
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={100}
          height={100}
        />
        <BiX
          onClick={closeNav}
          className="h-8 w-8 absolute top-[2rem] text-black z-[202] right-[2rem] hover:text-red-500 cursor-pointer"
        />
      </div>
      {/* Nav links */}
      <div className="relative z-[201] space-y-12 flex flex-col items-center justify-center h-[60%]">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p
              className="text-2xl font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200
            text-gray-900"
            >
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
