const graph = {
  f: ['g', 'i'],
  g: ['h', 'k'],
  h: [],
  i: ['g'],
  j: ['i'],
  k: []
}

const hasPath = (graph, key, destination) => {
  if (key === destination) {
    return true
  }
  for (let neighbor of graph[key]) {
    if (hasPath(graph, neighbor, destination)) {
     return true
   }
  }
  return false
}
console.log(hasPath(graph, 'f', 'k'))