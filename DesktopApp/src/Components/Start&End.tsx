import React from "react";
import { Handle, Position } from "reactflow";

export function Start() {
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
      <div style={{ fontSize: 20 }}>Start</div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
export function End() {
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
      <div style={{ fontSize: 20 }}>End</div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}
