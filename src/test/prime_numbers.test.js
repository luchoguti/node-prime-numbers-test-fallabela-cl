import app from '../app'
import request from 'supertest'
import { validateNumberIsPrime,calculatePrimeNumber } from '../models/prime_numbers.model'

const number_validate = 7;
const number_validate_negative = -7;
const number_validate_decimal = 7.5;
const string_validate = 'test';
const is_not_prime_number = 1;
const number_test_prime_number = '7,5,3,2';

describe('GET /prime_numbers',()=>{
    test('should respond with a 200 status code and calculate prime number is correct',async () => {
        const response = await request(app).get(`/prime_numbers/${number_validate}`).send()
        expect(response.statusCode).toBe(200)
        expect(response.body.prime_numbers).toEqual(number_test_prime_number)
    })
    test('should respond Parameter should be a Number.',async () => {
        const response = await request(app).get(`/prime_numbers/${string_validate}`).send()
        expect(response.statusCode).toBe(404)
        expect(response.body.msg).toEqual('Error: Parameter should be a Number.')
    })
    test('should respond with a 404 status code since the number is negative',async () => {
        const response = await request(app).get(`/prime_numbers/${number_validate_negative}`).send()
        expect(response.statusCode).toBe(404)
        expect(response.body.msg).toEqual('Error: Number is not prime.')
    })
    test('should respond with a 404 status code since the number is a decimal',async () => {
        const response = await request(app).get(`/prime_numbers/${number_validate_decimal}`).send()
        expect(response.statusCode).toBe(404)
        expect(response.body.msg).toEqual('Error: Parameter should be a Natural Number.')
    })
})
describe('validateNumberIsPrime function',()=>{
    it('validate that one not is prime number should return false', function () {
        expect(validateNumberIsPrime(is_not_prime_number)).toEqual(false);
    });
});

describe('calculatePrimeNumber function',()=>{
    it('should return the prime numbers', function () {
        expect(calculatePrimeNumber(number_validate)).toEqual(number_test_prime_number);
    });
})
