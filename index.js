import cowsay from "cowsay";
import dotenv from "dotenv";

dotenv.config();

console.log(cowsay.say({
    text: `Hello, je suis ${process.env.NAME} du campus ${process.env.CAMPUS} !`,
    e : "oO",
    T : "U "
}));