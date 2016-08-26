function Observable(properties) {
// PRIVATE PROPERTIES
  let data = {};
  for (let key in properties) {
    data[key] = properties[key];
  }
  console.log('data in observable', data);
  let cbs = [];
  let listenerCount = 0;

// PRIVATE METHOD
  var dispatchEvents = () => {
    console.log('set data and event dispatched');
    cbs.forEach(obj => obj.cb(data));
    console.log('cbs', cbs);
  };

// PUBLIC METHODS
  this.get = () => data;
  this.set = (newData) => {
    data = newData;
    console.log('data set: ',data);
    dispatchEvents();
  };

  this.getListenerCount = () => listenerCount;
  this.listen = cb => {
    cbs.push({id: ++listenerCount, cb});
    console.log('cb added:', cbs);
  };
  this.stop = id => {
    this.listenerCount--;
    const index = this.cbs.findIndex(obj => obj.id === id);
    console.log('cb deleted', cbs[index]);
    this.cbs.splice(index,1);
  }
}

export default Observable;