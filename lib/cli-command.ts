/*
 * @Author: zi.yang
 * @Date: 2022-09-20 07:30:21
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-09-22 08:35:41
 * @Description:
 * @FilePath: /vola-cli/lib/cli-command.ts
 */

function use(program: any): void {
  program
    .command('create <app-name>')
    .description('create a new app')
    .option('-f --force', 'overwrite target directory if it exists');
}

export default { use };
