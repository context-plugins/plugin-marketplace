import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type DeprecateWorkflowTypeInput = {
  /** The name of the domain in which the workflow type is registered. */
  domain: string;
  workflowType: WorkflowType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deprecateWorkflowTypeInputSchema: Schema<DeprecateWorkflowTypeInput> =
  s.object<DeprecateWorkflowTypeInput>(
    {
      domain: s.string(),
      workflowType: workflowTypeSchema,
    },
    { additionalProperties: s.json() },
  );
