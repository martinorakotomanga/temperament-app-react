import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import questionImg from '../assets/pictures/Questions-rafiki (3).png';
import questionAmicoImg from '../assets/pictures/Questions-amico.png';
import unchecked from '../assets/icons/round_50px.png';
import cancel from '../assets/icons/unchecked_radio_button_50px.png';
import checked from '../assets/icons/checked_radio_button_50px.png';
import TemperamentService from "../services/temperament-service";

const QuestionAnswer: FunctionComponent = () => {

  //Question & Answer State
  const [questions, setQuestions] = useState<string[] | null>(null);
  const [questionsLength, setquestionsLength] = useState<number>(0);
  const [responses, setResponses] = useState<number[]>([]);
  const [questionId, setQuestionId] = useState<number>(0);
  const [currentId, setCurrentId] = useState<number>(0);

  //three Responses State
  const [threeResponses, setthreeResponses] = useState<number[]>([]);

  //Animation State
  const [scale, setScale] = useState<number>(1);

  //Navigation
  const navigate = useNavigate();

  //On Init & On Change (questionId)
  useEffect(() => {
    if(!questionId) {
      TemperamentService.getQuestionId()
        .then(id => setQuestionId(id))
        .then(() => setQuestions(TemperamentService.getQuestions(questionId)));

      TemperamentService.getCurrentId().then(id => {
        if(id == 3) {
          setthreeResponses([]);
          setCurrentId(0);
          return;
        }

        setCurrentId(id);
        TemperamentService.getThreeResponses().then(threeResponses => setthreeResponses(threeResponses));
      });

      TemperamentService.getResponses().then(responses => setResponses(responses));

      setquestionsLength(TemperamentService.getQuestionsLength());
      return;
    }

    TemperamentService.changeQuestionId(questionId)
      .then(() => setQuestions(TemperamentService.getQuestions(questionId)))
      .then(() => setthreeResponses([]));
  }, [questionId]);

  //On choose Response
  const incrementAndReqQuestions = (value: number) => {
    if(currentId == 3) return;

    const newCurrendId = (currentId+1)%4;
    TemperamentService.changeCurrentId(newCurrendId).then(() => setCurrentId(newCurrendId));
    setScale(1.05);

    const newResponses = responses;
    responses[questionId+currentId] = value;
    const newThreeResponses = defThreeResponses(value);

    TemperamentService.updateResponses(newResponses).then(() => setResponses(newResponses));
    TemperamentService.updateThreeResponses(newThreeResponses).then(() => setthreeResponses(newThreeResponses));

    if(currentId == 2) {
      setTimeout(() => {
        setCurrentId(0);
        setQuestionId(questionId+3);
      }, 1000);
    };
    
    if(questionId+currentId == questionsLength-1) {
      const id = TemperamentService.findIdxTemperament(responses);
      setTimeout(() => navigate(`/result/${id}`), 1500);

      TemperamentService.updateResponses();
      TemperamentService.updateThreeResponses();
      TemperamentService.changeQuestionId();
      TemperamentService.changeCurrentId();
    };
  }
  
  //Define background
  const defThreeResponses = (responses: number): number[] => {
    const tabColor = threeResponses;
    tabColor[currentId] = responses;
    return tabColor;
  }

  return (
    <div className="w-full h-full">
      { questions ? (
        <div className="h-full w-full bg-red- flex flex-col items-center">
          <div className="w-full p-5 text-center sm:my-5">
            <div className="progress-bar w-full sm:w-4/5 lg:w-3/5 m-auto bg-gray-200 rounded-full dark:bg-gray-700">
              <motion.div
                animate={{width : `${((questionId+currentId)*100/34)+6}%`}} 
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                {Math.floor((questionId+currentId)*100/32)}%
              </motion.div>
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl max-sm:text-center sm:my-8 sirukota text-gray-600">
            {(questionId+currentId) == questionsLength ?
              'Merci pour votre attention !' :
              'Répondre aux affirmations suivantes !'
            }
          </h2>
          <div className="w-full flex justify-around">
            <div className="w-1/3 lg:w-1/5 max-sm:hidden">
              <img src={questionAmicoImg} alt="Question" className="w-auto"/>
            </div>
            <div className="text-sm sm:text-base max-lg:p-5 flex flex-col items-center w-auto sm:w-3/5 lg:w-2/5">
              { questions.length && (questions.map((question, index) => (
                index == currentId ?
                  ( <motion.div key={index} animate={{scale}} className="rounded-lg p-3 sm:p-5 w-full my-3 border-indigo-500 border-2 sm:border-4">
                      <span className="bg-white me-5">
                        <img src={unchecked} alt="unchecked" className="h-5 w-5 sm:h-7 sm:w-7 inline-block" />
                      </span>
                      <span>{question}</span>
                    </motion.div>
                  ) : (threeResponses[index] > 3) ? (
                        <div key={index} className="border-s-4 border-e-4 border-green-300 p-3 sm:p-5 w-full my-3 rounded-lg shadow-lg">
                          <span className="bg-white">
                              <img src={checked} alt="checked" className="me-3 h-5 w-5 sm:h-7 sm:w-7 inline-block" />
                          </span>
                          <span>{question}</span>
                        </div> 
                      ) : (threeResponses[index] == 3) ? (
                          <div key={index} className="border-s-2 border-e-2 border-red-400 p-3 sm:p-5 w-full my-3 rounded-lg shadow-lg">
                            <span className="bg-white">
                              <img src={cancel} alt="checked" className="me-3 h-5 w-5 sm:h-7 sm:w-7 inline-block" />
                            </span>
                            <span>{question}</span>
                          </div>
                        ) : (
                          <div key={index} className="p-3 sm:p-5 w-full my-3 rounded-md shadow-lg">
                            <span>{question}</span>
                          </div>
                        )
                  ))
                )
              }
            </div>
            <div className="w-1/5 mt-2 max-lg:hidden">
              <img src={questionImg} alt="Question" />
            </div>
          </div>
          {(questionId+currentId) == questionsLength ? (
            <div className="py-10 my-5 text-2xl text-green-500">Test terminé !</div>
          ) : (
            <div className="max-sm:p-2 w-full sm:w-4/5 lg:w-2/3 sm:me-8 absolute bottom-2 text-medium text-center sm:py-10 sm:my-5 flex flex justify-around items-center">
              <h3 className="text-xl sm:text-2xl sirukota text-gray-700">Pas d'accord</h3>
              <div className="w-full sm:w-2/3 flex justify-around items-center">
                <motion.span
                  onClick={() => incrementAndReqQuestions(1)}
                  className="p-6 sm:p-8 lg:p-10 bg-blue-400 rounded-full border-2 hover:border-yellow-500 hover:cursor-pointer">
                </motion.span>
                <span 
                  onClick={() => incrementAndReqQuestions(2)} 
                  className="p-4 sm:p-6 lg:p-8 bg-blue-300 rounded-full border-2 hover:border-yellow-500 hover:cursor-pointer">
                </span>
                <span 
                  onClick={() => incrementAndReqQuestions(3)} 
                  className="p-2 sm:p-4 lg:p-6 bg-teal-100 rounded-full border-2 hover:border-yellow-500 hover:cursor-pointer">
                </span>
                <span 
                  onClick={() => incrementAndReqQuestions(4)} 
                  className="p-4 sm:p-6 lg:p-8 bg-teal-300 rounded-full border-2 hover:border-yellow-500 hover:cursor-pointer">
                </span>
                <span 
                  onClick={() => incrementAndReqQuestions(5)} 
                  className="p-6 sm:p-8 lg:p-10 bg-teal-400 rounded-full border-2 hover:border-yellow-500 hover:cursor-pointer">
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl sirukota text-gray-700">D'accord</h3>
            </div>
          )}
        </div>
      ) : (
        <div className="text-4xl">Chargements...</div>
      )}
    </div>
  )
}

export default QuestionAnswer;