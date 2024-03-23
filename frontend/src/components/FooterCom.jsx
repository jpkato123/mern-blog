import { Footer } from "flowbite-react"
import { BsFacebook,BsGithub,BsInstagram, BsTwitter,} from 'react-icons/bs'
import { Link } from "react-router-dom";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                HT
              </span>
              Blog
            </Link>
          </div>
          <div className="grid gird-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"// mo trang moi tab moi
                    >
                        100 JS Project
                    </Footer.Link>
                    <Footer.Link
                    href="/about"
                    >
                        About Blog
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>
                <Footer.Title title="FLLOW US"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener noreferrer"// mo trang moi tab moi
                    >
                        Github
                    </Footer.Link>
                    <Footer.Link
                    href="#"
                    >
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>
                <Footer.Title title="LEGAL"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                    href="#"
                  
                    >
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                    href="#"
                    >
                        Term &amp; Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-start sm:justify-between">
            <Footer.Copyright href="#" by="HT Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
                <Footer.Icon href="#" icon={BsGithub}/>
                
            </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom