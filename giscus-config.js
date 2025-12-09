// Generated Giscus config for cxyqiyue/blog-pages
// 更多配置选项请参考: https://giscus.app/zh-CN

window.GISCUS_CONFIG = {
  // REQUIRED: repository in the form "owner/repo"
  repo: "cxyqiyue/blog-pages",
  
  // 可选: repository node id (推荐填写以提高性能)
  repoId: "",
  
  // REQUIRED: discussion category name visible in your repo
  category: "General",
  
  // 可选: category id (推荐填写以提高性能)
  categoryId: "",
  
  // 页面讨论映射方式: pathname | url | title | og:title
  mapping: "pathname",
  
  // 是否启用反应
  reactionsEnabled: true,
  
  // 是否发送元数据
  emitMetadata: false,
  
  // 输入框位置: top | bottom
  inputPosition: "bottom",
  
  // 主题: light | dark | transparent_dark | 或自定义 CSS
  theme: "light",
  
  // 错误处理配置
  onError: function(error) {
    // 隐藏错误信息，保持评论区空白
    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer) {
      giscusContainer.style.display = 'none';
    }
  },
  
  // 隐藏默认错误信息
  strict: false
};