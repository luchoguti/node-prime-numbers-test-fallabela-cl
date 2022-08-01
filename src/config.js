import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const NUMBER_START_CALCULATE = process.env.NUMBER_START_CALCULATE || 2;
