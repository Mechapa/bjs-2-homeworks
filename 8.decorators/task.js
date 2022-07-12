function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.findIndex((item) => item.hash == hash);
    if (objectInCache > (-1)) {
      console.log("Их кэша: " + cache[objectInCache].result);
      return "Из кэша: " + cache[objectInCache].result;
    } else {
      let result = func.call(this, ...args);
      cache.push({hash, result});
      if (cache.length > 4) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
