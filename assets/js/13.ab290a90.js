(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{211:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("ul",[s("li",[a._v("目前 Surgio 仅支持 Node.js 版本 >= 10")]),a._v(" "),s("li",[a._v("文档中出现的命令如无特殊说明都只能运行在 macOS, Linux 或者 WSL 上")])])]),a._v(" "),s("h2",{attrs:{id:"安装-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 Node.js")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[a._v("如果已安装可跳过")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("前往下载 Node.js"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"新建一个配置仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建一个配置仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 新建一个配置仓库")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init surgio-store my-rule-store\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或 使用国内镜像安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init surgio-store my-rule-store --use-cnpm\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 来到仓库目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" my-rule-store\n")])])]),s("h2",{attrs:{id:"术语解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#术语解释","aria-hidden":"true"}},[a._v("#")]),a._v(" 术语解释")]),a._v(" "),s("p",[a._v("在进入正题之前，我们先解释一下核心的几个术语：")]),a._v(" "),s("h3",{attrs:{id:"provider-提供方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provider-提供方","aria-hidden":"true"}},[a._v("#")]),a._v(" Provider -- "),s("small",[a._v("提供方")])]),a._v(" "),s("p",[a._v("节点的提供方，可以是一个订阅地址也可以是一组节点的配置。")]),a._v(" "),s("h3",{attrs:{id:"template-模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-模板","aria-hidden":"true"}},[a._v("#")]),a._v(" Template -- "),s("small",[a._v("模板")])]),a._v(" "),s("p",[a._v("Surgio 根据模板来渲染指定的文件。")]),a._v(" "),s("h3",{attrs:{id:"artifact-产品"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#artifact-产品","aria-hidden":"true"}},[a._v("#")]),a._v(" Artifact -- "),s("small",[a._v("产品")])]),a._v(" "),s("p",[a._v("Surgio 生成出的规则就是「产品」。")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[a._v("以上三者的关系简单来说就是：Surgio 根据 Artifact 的定义将 Provider 的节点用 Template 生成出来可用的配置。")])]),a._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./my-rule-store\n├── node_modules\n├── package-lock.json\n├── package.json\n├── provider\n├── surgio.conf.js\n└── template\n")])])]),s("p",[a._v("你只需要关心高亮的 "),s("em",[a._v("surgio.conf.js")]),a._v(", "),s("em",[a._v("provider")]),a._v(" 和 "),s("em",[a._v("template")]),a._v(" 三个东西。")]),a._v(" "),s("p",[a._v("仓库中已经包含了一些用于演示的代码。我们会在后面一节说明如何自定义它们。")]),a._v(" "),s("h2",{attrs:{id:"生成规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成规则")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("npx surgio generate\n")])])]),s("p",[a._v("规则已经生成到 "),s("code",[a._v("dist")]),a._v(" 目录了。")]),a._v(" "),s("img",{attrs:{src:"/generate-result.png",width:"318"}}),a._v(" "),s("h2",{attrs:{id:"上传规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 上传规则")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("npx surgio upload\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("请确保已配置阿里云 OSS。")])]),a._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),s("p",[a._v("Surgio 的配置文件位于目录内的 "),s("code",[a._v("surgio.conf.js")]),a._v("。")])])}),[],!1,null,null,null);t.default=r.exports}}]);