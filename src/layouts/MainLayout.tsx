import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 max-w-[1200px] mx-auto w-full py-6 px-3 sm:py-8 sm:px-4 md:py-10 md:px-6 lg:py-12 lg:px-8 xl:max-w-[1400px] xl:py-16 xl:px-12 2xl:max-w-[1600px] 2xl:py-20 2xl:px-16">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

