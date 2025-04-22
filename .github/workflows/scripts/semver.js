module.exports = async ({ context }) => {
  const re = new RegExp(
    "^refs/tags/v(?<major>[0-9]{1,3})\\.(?<minor>[0-9]{1,3})\\.(?<patch>[0-9]{1,3})(-(?<pre>[0-9A-Za-z\\.-]+))?(\\+(?<build>[0-9A-Za-z\\.-]+))?$"
  );

  if (!re.test(context.ref)) {
    throw Error("Ref does not contain a valid semver tag.");
  }
};
