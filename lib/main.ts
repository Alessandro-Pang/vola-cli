/*
 * @Author: zi.yang
 * @Date: 2022-09-22 08:24:09
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-09-22 22:35:02
 * @Description:
 * @FilePath: /vola-cli/lib/main.ts
 */
import chalk from 'chalk';
import { program } from 'commander';

import pkg from '../package.json';
import cliCommand from './cli-command';

const cli = pkg.name;

cliCommand.use(program);

program.on('--help', () => {
  console.log(`\n Run ${chalk.cyan(`${cli} <command> --help`)} show details\n`);
});

// 配置操作命令
program
  .version(`${cli} ${pkg.version}`)
  .option('-b, --bbb', 'bbbbb')
  .usage(`<command> [option]`)
  .parse(process.argv);
