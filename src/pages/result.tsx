import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Temperament from "../services/temperament-service";
import checkedImg from '../assets/icons/checked_50px.png';
import lightOnImg from '../assets/icons/light_64px.png';

type Result = {
  toContinue: string,
  toUpgrade: string,
  picture: string
}

const Result: FunctionComponent = () => {

  //Result State
  const [description, setDescription] = useState<string|null>(null);
  const [result, setResult] = useState<Result|null>(null);

  //Color State
  const [color, setColor] = useState<string[]>([]);
  
  //Tools
  const navigate = useNavigate();
  const id = useParams().id ?? 0;

  //On Init
  useEffect(() => {
    setDescription(Temperament.getTemperament(+id));
    setResult(Temperament.getResult(+id));
    
    if(id != undefined)
      switch(+id) {
        case 0: 
          setColor(['border-orange-300', 'bg-orange-400']);
          break
        case 1: 
          setColor(['border-green-300', 'bg-green-400']);
          break
        case 2: 
          setColor(['border-blue-300', 'bg-blue-400']);
          break
        case 3: 
          setColor(['border-red-400', 'bg-red-400']);
          break
      }
  }, []);

  //Go to Home
  const gotoHome = () => {
    navigate('/home');
  }

  return (
    <div className={`${color[1]} sm:h-full w-full`}>
      {description ? (
        <div className="sm:h-full w-full flex flex-col items-center bg-white" style={{borderRadius: 70}}>
          <div className="mt-10 w-full lg:w-4/5 h-4/5 flex flex-col sm:flex-row">
            <div className={`${color[0]} w-full sm:w-1/2 lg:w-2/5 px-8 h-full lg:border-s-4 rounded-lg`}>
              <div className={`${color[0]} relative bg-white w-32 h-32 m-5 rounded-full border`}>
                <img className="w-72 h-42 absolute bottom-2" src={result?.picture} alt="profil" />
              </div>
              <p className="text-lg text-gray-700 indent-10 tracking-widest">{description}</p>
            </div>
            <div className="w-auto sm:w-3/5 h-full lg:ms-10 max-sm:m-5">
              <div className="sm:m-10 my-10 text-center text-2xl sirukota text-gray-700">Les points forts et à ameliorer</div>
              <div className="sm:px-10">
                <h2 className="text-xl">Points forts: </h2>
                <br />
                <div className="p-5 border-s-4 border-e bg-green-50 border-green-400 rounded-lg shadow-lg">
                  <img className="w-9" src={checkedImg} alt="ok" />
                  <p className="pt-5">{result?.toContinue}</p>
                </div>
              </div>
              <div className="sm:p-10 max-sm:mt-10">
                <h2 className="text-xl">A travailler: </h2>
                <br />
                <div className="p-5 border-s-4 border-e bg-yellow-50 border-yellow-400 rounded-lg shadow-lg">
                  <img className="animate-bounce w-12" src={lightOnImg} alt="toUpdate" />
                  <p className="pt-5">{result?.toUpgrade}</p>
                </div>
              </div>
            </div>
          </div>
          <motion.a 
            whileHover={{scale: 1.1}} 
            onClick={gotoHome} 
            className="max-sm: my-8 px-1 py-2 sirukota font-medium text-xl border-b-4 border-purple-500 text-gray-600 hover:cursor-pointer">Retour à l'accueil
          </motion.a>
        </div> 
      ) : (
        <div className="text-4xl">Chargement...</div>
      )}
    </div>
  )
}

export default Result;