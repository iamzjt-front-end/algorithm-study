// 树的 广度优先遍历
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

const bfs = (root) => {
	const q = [root];

	while(q.length) {
		const n = q.shift();
		console.log(n.val);
		n?.children.forEach(item => q.push(item));
	}
};

bfs(tree);

// root
// 2-1
// 2-2
// 2-1-1
// 2-1-2
// 2-2-1
// 2-2-2
