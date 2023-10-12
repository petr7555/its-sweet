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
    <div data-cy="word-card" className="flex w-48 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-300 p-4 shadow-xl">
      <p className="text-4xl font-semibold">{word}</p>
      <p className="text-2xl font-semibold">{pronunciation}</p>
      <button
        className="mt-4 cursor-pointer transition-opacity hover:opacity-50"
        onClick={() => play()}
        aria-label={`Listen to pronunciation of the word ${word}`}
      >
        <Image
          src="/speaker_icon.svg"
          alt="Speaker icon"
          width={30}
          height={30}
          priority
        />
      </button>
    </div>
  );
};

export default WordCard;
