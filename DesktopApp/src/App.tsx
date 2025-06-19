// App.tsx
import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { Handle, Position } from "reactflow";

function ShapeColorNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        background: "white",
        borderRadius: 10,
        border: "1px solid #ccc",
        width: 120,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: 13 }}>Key</div>
      <br />
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: data.color,
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          A
        </div>
        <select>
          <option value={"none"}>None</option>
        </select>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

const nodeTypes = { shapeColor: ShapeColorNode };

const initialNodes = [
  {
    id: "1",
    type: "shapeColor",
    position: { x: 100, y: 100 },
    data: { color: "#ff0071" },
  },
];

const edges = [];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const width = 1100;
  const height = 800;

  return (
    <div style={{ width, height, backgroundColor: "#323232" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={(changes) =>
          setNodes((nds) => applyNodeChanges(changes, nds))
        }
        nodeExtent={[
          [0, 0],
          [width, height],
        ]}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnPinch={false}
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
