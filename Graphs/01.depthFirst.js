const graph = {
  a: ['b'],
  b: ['c'],
  c: ['d'],
  d: []
}

const depthFirst = (graph, key) => {
  console.log(key)
  for (let neighbor of graph[key]) {
    depthFirst(graph, neighbor)
  }
}
console.log(depthFirst(graph, 'b'))