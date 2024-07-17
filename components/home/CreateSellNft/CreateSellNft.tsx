import CreateSellNftCard from "./CreateSellNftCard";

function CreateSellNft() {
  return (
    <div className="pt-16 pb-20">
      <h1 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Crie e venda seus NFTs
      </h1>
      <div
        className="w-[80%] mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-4 gap-12"
      >
        <div data-aos="fade-out" data-aos-anchor-placement="top-center">
          <CreateSellNftCard
            image="/images/p1.png"
            title="1. Configure sua carteira"
            description="Configure sua carteira digital para armazenar e gerenciar seus NFTs com segurança."
          />
        </div>
        <div
          data-aos="fade-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="20"
        >
          <CreateSellNftCard
            image="/images/p2.png"
            title="2. Crie sua coleção"
            description="Crie uma coleção para agrupar seus NFTs e atrair compradores."
          />
        </div>
        <div
          data-aos="fade-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="40"
        >
          <CreateSellNftCard
            image="/images/p3.png"
            title="3. Adicione seus NFTs"
            description="Adicione seus NFTs com descrições e imagens atraentes."
          />
        </div>
        <div
          data-aos="fade-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="60"
        >
          <CreateSellNftCard
            image="/images/p4.png"
            title="4. Liste-os para venda"
            description="Liste seus NFTs para venda, definindo um preço justo."
          />
        </div>
      </div>
    </div>
  );
}

export default CreateSellNft;
