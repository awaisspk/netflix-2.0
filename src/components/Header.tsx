import { IconBell, IconSearch } from '@tabler/icons';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navLinks } from '@/constants/navigation-links';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cx(
        'transition-all z-30 duration-500 px-2 h-[100px] fixed inset-x-0  flex items-center justify-between md:px-6',
        {
          'h-[70px] bg-black/90 shadow-2xl': isScrolled,
        }
      )}
    >
      <div className="flex items-center space-x-10">
        <Image
          src="/assets/images/logo.svg"
          alt=""
          width={100}
          height="100%"
          className="cursor-pointer object-contain"
        />
        <nav className="-mt-1 hidden md:block">
          <ul className="flex space-x-4">
            {navLinks.map((link, i) => (
              <li key={i} className="text-white text-shadow hover:text-white/80">
                <Link href={link.path}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center space-x-2">
        <IconSearch className="stroke-white/90 hover:stroke-white/80" />
        <IconBell className="stroke-white/90 hover:stroke-white/80" />
        <Link href="/accounts">
          <a className="overflow-hidden rounded-sm">
            <img src="/assets/profileImage.png" alt="" />
          </a>
        </Link>
      </div>
    </header>
  );
};
