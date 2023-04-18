// 二叉树的 中序遍历
import { bt } from "./bt.js";

// 左 -> 根 -> 右
const inorder = (root) => {
	if (!root) return;
	inorder(root.left);
	console.log(root.val);
	inorder(root.right);
};

inorder(bt);

// left-1-1
// left-1
// left-1-2
// root
// right-1-1
// right-1
// right-1-2
