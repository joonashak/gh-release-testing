const s = "refs/tags/v1.0.0-beta+exp.sha.5114f85";

const re = new RegExp(
  "^refs/tags/v(?<major>[0-9]{1,3})\\.(?<minor>[0-9]{1,3})\\.(?<patch>[0-9]{1,3})(-(?<pre>[0-9A-Za-z\\.-]+))?(\\+(?<build>[0-9A-Za-z\\.-]+))?$"
);

console.log(re.test(s));
console.log(s.match(re));
// console.log(s.match(re).groups);
