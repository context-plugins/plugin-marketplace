import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the node (app, recordGroup, folder, or record). */
export const NodeType = {
  App: "app",
  RecordGroup: "recordGroup",
  Folder: "folder",
  Record: "record",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType] | (string & {});

export const nodeTypeSchema: EnumSchema<NodeType> = s.enumOf<NodeType>(NodeType);
