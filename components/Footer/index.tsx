import Image from "next/image";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-20">
        {/* <!-- Footer Top --> */}
        <div className="py-20 lg:py-25 ">
          {/* Usa grid para distribuir mejor las secciones */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Columna 1: Logo y Contacto directo */}
            <div>
              <a href="#" className="relative inline-block">
                <Image
                  width={410}
                  height={100}
                  src="/logo.png"
                  alt="Logo"
                  className="-ml-8 dark:hidden"
                />
                <Image
                  width={410}
                  height={100}
                  src="/logo.png"
                  alt="Logo"
                  className="-ml-8 hidden dark:block"
                />
              </a>
              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px] font-bold">
                Contact
              </p>
              <a
                href="/support"
                className="text-itemtitle font-medium text-black dark:text-white"
              >
                aosinglefamilyservices@gmail.com
              </a>
            </div>

            {/* Columna 2: Sección "Pages" */}

            {/* Columna 3: Sección "Support" */}

            {/* Columna 4: Formulario de Contacto */}
            <div>
              <h4 className="mb-9 text-itemtitle2 text-black dark:text-white xl:text-center font-bold ">
                Contact Us
              </h4>
              <p className="mb-4 w-[90%] xl:text-center xl:w-full">
                Feel free to contact us and schedule a call.
              </p>
              <form action="#">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 
                               focus:border-primary focus:outline-none 
                               dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />
                  <button
                    aria-label="signup to newsletter"
                    className="absolute right-0 p-4"
                  >
                    <svg
                      className="fill-[#757693] hover:fill-primary dark:fill-white"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1487)">
                        <path
                          d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1487">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Footer Bottom --> */}
        <div
          className="grid grid-cols-1 gap-5 border-t border-stroke py-7 
             dark:border-strokedark 
             lg:grid-cols-3  /* 3 columnas en pantallas grandes */
             lg:items-center  /* centra verticalmente en la misma fila */
  "
        >
          {/* Columna 1: Policy Link */}
          <div className="flex justify-center lg:justify-start">
            <ul className="flex items-center gap-8">
              <li>
                <a href="/policy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Redes sociales */}
          <div className="flex justify-center">
            <SocialMedia />
          </div>

          {/* Columna 3: Copyright */}
          <div className="flex justify-center lg:justify-end">
            <p>&copy; {new Date().getFullYear()} Single Family Services</p>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>
  );
};

export default Footer;
