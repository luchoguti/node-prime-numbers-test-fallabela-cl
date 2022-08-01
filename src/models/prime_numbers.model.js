import { NUMBER_START_CALCULATE } from "../config.js";

const calculatePrimeNumber = (number) => {
    let array_number_prime = [];
    for (let i = NUMBER_START_CALCULATE; i <= number; i++) {
        let flag = 0;
        for (let j = NUMBER_START_CALCULATE; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break
            }
        }
        if (i > 1 && flag == 0) {
            array_number_prime.push(i);
        }
    }
    return array_number_prime.sort((element_one,element_two)=>element_two-element_one).join();
}

const validateNumberIsPrime = (number) => {
    if(number === 1){
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

export {
    calculatePrimeNumber,
    validateNumberIsPrime,
}