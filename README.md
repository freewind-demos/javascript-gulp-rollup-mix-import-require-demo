JavaScript Gulp Rollup Mix Import Require Demo
====================

如果使用rollup，似乎无解。

因为`gulp-rollup`不支持rollup plugins，生成的bundle.js既无法处理对自己文件的require，也无法包含对第三方库的require。

```
npm install
npm start
```

将会在`build`目录下生成相应的文件。