import HeroImage from '../assets/images/hero.svg';

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid grid-cols-2 items-center gap-20 pt-32 ">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar Membuat Website Dengan{" "}
              <span className="font-bold text-sky-400 underline">
                React
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ipsa facilis sequi quod sunt quibusdam quaerat officiis obcaecati rerum ut.
            </p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Tentang Kami 
            <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage