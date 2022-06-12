class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    let p = this.head;
    if (this.head) {
      // * 找到链表最后一个节点, 把这一项的 next 指向新增的 node
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      // * 如果没有head节点, 链表是空的
      this.head = node;
    }
    this.length++;
  }
  print() {
    let p = this.head;
    let str = "";
    if (this.head) {
      do {
        str += p.val + " => ";
        p = p.next;
      } while (p.next);
      str += p.val;
      console.log(str);
    } else {
      console.log("empty");
    }
  }
}

// 1 => 2 => 3 => 4
let linklist = new LinkNodeList();

linklist.append(1);
linklist.append(2);
linklist.append(3);
linklist.append(4);

console.log(linklist);
linklist.print();
