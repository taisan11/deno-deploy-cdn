import 'ses';

lockdown();

const c = new Compartment({
  globals: {
    print: harden(console.log),
  },
  __options__: true, // temporary migration affordance
});

c.evaluate(`
  print(1+1);
`);