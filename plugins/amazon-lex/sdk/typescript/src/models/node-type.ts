import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the node is the end of a path (Exit) or not (Inner). */
export const NodeType = {
  Inner: "Inner",
  Exit: "Exit",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType] | (string & {});

export const nodeTypeSchema: EnumSchema<NodeType> = s.enumOf<NodeType>(NodeType);
