(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{260:function(t,e,o){"use strict";o.r(e);var n=o(2),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"spring-mvc-启动流程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-启动流程"}},[t._v("#")]),t._v(" Spring MVC 启动流程")]),t._v(" "),o("p",[t._v("在 "),o("code",[t._v("web.xml")]),t._v(" 文件中给 Spring MVC 的 Servlet 配置了 "),o("code",[t._v("load-on-startup")]),t._v("，所以程序启动的时候会初始化 Spring MVC，在 "),o("code",[t._v("HttpServletBean")]),t._v(" 中将配置的 "),o("code",[t._v("contextConfigLocation")]),t._v(" 属性设置到 Servlet 中，然后在 "),o("code",[t._v("FrameworkServlet")]),t._v(" 中创建了 "),o("code",[t._v("WebApplicationContext")]),t._v("，"),o("code",[t._v("DispatcherServlet")]),t._v(" 根据 "),o("code",[t._v("contextConfigLocation")]),t._v(" 配置的 "),o("code",[t._v("classpath")]),t._v(" 下的 xml 文件初始化了 Spring MVC 总的组件。")])])}),[],!1,null,null,null);e.default=r.exports}}]);