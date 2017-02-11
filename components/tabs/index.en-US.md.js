webpackJsonp([128,211],{

/***/ 1066:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "Tabs make it easy to switch between different views."
	    ],
	    [
	      "h3",
	      "When To Use"
	    ],
	    [
	      "p",
	      "Ant Design has 3 types Tabs for different situation."
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "Card Tabs: for managing too many closeable views."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Normal Tabs: for functional aspects of a page."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "/components/radio/#components-radio-demo-radiobutton"
	            },
	            "RadioButton"
	          ],
	          ": for secondary tabs."
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Navigation",
	    "title": "Tabs",
	    "filename": "components/tabs/index.en-US.md"
	  },
	  "toc": [
	    "ul",
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
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "h3",
	      "Tabs"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "activeKey"
	          ],
	          [
	            "td",
	            "Current TabPane's key"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "_"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "defaultActiveKey"
	          ],
	          [
	            "td",
	            "Default actived tabPanel's key, if activeKey is not setted."
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onChange"
	          ],
	          [
	            "td",
	            "Callback when tab is switched"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onTabClick"
	          ],
	          [
	            "td",
	            "Callback when tab is clicked"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "tabBarExtraContent"
	          ],
	          [
	            "td",
	            "Extra element in tab bar"
	          ],
	          [
	            "td",
	            "React.ReactNode"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "type"
	          ],
	          [
	            "td",
	            "Basic style of tabs. Options: line, card & editable-card"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "line"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "size"
	          ],
	          [
	            "td",
	            "Tab bar size. Options: default, small. Only works while ",
	            [
	              "code",
	              "type=\"line\""
	            ],
	            "."
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "default"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "tabPosition"
	          ],
	          [
	            "td",
	            "Position of tabs. Options: top, right, bottom & left"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "top"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onEdit"
	          ],
	          [
	            "td",
	            "Callback when tab is added or removed, which is executing when set type as editable-card"
	          ],
	          [
	            "td",
	            "(targetKey, action): void"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "hideAdd"
	          ],
	          [
	            "td",
	            "Hide plus icon or not, which is effective when set type as editable-card"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "animated"
	          ],
	          [
	            "td",
	            "Whether to change tabs with animation, this property only works with ",
	            [
	              "code",
	              "tabPosition=top|bottom"
	            ]
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Tabs.TabPane"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "key"
	          ],
	          [
	            "td",
	            "TabPane's key"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "_"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "tab"
	          ],
	          [
	            "td",
	            "Show text in TabPane's head"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "_"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});