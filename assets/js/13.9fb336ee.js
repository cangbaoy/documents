(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{243:function(a,t,v){"use strict";v.r(t);var s=v(2),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"jvm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[a._v("#")]),a._v(" JVM")]),a._v(" "),v("h2",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),v("p",[v("strong",[a._v("JVM是可运行Java代码的假想计算机 ，包括一套字节码指令集、一组寄存器、一个栈、 一个垃圾回收，堆 和 一个存储方法域。JVM 是运行在操作系统之上的，它与硬件没有直接 的交互。")])]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125173834.png",alt:""}})]),a._v(" "),v("p",[v("strong",[a._v("运行过程")])]),a._v(" "),v("p",[a._v("我们都知道 Java 源文件，通过编译器，能够生产相应的.Class 文件，也就是字节码文件， 而字节码文件又通过Java虚拟机中的解释器，编译成特定机器上的机器码 。\n也就是如下：")]),a._v(" "),v("ul",[v("li",[a._v("Java源文件—->编译器—->字节码文件")]),a._v(" "),v("li",[a._v("字节码文件—->JVM—->机器码")])]),a._v(" "),v("p",[a._v("每一种平台的解释器是不同的，但是实现的虚拟机是相同的，这也就是 Java 为什么能够 跨平台的原因了 ，当一个程序从开始运行，这时虚拟机就开始实例化了，多个程序启动就会 存在多个虚拟机实例。程序退出或者关闭，则虚拟机实例消亡，多个虚拟机实例之间数据不 能共享。")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125180059.png",alt:""}})]),a._v(" "),v("h2",{attrs:{id:"线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[a._v("#")]),a._v(" 线程")]),a._v(" "),v("p",[a._v("这里所说的线程指程序执行过程中的一个线程实体。JVM 允许一个应用并发执行多个线程。 **Hotspot JVM 中的 Java 线程与原生操作系统线程有直接的映射关系。**当线程本地存储、缓 冲区分配、同步对象、栈、程序计数器等准备好以后，就会创建一个操作系统原生线程。 Java 线程结束，原生线程随之被回收。操作系统负责调度所有线程，并把它们分配到任何可 用的 CPU 上。当原生线程初始化完毕，就会调用 Java 线程的 run() 方法。当线程结束时，会释放原生线程和 Java 线程的所有资源。")]),a._v(" "),v("p",[a._v("Hotspot JVM 后台运行的系统线程主要有下面几个：")]),a._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[a._v("线程")]),a._v(" "),v("th",{staticStyle:{"text-align":"center"}},[a._v("描述")])])]),a._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[a._v("虚拟机线程 （VM thread）")]),a._v(" "),v("td",{staticStyle:{"text-align":"center"}},[a._v("这个线程等待 JVM 到达安全点操作出现。这些操作必须要在独立的线程里执行，因为当 堆修改无法进行时，线程都需要 JVM 位于安全点。这些操作的类型有：stop-theworld 垃圾回收、线程栈 dump、线程暂停、线程偏向锁（biased locking）解除。")])]),a._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[a._v("周期性任务线程")]),a._v(" "),v("td",{staticStyle:{"text-align":"center"}},[a._v("这线程负责定时器事件（也就是中断），用来调度周期性操作的执行。")])]),a._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[a._v("GC 线程")]),a._v(" "),v("td",{staticStyle:{"text-align":"center"}},[a._v("这些线程支持 JVM 中不同的垃圾回收活动")])]),a._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[a._v("编译器线程")]),a._v(" "),v("td",{staticStyle:{"text-align":"center"}},[a._v("这些线程在运行时将字节码动态编译成本地平台相关的机器码。")])]),a._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[a._v("信号分发线程")]),a._v(" "),v("td",{staticStyle:{"text-align":"center"}},[a._v("这个线程接收发送到 JVM 的信号并调用适当的 JVM 方法处理。")])])])]),a._v(" "),v("h2",{attrs:{id:"jvm-内存区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm-内存区域"}},[a._v("#")]),a._v(" JVM 内存区域")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125180354.png",alt:""}})]),a._v(" "),v("p",[a._v("JVM 内存区域主要分为线程私有区域【程序计数器、虚拟机栈、本地方法区】、线程共享区域【JAVA 堆、方法区】、直接内存。"),v("span",{staticClass:"fontRed"},[v("strong",[a._v("线程私有数据区域生命周期与线程相同, 依赖用户线程的启动/结束 而 创建/销毁(在 Hotspot VM 内")])]),a._v(", 每个线程都与操作系统的本地线程直接映射, 因此这部分内存区域的存/否跟随本地线程的生/死对应)。")]),a._v(" "),v("p",[v("span",{staticClass:"fontRed"},[v("strong",[a._v("线程共享区域随虚拟机的启动/关闭而创建/销毁。直接内存并不是 JVM 运行时数据区的一部分,")])]),a._v("但也会被频繁的使用: 在 JDK 1.4 引入的 "),v("span",{staticClass:"fontRed"},[v("strong",[a._v("NIO 提供了基于 Channel 与 Buffer 的 IO 方式, 它可以使用 Native 函数库直接分配堆外内存, 然后使用DirectByteBuffer 对象作为这块内存的引用进行操作(详见: Java I/O 扩展), 这样就避免了在 Java 堆和 Native 堆中来回复制数据, 因此在一些场景中可以显著提高性能。")])])]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125180629.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"程序计数器-线程私有"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器-线程私有"}},[a._v("#")]),a._v(" 程序计数器(线程私有)")]),a._v(" "),v("p",[a._v("一块较小的内存空间, "),v("span",{staticClass:"fontRed"},[v("strong",[a._v("是当前线程所执行的字节码的行号指示器")])]),a._v("，每条线程都要有一个独立的程序计数器，这类内存也称为“线程私有”的内存。正在执行 java 方法的话，计数器记录的是虚拟机字节码指令的地址（当前指令的地址）。如果还是 Native 方法，则为空。这个内存区域是唯一一个在虚拟机中没有规定任何 OutOfMemoryError 情况的区域。")]),a._v(" "),v("h3",{attrs:{id:"虚拟机栈-线程私有"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈-线程私有"}},[a._v("#")]),a._v(" 虚拟机栈(线程私有)")]),a._v(" "),v("p",[v("span",{staticClass:"fontRed"},[v("strong",[a._v("是描述java方法执行的内存模型，每个方法在执行的同时都会创建一个栈帧（Stack Frame）用于存储局部变量表、操作数栈、动态链接、方法出口等信息")])]),a._v("。"),v("span",{staticClass:"fontBlue"},[a._v("每一个方法从调用直至执行完成的过程，就对应着一个栈帧在虚拟机栈中入栈到出栈的过程**")]),a._v("。栈帧（ Frame）是用来存储数据和部分过程结果的数据结构，同时也被用来处理动态链接(Dynamic Linking)、 方法返回值和异常分派（ Dispatch Exception）。"),v("span",{staticClass:"fontBlue"},[v("strong",[a._v("栈帧随着方法调用而创建，随着方法结束而销毁")])]),a._v("——无论方法是正常完成还是异常完成（抛出了在方法内未被捕获的异常）都算作方法结束。")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125182019.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"本地方法区-线程私有"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地方法区-线程私有"}},[a._v("#")]),a._v(" 本地方法区(线程私有)")]),a._v(" "),v("p",[a._v("本地方法区和 "),v("strong",[a._v("Java Stack 作用类似")]),a._v(", 区别是虚拟机栈为执行 Java 方法服务, 而"),v("span",{staticClass:"fontBlue"},[v("strong",[a._v("本地方法栈则为Native 方法服务")])]),a._v(", 如果一个 VM 实现使用 C-linkage 模型来支持 Native 调用, 那么该栈将会是一个C 栈，但 HotSpot VM 直接就把本地方法栈和虚拟机栈合二为一。")]),a._v(" "),v("h3",{attrs:{id:"堆（heap-线程共享）-运行时数据区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆（heap-线程共享）-运行时数据区"}},[a._v("#")]),a._v(" 堆（Heap-线程共享）-运行时数据区")]),a._v(" "),v("p",[a._v("是被线程共享的一块内存区域，"),v("span",{staticClass:"fontBlue"},[v("strong",[a._v("创建的对象和数组都保存在 Java 堆内存中，也是垃圾收集器进行垃圾收集的最重要的内存区域")])]),a._v("。由于现代 VM 采用"),v("strong",[a._v("分代收集算法")]),a._v(", 因此 Java 堆从 GC 的角度还可以细分为: "),v("code",[a._v("新生代(Eden 区、From Survivor 区和 To Survivor 区)")]),a._v("和"),v("code",[a._v("老年代")]),a._v("。")]),a._v(" "),v("h3",{attrs:{id:"方法区-永久代（线程共享）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法区-永久代（线程共享）"}},[a._v("#")]),a._v(" 方法区/永久代（线程共享）")]),a._v(" "),v("p",[a._v("即我们常说的"),v("strong",[a._v("永久代(Permanent Generation)")]),a._v(", 用于存储被 "),v("strong",[a._v("JVM 加载的类信息、常量、静态变量、即时编译器编译后的代码")]),a._v("等数据. HotSpot VM把GC分代收集扩展至方法区, 即"),v("strong",[a._v("使用Java堆的永久代来实现方法区")]),a._v(", 这样 HotSpot 的垃圾收集器就可以像管理 Java 堆一样管理这部分内存,而不必为方法区开发专门的内存管理器(永久带的内存回收的主要目标是针对"),v("strong",[a._v("常量池的回收")]),a._v("和"),v("strong",[a._v("类型的卸载")]),a._v(", 因此收益一般很小)。"),v("span",{staticClass:"fontRed"},[v("strong",[a._v("运行时常量池")])]),a._v("（Runtime Constant Pool）是方法区的一部分。Class 文件中除了有类的版本、字段、方法、接口等描述等信息外，还有一项信息是常量池（Constant Pool Table），用于存放编译期生成的各种字面量和符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中。 Java 虚拟机对 Class 文件的每一部分（自然也包括常量池）的格式都有严格的规定，每一个字节用于存储哪种数据都必须符合规范上的要求，这样才会被虚拟机认可、装载和执行。")]),a._v(" "),v("h2",{attrs:{id:"jvm-运行时内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm-运行时内存"}},[a._v("#")]),a._v(" JVM 运行时内存")]),a._v(" "),v("p",[a._v("Java 堆从 GC 的角度还可以细分为: "),v("code",[a._v("新生代(Eden 区、From Survivor 区和 To Survivor 区)")]),a._v("和"),v("code",[a._v("老年代")]),a._v("。")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125182656.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"新生代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新生代"}},[a._v("#")]),a._v(" 新生代")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("Eden 区")]),a._v(": "),v("strong",[a._v("Java 新对象的出生地")]),a._v("（如果新创建的对象占用内存很大，则直接分配到老年代）。当 Eden 区内存不够的时候就会触发 MinorGC，对新生代区进行一次垃圾回收。")]),a._v(" "),v("li",[v("code",[a._v("ServivorFrom")]),a._v(": 上一次 GC 的幸存者，作为这一次 GC 的被扫描者。")]),a._v(" "),v("li",[v("code",[a._v("ServivorTo")]),a._v(": 保留了一次 MinorGC 过程中的幸存者。")]),a._v(" "),v("li",[v("code",[a._v("MinorGC 的过程（复制->清空->互换）")]),a._v("：MinorGC 采用复制算法。")])]),a._v(" "),v("ol",[v("li",[a._v("eden、servicorFrom 复制到 ServicorTo，年龄+1\n首先，把 Eden 和 ServivorFrom 区域中存活的对象复制到 ServicorTo 区域（如果有对象的年龄以及达到了老年的标准，则赋值到老年代区），同时把这些对象的年龄+1（如果 ServicorTo 不够位置了就放到老年区）；")]),a._v(" "),v("li",[a._v("清空 eden、servicorFrom\n然后，清空 Eden 和 ServicorFrom 中的对象；")]),a._v(" "),v("li",[a._v("ServicorTo 和 ServicorFrom 互换\n最后，ServicorTo 和 ServicorFrom 互换，原 ServicorTo 成为下一次 GC 时的 ServicorFrom区。")])]),a._v(" "),v("h3",{attrs:{id:"老年代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#老年代"}},[a._v("#")]),a._v(" 老年代")]),a._v(" "),v("p",[a._v("主要存放应用程序中生命周期长的内存对象。\n老年代的对象比较稳定，所以 MajorGC 不会频繁执行。在进行 MajorGC 前一般都先进行\n了一次 MinorGC，使得有新生代的对象晋身入老年代，导致空间不够用时才触发。当无法找到足\n够大的连续空间分配给新创建的较大对象时也会提前触发一次 MajorGC 进行垃圾回收腾出空间。\nMajorGC 采用标记清除算法：首先扫描一次所有老年代，标记出存活的对象，然后回收没\n有标记的对象。MajorGC 的耗时比较长，因为要扫描再回收。MajorGC 会产生内存碎片，为了减\n少内存损耗，我们一般需要进行合并或者标记出来方便下次直接分配。当老年代也满了装不下的\n时候，就会抛出 OOM（Out of Memory）异常。")]),a._v(" "),v("h3",{attrs:{id:"永久代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#永久代"}},[a._v("#")]),a._v(" 永久代")]),a._v(" "),v("p",[a._v("指内存的永久保存区域，主要存放 Class 和 Meta（元数据）的信息,Class 在被加载的时候被\n放入永久区域，它和和存放实例的区域不同,GC 不会在主程序运行期对永久区域进行清理。所以这\n也导致了永久代的区域会随着加载的 Class 的增多而胀满，最终抛出 OOM 异常。")]),a._v(" "),v("h4",{attrs:{id:"java8-与元数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java8-与元数据"}},[a._v("#")]),a._v(" JAVA8 与元数据")]),a._v(" "),v("p",[a._v("在 Java8 中，永久代已经被移除，被一个称为“元数据区”（元空间）的区域所取代。元空间\n的本质和永久代类似，元空间与永久代之间最大的区别在于：元空间并不在虚拟机中，而是使用\n本地内存。因此，默认情况下，元空间的大小仅受本地内存限制。类的元数据放入 native\nmemory, 字符串池和类的静态变量放入 java 堆中，这样可以加载多少类的元数据就不再由\nMaxPermSize 控制, 而由系统的实际可用空间来控制。")]),a._v(" "),v("h2",{attrs:{id:"垃圾回收与算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收与算法"}},[a._v("#")]),a._v(" 垃圾回收与算法")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125203648.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"如何确定垃圾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何确定垃圾"}},[a._v("#")]),a._v(" 如何确定垃圾")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("引用计数法\n在 Java 中，引用和对象是有关联的。如果要操作对象则必须用引用进行。因此，很显然一个简单的办法是通过引用计数来判断一个对象是否可以回收。简单说，即一个"),v("strong",[a._v("对象如果没有任何与之关联的引用，即他们的引用计数都不为 0，则说明对象不太可能再被用到，那么这个对象就是可回收对象")]),a._v("。")])]),a._v(" "),v("li",[v("p",[a._v("可达性分析\n为了解决引用计数法的循环引用问题，Java 使用了可达性分析的方法。通过一系列的“GC roots”对象作为起点搜索。"),v("strong",[a._v("如果在“GC roots”和一个对象之间没有可达路径，则称该对象是不可达的")]),a._v("。要注意的是，不可达对象不等价于可回收对象，"),v("strong",[a._v("不可达对象变为可回收对象至少要经过两次标记过程")]),a._v("。两次标记后仍然是可回收对象，则将面临回收。")])])]),a._v(" "),v("h3",{attrs:{id:"标记清除算法（mark-sweep）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法（mark-sweep）"}},[a._v("#")]),a._v(" 标记清除算法（Mark-Sweep）")]),a._v(" "),v("p",[a._v("最基础的垃圾回收算法，分为两个阶段，标注和清除。标记阶段标记出所有需要回收的对象，清除阶段回收被标记的对象所占用的空间。如图")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125203957.png",alt:""}})]),a._v(" "),v("p",[a._v("从图中我们就可以发现，该算法"),v("strong",[a._v("最大的问题是内存碎片化严重")]),a._v("，后续可能发生大对象不能找到可利用空间的问题。")]),a._v(" "),v("h3",{attrs:{id:"复制算法（copying）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复制算法（copying）"}},[a._v("#")]),a._v(" 复制算法（copying）")]),a._v(" "),v("p",[a._v("为了解决 Mark-Sweep 算法内存碎片化的缺陷而被提出的算法。按内存容量将内存划分为等大小的两块。每次只使用其中一块，当这一块内存满后将尚存活的对象复制到另一块上去，把已使用的内存清掉，如图：")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125204111.png",alt:""}})]),a._v(" "),v("p",[a._v("这种算法虽然实现简单，内存效率高，不易产生碎片，但是最大的问题是可用内存被压缩到了原本的一半。且存活对象增多的话，Copying 算法的效率会大大降低。")]),a._v(" "),v("h3",{attrs:{id:"标记整理算法-mark-compact"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记整理算法-mark-compact"}},[a._v("#")]),a._v(" 标记整理算法(Mark-Compact)")]),a._v(" "),v("p",[a._v("结合了以上两个算法，为了避免缺陷而提出。标记阶段和 Mark-Sweep 算法相同，"),v("strong",[a._v("标记后不是清理对象，而是将存活对象移向内存的一端。然后清除端边界外的对象")]),a._v("。如图：")]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125204220.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"分代收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分代收集算法"}},[a._v("#")]),a._v(" 分代收集算法")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("新生代与复制算法")]),a._v("： 目前大部分 JVM 的 GC 对于新生代都采取 Copying 算法，因为新生代中每次垃圾回收都要回收大部分对象，即要复制的操作比较少，但通常并不是按照 1：1 来划分新生代。一般将新生代划分为一块较大的 Eden 空间和两个较小的 Survivor 空间(From Space, To Space)，每次使用Eden 空间和其中的一块 Survivor 空间，当进行回收时，将该两块空间中还存活的对象复制到另一块 Survivor 空间中。")])]),a._v(" "),v("p",[v("img",{attrs:{src:"http://114.116.184.67:81/images/java/java_20191125204432.png",alt:""}})]),a._v(" "),v("ul",[v("li",[v("code",[a._v("老年代与标记复制算法")]),a._v("： 而老年代因为每次只回收少量对象，因而采用 Mark-Compact 算法。\n"),v("ol",[v("li",[a._v("JAVA 虚拟机提到过的处于方法区的永生代(Permanet Generation)，它用来存储 class 类，常量，方法描述等。对永生代的回收主要包括废弃常量和无用的类。")]),a._v(" "),v("li",[a._v("对象的内存分配主要在新生代的 Eden Space 和 Survivor Space 的 From Space(Survivor 目前存放对象的那一块)，少数情况会直接分配到老生代。")]),a._v(" "),v("li",[a._v("当新生代的 Eden Space 和 From Space 空间不足时就会发生一次 GC，进行 GC 后，Eden Space 和 From Space 区的存活对象会被挪到 To Space，然后将 Eden Space 和 From Space 进行清理。")]),a._v(" "),v("li",[a._v("如果 To Space 无法足够存储某个对象，则将这个对象存储到老生代。")]),a._v(" "),v("li",[a._v("在进行 GC 后，使用的便是 Eden Space 和 To Space 了，如此反复循环。")]),a._v(" "),v("li",[a._v("当对象在 Survivor 区躲过一次 GC 后，其年龄就会+1。默认情况下年龄到达 15 的对象会被移到老生代中。")])])])]),a._v(" "),v("h2",{attrs:{id:"java-四中引用类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-四中引用类型"}},[a._v("#")]),a._v(" JAVA 四中引用类型")]),a._v(" "),v("h3",{attrs:{id:"强引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强引用"}},[a._v("#")]),a._v(" 强引用")]),a._v(" "),v("p",[a._v("在 Java 中最常见的就是强引用，把一个对象赋给一个引用变量，这个引用变量就是一个强引\n用。当一个对象被强引用变量引用时，它处于可达状态，它是不可能被垃圾回收机制回收的，即\n使该对象以后永远都不会被用到 JVM 也不会回收。因此强引用是造成 Java 内存泄漏的主要原因之\n一。")]),a._v(" "),v("h3",{attrs:{id:"软引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软引用"}},[a._v("#")]),a._v(" 软引用")]),a._v(" "),v("p",[a._v("软引用需要用 SoftReference 类来实现，对于只有软引用的对象来说，当系统内存足够时它\n不会被回收，当系统内存空间不足时它会被回收。软引用通常用在对内存敏感的程序中。")]),a._v(" "),v("h3",{attrs:{id:"弱引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弱引用"}},[a._v("#")]),a._v(" 弱引用")]),a._v(" "),v("p",[a._v("弱引用需要用 WeakReference 类来实现，它比软引用的生存期更短，对于只有弱引用的对象\n来说，只要垃圾回收机制一运行，不管 JVM 的内存空间是否足够，总会回收该对象占用的内存。")]),a._v(" "),v("h3",{attrs:{id:"虚引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚引用"}},[a._v("#")]),a._v(" 虚引用")]),a._v(" "),v("p",[a._v("虚引用需要 PhantomReference 类来实现，它不能单独使用，必须和引用队列联合使用。虚\n引用的主要作用是跟踪对象被垃圾回收的状态。")]),a._v(" "),v("h2",{attrs:{id:"gc-分代收集算法-vs-分区收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc-分代收集算法-vs-分区收集算法"}},[a._v("#")]),a._v(" GC 分代收集算法 VS 分区收集算法")]),a._v(" "),v("h3",{attrs:{id:"分代收集算法-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分代收集算法-2"}},[a._v("#")]),a._v(" 分代收集算法")]),a._v(" "),v("p",[a._v("当前主流 VM 垃圾收集都采用”分代收集”(Generational Collection)算法, 这种算法会根据\n对象存活周期的不同将内存划分为几块, 如 JVM 中的 "),v("code",[a._v("新生代")]),a._v("、"),v("code",[a._v("老年代")]),a._v("、"),v("code",[a._v("永久代")]),a._v("，这样就可以根据\n各年代特点分别采用最适当的 GC 算法")]),a._v(" "),v("ul",[v("li",[v("p",[v("code",[a._v("在新生代-复制算法")]),a._v(": 每次垃圾收集都能发现大批对象已死, 只有少量存活. 因此选用复制算法, 只需要付出少量存活对象的复制成本就可以完成收集.")])]),a._v(" "),v("li",[v("p",[v("code",[a._v("在老年代-标记整理算法")]),a._v(": 因为对象存活率高、没有额外空间对它进行分配担保, 就必须采用"),v("strong",[a._v("标记—清理")]),a._v(" 或 "),v("strong",[a._v("标记—整理")]),a._v("算法来进行回收, 不必进行内存复制, 且直接腾出空闲内存.")])])]),a._v(" "),v("h3",{attrs:{id:"分区收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分区收集算法"}},[a._v("#")]),a._v(" 分区收集算法")]),a._v(" "),v("p",[v("strong",[a._v("分区算法则将整个堆空间划分为连续的不同小区间, 每个小区间独立使用")]),a._v(", 独立回收. 这样做的\n好处是"),v("strong",[a._v("可以控制一次回收多少个小区间")]),a._v(" , 根据目标停顿时间, 每次合理地回收若干个小区间(而不是\n整个堆), 从而减少一次 GC 所产生的停顿。")]),a._v(" "),v("h2",{attrs:{id:"gc-垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc-垃圾收集器"}},[a._v("#")]),a._v(" GC 垃圾收集器")]),a._v(" "),v("h2",{attrs:{id:"java-io-nio"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-io-nio"}},[a._v("#")]),a._v(" JAVA IO/NIO")]),a._v(" "),v("h3",{attrs:{id:"阻塞-io-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阻塞-io-模型"}},[a._v("#")]),a._v(" 阻塞 IO 模型")]),a._v(" "),v("p",[a._v("最传统的一种IO模型，即在读写数据过程中会发生阻塞现象。当用户线程发出IO 请求之后，内 核会去查看数据是否就绪，如果没有就绪就会等待数据就绪，而用户线程就会处于阻塞状态，用 户线程交出CPU。当数据就绪之后，内核会将数据拷贝到用户线程，并返回结果给用户线程，用户线程才解除block状态。典型的阻塞IO模型的例子为：data = socket.read();如果数据没有就 绪，就会一直阻塞在read方法。")]),a._v(" "),v("h3",{attrs:{id:"非阻塞-io-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞-io-模型"}},[a._v("#")]),a._v(" 非阻塞 IO 模型")]),a._v(" "),v("p",[a._v("当用户线程发起一个read操作后，并不需要等待，而是马上就得到了一个结果。如果结果是一个 error时，它就知道数据还没有准备好，于是它可以再次发送read操作。一旦内核中的数据准备 好了，并且又再次收到了用户线程的请求，那么它马上就将数据拷贝到了用户线程，然后返回。 所以事实上，在非阻塞IO模型中，用户线程需要不断地询问内核数据是否就绪，也就说非阻塞IO 不会交出CPU，而会一直占用CPU。典型的非阻塞IO模型一般如下：")]),a._v(" "),v("div",{staticClass:"language-java line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n  data "),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" socket"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("read")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" error"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n    处理数据  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br"),v("span",{staticClass:"line-number"},[a._v("3")]),v("br"),v("span",{staticClass:"line-number"},[a._v("4")]),v("br"),v("span",{staticClass:"line-number"},[a._v("5")]),v("br"),v("span",{staticClass:"line-number"},[a._v("6")]),v("br")])]),v("p",[a._v("但是对于非阻塞IO就有一个非常严重的问题，"),v("strong",[a._v("在while循环中需要不断地去询问内核数据是否就 绪，这样会导致CPU占用率非常高")]),a._v("，因此一般情况下很少使用while循环这种方式来读取数据。")]),a._v(" "),v("h3",{attrs:{id:"多路复用-io-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多路复用-io-模型"}},[a._v("#")]),a._v(" 多路复用 IO 模型")]),a._v(" "),v("p",[a._v("多路复用IO模型是目前使用得比较多的模型。Java NIO实际上就是多路复用IO。在多路复用IO 模型中，会"),v("strong",[a._v("有一个线程不断去轮询多个socket的状态，只有当socket真正有读写事件时，才真 正调用实际的IO读写操作")]),a._v("。因为在多路复用IO模型中，只需要使用一个线程就可以管理多个 socket，系统不需要建立新的进程或者线程，也不必维护这些线程和进程，并且只有在真正有 socket读写事件进行时，才会使用IO资源，所以它大大减少了资源占用。在Java NIO中，是通 过selector.select()去查询每个通道是否有到达事件，如果没有事件，则一直阻塞在那里，因此这 种方式会导致用户线程的阻塞。多路复用IO 模式，通过一个线程就可以管理多个socket，只有当 socket真正有读写事件发生才会占用资源来进行实际的读写操作。因此，多路复用IO 比较适合连 接数比较多的情况。")]),a._v(" "),v("p",[a._v("另外多路复用IO为何比非阻塞IO模型的效率高是因为在非阻塞IO 中，不断地询问socket状态 时通过用户线程去进行的，而在多路复用IO 中，轮询每个socket状态是内核在进行的，这个效 率要比用户线程要高的多。")]),a._v(" "),v("p",[a._v("不过要注意的是，多路复用IO 模型是通过轮询的方式来检测是否有事件到达，并且对到达的事件 逐一进行响应。因此对于多路复用IO模型来说，一旦事件响应体很大，那么就会导致后续的事件 迟迟得不到处理，并且会影响新的事件轮询。")]),a._v(" "),v("h3",{attrs:{id:"信号驱动-io-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信号驱动-io-模型"}},[a._v("#")]),a._v(" 信号驱动 IO 模型")]),a._v(" "),v("p",[a._v("在信号驱动IO 模型中，当用户线程发起一个IO请求操作，会给对应的socket注册一个信号函 数，然后用户线程会继续执行，当内核数据就绪时会发送一个信号给用户线程，用户线程接收到 信号之后，便在信号函数中调用IO 读写操作来进行实际的IO 请求操作。")]),a._v(" "),v("h3",{attrs:{id:"异步-io-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步-io-模型"}},[a._v("#")]),a._v(" 异步 IO 模型")]),a._v(" "),v("p",[a._v("异步IO模型才是最理想的IO 模型，在异步IO 模型中，当用户线程发起read操作之后，立刻就 可以开始去做其它的事。而另一方面，从内核的角度，当它受到一个asynchronous read之后， 它会立刻返回，说明read请求已经成功发起了，因此不会对用户线程产生任何block。然后，内 核会等待数据准备完成，然后将数据拷贝到用户线程，当这一切都完成之后，内核会给用户线程 发送一个信号，告诉它read操作完成了。也就说用户线程完全不需要实际的整个IO操作是如何 进行的，"),v("strong",[a._v("只需要先发起一个请求，当接收内核返回的成功信号时表示IO操作已经完成，可以直接 去使用数据了")]),a._v("。\n也就说在异步IO模型中，IO操作的两个阶段都不会阻塞用户线程，这两个阶段都是由内核自动完 成，然后发送一个信号告知用户线程操作已完成。用户线程中不需要再次调用IO 函数进行具体的 读写。这点是和信号驱动模型有所不同的，在信号驱动模型中，当用户线程接收到信号表示数据 已经就绪，然后需要用户线程调用IO函数进行实际的读写操作；而在异步IO模型中，收到信号 表示IO操作已经完成，不需要再在用户线程中调用IO函数进行实际的读写操作。")]),a._v(" "),v("p",[v("span",{staticClass:"fontRed"},[a._v("注意，异步IO 是需要操作系统的底层支持，在Java 7中，提供了Asynchronous IO。")])]),a._v(" "),v("h3",{attrs:{id:"java-io-包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-io-包"}},[a._v("#")]),a._v(" JAVA IO 包")]),a._v(" "),v("h3",{attrs:{id:"java-nio"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-nio"}},[a._v("#")]),a._v(" JAVA NIO")]),a._v(" "),v("h2",{attrs:{id:"jvm-类加载机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jvm-类加载机制"}},[a._v("#")]),a._v(" JVM 类加载机制")])])}),[],!1,null,null,null);t.default=r.exports}}]);