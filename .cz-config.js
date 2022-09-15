/*
 * @Author: zi.yang
 * @Date: 2022-09-07 08:28:45
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-09-16 07:55:20
 * @Description: git commit message
 * @FilePath: \vola-cli\.cz-config.js
 */


module.exports = {
  types: [
    { value: 'feat', name: '✨ 特性:    增加新功能/新特性' },
    { value: 'fix', name: '🐛 修复:    修复Bug' },
    { value: 'docs', name: '📚 文档:    变更的只有文档' },
    { value: 'style', name: '💄 样式:    更新 UI 和样式或代码格式等修复' },
    { value: 'refactor', name: '♻️ 重构:    代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: '🚀 性能:    提升代码性能，性能优化' },
    { value: 'test', name: '✅ 测试:    添加新的测试用例或更改现有的测试用例' },
    { value: 'build', name: '🔨 构建:    影响构建系统或外部依赖项的更改(gulp、brocoli、npm)' },
    { value: 'ci', name: '👷 集成:    更改CI配置文件和脚本(Travis、Circle、BrowserStack、SauceLabs)' },
    { value: 'revert', name: '⏪️ 回滚:    代码版本回退' },
  ],

  scopes: [
    { name: '模块一' },
    { name: '模块二' },
    { name: '模块三' },
    { name: '通用模块' },
    { name: '全部' },
  ],

  // it needs to match the value for field type. Eg.: 'fix'

  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'unitTest' }],
  },

  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100,
};
