import { cn } from '@/lib/utils';
import Link from 'next/link';
import Button from './Button';

interface MobileNavbarProps {
  isMenuOpen: boolean;
  isMobile: boolean;
}

export default function MobileNavbar({ isMenuOpen, isMobile }: MobileNavbarProps) {
  return (
    <>
      <nav
        className={cn(
          'absolute top-0 left-0 -translate-y-full -z-1 w-full p-8 bg-white transition-transform duration-800',
          isMenuOpen && 'translate-y-18'
        )}
      >
        <ul className='flex flex-col gap-5 text-center pb-5 border-b border-black/25 mb-5'>
          <li>
            <Link href='/' className='heading-sm'>
              Stories
            </Link>
          </li>
          <li>
            <Link href='/' className='heading-sm'>
              Features
            </Link>
          </li>
          <li>
            <Link href='/' className='heading-sm'>
              Pricing
            </Link>
          </li>
        </ul>
        <Button type='button' className='w-full h-12 bg-black text-white heading-sm' text='Get an invite' />
      </nav>
      {isMobile && (
        <div
          className={cn(
            'absolute top-18 left-0 -z-2 w-full h-[calc(100vh-4.5rem)] bg-black/50 transition-opacity duration-400 pointer-events-none opacity-0',
            isMenuOpen && 'opacity-100 pointer-events-auto'
          )}
        />
      )}
    </>
  );
}
