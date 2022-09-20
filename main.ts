import { Project } from "./types/global.d";

/*
 * @Author: zi.yang
 * @Date: 2022-09-01 08:30:12
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-09-20 08:16:16
 * @Description:
 * @FilePath: /vola-cli/main.ts
 */
console.log("hello, vola-cli");

class MyProject {
  public id: string;

  public name: string;

  public description: string;
}

const project: Project = new MyProject();

console.log("project.name :>> ", project.name);

const emoji = require("node-emoji");

const coffee = emoji.get("coffee");

console.log(coffee);
