import { SUITE_AUDIO_SRC, SWEET_AUDIO_SRC } from '@/app/constants';
import PronunciationColumn from '@/app/PronunciationColumn';


const Home = () => (
  <main className="flex flex-col items-center justify-center p-24">
    <p className="text-5xl lg:text-6xl font-semibold text-center">It&apos;s pronounced &quot;sweet&quot;</p>
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
      <PronunciationColumn word="suite" pronunciation="/swiːt/" audioSrc={SUITE_AUDIO_SRC}/>
      <PronunciationColumn word="sweet" pronunciation="/swiːt/" audioSrc={SWEET_AUDIO_SRC}/>
    </div>
  </main>
);

export default Home;
