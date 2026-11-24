import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RerunWorkflowResponse = {
  /** The ID of the rerun workflow */
  workflowId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rerunWorkflowResponseSchema: Schema<RerunWorkflowResponse> = s.object<RerunWorkflowResponse>(
  {
    workflowId: s.optional(s.string()),
    _keysMap: {
      workflowId: "workflow_id",
    },
  },
  { additionalProperties: s.json() },
);
