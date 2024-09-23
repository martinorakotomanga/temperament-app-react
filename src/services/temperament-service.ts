import { DESCRIPTIONS, QUESTIONS, RESULTS } from "../models/questions-results";

export default class Temperament {

  static questions: Array<string> = QUESTIONS; //All questions
  static descriptions: Array<string> = DESCRIPTIONS; //All Temperaments
  static results = RESULTS;

  static questionId: number = 0;
  static currentId: number = 0;
  static threeResponses: number[] = [];
  static responses: number[] = [];

  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

  //get question id
  static getQuestionId(): Promise<number> {
    if(this.isDev) {
      return fetch('http://localhost:8080/questionId')
        .then(response => response.json())
        .then(questionId => questionId.value)
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      resolve(this.questionId);
    });
  }

  //change question id
  static changeQuestionId(value: number = 0): Promise<number> {
    if(this.isDev) {
      return fetch('http://localhost:8080/questionId',{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
      })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      this.questionId = value;
      resolve(value);
    });
  }

  // get current id
  static getCurrentId(): Promise<number> {
    if(this.isDev) {
      return fetch('http://localhost:8080/currentId')
        .then(response => response.json())
        .then(currentId => currentId.value)
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      resolve(this.currentId);
    });
  }
  
  //change current id
  static changeCurrentId(value: number = 0): Promise<number> {
    if(this.isDev) {
      return fetch('http://localhost:8080/currentId',{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
      })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      this.currentId = value;
      resolve(value);
    });
  }

  // get three responses
  static getThreeResponses(): Promise<number[]> {
    if(this.isDev) {
      return fetch('http://localhost:8080/threeResponses')
        .then(response => response.json())
        .then(currentId => currentId.value)
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      resolve(this.threeResponses);
    });
  }

  //update three responses
  static updateThreeResponses(value: number[] = []): Promise<number[]> {
    if(this.isDev) {
      return fetch('http://localhost:8080/threeResponses',{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
      })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      this.threeResponses = value;
      resolve(value);
    });
  }

  // get responses
  static getResponses(): Promise<number[]> {
    if(this.isDev) {
      return fetch('http://localhost:8080/responses')
        .then(response => response.json())
        .then(currentId => currentId.value)
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      resolve(this.responses);
    });
  }

  //update responses
  static updateResponses(value: number[] = []): Promise<number[]> {
    if(this.isDev) {
      return fetch('http://localhost:8080/responses',{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
      })
        .then(response => response.json())
        .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      this.responses = value;
      resolve(value);
    });
  }

  //handle error
  static handleError(error: Error): void {
    console.log(error);
  }

  //Find Temperaments
  static findIdxTemperament (responses: number[]): number {
    let max = 0;
    let sum = 0;
    let idxTemp = -1;

    for(let i=0; i<responses.length; i++) {
        if((i+1)%8==0) {
            if(sum>max) {
                max = sum;
                idxTemp = Math.floor(i/8);
            }
            sum=0;
        }
        sum+=responses[i];
    }

    return idxTemp;
  }

  //Get Temperament By Id
  static getTemperament = (id: number = 0): string => {
    return this.descriptions[id];
  }

  //Get Result By Id
  static getResult = (id: number = 0) => {
    return this.results[id];
  }

  //Get Questions
  static getQuestions = (startId: number) : Array<string> => {
    return this.questions.slice(startId, startId+3);
  }

  //Get questions length
  static getQuestionsLength = () : number => {
    return this.questions.length;
  }
}