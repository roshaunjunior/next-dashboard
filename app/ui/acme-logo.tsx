import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center leading-none text-white`}
    >
      <p className="text-[33px]">RYTHMz</p>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}
