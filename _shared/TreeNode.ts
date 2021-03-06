export class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

export const inOrder = (head: TreeNode): number[] => {
  const vals: number[] = [];

  (function inner(_head: TreeNode | null) {
    if (_head === null) {
      return;
    }

    inner(_head.left);
    vals.push(_head.val);
    inner(_head.right);
  }(head));

  return vals;
};

TreeNode.prototype.toString = function toString() {
  return String(inOrder(this));
};
