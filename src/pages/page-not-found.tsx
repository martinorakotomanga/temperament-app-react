import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import errorImage from '../assets/pictures/35clefairy1600x1200.jpg';
import { motion } from "framer-motion";

const PageNotFound: FunctionComponent = () => {
  motion
  
  return (
    <div className="text-gray-700 w-full text-medium h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl py-5 sofia">Hi, Erreur de connexion !</h1>
      <img className="rounded-md h-2/3 w-1/2" src={errorImage} alt='PageNotFound' />
      <motion.div whileHover={{scale: 1.1}} className="text-gray-800 text-xl py-5">
        <Link to='/'>Retourner à l'accueil !</Link>
      </motion.div>
    </div>
  )
}

export default PageNotFound;