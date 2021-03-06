// push into
// Adding a new node to the end of the linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // This funciton should accept a value
  // Create a new node using the value passed to the function
  // if there is no head property on the list,
  // set the head and tail to be the newly created node
  // set the next property on the tail to be the new node and
  // set the tail property on the list to be the newly created node
  // Increment the length by one
  // Return the linked list

  push(val) {
    let newNode = new Node();

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // removing a node from the end of the linked list
  // remove from the tail
  pop() {}

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("Bye");
list.push("!");
