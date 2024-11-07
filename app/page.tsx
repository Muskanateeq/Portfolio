import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Stats />
      </main>
    </div>
  );
}