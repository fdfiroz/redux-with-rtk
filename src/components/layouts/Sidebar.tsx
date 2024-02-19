import {
  SquaresPlusIcon,
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';

import logo from '../../assets/image/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        <Image src={logo} alt="logo"  width={40}
                height={40} />
        <Link
          href="/"
          className="p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all "
        >
          <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
        </Link>
        <Link
          href="/chat"
          className="p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all "
          
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 group-hover:text-white " />
        </Link>
        <Link
          className="p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all "
          href="/settings"
          
        >
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </Link>
        <Link
          href="/profile"
          className="p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all  "

        >
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
