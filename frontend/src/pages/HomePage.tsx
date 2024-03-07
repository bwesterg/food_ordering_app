import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Food will make you happy
        </h1>
        <span className="text-xl">Ordering food is easy with HappyEats.com</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeout REALLY fast
          </span>
          <span>
            Download Happy east for lightnight quick happiness
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;