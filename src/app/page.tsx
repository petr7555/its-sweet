import WordCard from '@/app/WordCard';
import Image from 'next/image';

const Home = () => (
  <>
    <main className="flex flex-col items-center justify-center p-10 md:p-24">
      <h1 className="text-center text-5xl font-semibold md:pb-4 md:text-6xl">
        It&apos;s pronounced &quot;sweet&quot;
      </h1>
      <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-14">
        <WordCard
          word="suite"
          pronunciation="/swiːt/"
          audioSrc="/suite_sweet_pronunciation.mp3"
        />
        <WordCard
          word="sweet"
          pronunciation="/swiːt/"
          audioSrc="/suite_sweet_pronunciation.mp3"
        />
      </div>
    </main>
    <footer className="flex flex-col items-center justify-center p-4">
      <p className="text-center text-xl font-semibold">
        Read more about this project on:
      </p>
      <a
        className="mt-2 flex items-center justify-center gap-2"
        href="https://github.com/petr7555/its-sweet#about-the-project"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read more about this project on GitHub"
      >
        <Image
          src="/github_mark.svg"
          alt="GitHub logo"
          width={30}
          height={30}
          priority
        />
        <p className="text-xl font-semibold">GitHub</p>
      </a>
      <p className="mt-4 text-center text-sm">
        Favicon by{' '}
        <a
          className="text-blue-800"
          href="https://www.flaticon.com/free-icons/ice-cream"
          aria-label="Favicon source"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik - Flaticon
        </a>
      </p>
    </footer>
  </>
);

export default Home;
