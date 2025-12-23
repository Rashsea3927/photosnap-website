import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonType = {
  type: 'link' | 'button';
  href?: string;
  text: string;
  className: string;
};

export default function Button({ type, href, text, className }: ButtonType) {
  if (type === 'link' && href) {
    return (
      <Link href={href} className={cn(className)}>
        {text}
      </Link>
    );
  }

  return (
    <button type='button' className={cn(className)}>
      {text}
    </button>
  );
}
