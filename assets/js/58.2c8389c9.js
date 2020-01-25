(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{361:function(_,v,e){"use strict";e.r(v);var l=e(2),i=Object(l.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_58-到家-mysql-军规升级版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_58-到家-mysql-军规升级版"}},[_._v("#")]),_._v(" 58 到家 MySQL 军规升级版")]),_._v(" "),e("h2",{attrs:{id:"基础规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础规范"}},[_._v("#")]),_._v(" 基础规范")]),_._v(" "),e("ul",[e("li",[_._v("表存储引擎必须使用 "),e("code",[_._v("InnoDB")])]),_._v(" "),e("li",[_._v("表字符集默认使用 "),e("code",[_._v("utf8")]),_._v("，必要时候使用 "),e("code",[_._v("utf8mb4")]),_._v(" "),e("ul",[e("li",[_._v("通用，无乱码风险，汉字 3 字节，英文 1 字节")]),_._v(" "),e("li",[e("code",[_._v("utf8mb4")]),_._v(" 是 "),e("code",[_._v("utf8")]),_._v(" 的超集，有存储 4 字节例如表情符号时，使用它")])])]),_._v(" "),e("li",[_._v("禁止使用存储过程，视图，触发器，Event\n"),e("ul",[e("li",[_._v("对数据库性能影响较大，互联网业务，能让站点层和服务层干的事情，不要交到数据库层")]),_._v(" "),e("li",[_._v("调试，排错，迁移都比较困难，扩展性较差")])])]),_._v(" "),e("li",[_._v("禁止在数据库中存储大文件，例如照片，可以将大文件存储在对象存储系统，数据库中存储路径")]),_._v(" "),e("li",[_._v("禁止在线上环境做数据库压力测试")]),_._v(" "),e("li",[_._v("测试，开发，线上数据库环境必须隔离")])]),_._v(" "),e("h2",{attrs:{id:"命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[_._v("#")]),_._v(" 命名规范")]),_._v(" "),e("ul",[e("li",[_._v("库名，表名，列名必须用小写，采用下划线分隔\n"),e("ul",[e("li",[_._v("abc，Abc，ABC 都是给自己埋坑")])])]),_._v(" "),e("li",[_._v("库名，表名，列名必须见名知义，长度不要超过 32 字符\n"),e("ul",[e("li",[_._v("tmp，wushan 谁 TM 知道这些库是干嘛的")])])]),_._v(" "),e("li",[_._v("库备份必须以 bak 为前缀，以日期为后缀")]),_._v(" "),e("li",[_._v("从库必须以 "),e("code",[_._v("-s")]),_._v(" 为后缀")]),_._v(" "),e("li",[_._v("备库必须以 "),e("code",[_._v("-ss")]),_._v(" 为后缀")])]),_._v(" "),e("h2",{attrs:{id:"表设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表设计规范"}},[_._v("#")]),_._v(" 表设计规范")]),_._v(" "),e("ul",[e("li",[_._v("单实例表个数必须控制在 "),e("code",[_._v("2000")]),_._v(" 个以内")]),_._v(" "),e("li",[_._v("单表分表个数必须控制在 "),e("code",[_._v("1024")]),_._v(" 个以内")]),_._v(" "),e("li",[_._v("表必须有主键，推荐使用 "),e("code",[_._v("UNSIGNED")]),_._v(" 整数为主键\n"),e("ul",[e("li",[_._v("删除无主键的表，如果是 "),e("code",[_._v("row")]),_._v(" 模式的主从架构，从库会挂住")])])]),_._v(" "),e("li",[_._v("禁止使用外键，如果要保证完整性，应由应用程式实现\n"),e("ul",[e("li",[_._v("外键使得表之间相互耦合，影响 "),e("code",[_._v("update/delete")]),_._v(" 等 SQL 性能，有可能造成死锁，高并发情况下容易成为数据库瓶颈")])])]),_._v(" "),e("li",[_._v("建议将大字段，访问频度低的字段拆分到单独的表中存储，分离冷热数据（具体参考："),e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651959773&idx=1&sn=7e4ad0dcd050f6662dfaf39d9de36f2c&chksm=bd2d04018a5a8d17b92098b4840aac23982e32d179cdd957e4c55011f6a08f6bd31f9ba5cfee&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("《如何实施数据库垂直拆分》"),e("OutboundLink")],1),_._v("）")])]),_._v(" "),e("h2",{attrs:{id:"列设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列设计规范"}},[_._v("#")]),_._v(" 列设计规范")]),_._v(" "),e("ul",[e("li",[_._v("根据业务区分使用 "),e("code",[_._v("tinyint/int/bigint")]),_._v("，分别会占用 "),e("code",[_._v("1/4/8")]),_._v(" 字节")]),_._v(" "),e("li",[_._v("根据业务区分使用 "),e("code",[_._v("char/varchar")]),_._v(" "),e("ul",[e("li",[_._v("字段长度固定，或者长度近似的业务场景，适合使用 "),e("code",[_._v("char")]),_._v("，能够减少碎片，查询性能高")]),_._v(" "),e("li",[_._v("字段长度相差较大，或者更新较少的业务场景，适合使用 "),e("code",[_._v("varchar")]),_._v("，能够减少空间")])])]),_._v(" "),e("li",[_._v("根据业务区分使用 "),e("code",[_._v("datetime/timestamp")]),_._v(" "),e("ul",[e("li",[_._v("前者占用 5 个字节，后者占用 4 个字节，存储年使用 YEAR，存储日期使用 "),e("code",[_._v("DATE")]),_._v("，存储时间使用 "),e("code",[_._v("datetime")])])])]),_._v(" "),e("li",[_._v("必须把字段定义为 "),e("code",[_._v("NOT NULL")]),_._v(" 并设默认值\n"),e("ul",[e("li",[_._v("NULL 的列使用索引，索引统计，值都更加复杂，MySQL 更难优化")]),_._v(" "),e("li",[_._v("NULL 需要更多的存储空间")]),_._v(" "),e("li",[_._v("NULL 只能采用 "),e("code",[_._v("IS NULL")]),_._v(" 或者 "),e("code",[_._v("IS NOT NULL")]),_._v(" ，而在 "),e("code",[_._v("=/!=/in/not in")]),_._v(" 时有大坑")])])]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("INT UNSIGNED")]),_._v(" 存储 "),e("code",[_._v("IPv4")]),_._v(" ，不要用 "),e("code",[_._v("char(15)")])]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("varchar(20)")]),_._v(" 存储手机号，不要使用整数\n"),e("ul",[e("li",[_._v("牵扯到国家代号，可能出现 "),e("code",[_._v("+/-/()")]),_._v(" 等字符，例如 "),e("code",[_._v("+86")])]),_._v(" "),e("li",[_._v("手机号不会用来做数学运算")]),_._v(" "),e("li",[e("code",[_._v("varchar")]),_._v(" 可以模糊查询，例如 "),e("code",[_._v("like‘138%’")])])])]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("TINYINT")]),_._v(" 来代替 "),e("code",[_._v("ENUM")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("ENUM")]),_._v(" 增加新值要进行 "),e("code",[_._v("DDL")]),_._v(" 操作")])])])]),_._v(" "),e("h2",{attrs:{id:"索引规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引规范"}},[_._v("#")]),_._v(" 索引规范")]),_._v(" "),e("ul",[e("li",[_._v("唯一索引使用 "),e("code",[_._v("uniq_[字段名]")]),_._v(" 来命名")]),_._v(" "),e("li",[_._v("非唯一索引使用 "),e("code",[_._v("idx_[字段名]")]),_._v(" 来命名")]),_._v(" "),e("li",[_._v("单张表索引数量建议控制在 5 个以内\n"),e("ul",[e("li",[_._v("互联网高并发业务，太多索引会影响写性能")]),_._v(" "),e("li",[_._v("生成执行计划时，如果索引太多，会降低性能，并可能导致 MySQL 选择不到最优索引")]),_._v(" "),e("li",[_._v("异常复杂的查询需求，可以选择 ES 等更为适合的方式存储")])])]),_._v(" "),e("li",[_._v("组合索引字段数不建议超过 5 个\n"),e("ul",[e("li",[_._v("如果 5 个字段还不能极大缩小 row 范围，八成是设计有问题")])])]),_._v(" "),e("li",[_._v("不建议在频繁更新的字段上建立索引")]),_._v(" "),e("li",[_._v("非必要不要进行 "),e("code",[_._v("JOIN")]),_._v(" 查询，如果要进行 "),e("code",[_._v("JOIN")]),_._v(" 查询，被 "),e("code",[_._v("JOIN")]),_._v(" 的字段必须类型相同，并建立索引\n"),e("ul",[e("li",[_._v("踩过因为 "),e("code",[_._v("JOIN")]),_._v(" 字段类型不一致，而导致全表扫描的坑么？")])])]),_._v(" "),e("li",[_._v("理解组合索引最左前缀原则，避免重复建设索引，如果建立了(a,b,c)，相当于建立了(a), (a,b), (a,b,c)")])]),_._v(" "),e("h2",{attrs:{id:"sql-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-规范"}},[_._v("#")]),_._v(" SQL 规范")]),_._v(" "),e("ul",[e("li",[_._v("禁止使用 "),e("code",[_._v("select *")]),_._v("，只获取必要字段\n"),e("ul",[e("li",[e("code",[_._v("select *")]),_._v(" 会增加 "),e("code",[_._v("cpu/io/内存/带宽")]),_._v(" 的消耗")]),_._v(" "),e("li",[_._v("指定字段能有效利用索引覆盖")]),_._v(" "),e("li",[_._v("指定字段查询，在表结构变更时，能保证对应用程序无影响")])])]),_._v(" "),e("li",[e("code",[_._v("insert")]),_._v(" 必须指定字段，禁止使用 "),e("code",[_._v("insert into T values()")]),_._v(" "),e("ul",[e("li",[_._v("指定字段插入，在表结构变更时，能保证对应用程序无影响")])])]),_._v(" "),e("li",[_._v("隐式类型转换会使索引失效，导致全表扫描")]),_._v(" "),e("li",[_._v("禁止在 "),e("code",[_._v("where")]),_._v(" 条件列使用函数或者表达式\n"),e("ul",[e("li",[_._v("导致不能命中索引，全表扫描")])])]),_._v(" "),e("li",[_._v("禁止负向查询以及 "),e("code",[_._v("%")]),_._v(" 开头的模糊查询\n"),e("ul",[e("li",[_._v("导致不能命中索引，全表扫描")])])]),_._v(" "),e("li",[_._v("禁止大表 "),e("code",[_._v("JOIN")]),_._v(" 和子查询")]),_._v(" "),e("li",[_._v("同一个字段上的 "),e("code",[_._v("OR")]),_._v(" 必须改写问 "),e("code",[_._v("IN")]),_._v("，"),e("code",[_._v("IN")]),_._v(" 的值必须少于 50 个")]),_._v(" "),e("li",[_._v("应用程序必须捕获 SQL 异常\n"),e("ul",[e("li",[_._v("方便定位线上问题")])])])]),_._v(" "),e("h2",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[_._v("#")]),_._v(" 说明")]),_._v(" "),e("p",[_._v("适用于并发量大，数据量大的典型互联网业务。")])])}),[],!1,null,null,null);v.default=i.exports}}]);