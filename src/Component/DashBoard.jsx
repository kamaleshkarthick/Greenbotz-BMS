// import React from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  DocumentCheckIcon,
  CloudIcon
} from "@heroicons/react/24/outline";
import Sidebar from "./SideBar";
import { MenuData } from "../App";
import { PieChart } from '@mui/x-charts/PieChart';

import { useContext } from "react";

const data2 = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 9800 },
  { label: 'Group E', value: 3908 },
  { label: 'Group F', value: 4800 },
];

const DashBoard = () => {
  const { ItemsRequest, searchRequest, reports, workOrders } =
    useContext(MenuData);
  console.log(ItemsRequest);

  return (
    <>
      <div className=" lg:flex min-w-full min-h-full p-4 lg:p-0 ">
        <Sidebar />
        <div className=" w-full h-full flex-col items-center lg:mx-12 [&>*]:pb-12 ">
          <nav className=" w-full h-[25%] flex items-center py-6 lg:justify-between">
            {/* burger menu */}
            <div className=" m-2  xl:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon aria-hidden="true" className="h-8 w-8" />
              </button>
            </div>

            <div className=" flex justify-between flex-1 ">
              {/* Title */}
              <div className="">
                <h2 className=" text-[1rem] font-semibold md:text-[2rem] ">
                  Overview
                </h2>
                <h5 className=" text-[.9rem] font-normal md:text-[1rem] text-gray-600">
                  Cebu Towers
                </h5>
              </div>

              {/* Profile */}
              <div className=" flex  items-center  [&>*]:mr-3">
                <img
                  src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D    "
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover  "
                />
                <h5>Building Management</h5>
                <ChevronDownIcon className="h-6 w-6" />
              </div>
            </div>

            
          </nav>

          <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-none lg:flex  ">
            {[
              { title: "Residents", vals: 110 },
              { title: "Assets", vals: 108 },
              { title: "Contractors", vals: 21 },
              { title: "Active Cases", vals: 110 },
              { title: "Work orders Sent", vals: 110 },
            ].map((item, i) => (
              <div key={i} className="  list-none   pl-4 pr-36 border-l-2 ">
                <li className=" text-gray-600">{item.title}</li>
                <li className="text-2xl">{item.vals}</li>
              </div>
            ))}
          </div>

          <div className="grid gap-6 grid-cols-1  lg:grid-cols-2  xl:grid-cols-3 ">
            {/*  */}
            <div className="p-6 bg-blue-600 text-white rounded-lg shadow">
              <h2 className=" text-lg font-semibold pb-2 mb-4">
                Items Requiring Action
              </h2>
              <div className="space-y-4">
                {ItemsRequest.map((item, i) => (
                  <div key={i} className=" bg-[#9fa4ff58] rounded-xl">
                    <div className="flex justify-between items-center  py-4 px-3">
                      <div className="">
                        <item.icon className=" h-6 w-6  mb-2 stroke-[#ffffff]" />
                        <h4 className="text-md font-normal">{item.label}</h4>
                      </div>
                      <div className="text-xl font-semibold">{item.num}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*  */}
            <div className="p-6 bg-[#fdfdff] text-[#141414] rounded-lg shadow">
              <div className=" text-md   border-b flex ">
                <MagnifyingGlassIcon className="h-6 w-6  mb-2 stroke-[#787878] mr-6" />
                <h4 className="text-lg text-gray-500 font-normal"> Search</h4>
              </div>
              {searchRequest.map((item, i) => (
                <div key={i} className="  border-b  py-3">
                  <div className="flex justify-between items-center  m-4 ">
                    <div className="">
                      <h4 className="text-md font-medium">{item.label}</h4>
                      <h4 className="text-xs font-normal text-gray-500">
                        {item.desc}
                      </h4>
                    </div>
                    <TrashIcon className="h-6 w-6  mb-2 stroke-[#616161]" />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="">
                <div className="bg-blue-500 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-bold">5°C</p>
                      <p className="mt-1">Mostly clear</p>
                    </div>
                    <CloudIcon className="h-12 w-12" />
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center rounded-xl bg-white mt-4 p-4">
                <div className=" ">
                  <h2 className="text-md font-medium mb-4">Cases Graph</h2>
                  <button className=" px-4 py-1 rounded-md bg-slate-200 "> Today</button>
                </div>
                <div className="w-[40%]">
              <PieChart  series={[{
          data: data2,
          cx: 90,
          cy: 150,
          innerRadius: 40,
          outerRadius: 80,
                  },]} height={300} slotProps={{ legend: { hidden: true }, }} />
                
                </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                Management Reports Generated
              </h2>
              <div className="space-y-4">
                {reports.map((report, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center">
                      <DocumentCheckIcon className="h-5 w-5 text-[#222222] mr-3" />
                      <div>
                        <p className="text-sm font-medium">{report.name}</p>
                        <p className="text-xs text-gray-500">{report.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-500">
                      <ArrowDownTrayIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/*  */}
            <div className={`bg-white rounded-lg shadow p-6 `}>
              <h2 className="text-lg font-semibold mb-4">
                Latest Work Orders Sent
              </h2>
              <div className="space-y-4">
                {workOrders.map((order, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center">
                      <DocumentCheckIcon className="h-5 w-5 text-[#222222] mr-3" />
                      <div>
                        <p className="text-sm font-medium">{order.name}</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-blue-500">{order.id}</span>
                  </div>
                ))}
              </div>
            </div>

            {/*  */}
            <div className={`bg-white rounded-lg shadow p-6 `}>
              <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
              <div className="space-y-4">
                {workOrders.map((order, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center">
                      <DocumentCheckIcon className="h-5 w-5 text-[#222222] mr-3" />
                      <div>
                        <p className="text-sm font-medium">{order.name}</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-blue-500">{order.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
