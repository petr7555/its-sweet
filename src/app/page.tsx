import {SUITE_AUDIO_SRC, SWEET_AUDIO_SRC} from '@/app/constants';
import PronunciationColumn from '@/app/PronunciationColumn';
import Image from "next/image";


const Home = () => (
    <>
        <main className="flex flex-col items-center justify-center p-24">
            <p className="text-5xl lg:text-6xl font-semibold text-center">It&apos;s pronounced &quot;sweet&quot;</p>
            <div
                className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
                <PronunciationColumn word="suite" pronunciation="/swiːt/" audioSrc={SUITE_AUDIO_SRC}/>
                <PronunciationColumn word="sweet" pronunciation="/swiːt/" audioSrc={SWEET_AUDIO_SRC}/>
            </div>
        </main>
        <footer>
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-xl font-semibold text-center">About the project:</p>
                <a
                    className="flex items-center justify-center gap-2 mt-2"
                    href="https://github.com/petr7555/its-sweet#about-the-project"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/github_mark.svg"
                        alt="GitHub icon"
                        width={30}
                        height={30}
                        priority
                    />
                    <p className="text-xl font-semibold">GitHub</p>
                </a>
                <p className="text-sm font-semibold text-center mt-4">

                    Favicon by <a href="https://www.flaticon.com/free-icons/ice-cream" title="ice-cream favicon"
                                  className="text-blue-500">Freepik
                    - Flaticon</a>
                </p>
            </div>
        </footer>
    </>
);

export default Home;
