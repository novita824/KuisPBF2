import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {

  const location = useLocation();

  return (
    <div>
      <div className="flex ">
        <div className="w-1/6 ">
          <div className="px-2 py-3 h-screen  bg-[#231942]">
            <ul className="space-y-2 font-medium rounded-xl">
              <li class="menu-title text-[#eee]  text-center text-3xl">
                <span>QITATRONIK</span>
              </li>
              <div className="divider"></div>
              <li>
                <Link
                  to="/"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#9f86c0]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/" && "bg-[#9f86c0] text-slate-900"}`}

                >
                  <span className="xl-3 ">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Barang"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#9f86c0]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/Barang" && "bg-[#9f86c0] text-slate-900"}`}
                >
              
                  <span className="ml-3 ">Barang</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#9f86c0]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/brands" && "bg-[#9f86c0] text-slate-900"}`}
                >
      

                  <span className="ml-3 ">Merek</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/banks"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#9f86c0]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/banks" && "bg-[#9f86c0] text-slate-900"}`}
                >
                
                  <span className="ml-3 ">Rekening</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className={`flex items-center p-2  rounded-lg  hover:bg-[#9f86c0]  text-[#EEEEEE] hover:text-slate-900 ${location.pathname === "/category" && "bg-[#9f86c0] text-slate-900"}`}
                >
                 
                  <span className="ml-3 ">Kategori</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-5/6">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
