import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import settingImg from '../assets/icons/settings_64px.png';

const About: FunctionComponent = () => {

  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/home');
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col sm:flex-row justify-around sm:justify-between items-center">
        <div className="text-center sirukota text-4xl w-4/5 max-sm:p-5 flex justify-center">
          <div className="flex">
            <img src={settingImg} className="w-12 h-12" alt="about" />
            <h2 className="m-5 text-gray-700">Apropos</h2>
          </div>
          <motion.div whileHover={{scale: 1.1}} onClick={gotoHome} className="mt-20 px-1 py-2 font-medium text-lg max-sm:w-full border-b-4 border-orange-400 hover:cursor-pointer text-gray-600">
            Retour à l'accueil
          </motion.div>
        </div>
        <div className="w-4/5 sm:border-s-2 border-blue-400 sm:m-10 p-10">
          <h1 className="text-4xl rounded-two sirukota text-blue-400">Temperament</h1>
          <p className="mt-7 text-lg sm:ms-8 text-gray-800">
            C'est une application créée dans le but d' aider <br />
            tout le monde à améliorer leur <br /> 
            relation dans la vie professionnelle et sociale.
          </p>
          <h2 className="mt-10 text-lg font-bold text-green-500">Version: 1.0.0</h2>
          <ul className="mt-10">
            <small className="text-2xl text-gray-700">Developper et designer: </small>
            <li className="text-gray-800 mt-5 text-lg sm:indent-5"> - Rakotomanga Martino Dora</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;