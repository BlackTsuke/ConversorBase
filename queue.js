class Queue {
  constructor(){
    this.items = [];
    this.count = 0;
    this.lowestCount = 0;
  };
  enqueue(element){
    this.items[this.count] = element;
    this.count++;
  };
  dequeue(){
    if(this.isEmpty()){
      return undefined;
    };
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  };
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.lowestCount];
  };
  isEmpty(){
    return this.size() === 0;
  };
  size(){
    return this.count - this.lowestCount;
  };
  clear(){
    this.items = [];
    this.count = 0;
    this.lowestCount = 0;
  };
  toString(){
    if(this.isEmpty()){
      return undefined;
    }
    let objString = `${this.items[this.lowestCount]}`
    for(let i = this.lowestCount + 1; i < this.count;i++){
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
};

const queue = new Queue();
queue.enqueue("Mikael")
queue.enqueue("Christiano")
console.log(queue.toString())