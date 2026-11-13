const { evalExpr } = require('./entry.js');
const cases = require('/home/hatch/workspace/aiprove-challenges/challenges/code-golf-expr/cases.json');
let ok = 0;
for (const c of cases) {
  const r = evalExpr(c.in);
  if (r === c.out) ok++; else console.log('FAIL', c.in, 'got', r, 'want', c.out);
}
console.log(`public cases passed: ${ok}/${cases.length}`);
const edge = [['-3+5', 2], ['1 + 2', 3], ['.5+1', 1.5], ['2**3', 8], ['3- -2', 5], ['((2))', 2], ['10/3', 10 / 3]];
for (const [input, want] of edge) {
  const r = evalExpr(input);
  console.log(r === want ? 'ok  ' : 'FAIL', JSON.stringify(input), '=>', r);
}
