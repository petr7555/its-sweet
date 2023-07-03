'use client';

import { FC } from 'react';
import useSound from 'use-sound';
import Image from 'next/image';

type Props = {
  word: string;
  pronunciation: string;
  audioSrc: string;
};

const PronunciationColumn: FC<Props> = ({ word, pronunciation, audioSrc }) => {
  const [play] = useSound(audioSrc, {
    interrupt: true,
  });

  return (
    <div
      className="flex flex-col items-center justify-center w-48 p-4 m-4 bg-white rounded-xl shadow-lg">
      <p className="text-4xl font-semibold">{word}</p>
      <p className="text-2xl font-semibold">{pronunciation}</p>
      <Image
        className="cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-in-out mt-4"
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

export default PronunciationColumn;
