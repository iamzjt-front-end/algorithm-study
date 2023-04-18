// 二叉树的 先序遍历
import { bt } from "./bt.js";

// 根 -> 左 -> 右
const preorder = (root) => {
	if (!root) return;
	console.log(root.val);
	preorder(root.left);
	preorder(root.right);
};

preorder(bt);

// root
// left-1
// left-1-1
// left-1-2
// right-1
// right-1-1
// right-1-2
