<template>
  <div id="app">
    <router-view />
    <h1>黑马头条</h1>
    <i class="iconfont icon-dianzan"></i>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="test">hahah</div>
  </div>
</template>

<style lang="less">
  .test{
    width: 200px;
    height: 200px;
    background-color: pink;
  }
</style>
