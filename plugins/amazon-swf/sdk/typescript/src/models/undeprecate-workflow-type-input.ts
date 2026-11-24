import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type UndeprecateWorkflowTypeInput = {
  /** The name of the domain of the deprecated workflow type. */
  domain: string;
  workflowType: WorkflowType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const undeprecateWorkflowTypeInputSchema: Schema<UndeprecateWorkflowTypeInput> =
  s.object<UndeprecateWorkflowTypeInput>(
    {
      domain: s.string(),
      workflowType: workflowTypeSchema,
    },
    { additionalProperties: s.json() },
  );
