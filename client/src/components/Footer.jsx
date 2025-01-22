import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              The{" "}
              <span
                className="px-2 py-1 text-white bg-gradient-to-r from-red-600 to-blue-600 rounded-md font-comic shadow-md "
                style={{
                  textShadow: "1px 1px 2px black",
                  position: "relative",
                }}
              >
                Dailybugal
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/AbhiSanghi/Portfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abhi's Portfolio
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Dailybugal
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/AbhiSanghi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/abhi-sanghi/">
                  LinkdIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Abhi Sanghi"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100007785466659"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/abhi_sanghii/?hl=en"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/abhi-sanghi/"
              icon={BsLinkedin}
            />
            <Footer.Icon href="https://github.com/AbhiSanghi" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
