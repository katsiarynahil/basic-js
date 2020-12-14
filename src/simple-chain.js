const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push('( ' + value  + ' )');
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position > this.chain.length || position < 0){
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position-1, 1);
    return this;

  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
