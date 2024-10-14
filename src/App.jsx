import { createContext } from "react";
import DashBoard from "./Component/DashBoard";

import {
  CalendarIcon,
  BuildingOfficeIcon,
  WrenchIcon,
  UserIcon,
  KeyIcon,
  RectangleGroupIcon,
  InboxArrowDownIcon,
  ListBulletIcon,
  ArchiveBoxIcon,
  CloudIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { icon: RectangleGroupIcon, label: "Dashboard" },
  { icon: WrenchIcon, label: "Cases" },
  { icon: InboxArrowDownIcon, label: "Work Orders Sent" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: ListBulletIcon, label: "Maintenance Schedule" },
  { icon: BuildingOfficeIcon, label: "Building" },
  { icon: UserIcon, label: "Residents" },
  { icon: KeyIcon, label: "Keys" },
  { icon: ArchiveBoxIcon, label: "Parcels" },
  { icon: UserGroupIcon, label: "Contractors" },
  { icon: CloudIcon, label: "Cloudsense" },
];
const ItemsRequest = [
  { icon: WrenchIcon, label: "Overdue cases", num: 9 },
  { icon: UserGroupIcon, label: "Contractors Isurance Expiring", num: 5 },
  { icon: UserIcon, label: "Work Orders Sent", num: 5 },
  { icon: ListBulletIcon, label: "Overdue Maintenance Schedule", num: 343 },
];
const searchRequest = [
  {
    label: "Building Management - 28/02/2018",
    desc: "Check with unit 101 for the key",
  },
  { label: "Peter Graham - 7/10/2016", desc: "Check all Mechanical Equipment" },
  { label: "Omar farrer - 5/12/2017", desc: "check rooftop boilers" },
  {
    label: "Building Management - 28/02/2018",
    desc: "Check with unit 101 for the key",
  },
];
const reports = [
  { name: "Report 10/10/2018 - 15/10/2018", date: "Created 14/10/2018" },
  { name: "Report 10/10/2018 - 15/10/2018", date: "Created 14/10/2018" },
  { name: "Report 10/10/2018 - 15/10/2018", date: "Created 14/10/2018" },
  { name: "Report 10/10/2018 - 15/10/2018", date: "Created 14/10/2018" },
  { name: "Report 10/10/2018 - 15/10/2018", date: "Created 14/10/2018" },
];

const workOrders = [
  { name: 'ABC Maintenance', id: 'WO#513 - A', date: 'Sent: 14/10/2018' },
  { name: 'Imina', id: 'WO#513 - A', date: 'Sent: 14/10/2018' },
  { name: 'MYBOS', id: 'WO#512 - B', date: 'Sent: 14/10/2018' },
  { name: 'ABC Maintenance', id: 'WO#513 - A', date: 'Sent: 14/10/2018' },
  { name: 'ABC Lift Company', id: 'WO#510 - A', date: 'Sent: 14/10/2018' },
]
export const MenuData = createContext();

function App() {
  return (
    <>
      <MenuData.Provider
        value={{ menuItems, ItemsRequest, searchRequest, reports,workOrders }}
      >
        <div className=" min-h-screen w-full bg-[#f2f2ff] ">
          <DashBoard />
        </div>
      </MenuData.Provider>
    </>
  );
}

export default App;
