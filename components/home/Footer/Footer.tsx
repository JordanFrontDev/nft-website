import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="pt-12 pb-12">
      <div
        className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start"
      >
        {/* First footer part */}
        <div>
          <div className="text-2xl text-red-700 font-semibold mb-4">
            NFTFY Shop
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptates necessitatibus id nihil
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <FaFacebook className="w-6 h-6 text-blue-700" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-rose-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        {/* Second footer part */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer__title">Marketplace</h1>
          <p className="footer__link">All NFTs</p>
          <p className="footer__link">Art</p>
          <p className="footer__link">Music</p>
          <p className="footer__link">Collectibles</p>
          <p className="footer__link">Wallets</p>
        </div>
        {/* Third footer part */}
        <div className="lg:mx-auto mx-0">
          <h1 className="footer__title">Company</h1>
          <p className="footer__link">Explore</p>
          <p className="footer__link">About</p>
          <p className="footer__link">Contact us</p>
          <p className="footer__link">Our blog</p>
          <p className="footer__link">FAQ</p>
        </div>
        {/* Fourth footer part */}
        <div className="xl:mx-auto md:mx-auto lg:mx-0 mx-0">
          <h1 className="footer__title">My Account</h1>
          <p className="footer__link">Authors</p>
          <p className="footer__link">Collections</p>
          <p className="footer__link">Author Profile</p>
          <p className="footer__link">Create Item</p>
          <p className="footer__link">NFT Profile</p>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-black opacity-70">
        Copyright &copy; by Jordan Vinicius
      </div>
    </footer>
  );
}

export default Footer;
