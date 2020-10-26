// PostCSS 的配置文件
// PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具
// 所以他的配置文件也是运行在Node.js中

// PostCSS 配置文件需要导出一个对象
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // VueCLI 已经在内部默认配置了 autoprefixer
    //   'autoprefixer': {
    //     //   browsers用来配只要兼容的系统（浏览器）环境
    //     browsers: ['Android >= 4.0', 'iOS >= 8']
    //   },

    //   把 px 转为 rem
    'postcss-pxtorem': {
      //   转换的根元素基准值
      // 正常情况下按照设计稿来
      // 750宽的设计稿，750 / 10 = 75
      // 375宽的设计稿，375 / 10 = 37.5
      rootValue: 37.5,

      // 需要转换的 CSS 属性， * 就是所有属性都要转换
      propList: ['*']
    }
  }
}
