(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{363:function(s,e,n){"use strict";n.r(e);var a=n(7),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"问题描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),e("ul",[e("li",[s._v("GPU环境训练好模型，CPU环境部署过程成功后，尝试遍历DataLoader的时候出现了以下报错信息。具体如下：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Traceback (most recent call last):\n  File "/usr/local/lib/python3.6/multiprocessing/resource_sharer.py", line 142, in _serve\n    with self._listener.accept() as conn:\n  File "/usr/local/lib/python3.6/multiprocessing/connection.py", line 455, in accept\n    deliver_challenge(c, self._authkey)\n  File "/usr/local/lib/python3.6/multiprocessing/connection.py", line 720, in deliver_challenge\n    connection.send_bytes(CHALLENGE + message)\n  File "/usr/local/lib/python3.6/multiprocessing/connection.py", line 200, in send_bytes\n    self._send_bytes(m[offset:offset + size])\n  File "/usr/local/lib/python3.6/multiprocessing/connection.py", line 404, in _send_bytes\n    self._send(header + buf)\n  File "/usr/local/lib/python3.6/multiprocessing/connection.py", line 368, in _send\n    n = write(self._handle, buf)\nBrokenPipeError: [Errno 32] Broken pipe\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"问题分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[s._v("#")]),s._v(" 问题分析")]),s._v(" "),e("ul",[e("li",[s._v("逐步打断点调试定位错误代码为Pytorch遍历DataLoader引发。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("loader =DataLoader(dataset,\n\tbatch_size = batch_size,\n    shuffle=shuffle,\n    num_workers = 4, #1GPU = 4workers\n    pin_memory=True)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("DataLoader的 num_workers 涉及多线程读取数据，而Python由于设计时有GIL全局锁，导致了多线程无法利用多核，问题大致就出于此。try-catch错误代码输出：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[Errno 11] Resource temporarily unavailable\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("大batch训练时，num_workers=4加速GPU训练效率，CPU推理过程不需要。")])]),s._v(" "),e("h2",{attrs:{id:"问题解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[s._v("#")]),s._v(" 问题解决")]),s._v(" "),e("ul",[e("li",[s._v("将num_workers设置为 0 即可。")])]),s._v(" "),e("h2",{attrs:{id:"附录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录")]),s._v(" "),e("ul",[e("li",[s._v("https://discuss.pytorch.org/t/very-strange-dataloader-error-simplified-code-inside/31162")]),s._v(" "),e("li",[s._v("https://github.com/pytorch/pytorch/issues/14768")])])])}),[],!1,null,null,null);e.default=t.exports}}]);