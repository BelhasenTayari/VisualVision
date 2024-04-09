import IosButton from "@/components/IosButton";
import Navbar from "@/components/Navbar";
import PlayStoreButton from "@/components/PlayStoreButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-900">
      <Navbar />
      <div className="container pt-20 md:pt-14 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-4xl text-gray-100 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Empowering Your Image Classification Journey
          </h1>
          <p className="leading-normal text-base text-gray-300 md:text-xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Visual Vision is an innovative platform designed for enthusiasts,
            students, and professionals in the field of computer vision. Our
            mission is to provide a user-friendly interface for exploring,
            constructing, and evaluating image classification models. With
            Visual Vision, you can dive into the world of machine learning with
            ease and efficiency.
          </p>

          <p className="text-blue-200 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            Download our app:
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse fade-in">
            <IosButton />
            <PlayStoreButton />
          </div>
        </div>

        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src="https://www.indidigital.in/wp-content/uploads/2024/02/mobile_app_promotion_services_packages_indidigital.png"
          />
        </div>

        <div className="w-full pb-4 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline">
            &copy; App 2024
          </a>
        </div>
      </div>
    </main>
  );
}
