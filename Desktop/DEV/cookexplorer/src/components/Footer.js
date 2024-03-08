import React, { useEffect, useState } from "react";

const Footer = () => {
  const [instagramImages, setInstagramImages] = useState([]);

  useEffect(() => {
    const fetchInstagramImages = async () => {
      try {
        const accessToken =
          "IGQWRPRV9lazhEaHJMMTg1d0JGMG05NENfUVBiU1JlV0JxYnIzcWIwc3dETU85RTlrYkxxNUNpWDNIeEhON1daS29kb2ttUnBQalAzY3ZAfencwckxzT2hrdy1Ic2NMSlVyNTNwUmtGM2tyOFBZAZA0JlVDZAqWEhoMkEZD";
        const response = await fetch(
          `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
        );

        const data = await response.json();
        console.log("Raw Instagram API response:", data);

        // Filtrer les posts pour inclure les images (IMAGE) et les carrousels (CAROUSEL_ALBUM)
        const imagePosts = data.data.filter(
          (post) =>
            post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
        );
        // Trier les posts par timestamp en ordre décroissant (du plus récent au moins récent)
        const sortedPosts = imagePosts.sort(
          (a, b) => b.timestamp - a.timestamp
        );
        // Sélectionner les trois premiers posts
        const latestThreePosts = sortedPosts.slice(0, 4);
        setInstagramImages(latestThreePosts);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des images Instagram",
          error
        );
      }
    };

    fetchInstagramImages();
  }, []);

  return (
    <footer
      className="shadow-2xl w-full bg-white text-oceanH1 py-8 bottom-0 sm:flex sm:flex-col align-center items-center "
      style={{
        boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.1)", // Ajustez les valeurs selon vos besoins
      }}
    >
      <div className="w-full lg:p-8 lg:inline-flex  lg:px-16 align-start items-start justify-center">
        <div className=" lg:w-2/3 flex-wrap lg:text-left text-center" id="post_instagram">
          <h3 className="lg:mb-0 mb-4 lg:ml-4 font-bold"> Retrouvez-moi sur Instagram :</h3>
          <ul className="w-full flex flex-wrap items-start align-center justify-center lg:align-start lg:justify-start" >
  {instagramImages.map((image) => (
    <li key={image.id} className="max-w-[33%] lg:w-[7rem] mr-2 mb-2 lg:ml-4 lg:my-4">
      <a
        href={image.permalink}
        className="w-full block rounded overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-full h-1/2 object-cover rounded"
          src={image.media_url}
          alt={image.permalink}
        />
      </a>
    </li>
  ))}
</ul>
        </div>
        <div
          className="w-fit lg:w-1/3 ml-12 lg:my-0 my-8 container flex flex-col items-start"
          id="lien_important"
        >
          <h3 className="font-bold  text-left"> Autres : </h3>

          <ul className="w-full flex flex-col  sm:flex-wrap">
            <li className="py-2">
              {" "}
              <a
                href="/conditions_generales"
                className="hover:text-[#09929D] font-lato font-extralight"
              >
                Conditions Générales de Vente
              </a>
            </li>

            <li className="pb-2">
              <a
                href="/politique_de_confidentialite"
                className="hover:text-[#09929D] font-lato font-extralight"
              >
                Politique de confidentialité{" "}
              </a>
            </li>

            <li className="pb-2">
              {" "}
              <a
                href="/mentions_legales"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#09929D] font-lato font-extralight"
              >
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-sm text-center px-6">
        <p>&copy; 2024 Margot Batoufflet. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
