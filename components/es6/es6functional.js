const curry = fn => (...args) => fn.bind(null, ...args);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

