'use strict';
/*
var nodes_example = {
    id : 'movie-1',
    name : 'movie one',
};
*/
function node(id, name){
    return {id:id, name:name};
}

function add_couple_to_graph(s, father, child){
}

function add_to_graph(s, father, children){
    // if the node is not in the graph we add it
    if(typeof s.graph.nodes(father.id) == 'undefined'){
    }
    //children.forEach(add_couple_to_graph());
}

function init(){
    var s = new sigma('container');

    var father = {id:'movie-1', name:'movie one'};
    var children = [node('ac-1', 'actor one'), node('ac-2', 'actor two'), node('ac-3', 'actress one')];

    add_to_graph(s, father, children);

    console.log(father, children)
}


var s = new sigma('container');

$(document).ready(simple_draw());

//draw_graph(['nodes!'],  ['edges!'])

function simple_draw() {
    // Let's first initialize sigma:
    //var s = new sigma('container');

    // Then, let's add some data to display:
    s.graph.addNode({
      // Main attributes:
      id: 'n0',
      label: 'Hello',
      // Display attributes:
      x: 0.1,
      y: 0,
      size: 3,
      color: '#f00'
    }).addNode({
      // Main attributes:
      id: 'n1',
      label: 'World !',
      // Display attributes:
      x: 0,
      y: 0.1,
      size: 5,
      color: '#00f'
    }).addNode({
      // Main attributes:
      id: 'n2',
      label: '2',
      // Display attributes:
      x: 0.1,
      y: 0.1,
      size: 3,
      color: '#00f'
    }).addNode({
      // Main attributes:
      id: 'n3',
      label: '3',
      // Display attributes:
      x: 0.2,
      y: 0,
      size: 2,
      color: '#00f'
    }).addEdge({
      id: 'e0',
      // Reference extremities:
      source: 'n0',
      target: 'n1'
    }).addEdge({
      id: 'e1',
      // Reference extremities:
      source: 'n0',
      target: 'n2'
    });

    // Finally, let's ask our sigma instance to refresh:
    //s.refresh();
    var config = {
        startingIterations:10000,
        slowDown:500,
    }
    s.startForceAtlas2(config);
    setTimeout(function(){s.stopForceAtlas2()}, 1000);


    var b = new Boolean(true);
    b.true = false;
    b.false = true;
    console.log(b)
}
