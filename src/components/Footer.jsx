
const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; {new Date().getFullYear()} Devora VTR. All rights reserved. 
          <br />
          Made with <span className="font-bold text-red-500">♥</span> by Renatha Putri S.
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl ms-4"></i>
          <i className="ri-twitter-fill text-2xl ms-4"></i>
          <i className="ri-linkedin-box-fill text-2xl ms-4"></i>
          <i className="ri-reddit-fill text-2xl ms-4"></i>      

        </div>
      </div>
    </div>
  )
}

export default Footer