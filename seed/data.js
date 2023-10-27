import db from "../db/connection.js";
import Character from "../models/Character.js";
import characters from "./characters.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
 
  await db.dropDatabase();

  
  await Character.create(characters);
 

  console.log(chalk.magenta("Characters created!"));

  
  await db.close();
};

insertData();

