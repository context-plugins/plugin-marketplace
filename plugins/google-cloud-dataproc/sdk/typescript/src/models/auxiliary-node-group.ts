import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nodeGroup2Schema, type NodeGroup2 } from "./node-group2.js";

/** Node group identification and configuration information. */
export type AuxiliaryNodeGroup = {
  /** Required. Node group configuration. */
  nodeGroup?: NodeGroup2;
  /**
   * Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z,
   * A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or
   * hyphen. Must consist of from 3 to 33 characters.
   */
  nodeGroupId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auxiliaryNodeGroupSchema: Schema<AuxiliaryNodeGroup> = s.object<AuxiliaryNodeGroup>(
  {
    nodeGroup: s.optional(s.lazy(() => nodeGroup2Schema)),
    nodeGroupId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
