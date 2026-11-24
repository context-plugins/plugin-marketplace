import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type WorkflowTypeInfo = {
  workflowType: WorkflowType;
  /** The current status of the workflow type. */
  status: Status3;
  /** The description of the type registered through RegisterWorkflowType. */
  description?: string;
  /** The date when this type was registered. */
  creationDate: Date;
  /**
   * If the type is in deprecated state, then it is set to the date when the type was deprecated.
   */
  deprecationDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTypeInfoSchema: Schema<WorkflowTypeInfo> = s.object<WorkflowTypeInfo>(
  {
    workflowType: workflowTypeSchema,
    status: status3Schema,
    description: s.optional(s.string()),
    creationDate: s.dateTime(),
    deprecationDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
