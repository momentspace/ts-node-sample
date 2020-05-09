
async function hello(s: string) {
  console.log(s);
  await new Promise(resolve => setTimeout(resolve, 10000));
}

hello('hello, ').then(() => {
  console.log(' world!');
});

