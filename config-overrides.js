const {
  override,
  setWebpackStats,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");

module.exports = override(
  setWebpackStats("errors-only"),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#f5482d" },
    },
  })
);
