import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

export default function BlogPostCard({ title, slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'transform hover:scale-[1.05] transition-all',
        'rounded-xl w-full md:w-1/3 p-1'
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white border-black border-4 dark:bg-lazy-sun rounded-lg  p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 tracking-tight">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
