/*class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(9)
node1.next = node2
node2.next = node3
let list = new LinkedList(node1)
console.log(list);*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }
    printList() {

        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}
array = [1, 2];
let list = new LinkedList();
list.add(array);
list.add("hello");
list.add(1);
/*list.add(1545);*/
console.log(list)
list.printList();