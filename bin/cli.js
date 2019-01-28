#!/usr/bin/env node

// /* istanbul ignore if */
// if (process.version.match(/v(\d+)\./)[ 1 ] < 6) {
//   console.error('standard-version: Node v6 or greater is required. `standard-version` did not run.')
// } else {
//   const standardVersion = require('../index')
//   const cmdParser       = require('../command')
//   standardVersion(cmdParser.argv)
//     .catch(() => {
//       process.exit(1)
//     })
// }

const program = require('commander')
const index   = require('../index')

program
  .version(require('../package').version, '-v, --version')
  // .usage('[options] <file ...>')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-d, --detail', 'Show detail logs (显示logs详情)')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .on('--help', function () {
    console.log('')
    console.log('Examples:')
    console.log('')
    console.log('  $ custom-help --help')
    console.log('  $ custom-help -h')
  })
  .parse(process.argv)

if (program.detail) {
  index.getCommitizenVersion({
    detail: 1
  })
}

// if (!program.args.length) program.help()





