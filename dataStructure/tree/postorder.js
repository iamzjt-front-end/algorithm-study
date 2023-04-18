// 二叉树的 后序遍历
import { bt } from "./bt.js";

// 左 -> 右 -> 根
const postorder = (root) => {
	if (!root) return;
	postorder(root.left);
	postorder(root.right);
	console.log(root.val);
};

postorder(bt);

// left-1-1
// left-1-2
// left-1
// right-1-1
// right-1-2
// right-1
// root
