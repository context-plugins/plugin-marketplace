import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvalSchema, type Approval } from "./approval.js";
import { transitionSchema, type Transition } from "./transition.js";

export type CloudflowBundleNode = {
  key: string;
  name: string;
  description?: string;
  /**
   * Node type (e.g. `triggerNode`, `actionNode`, `datastoreNode`). Validated against the supported
   * node-type set at import.
   */
  type: string;
  /** Node parameters with tenant-scoped scalar references replaced by `$req:`/`$bundle:` tokens. */
  parameters?: Record<string, unknown>;
  /**
   * Approval configuration without recipients (recipients are tenant-scoped and removed at export).
   */
  approval?: Approval;
  transitions?: Transition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowBundleNodeSchema: Schema<CloudflowBundleNode> = s.object<CloudflowBundleNode>(
  {
    key: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    type: s.string(),
    parameters: s.optional(s.record(s.string(), s.unknown())),
    approval: s.optional(s.lazy(() => approvalSchema)),
    transitions: s.optional(s.array(s.lazy(() => transitionSchema))),
  },
  { additionalProperties: s.json() },
);
