visualGraph = document.getElementsByClassName('visual-graph')[0];
workflowGraph = document.getElementsByClassName('WorkflowGraph')[0];
newHeight = window.innerHeight - visualGraph.getBoundingClientRect()['top']
workflowGraph.style["max-height"] = newHeight + "px"
