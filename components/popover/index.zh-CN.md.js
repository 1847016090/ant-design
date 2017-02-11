webpackJsonp([147,211],{

/***/ 961:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "点击/鼠标移入元素，弹出气泡式的卡片浮层。"
	    ],
	    [
	      "h2",
	      "何时使用"
	    ],
	    [
	      "p",
	      "当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。"
	    ],
	    [
	      "p",
	      "和 ",
	      [
	        "code",
	        "Tooltip"
	      ],
	      " 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。"
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "subtitle": "气泡卡片",
	    "type": "Data Display",
	    "title": "Popover",
	    "filename": "components/popover/index.zh-CN.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#何时使用"
	        },
	        "何时使用"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
	        },
	        "API"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#注意"
	        },
	        "注意"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "参数"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "title"
	          ],
	          [
	            "td",
	            "卡片标题"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "content"
	          ],
	          [
	            "td",
	            "卡片内容"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "更多属性请参考 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "/components/tooltip/#API"
	        },
	        "Tooltip"
	      ],
	      "。"
	    ],
	    [
	      "h2",
	      "注意"
	    ],
	    [
	      "p",
	      "请确保 ",
	      [
	        "code",
	        "Popover"
	      ],
	      " 的子元素能接受 ",
	      [
	        "code",
	        "onMouseEnter"
	      ],
	      "、",
	      [
	        "code",
	        "onMouseLeave"
	      ],
	      "、",
	      [
	        "code",
	        "onFocus"
	      ],
	      "、",
	      [
	        "code",
	        "onClick"
	      ],
	      " 事件。"
	    ]
	  ]
	};

/***/ }

});