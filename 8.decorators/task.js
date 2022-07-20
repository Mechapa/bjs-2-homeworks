function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => item.hash == hash);
    if (objectInCache != undefined) {
      console.log("Их кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }
      let result = func.call(this, ...args);
      cache.push({hash, result});
      if (cache.length > 4) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(f, ms) {
  let timeout;
  let isThrottled = false;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        f.apply(this, args);
    }, ms);
    if (!isThrottled) {
      isThrottled = true;
      return f.apply(this, args);
    }
  }
} 


function debounceDecorator2(f, ms) {
  let timeout;
  let isThrottled = false;
  let debounceCount = 0;
  return function(...args) {
    debounceCount++;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        f.apply(this, args);
    }, ms);
    console.log(debounceCount);
    if (!isThrottled) {
      isThrottled = true;
      return f.apply(this, args);
    }
  }
} 
