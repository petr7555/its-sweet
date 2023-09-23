'use client';

import { FC } from 'react';
import useSound from 'use-sound';
import Image from 'next/image';

type Props = {
  word: string;
  pronunciation: string;
  audioSrc: string;
};

const WordCard: FC<Props> = ({ word, pronunciation, audioSrc }) => {
  const [play] = useSound(audioSrc, {
    interrupt: true,
  });

  return (
    <div className="flex w-48 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-300 p-4 shadow-xl">
      <p className="text-4xl font-semibold">{word}</p>
      <p className="text-2xl font-semibold">{pronunciation}</p>
      <Image
        className="mt-4 cursor-pointer transition-opacity hover:opacity-50"
        src="/speaker_icon.svg"
        alt="speaker icon"
        width={30}
        height={30}
        priority
        onClick={() => play()}
      />
    </div>
  );
};

export default WordCard;
