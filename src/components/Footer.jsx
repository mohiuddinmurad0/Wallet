import { footerLinks } from "../utils";
import { useNavigate } from "react-router-dom";


const Footer = () => {

  const navigate = useNavigate();

  const date = new Date().getFullYear();
  return (
    <section className="relative font-poppins pb-10 sm:pb-16">
      <div className="flex items-start md:flex-row flex-col gap-10 md:gap-24">
        <div className="md:max-w-[370px] p-5">
        <h2
          onClick={() => navigate("/")}
          className="hover:text-secondary text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-md cursor-pointer transition-transform transform"
        >
          Wallet
        </h2>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg mt-5">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="w-full md:flex-1 flex items-start ss:justify-between gap-10 ss:gap-5 ss:flex-nowrap flex-wrap p-6">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-3 xs:gap-5 text-dimWhite mt-5">
                {item.links.map((link, index) => (
                  <a key={index} href={link.link} target="_blank">
                    <li className="text-[.9rem] font-[500] hover:text-secondary">
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col gap-5 pt-5 mt-10 sm:mt-16 border-t">
        <p className="md:text-base xs:text-sm text-xs p-5">
          Copyright Ⓒ {date} All Rights Reserved.
        </p>
    
      </div>
    </section>
  );
};

export default Footer;
