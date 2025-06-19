// App.tsx
import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  applyNodeChanges,
  Handle,
  Position,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

// Types
type KeyType = {
  keyName: string;
};

type NodeData = {
  key: string;
};

const KEYS: KeyType[] = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    .split("")
    .map((k) => ({ keyName: k })),
  ...[
    "`",
    "-",
    "=",
    "[",
    "]",
    "\\",
    ";",
    "'",
    ",",
    ".",
    "/",
    "Enter",
    "Backspace",
    "Tab",
    "CapsLock",
    "Shift",
    "Control",
    "Alt",
    "Meta",
    "Space",
    "Escape",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Insert",
    "Delete",
    "Home",
    "End",
    "PageUp",
    "PageDown",
  ].map((k) => ({ keyName: k })),
  ...Array.from({ length: 12 }, (_, i) => ({ keyName: `F${i + 1}` })),
];

// Custom Node
function ShapeKeyNode({ data }: { data: NodeData }) {
  const [key, setKey] = useState(data.key);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setKey(e.target.value);
  };

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
            backgroundColor: "#ff0071",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {key.substring(0, 2)}
        </div>
        <select value={key} onChange={handleChange}>
          <option value="none">None</option>
          {KEYS.map((k) => (
            <option key={k.keyName} value={k.keyName}>
              {k.keyName}
            </option>
          ))}
        </select>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

// Node types
const nodeTypes = { shapeKey: ShapeKeyNode };

// Initial Nodes
const initialNodes: Node<NodeData>[] = [
  {
    id: "1",
    type: "shapeKey",
    position: { x: 100, y: 100 },
    data: { key: "A" },
  },
  {
    id: "2",
    type: "shapeKey",
    position: { x: 300, y: 100 },
    data: { key: "A" },
  },
];

const initialEdges: Edge[] = [];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);
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
