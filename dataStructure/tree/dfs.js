// 树的 深度优先遍历
const tree = {
	val: "root",
	children: [
		{
			val: "2-1",
			children: [
				{
					val: "2-1-1",
					children: [],
				},
				{
					val: "2-1-2",
					children: [],
				},
			],
		},
		{
			val: "2-2",
			children: [
				{
					val: "2-2-1",
					children: [],
				},
				{
					val: "2-2-2",
					children: [],
				},
			],
		},
	],
};

const dfs = (root) => {
	console.log(root.val);
	root?.children.forEach(dfs);
};

dfs(tree);

// root
// 2-1
// 2-1-1
// 2-1-2
// 2-2
// 2-2-1
// 2-2-2
