(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{382:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下文"}},[s._v("#")]),s._v(" 上下文")]),s._v(" "),a("p",[s._v("我们通常用代码量来评判一个程序员技术的高低或一个项目的大小，阅读新项目源码时，也需要了解其代码量，心里有个预期。")]),s._v(" "),a("p",[s._v("那如何统计代码量呢？")]),s._v(" "),a("h2",{attrs:{id:"传统做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统做法"}},[s._v("#")]),s._v(" 传统做法")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("find")]),s._v("+"),a("code",[s._v("wc")]),s._v("命令完成")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.go"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" ./etcd/tutorial/distributed_lock.go\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3491")]),s._v(" total\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如上，统计命令显示了所有文件，一共有 3491 行代码。但是此处统计太过粗暴，wc 统计过程将注释、空白行等内容都被算作代码统计其中。")]),s._v(" "),a("p",[s._v("我们应该尝试更有效的统计方式。")]),s._v(" "),a("h2",{attrs:{id:"有效统计-cloc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有效统计-cloc"}},[s._v("#")]),s._v(" 有效统计 cloc")]),s._v(" "),a("p",[s._v("cloc("),a("code",[s._v("Count Lines of Code")]),a("sup",[s._v("[0]")]),s._v(") 是一个 Perl 语言开发的开源代码统计工具。支持多平台、多语言、分类别的统计目标文件或文件夹中源代码的文件数、空白行数、注释行数和代码行数。")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("支持多种安装方式，几乎包含常用的所有安装方式。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" cloc              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.npmjs.com/package/cloc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debian, Ubuntu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Red Hat, Fedora")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fedora 22 or later")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" cloc              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Arch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" emerge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v(" dev-util/cloc    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Gentoo https://packages.gentoo.org/packages/dev-util/cloc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apk "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" cloc                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alpine Linux")]),s._v("\ndoas pkg_add cloc                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OpenBSD")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pkg "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FreeBSD")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" port "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# macOS with MacPorts")]),s._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# macOS with Homebrew")]),s._v("\nchoco "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows with Chocolatey")]),s._v("\nscoop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cloc               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows with Scoop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"cloc-优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloc-优势"}},[s._v("#")]),s._v(" cloc 优势？")]),s._v(" "),a("p",[s._v("cloc 具有易于使用、可扩展和可移植的特性：")]),s._v(" "),a("ul",[a("li",[s._v("安装方便，只需下载文件包运行即可。")]),s._v(" "),a("li",[s._v("支持分类别统计多种语言：Java、Go、Python、C 等。")]),s._v(" "),a("li",[s._v("支持分类别统计多种格式的结果：纯文本、SQL、JSON、XML、YAML、逗号分隔值等。")]),s._v(" "),a("li",[s._v("支持分类别统计文件数、空白行数、注释行数和代码行数。")])]),s._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc ./\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可统计目录")]),s._v("\n$ cloc perl-5.22.0.tar.gz\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可直接统计压缩包")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("对于前端同学，统计代码往往需要忽略最大的 node_modules 以及打包生成的 dist 文件，支持过滤逻辑，使用非常方便。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n$ cloc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--vcs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" \t\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或过滤 svn ")]),s._v("\n$ cloc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--vcs")]),s._v(" svn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[s._v("#")]),s._v(" 高级用法")]),s._v(" "),a("p",[s._v("使用方法也很简单，统计结果会按照语言分类统计源代码的空白行、注释行和物理行。具体如下：")]),s._v(" "),a("h3",{attrs:{id:"统计单个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计单个文件"}},[s._v("#")]),s._v(" 统计单个文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ cloc docker-compose-devcontainer.yml")]),s._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" text file.\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" unique file.\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("140.6")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4919.9")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nYAML                             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("\n-------------------------------------------------------------------------------\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"统计文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计文件夹"}},[s._v("#")]),s._v(" 统计文件夹")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" text files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(" unique files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.14")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("290.8")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22637.6")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nGo                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("381")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("216")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2468")]),s._v("\nMarkdown                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n-------------------------------------------------------------------------------\nSUM:                            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("431")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("220")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2618")]),s._v("\n-------------------------------------------------------------------------------\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("也同时支持通过"),a("code",[s._v("--exclude-dir")]),s._v("参数过滤掉不计入统计的路径")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --exclude-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("build\n\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" text files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" unique files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.07")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("605.9")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48999.6")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nGo                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("381")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("216")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2468")]),s._v("\nMarkdown                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n-------------------------------------------------------------------------------\nSUM:                            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("423")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("217")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2595")]),s._v("\n-------------------------------------------------------------------------------\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("也支持按"),a("code",[s._v("--by-file")]),s._v("参数进行统计结果的筛选。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --by-file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" text files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(" unique files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1380.3")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("107434.2")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-----------------------------------------------------------------------------------------\nFile                                                  blank        comment           code\n-----------------------------------------------------------------------------------------\n./etcd/tutorial/demo.go                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("291")]),s._v("\n./etcd/simple_raft/raft_log.go                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("263")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"统计文件夹下多个子目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计文件夹下多个子目录"}},[s._v("#")]),s._v(" 统计文件夹下多个子目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" ./*/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cd "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cloc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n./go-bootcamp/\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1474")]),s._v(" text files.\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1226")]),s._v(" unique files.\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("540")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.16")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("171.2")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("118482.4")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nJavaScript                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("421")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10606")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84539")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584311")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n-------------------------------------------------------------------------------\nSUM:                          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1226")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18182")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100323")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("729998")]),s._v("\n-------------------------------------------------------------------------------\n./html-bootcamp/\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" text files.\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" unique files.\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("635.5")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9744.9")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nHTML                             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n-------------------------------------------------------------------------------\nSUM:                            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("164")]),s._v("\n-------------------------------------------------------------------------------\n./java-bootcamp/\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" text files.\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" unique file.\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" files ignored.\n\ngithub.com/AlDanial/cloc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104.8")]),s._v(" files/s, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524.2")]),s._v(" lines/s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nMarkdown                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n-------------------------------------------------------------------------------\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("h3",{attrs:{id:"更多命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多命令"}},[s._v("#")]),s._v(" 更多命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"支持的语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的语言"}},[s._v("#")]),s._v(" 支持的语言")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ cloc --show-lang\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"通过-docker-运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-docker-运行"}},[s._v("#")]),s._v(" 通过 docker 运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v(":/tmp aldanial/cloc ./\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上，就是今天的全部内容，包含了 cloc 安装和使用。当然，重要的内容往往篇幅较小，很推荐 docker 运行方式。")]),s._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("ul",[a("li",[s._v("[0] Count Lines of Code: https://github.com/AlDanial/cloc")])])])}),[],!1,null,null,null);a.default=e.exports}}]);