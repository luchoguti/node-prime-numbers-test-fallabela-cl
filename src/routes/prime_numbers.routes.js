import express from "express"
import { validateNumberIsPrime,calculatePrimeNumber } from '../models/prime_numbers.model.js'

const router = express.Router()

router.get("/prime_numbers/:number",async (req, res)=>{
    try{
        if(isNaN(Number(req.params.number))){
            throw new Error("Parameter should be a Number.")
        }
        console.log(Number(req.params.number));
        if(Number(req.params.number) % 1 != 0){
            throw new Error("Parameter should be a Natural Number.")
        }
        if(!validateNumberIsPrime(Number(req.params.number))){
            throw new Error("Number is not prime.")
        }
        let calculate = calculatePrimeNumber(Number(req.params.number));
        if(!calculate){
            throw new Error("It was not possible to calculate the prime numbers.")
        }
        res.send({
            msg:"Prime numbers were successfully calculated.",
            prime_numbers: calculate
        });
    }catch (error){
        res.status(404).json({ msg: error.toString(),prime_numbers:""});
    }
})

export default router;