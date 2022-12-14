import { Banner } from '../components';

const Home = () => (
  <div className="flex justify-center sm:px-4 p-12">
    <div className="w-full minmd:w-4/5">
      <Banner
        parentStyles="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
      />
    </div>
  </div>
);

export default Home;
