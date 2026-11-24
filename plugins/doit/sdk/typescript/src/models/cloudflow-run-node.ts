import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowRunNodePayloadSchema, type CloudflowRunNodePayload } from "./cloudflow-run-node-payload.js";
import {
  status1DoiTCloudFlowApiSchema,
  type Status1DoiTCloudFlowApi,
} from "./status1-doi-tcloud-flow-api.js";

/** One node's contribution to a run. */
export type CloudflowRunNode = {
  /** Node identifier, matching the node in the flow's graph. */
  nodeId: string;
  /** Node display name. */
  name: string;
  /** Current node status. */
  status: Status1DoiTCloudFlowApi;
  /** Position in execution order. Absent for nodes that never started. */
  stepNumber?: number;
  startTime?: Date;
  endTime?: Date;
  /** Failure message. Present when the node failed. */
  error?: string | null;
  /**
   * What the node consumed. **Always null for non-action nodes** — see the operation description.
   */
  input: CloudflowRunNodePayload;
  /** What the node produced. Null until the node reaches a terminal status. */
  output: CloudflowRunNodePayload;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowRunNodeSchema: Schema<CloudflowRunNode> = s.object<CloudflowRunNode>(
  {
    nodeId: s.string(),
    name: s.string(),
    status: status1DoiTCloudFlowApiSchema,
    stepNumber: s.optional(s.int()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    error: s.optionalNullable(s.string()),
    input: cloudflowRunNodePayloadSchema,
    output: cloudflowRunNodePayloadSchema,
  },
  { additionalProperties: s.json() },
);
