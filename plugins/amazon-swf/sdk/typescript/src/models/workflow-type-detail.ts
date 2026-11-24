import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workflowTypeConfigurationSchema,
  type WorkflowTypeConfiguration,
} from "./workflow-type-configuration.js";
import { workflowTypeInfoSchema, type WorkflowTypeInfo } from "./workflow-type-info.js";

export type WorkflowTypeDetail = {
  typeInfo: WorkflowTypeInfo;
  configuration: WorkflowTypeConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTypeDetailSchema: Schema<WorkflowTypeDetail> = s.object<WorkflowTypeDetail>(
  {
    typeInfo: workflowTypeInfoSchema,
    configuration: workflowTypeConfigurationSchema,
  },
  { additionalProperties: s.json() },
);
