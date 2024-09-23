import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import interViewGif from '../assets/pictures/Interview.gif';

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  // Go to
  const goTo = (page: string) => {
    navigate(`/${page}`);
  }

  return (
    <div className="max-sm:border-s-2 max-sm:border-blue-400 w-full h-full flex max-sm:flex-col justify-between">
      <div className="h-full max-sm:bg-white max-xl:bg-indigo-50 max-sm:w-full max-xl:w-2/5 w-1/3 flex xl:rounded-e-full sm:border-e-2 border-blue-500 sm:shadow-lg flex-col justify-around sm:justify-between">
        <h1 className="mt-20 ms-12 sm:ms-20 text-4xl max-xl:text-3xl text-blue-400 sirukota">Temperament</h1>
        <p className="max-sm:text-center max-sm:p-5 sm:ms-10 font-medium sirukota text-xl xl:text-4xl lg:text-3xl text-gray-600">
          "Améliorez vos relations, développer votre carrière, trouver votre voie."
        </p>
        <small className="ms-12 sm:ms-10 text-xl max-xl:text-base text-gray-600">
          En comprenant mieux votre personnalité,<br /> vous pourrez optimiser vos choix <br /> et atteindre vos objectifs.
        </small>
        <em className="ms-12 sm:ms-10 text-lg max-xl:text-base text-gray-900"> Essayer nos outils gratuis dès maintenant !</em>
        <nav className='max-sm:absolute top-4 sm:p-1 sm:m-5 max-sm:mb-5 w-full sm:w-4/5 flex justify-around'>
          <motion.a
            whileHover={{scale: 1.1}} 
            onClick={() => goTo('about')}
            className="px-4 py-2 lg:border-2 border-yellow-500 rounded-full hover:cursor-pointer hover:bg-yellow-500 hover:text-white hover:border-white">
            <h2 className='max-lg:hidden'>Apropos</h2>
            <img className="h-10 lg:hidden" src="./src/assets/icons/icons8_about_64.png" alt="about" />
          </motion.a>
          <motion.a 
            whileHover={{scale: 1.1}}
            href="https://www.facebook.com/thon.rkt"
            className="px-4 py-2 lg:border-2 border-blue-400 rounded-full hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-white">
            <h2 className='max-lg:hidden'>Contact</h2>
            <img className="h-10 lg:hidden" src="./src/assets/icons/phone_50px.png" alt="about" />
          </motion.a>
          <motion.a 
            whileHover={{scale: 1.1}}
            href="mailto:martinodorarakotomanga@gmail.com"
            className="px-4 py-2 lg:border-2 border-red-500 rounded-full hover:cursor-pointer hover:bg-red-500 hover:text-white hover:border-white">
            <h2 className='max-lg:hidden'>Rapport</h2>
            <img className="h-9 lg:hidden" src="./src/assets/icons/collaboration_24px.png" alt="about" />
          </motion.a>
        </nav>
      </div>
      <div className="max-sm:h-auto h-full max-sm:w-auto max-xl:w-3/5 w-2/3">
        <div className="max-sm:hidden w-3/5 m-auto py-4 rounded-full border-2 mt-20"></div>
        <div className="max-sm:hidden w-full h-3/5 flex justify-center mt-10">
          <img src={interViewGif} className=" h-full" />
        </div>
        <div className="w-full max-sm:mb-10 mt-10 flex justify-center max-sm:">
          <motion.div whileHover={{scale: 1.1}} onClick={() => goTo('test')} className="rounded-lg sm:rounded-full text-gray-800 px-5 text-base sm:text-lg py-3 border-2 border-sky-300 hover:cursor-pointer hover:bg-sky-500 hover:text-white hover:border-white">Commencer !</motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home;
