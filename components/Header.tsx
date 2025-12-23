'use client';

import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavbar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { width } = useViewportSize();

  const isMobile = width < 768;

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className='relative z-10'>
      <div className='flex items-center justify-between w-full px-6 py-7 bg-white'>
        <Link href='/'>
          <Image src='/assets/logo.svg' width={170} height={16} alt='Photosnap Logo' />
        </Link>
        {isMobile && (
          <button type='button' onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <Image src='/assets/close.svg' width={16} height={15} alt='Close Icon' />
            ) : (
              <Image src='/assets/menu.svg' width={20} height={6} alt='Menu Icon' />
            )}
          </button>
        )}
      </div>

      <MobileNavbar isMenuOpen={isMenuOpen} isMobile={isMobile} />
    </header>
  );
}
