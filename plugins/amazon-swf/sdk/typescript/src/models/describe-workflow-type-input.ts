import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type DescribeWorkflowTypeInput = {
  /** The name of the domain in which this workflow type is registered. */
  domain: string;
  workflowType: WorkflowType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWorkflowTypeInputSchema: Schema<DescribeWorkflowTypeInput> =
  s.object<DescribeWorkflowTypeInput>(
    {
      domain: s.string(),
      workflowType: workflowTypeSchema,
    },
    { additionalProperties: s.json() },
  );
