import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DomainConfiguration = {
  /** The retention period for workflow executions in this domain. */
  workflowExecutionRetentionPeriodInDays: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainConfigurationSchema: Schema<DomainConfiguration> = s.object<DomainConfiguration>(
  {
    workflowExecutionRetentionPeriodInDays: s.string(),
  },
  { additionalProperties: s.json() },
);
