import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Parent of `currentNode` when present; `null` when not applicable. */
export type ParentNode = {
  id: string;
  name: string;
  /** One of `app`, `recordGroup`, `folder`, `record`. */
  nodeType: string;
  subType?: string | null;
};

export const parentNodeSchema: Schema<ParentNode> = s.object<ParentNode>({
  id: s.string(),
  name: s.string(),
  nodeType: s.string(),
  subType: s.optionalNullable(s.string()),
});
