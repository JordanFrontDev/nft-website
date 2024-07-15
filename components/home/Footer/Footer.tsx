import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="pt-12 pb-12 bg-gray-100">
      <div
        className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start"
      >
        {/* Primeira parte do rodapé */}
        <div>
          <div className="text-2xl text-red-700 font-semibold mb-4">
            NFTFY Shop
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Sua plataforma para explorar e negociar NFTs exclusivos. Conecte-se
            com a comunidade e descubra coleções incríveis de arte, música e
            muito mais.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="w-6 h-6 text-blue-700" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 text-sky-500" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube className="w-6 h-6 text-rose-700" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-pink-600" />
            </a>
          </div>
        </div>
        {/* Segunda parte do rodapé */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer__title">Marketplace</h1>
          <p className="footer__link">Todos os NFTs</p>
          <p className="footer__link">Arte</p>
          <p className="footer__link">Música</p>
          <p className="footer__link">Colecionáveis</p>
          <p className="footer__link">Carteiras</p>
        </div>
        {/* Terceira parte do rodapé */}
        <div className="lg:mx-auto mx-0">
          <h1 className="footer__title">Empresa</h1>
          <p className="footer__link">Explorar</p>
          <p className="footer__link">Sobre</p>
          <p className="footer__link">Contato</p>
          <p className="footer__link">Nosso Blog</p>
          <p className="footer__link">FAQ</p>
        </div>
        {/* Quarta parte do rodapé */}
        <div className="xl:mx-auto md:mx-auto lg:mx-0 mx-0">
          <h1 className="footer__title">Minha Conta</h1>
          <p className="footer__link">Autores</p>
          <p className="footer__link">Coleções</p>
          <p className="footer__link">Perfil do Autor</p>
          <p className="footer__link">Criar Item</p>
          <p className="footer__link">Perfil NFT</p>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-600 opacity-70">
        Copyright &copy; {new Date().getFullYear()} Jordan Vinicius. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
