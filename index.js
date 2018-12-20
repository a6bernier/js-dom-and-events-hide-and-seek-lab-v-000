function getFirstSelector( s ) {
  return document.querySelector( s )
}
<<<<<<< HEAD

function nestedTarget() {
  return document.querySelector( '#nested .target' )
}

function deepestChild() {
  let node = document.getElementById( 'grand-node' )
  let nextNode = node.children[ 0 ]

  while ( nextNode ) {
    node = nextNode
    nextNode = node.children[ 0 ]
  }

  return node
}

function increaseRankBy( n ) {
  const rankedLists = document.querySelectorAll( '.ranked-list' )

  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children

    for ( let j = 0, k = children.length; j < k; j++ ) {
      children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
    }
  }
}
=======
>>>>>>> 1481b8cb2cf1ab41b0b5b014f219c211f822a6fc
