import { navLinks } from "@/contants/Constants";
import Image from "next/image";
import Link from "next/link";
import { BiUser, BiWallet } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

type Props = {
  openNav: () => void;
};

function Nav({ openNav }: Props) {
  return (
    <div className="w-full h-[13vh] ">
      <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl text-red-700 font-semibold">NFTFY Shop</div>
        {/* Nav links */}
        <div className="lg:flex hidden items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="text-lg font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200n text-gray-900">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-8">
          <BiWallet className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <BiUser className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <FaBars
            onClick={openNav}
            className="w-6 h-6 cursor-pointer lg:hidden hover:text-red-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
