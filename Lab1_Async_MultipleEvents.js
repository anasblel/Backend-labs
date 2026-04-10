const fs = require('fs').promises;

async function createTestFiles() {
  const event1 = JSON.stringify({
    id: 1,
    title: 'Tech Conference',
    date: '2024-03-15',
  });
  const event2 = JSON.stringify({
    id: 2,
    title: 'Web Workshop',
    date: '2024-04-20',
  });

  await fs.writeFile('event1.json', event1);
  await fs.writeFile('event2.json', event2);
  console.log('✅ Test files created\n');
}

async function readEventsSequential() {
  try {
    console.log('📖 SEQUENTIAL: Reading one by one...');
    const event1 = await fs.readFile('event1.json', 'utf8');
    console.log('✅ Event 1:', event1);
    const event2 = await fs.readFile('event2.json', 'utf8');
    console.log('✅ Event 2:', event2);
    console.log('Done!\n');
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

async function readEventsParallel() {
  try {
    console.log('⚡ PARALLEL: Reading all at once...');
    const [event1, event2] = await Promise.all([
      fs.readFile('event1.json', 'utf8'),
      fs.readFile('event2.json', 'utf8'),
    ]);
    console.log('✅ Event 1:', event1);
    console.log('✅ Event 2:', event2);
    console.log('Done!\n');
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

async function main() {
  await createTestFiles();
  await readEventsSequential();
  await readEventsParallel();
}
main();