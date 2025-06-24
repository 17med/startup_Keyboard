import React, { useState } from "react";
import { Handle, Position } from "reactflow";

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
export default function ShapeKeyNode({ data }: { data: NodeData }) {
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
//<Handle type="target" position={Position.Left} />