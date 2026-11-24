import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowType = {
  /**
   * The name of the workflow type. The combination of workflow type name and version must be unique
   * with in a domain.
   */
  name: string;
  /**
   * The version of the workflow type. The combination of workflow type name and version must be
   * unique with in a domain.
   */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTypeSchema: Schema<WorkflowType> = s.object<WorkflowType>(
  {
    name: s.string(),
    version: s.string(),
  },
  { additionalProperties: s.json() },
);
