import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single filter node selected by the user (used for display/persistence of active filters) */
export type AppliedFilterNode = {
  /** Unique identifier of the filter node */
  id?: string;
  /** Display name of the filter node */
  name?: string;
  /** Type of the node (e.g. app, recordGroup, folder, record) */
  nodeType?: string;
  /** Connector identifier associated with this node */
  connector?: string;
  /** File extension of a record node, for its icon */
  extension?: string;
  /** MIME type of a record node, for its icon */
  mimeType?: string;
  /** True when the node was picked with an \@ mention in the message */
  mentioned?: boolean;
};

export const appliedFilterNodeSchema: Schema<AppliedFilterNode> = s.object<AppliedFilterNode>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  nodeType: s.optional(s.string()),
  connector: s.optional(s.string()),
  extension: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  mentioned: s.optional(s.boolean()),
});
