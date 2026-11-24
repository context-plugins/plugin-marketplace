import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusDoiTCloudFlowApiSchema, type StatusDoiTCloudFlowApi } from "./status-doi-tcloud-flow-api.js";

/** A run without its per-node detail. */
export type CloudflowRunSummary = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowRunSummarySchema: Schema<CloudflowRunSummary> = s.object<CloudflowRunSummary>(
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
  },
  { additionalProperties: s.json() },
);
