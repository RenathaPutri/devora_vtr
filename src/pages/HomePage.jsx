import HeroImage from '../assets/images/hero.svg';
import AboutImage from '../assets/images/about.svg';

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">

        {/* HERO SECTION */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32 ">
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
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] md:m-0 mx-auto md:m0" />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[500px] md:m-0 mx-auto"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar Membuat Website Dengan{" "}
              <span className="font-bold text-sky-400 underline">
                React
              </span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ipsa facilis sequi quod sunt quibusdam quaerat officiis obcaecati rerum ut.
            </p>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="services pt-32">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Layanan
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className="service-box pt-12 grid grid-cols-3 gap-6">
          <div className="box bg-sky-400 rounded-lg shaodw p-4">
            <i className="ri-number-1"></i>
              <h3>
                Service Name 1
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit quia quod blanditiis nam rerum.
              </p> 
          </div>
        </div>

        <div className="service-box">
          <div className="box bg-sky-400 rounded-lg shaodw p-4">
            <i className="ri-number-1"></i>
              <h3>
                Service Name 1
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit quia quod blanditiis nam rerum.
              </p> 
          </div>
        </div>

        <div className="service-box">
          <div className="box bg-sky-400 rounded-lg shaodw p-4">
            <i className="ri-number-1"></i>
              <h3>
                Service Name 1
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit quia quod blanditiis nam rerum.
              </p> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage