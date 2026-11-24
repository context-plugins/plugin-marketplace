import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowRunNodeSchema, type CloudflowRunNode } from "./cloudflow-run-node.js";
import { statusDoiTCloudFlowApiSchema, type StatusDoiTCloudFlowApi } from "./status-doi-tcloud-flow-api.js";

/** A run plus what each of its nodes consumed and produced. */
export type CloudflowRun = {
  id: string;
  flowId: string;
  flowName?: string;
  status: StatusDoiTCloudFlowApi;
  /** True when the run was started through `actions/test-run`. */
  isTest: boolean;
  triggeredBy: string;
  triggerTime: Date;
  startTime?: Date;
  endTime?: Date;
  error?: string | null;
  stoppedBy?: string | null;
  /** One entry per node, in execution order. */
  nodes: CloudflowRunNode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowRunSchema: Schema<CloudflowRun> = s.object<CloudflowRun>(
  {
    id: s.string(),
    flowId: s.string(),
    flowName: s.optional(s.string()),
    status: statusDoiTCloudFlowApiSchema,
    isTest: s.boolean(),
    triggeredBy: s.string(),
    triggerTime: s.dateTime(),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    error: s.optionalNullable(s.string()),
    stoppedBy: s.optionalNullable(s.string()),
    nodes: s.array(s.lazy(() => cloudflowRunNodeSchema)),
  },
  { additionalProperties: s.json() },
);
