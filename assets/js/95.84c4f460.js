(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{310:function(t,v,_){"use strict";_.r(v);var a=_(2),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"安全要素与-stride-威胁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全要素与-stride-威胁"}},[t._v("#")]),t._v(" 安全要素与 STRIDE 威胁")]),t._v(" "),_("h2",{attrs:{id:"stride-威胁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#stride-威胁"}},[t._v("#")]),t._v(" STRIDE 威胁")]),t._v(" "),_("p",[t._v("STRIDE 威胁，代表六种安全威胁：")]),t._v(" "),_("ul",[_("li",[t._v("身份假冒（Spoofing）")]),t._v(" "),_("li",[t._v("篡改（Tampering）")]),t._v(" "),_("li",[t._v("抵赖（Repudiation）")]),t._v(" "),_("li",[t._v("信息泄露（Information Disclosure）")]),t._v(" "),_("li",[t._v("拒绝服务（Denial of Service）")]),t._v(" "),_("li",[t._v("特权提升（Elevation of Privilege）")])]),t._v(" "),_("h3",{attrs:{id:"身份假冒（spoofing）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#身份假冒（spoofing）"}},[t._v("#")]),t._v(" 身份假冒（Spoofing）")]),t._v(" "),_("p",[t._v("身份假冒，即伪装成某对象或某人。例如，我们通过伪造别人的 ID 进行操作")]),t._v(" "),_("h3",{attrs:{id:"篡改（tampering）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#篡改（tampering）"}},[t._v("#")]),t._v(" 篡改（Tampering）")]),t._v(" "),_("p",[t._v("篡改，即未经授权修改数据或者代码。例如，我通过网络抓包或者某种途径修改某个请求包，而服务端没有进行进一步的防范措施，使得我篡改的请求包提交成功。")]),t._v(" "),_("h3",{attrs:{id:"抵赖（repudiation）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抵赖（repudiation）"}},[t._v("#")]),t._v(" 抵赖（Repudiation）")]),t._v(" "),_("p",[t._v("抵赖，即拒绝执行他人无法证实也无法反对的行为而产生抵赖。例如，我攻击了某个产品，他们并不知道是我做的，没有证据证明是我做的，我就可以进行抵赖，换句话说，我可以死不承认。")]),t._v(" "),_("h3",{attrs:{id:"信息泄露（information-disclosure）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信息泄露（information-disclosure）"}},[t._v("#")]),t._v(" 信息泄露（Information Disclosure）")]),t._v(" "),_("p",[t._v("信息泄露，即将信息暴露给未授权用户。例如，我通过某种途径获取未经加密的敏感信息，例如用户密码。")]),t._v(" "),_("h3",{attrs:{id:"拒绝服务（denial-of-service）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拒绝服务（denial-of-service）"}},[t._v("#")]),t._v(" 拒绝服务（Denial of Service）")]),t._v(" "),_("p",[t._v("拒绝服务，即拒绝或降低有效用户的服务级别。例如，我通过拒绝服务攻击，使得其他正常用户无法使用产品的相关服务功能。")]),t._v(" "),_("h3",{attrs:{id:"特权提升（elevation-of-privilege）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特权提升（elevation-of-privilege）"}},[t._v("#")]),t._v(" 特权提升（Elevation of Privilege）")]),t._v(" "),_("p",[t._v("特权提升，即通过非授权方式获得更高权限。例如，我试图用管理员的权限进行业务操作。")]),t._v(" "),_("h2",{attrs:{id:"安全要素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全要素"}},[t._v("#")]),t._v(" 安全要素")]),t._v(" "),_("p",[t._v("为了防范上面的 STRIDE 威胁，我们需要采用一些防范措施：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("威胁")]),t._v(" "),_("th",[t._v("安全要素")]),t._v(" "),_("th",[t._v("消减技术")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("身份假冒")]),t._v(" "),_("td",[t._v("认证")]),t._v(" "),_("td",[t._v("Kerberos、SSL/TLS、证书、认证码等")])]),t._v(" "),_("tr",[_("td",[t._v("篡改")]),t._v(" "),_("td",[t._v("完整性")]),t._v(" "),_("td",[t._v("访问控制列表、SSL/TLS、认证码等")])]),t._v(" "),_("tr",[_("td",[t._v("抵赖")]),t._v(" "),_("td",[t._v("非抵赖/审计/记录")]),t._v(" "),_("td",[t._v("安全审计和日志记录、数字签名、可信第三方")])]),t._v(" "),_("tr",[_("td",[t._v("信息泄露")]),t._v(" "),_("td",[t._v("保密")]),t._v(" "),_("td",[t._v("加密、访问控制列表")])]),t._v(" "),_("tr",[_("td",[t._v("拒绝服务")]),t._v(" "),_("td",[t._v("可用性")]),t._v(" "),_("td",[t._v("访问控制列表、过滤、配额、授权")])]),t._v(" "),_("tr",[_("td",[t._v("特权提升")]),t._v(" "),_("td",[t._v("授权")]),t._v(" "),_("td",[t._v("访问控制列表、角色控制、授权")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);