const fs = require('fs').promises;

async function setupTest() {
  for (let i = 1; i <= 3; i++) {
    const data = JSON.stringify({
      id: i,
      title: `Event ${i}`,
      date: `2024-0${i}-15`,
    });
    await fs.writeFile(`event${i}.json`, data);
  }
}

async function testSequential() {
  console.time('⏱ SEQUENTIAL');
  const event1 = await fs.readFile('event1.json', 'utf8');
  const event2 = await fs.readFile('event2.json', 'utf8');
  const event3 = await fs.readFile('event3.json', 'utf8');
  console.timeEnd('⏱ SEQUENTIAL');
  console.log('✅ Read 3 files sequentially\n');
}

async function testParallel() {
  console.time('⚡ PARALLEL');
  const [event1, event2, event3] = await Promise.all([
    fs.readFile('event1.json', 'utf8'),
    fs.readFile('event2.json', 'utf8'),
    fs.readFile('event3.json', 'utf8'),
  ]);
  console.timeEnd('⚡ PARALLEL');
  console.log('✅ Read 3 files in parallel\n');
}

async function main() {
  await setupTest();
  console.log('🚀 PERFORMANCE COMPARISON\n');
  await testSequential();
  await testParallel();
  console.log('⚡ Parallel is MUCH faster!');
}
main();