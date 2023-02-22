const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]


const hasPath = (graph, key, destination, visited) => {
  if (key === destination) {
  return true
  }
  if (visited.has(key)) {
    return false
  }
  visited.add(key)
  for (let neighbor of graph[key]) {
    if (hasPath(graph, neighbor, destination, visited)) {
      return true
    }
  }
  return false
}

const buildGraph = (edges) => {
  const graph = {}
  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) {
      graph[a] = []
    }
    if (!(b in graph)) {
      graph[b] = []
    }
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  console.log(graph)
  return hasPath(graph, nodeA, nodeB, new Set())
}
console.log(undirectedPath(edges, 'i', 'o'))