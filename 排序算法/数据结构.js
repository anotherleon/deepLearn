/* eslint-disable */
(function(){
	// 栈
	var Stack = {
		items: [],
		push(el) {
			this.items.push(el)
		},
		pop(el) {
			this.items.pop(el)
		},
		peek() {
			return this.items[this.items.length - 1]
		},
	  isEmpty() {
	  	return this.items.length === 0
	  },
	  size() {
	  	return this.items.length
	  },
	  clear() {
	  	return this.items = []
	  },
	  print() {
	  	console.log(this.items)
	  }
	}
	var stack = Object.create(Stack)
	stack.push(1)
	stack.print()
	// ? 实现10进制转换2-16进制

	// 队列
	function Queue() {
		var items = []
		this.enqueue = function(el) {
			items.push(el)
		}
		this.dequeue = function() {
			return items.shift(el)
		}
		this.front = function() {
			return items[0]
		}
		this.isEmpty = function() {
			return items.length === 0
		}
		this.clear = function() {
			items = []
		}
		this.size = function() {
			return items.length
		}
		this.print = function() {
			console.log(items.toString())
		}
	}

	function PriorityQueue() {

	}

	function hotPotato(nameList, num) {
		
	}
	// ?
	// 链表
	function LinkedList() {

	}
	// 双向链表
	function DoublyLinkedList() {
		
	}

	// Set 集合
	function Set() {
	 	
	}
	//  Map 字典
	function Map() {
		var items = {}
		this.set = function() {}
		this.remove = function() {}
		this.has = function() {}
		this.get = function() {}
		this.clear = function() {}
		this.size = function() {}
		this.keys = function() {}
		this.values = function() {}
	}

	// 哈希表
	function HashTable() {}
	
	// 二叉搜索树
	function BinarySearchTree() {
		
	}

	// 图
	function Graph() {
		
	}

	// 排序
	function ArrayList() {
		var array = [];
		this.insert = function(item) {
			array.push(item);
		}
		this.toString = function() {
			return array.join();
		}
	}

	// 冒泡算法
	this.BubbleSort = function() {

	}

	this.selectionSort = function() {}
	this.insertionSort = function() {}
	this.mergeSort = function() {}
	this.quickSort = function() {}

	// 顺序搜索
	this.sequentialSearch = function() {}
	// 二分搜索
	this.binarySearch = function() {}
	
}())
