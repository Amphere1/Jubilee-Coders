import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <section className=" py-[80px]  flex justify-center px-6 lg:px-20 bg-black">
      <div className="w-full max-w-7xl">
    
        <footer className="mt-20  bg-black text-white pt-16 pb-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="font-bold text-xl mb-6 bg-clip-text ">
              Jubilee Coders
              </h3>
              <p className="mb-6 leading-relaxed">
              Bringing fun to life with creativity and technology. Join us in redefining entertainment!
              </p>
              <div className="flex space-x-5">
                <a href="#" className=" hover:text-blue-600 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className=" hover:text-blue-400 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className=" hover:text-blue-700 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-semibold  mb-4">Company</h3>
              <ul className="space-y-3">
                {['About', 'Careers', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group  hover:text-blue-600 flex items-center">
                      {item}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="font-semibold  mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Blog', 'Documentation', 'Help Center', 'API Reference'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group  hover:text-blue-600 flex items-center">
                      {item}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group text-white hover:text-blue-400 flex items-center">
                      {item}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className=" text-sm">
                © {new Date().getFullYear()} Your Brand. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm  hover:text-blue-600">Status</a>
                <a href="#" className="text-sm  hover:text-blue-600">Sitemap</a>
                <a href="#" className="text-sm hover:text-blue-600">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default App;