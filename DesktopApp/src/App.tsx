import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  applyNodeChanges,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import ShapeKeyNode from "./Components/ShapeKeyNode";
import { Start, End } from "./Components/Start&End";
type NodeData = {
  key: string;
};

const nodeTypes = { shapeKey: ShapeKeyNode, start: Start, end: End };

const initialNodes: Node<NodeData>[] = [
  {
    id: "0",
    type: "start",
    position: { x: 50, y: 50 },
    data: { key: "Start" },
  },
  {
    id: "1",
    type: "end",
    position: { x: 100, y: 50 },
    data: { key: "End" },
  }, // Start node
  {
    id: "2",
    type: "shapeKey",
    position: { x: 150, y: 100 },
    data: { key: "A" },
  },
  {
    id: "3",
    type: "shapeKey",
    position: { x: 350, y: 100 }, // Changed position to avoid overlap
    data: { key: "B" },
  },
];

const initialEdges: Edge[] = [];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges); // Use state for edges

  const width = 1100;
  const height = 800;

  // Handle changes to nodes (e.g., dragging or editing)
  const handleNodeChange = (changes: any) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  // Handle connection between nodes
  const handleConnect = (params: Edge) => {
    setEdges((eds) => [...eds, params]); // Add the new edge to the state
  };

  return (
    <div style={{ width, height, backgroundColor: "#323232" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodeChange}
        onConnect={handleConnect} // Ensure this is hooked up
        proOptions={{ hideAttribution: true }}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        fitView
      >
        <Controls />
        <Background
          color="#aaa"
          gap={16}
          size={1}
          style={{ backgroundColor: "#323232" }}
        />
      </ReactFlow>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
