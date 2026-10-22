import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Node being browsed when `parentId` is in the path; `null` at root. */
export type CurrentNode = {
  id: string;
  name: string;
  /** One of `app`, `recordGroup`, `folder`, `record`. */
  nodeType: string;
  /** Connector name or record type when applicable; otherwise `null`. */
  subType?: string | null;
};

export const currentNodeSchema: Schema<CurrentNode> = s.object<CurrentNode>({
  id: s.string(),
  name: s.string(),
  nodeType: s.string(),
  subType: s.optionalNullable(s.string()),
});
