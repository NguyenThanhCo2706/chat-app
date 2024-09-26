import Label from "@/app/components/Label";
import MessageItem from "@/app/components/MessageItem";
import Image from "next/image";

import HomeIcon from "./statics/images/home.svg";
import ChatIcon from "./statics/images/chat.svg";
import PauseIcon from "./statics/images/pause.svg";
import SearchIcon from "./statics/images/search.svg";
import CalendarIcon from "./statics/images/calendar.svg";
import SettingIcon from "./statics/images/setting.svg";
import ArrowDown from "./statics/images/arrowDown.svg";
import Add from "./statics/images/add.svg";
import Avatar from "./statics/images/avatar.png";


export default function Home() {
  return (
    <div className="flex flex-row h-[100vh] w-full">
      <div className="w-[88px] p-4 shadow">
        <div className="flex h-full flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="bg-[#615EF0] w-[56px] h-[56px] text-white text-center leading-[56px] rounded-2xl font-bold text-2xl mb-12">
              Q
            </div>
            <Image src={HomeIcon} alt="home" className="mb-8" />
            <Image src={ChatIcon} alt="chat" className="mb-8" />
            <Image src={PauseIcon} alt="pause" className="mb-8" />
            <Image src={SearchIcon} alt="search" className="mb-8" />
            <Image src={CalendarIcon} alt="ccalendar" className="mb-8" />
          </div>
          <div>
            <Image src={SettingIcon} alt="setting" className="mb-8" />
          </div>
        </div>
      </div>
      <div className="w-[349px] shadow">
        <div className="w-full h-[89px] p-6">
          <div className="flex justify-between">
            <div className="flex">
              <span className="font-bold text-xl mr-1">Messages</span>
              <Image src={ArrowDown} alt={"arrow-down"} ></Image>
            </div>
            <Image src={Add} alt={"add"} className="" ></Image>
          </div>
        </div>
        <div className="w-full h-[72px] py-3 px-6">
          <input type="text" name="" id="" placeholder="Search messages" className="w-full bg-[#F3F3F3] py-[10px] px-[20px] rounded-xl" />
        </div>
        <div className="px-4">
          <div className="p-2 flex">
            <div className="mr-3">
              <Image src={Avatar} alt={""}></Image>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <span className="font-bold">Florencio Dorrance</span>
                <span className="text-gray-400 font-semibold">24m</span>
              </div>
              <span className="text-gray-400 font-semibold">woohoooo</span>
              <div className="mt-3">
                <Label className="text-gray-600 border-2 border-gray-200 text-xs">Some content</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto"></div>
      <div className="w-[362px]">
        Cow
      </div>
    </div>
  );
}
