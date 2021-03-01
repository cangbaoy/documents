(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{242:function(t,e,v){"use strict";v.r(e);var n=v(2),_=Object(n.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"设计模式之间的异同，例如策略模式与状态模式的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之间的异同，例如策略模式与状态模式的区别"}},[t._v("#")]),t._v(" 设计模式之间的异同，例如策略模式与状态模式的区别")]),t._v(" "),v("p",[t._v("Java 开发者，要想恰当的使用状态模式和策略模式，必须清楚的理解它们之间的区别。虽然状态模式和策略模式拥有相似的结构，虽然它们都基于 SOLID 设计原则中的 O（开闭原则），但是，它们的意图是完全不同的。")]),t._v(" "),v("p",[t._v("策略模式通过封装一组相关算法，为 Client 提供运行时的灵活性。Client 可以在运行时，选择任一算法，而不改变使用算法的 Context。一些流行的策略模式的例子是写那些使用算法的代码，例如加密算法、压缩算法、排序算法。另一方面，状态模式允许对象，在不同的状态拥有不同的行为。因为现实世界中的对象通常都是有状态的，所以它们在不同状态，行为也不一样。例如，VM（自动售货机）只在 hasCoin 状态才给你吐商品；你不投币，它是不会吐的。现在你可以清楚的看出它们的不同之处了：它们的意图是不同的。状态模式帮助对象管理状态，而策略模式允许 Client 选择不同的行为。")]),t._v(" "),v("p",[t._v("另一个不那么容易能看出来的区别是：是谁促使了行为的改变。策略模式中，是 Client 提供了不同的策略给 Context；状态模式中，状态转移由 Context 或 State 自己管理。另外，如果你在 State 中管理状态转移，那么它必须持有 Context 的引用。例如，在 VM 的例子中，State 对象需要调用 VM 的 setState() 方法去改变它的状态。另一方面，Strategy 从不持有 Context 的引用，是 Client 把所选择的 Strategy 传递给 Context。由于状态模式和策略模式的区别，是流行的 Java 设计原则类面试题之一，我们将会在本文探讨在 Java 中，状态模式和策略模式的异同，这可以加深你对它们的理解。")]),t._v(" "),v("h2",{attrs:{id:"相似之处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相似之处"}},[t._v("#")]),t._v(" 相似之处")]),t._v(" "),v("ol",[v("li",[t._v("添加新的状态或策略都很容易，而且不需要修改使用它们的 Context 对象。")]),t._v(" "),v("li",[t._v("它们都让你的代码符合 OCP 原则。在状态模式和策略模式中，Context 对象对修改是关闭的，添加新的状态或策略，都不需要修改 Context。")]),t._v(" "),v("li",[t._v("正如状态模式中的 Context 会有初始状态一样，策略模式同样有默认策略。")]),t._v(" "),v("li",[t._v("状态模式以不同的状态封装不同的行为，而策略模式以不同的策略封装不同的行为。")]),t._v(" "),v("li",[t._v("它们都依赖子类去实现相关行为。")])]),t._v(" "),v("h2",{attrs:{id:"不同之处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不同之处"}},[t._v("#")]),t._v(" 不同之处")]),t._v(" "),v("p",[t._v("状态模式和策略模式的结构是相似的，但它们的意图不同")]),t._v(" "),v("ol",[v("li",[t._v("策略模式封装了一组相关算法，它允许 Client 在运行时使用可互换的行为；状态模式帮助一个类在不同的状态显示不同的行为。")]),t._v(" "),v("li",[t._v("状态模式封装了对象的状态，而策略模式封装算法或策略。因为状态是跟对象密切相关的，它不能被重用；而通过从 Context 中分离出策略或算法，我们可以重用它们。")]),t._v(" "),v("li",[t._v("在状态模式中，每个状态通过持有 Context 的引用，来实现状态转移；但是每个策略都不持有 Context 的引用，它们只是被 Context 使用。")]),t._v(" "),v("li",[t._v("策略实现可以作为参数传递给使用它的对象，例如 Collections.sort()，它的参数包含一个 Comparator 策略。另一方面，状态是 Context 对象自己的一部分，随着时间的推移，Context 对象从一个状态转移到另一个状态。")]),t._v(" "),v("li",[t._v("虽然它们都符合 OCP 原则，策略模式也符合 SRP 原则（单一职责原则），因为每个策略都封装自己的算法，且不依赖其他策略。一个策略的改变，并不会导致其他策略的变化。")]),t._v(" "),v("li",[t._v("另一个理论上的不同：策略模式定义了对象“怎么做”的部分。例如，排序对象怎么对数据排序。状态模式定义了对象“是什么”和“什么时候做”的部分。例如，对象处于什么状态，什么时候处在某个特定的状态。")]),t._v(" "),v("li",[t._v("状态模式中很好的定义了状态转移的次序；而策略模式并无此需要：Client 可以自由的选择任何策略。")]),t._v(" "),v("li",[t._v("一些常见的策略模式的例子是封装算法，例如排序算法，加密算法或者压缩算法。如果你看到你的代码需要使用不同类型的相关算法，那么考虑使用策略模式吧。而识别何时使用状态模式是很简单的：如果你需要管理状态和状态转移，但不想使用大量嵌套的条件语句，那么就是它了。")]),t._v(" "),v("li",[t._v("最后但最重要的一个不同之处是，策略的改变由 Client 完成；而状态的改变，由 Context 或状态自己。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);