import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import Link from "next/link";

interface MobileNavProps {
  items?: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <div className='fixed top-16 left-0 right-0 bottom-0 z-50 p-6 shadow-md md:hidden'>
      <div className='grid gap-6 bg-popover p-4'>
        <Link href={"/"} className='font-bold'>
          {siteConfig.name}
        </Link>
        <nav className='text-sm flex gap-4'>
          {items?.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
