import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Node = {
  id: string;
  name: string;
  /** `recordGroup`, `folder` or `record`. */
  nodeType: string;
};

export const nodeSchema: Schema<Node> = s.object<Node>({
  id: s.string(),
  name: s.string(),
  nodeType: s.string(),
});
