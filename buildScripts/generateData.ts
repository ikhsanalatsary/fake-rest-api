import chalk from "chalk";
import * as fs from "fs";
import * as jsf from "json-schema-faker";
import driverSchema from "./driverSchema";
import IDriver from "../src/models/IDriver";

const { green, red } = chalk;
const compiledDriverSchema = jsf(driverSchema);
const drivers: IDriver[] = compiledDriverSchema.drivers;
const json = JSON.stringify({
  drivers
});

fs.writeFile("./buildScripts/db.json", json, err => {
  if (err) {
    console.log(red(err.message));
  } else {
    console.log(green("Mock API data generated."));
  }
});
