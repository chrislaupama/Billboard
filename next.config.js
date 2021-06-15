
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['2PVWR5NunaxrRWMh3DWSmT'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  