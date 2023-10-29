function createNode(value){
    return{
        data : value,
        next : null
    };
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(x) {
        let newNode = createNode(x);
        if(this.tail == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue() {
        if(this.tail == null)
            return;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        if(this.head == null)
        {
            this.tail = null;
        }

    }
    getfront() {
        if(this.head == null)
            return;
        return this.head.data;
    }
    getback() {
        if(this.head == null)
            return;
        return this.tail.data;
    }
    empty()
    {
        return this.head == null;
    }
}

module.exports = Queue;