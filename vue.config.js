module.exports = {
  // 选项...
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        styles: "@/assets/styles",
        assets: "@/assets",
        utils: "@/utils",
        views: "@/views",
      },
    },
  },
};
